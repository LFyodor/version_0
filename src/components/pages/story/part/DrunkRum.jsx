import { useDispatch, useSelector } from "react-redux";
import { addInventory, addTiredness, addPartPlot, decreaseHp, removeInventory, removePartPlot } from "../../../store/characterSlice";
import { useNavigate } from "react-router-dom";
import AgainDied from "../../../AgainDied";

const DrunkRum = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayDrunkAndHappyOnRum = () => {
        dispatch(removePartPlot({id: 1, title: 'Пьян и счастлив от рома'}))
        navigate(-1)
    };

    const drankTooMuchOnRum = () => {
        if (character.inventory.find((elem) => elem.id === 8)) {
        } else {
            dispatch(addInventory({id: 8, item: 'Пустая бутыль'}))
        }
        if (character.partPlot.find((part) => part.id === 1)) {
            dispatch(removePartPlot({id: 1, title: 'Пьян и счастлив от рома'}))
        } else {
            dispatch(removePartPlot({id: 2, title: 'Пьян от рома'}))
        }
        dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
        dispatch(addPartPlot({id: 7, title: 'Перепил рома'}))
        dispatch(decreaseHp(3))
        dispatch(addTiredness(18))
    };

    const wayDrankTooMuchOnRum = () => {
        dispatch(removePartPlot({id: 7, title: 'Перепил рома'}))
        navigate(-1)
    };

    const wayDrunkRum = () => {
        dispatch(removePartPlot({id: 2, title: 'Пьян от рома'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 1)
            ? <div>
                <p className="dialog">
                    "Мне больше не нужно, я счастлив и пьян!"
                </p>
                <button className="answerButton" onClick={wayDrunkAndHappyOnRum}>
                    "Аж до тошноты... Пожалуй, хватит"
                </button>
                <button className="answerButton" onClick={drankTooMuchOnRum}>
                    "Нет, хочу ещё!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 7) && character.hp > 0
            ? <div>
                <p className="description">
                    Тебя стошнило, подкосило, ты упал, ударился и на тебя напала слабость
                </p>
                <button className="answerButton" onClick={wayDrankTooMuchOnRum}>
                    "Вот теперь хватит"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 2)
            ? <div>
                <p className="dialog">
                    "В меня больше не влезет. Пора остановиться..."
                </p>
                <button className="answerButton" onClick={wayDrunkRum}>
                    "Уговорил"
                </button>
                <button className="answerButton" onClick={drankTooMuchOnRum}>
                    "Или нет?!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 7) && character.hp === 0
            ? <div>
                <p className="description">
                    Смерть наступает в результате чрезмерного употребления алкоголя. Теперь ты знаешь, что от этого умирают и 
                    больше так не будешь... правда?
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default DrunkRum;