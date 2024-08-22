import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInventory, addTiredness, addPartPlot, decreaseHp, removeInventory, removePartPlot } from "../../../store/characterSlice";
import AgainDied from "../../../AgainDied";

const DrunkWine = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayDrunkAndHappyOnWine = () => {
        dispatch(removePartPlot({id: 8, title: 'Пьян и счастлив от вина'}))
        navigate(-1)
    };

    const drankTooMuchOnWine = () => {
        if (character.inventory.find((elem) => elem.id === 8)) {
        } else {
            dispatch(addInventory({id: 9, item: 'Пустая бутыль'}))
        }
        if (character.partPlot.find((part) => part.id === 8)) {
            dispatch(removePartPlot({id: 8, title: 'Пьян и счастлив от вина'}))
        } else {
            dispatch(removePartPlot({id: 9, title: 'Пьян от вина'}))
        }
        dispatch(removeInventory({id: 7, item: 'Бутылка вина'}))
        dispatch(addPartPlot({id: 10, title: 'Перепил вина'}))
        dispatch(decreaseHp(3))
        dispatch(addTiredness(18))
    };

    const wayDrankTooMuchOnWine = () => {
        dispatch(removePartPlot({id: 10, title: 'Перепил вина'}))
        navigate(-1)
    };

    const wayDrunkWine = () => {
        dispatch(removePartPlot({id: 9, title: 'Пьян от вина'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 8)
            ? <div>
                <p className="dialog">
                    "Мне больше не нужно, я счастлив и пьян!"
                </p>
                <button className="answerButton" onClick={wayDrunkAndHappyOnWine}>
                    "Аж до тошноты... Пожалуй, хватит"
                </button>
                <button className="answerButton" onClick={drankTooMuchOnWine}>
                    "Нет, хочу ещё!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 10) && character.hp > 0
            ? <div>
                <p className="description">
                    Тебя стошнило, подкосило, ты упал, ударился и на тебя напала слабость.
                </p>
                <button className="answerButton" onClick={wayDrankTooMuchOnWine}>
                    "Вот теперь хватит"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 9)
            ? <div>
                <p className="dialog">
                    "В меня больше не влезет. Пора остановиться..."
                </p>
                <button className="answerButton" onClick={wayDrunkWine}>
                    "Уговорил"
                </button>
                <button className="answerButton" onClick={drankTooMuchOnWine}>
                    "Или нет?!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 10) && character.hp === 0
            ? <div>
                <p className="description">
                    Смерть наступает в результате чрезмерного употребления алкоголя. Теперь ты знаешь, что от этого умирают
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default DrunkWine;