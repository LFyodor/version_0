import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPartPlot, addTiredness, removePartPlot } from "../../../store/characterSlice";
import { addSouthwestItems, removeSouthwestItems } from "../../../store/itemsSlice";

const OpenTheBarrel = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hand = () => {
        dispatch(removePartPlot({id: 50, title: 'Вскрыть бочку'}))
        dispatch(addPartPlot({id: 51, title: 'Бочку не разбить рукой'}))
    };

    const wayHand = () => {
        dispatch(removePartPlot({id: 51, title: 'Бочку не разбить рукой'}))
        dispatch(addPartPlot({id: 50, title: 'Вскрыть бочку'}))
    };

    const open = () => {
        dispatch(removePartPlot({id: 50, title: 'Вскрыть бочку'}))
        dispatch(addPartPlot({id: 52, title: 'Бочка вскрыта'}))
        dispatch(removeSouthwestItems({id: 48, item: 'Бочка'}))
        dispatch(addTiredness(1))
    };

    const welldone = () => {
        dispatch(removePartPlot({id: 52, title: 'Бочка вскрыта'}))
        dispatch(addSouthwestItems({id: 30, item: 'Солонина'}))
        navigate('/southwest')
    };

    const leaveTheBarrel = () => {
        dispatch(removePartPlot({id: 50, title: 'Вскрыть бочку'}))
        navigate('/southwest')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 50)
            ? <div>
                <p className="description">
                    Немного утонувшая под своим весом в песке бочка с припасами
                </p>
                {character.hp > 6 && character.tiredness <= 16
                ? <button className="answerButton" onClick={hand}>
                    "А если вдарить рукой?!"
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 14 &&
                character.hp > 3 &&
                character.tiredness <= 32)
                ? <button className="answerButton" onClick={open}>
                    Открыть ножом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15) &&
                character.hp > 6 &&
                character.tiredness <= 24
                ? <button className="answerButton" onClick={open}>
                    Сломать крышку топором
                </button>
                : ''}
                <button className="answerButton" onClick={leaveTheBarrel}>
                    Оставить как есть
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 52)
            ? <div>
                <p className="dialog">
                    "Это было проще простого. А внутри?!.. Солонина!"
                </p>
                <button className="answerButton" onClick={welldone}>
                    "От голода я не умру"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 51)
            ? <div>
                <p className="description">
                    Ты стучишь кулаком по бочке, как в закрытую дверь, и мудро замечаешь...
                </p>
                <button className="answerButton" onClick={wayHand}>
                    "Я дурак, но не настолько"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default OpenTheBarrel;