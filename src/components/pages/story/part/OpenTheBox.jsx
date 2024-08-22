import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPartPlot, removePartPlot } from "../../../store/characterSlice";
import { addWestItems, removeWestItems } from "../../../store/itemsSlice";

const OpenTheBox = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fail = () => {
        dispatch(removePartPlot({id: 99, title: 'Открыть шкатулку'}))
        dispatch(addPartPlot({id: 100, title: 'Шкатулка не открывается'}))
    };

    const wayBox = () => {
        dispatch(removePartPlot({id: 100, title: 'Шкатулка не открывается'}))
        dispatch(addPartPlot({id: 99, title: 'Открыть шкатулку'}))
    };

    const useKey = () => {
        dispatch(removePartPlot({id: 99, title: 'Открыть шкатулку'}))
        dispatch(addPartPlot({id: 101, title: 'Шкатулка открыта'}))
    };

    const leaveTheBox = () => {
        dispatch(removePartPlot({id: 99, title: 'Открыть шкатулку'}))
        navigate('/west')
    };

    const welldone = () => {
        dispatch(removePartPlot({id: 101, title: 'Шкатулка открыта'}))
        dispatch(removeWestItems({id: 53, item: 'Шкатулка'}))
        dispatch(addWestItems({id: 36, item: 'Игральная кость'}))
        dispatch(addWestItems({id: 34, item: 'Подкова'}))
        dispatch(addWestItems({id: 55, item: 'Обсидиановый нож'}))
        navigate('/west')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 99)
            ? <div>
                <p className="description">
                    Ты пытаешься поднять шкатулку, покрытую ракушками, и понимаешь - это невозможно, она здесь находится давно 
                    и уже стала частью рифа
                </p>
                {character.inventory.find((elem) => elem.id === 14 &&
                character.hp > 3 &&
                character.tiredness <= 32)
                ? <button className="answerButton" onClick={fail}>
                    Расковырять ножом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15) &&
                character.hp > 6 &&
                character.tiredness <= 24
                ? <button className="answerButton" onClick={fail}>
                    Сломать топором
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 54)
                ? <button className="answerButton" onClick={useKey}>
                    Попробовать костяной ключ
                </button>
                : ''}
                <button className="answerButton" onClick={leaveTheBox}>
                    Оставить как есть
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 100)
            ? <div>
                <p className="dialog">
                    "Шкатулка ни в какую не поддаётся и сделана из прочного материала, грубой силой не возьмёшь"
                </p>
                <button className="answerButton" onClick={wayBox}>
                    "Надо поискать иной способ успокоить моё любопытство"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 101)
            ? <div>
                <p className="description">
                    Ключ подходит, внутри щёлкает замочек, и крышка открывается, одаривая сокровищами в виде игральной кости, подковы и 
                    ножа из обсидиана
                </p>
                <button className="answerButton" onClick={welldone}>
                    "Пригодится"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default OpenTheBox;