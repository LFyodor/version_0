import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPartPlot, addTiredness, decreaseHp, removePartPlot } from "../../../store/characterSlice";
import { addSouthwestItems, removeSouthwestItems } from "../../../store/itemsSlice";

const BreakTheBoxSW = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hand = () => {
        if (character.luck >= 2) {
            dispatch(addPartPlot({id: 45, title: 'Ящик разбит ЮЗ'}))
            dispatch(removeSouthwestItems({id: 40, item: 'Ящик'}))
        } else {
            dispatch(addPartPlot({id: 46, title: 'Ящик не разбит рукой ЮЗ'}))
            dispatch(decreaseHp(1))
        }
        dispatch(removePartPlot({id: 44, title: 'Разбить ящик ЮЗ'}))
        dispatch(addTiredness(1))
    };

    const welldone = () => {
        dispatch(removePartPlot({id: 45, title: 'Ящик разбит ЮЗ'}))
        dispatch(addSouthwestItems({id: 1, item: 'Охапка сломанных досок'}))
        dispatch(addSouthwestItems({id: 6, item: 'Бутылка рома'}))
        dispatch(addSouthwestItems({id: 7, item: 'Бутылка вина'}))
        dispatch(addSouthwestItems({id: 29, item: 'Сухари'}))
        navigate('/southwest')
    };

    const wayHand = () => {
        dispatch(removePartPlot({id: 46, title: 'Ящик не разбит рукой ЮЗ'}))
        dispatch(addPartPlot({id: 44, title: 'Разбить ящик ЮЗ'}))
    };

    const knife = () => {
        if (character.luck >= 1) {
            dispatch(addPartPlot({id: 45, title: 'Ящик разбит ЮЗ'}))
            dispatch(removeSouthwestItems({id: 40, item: 'Ящик'}))
        } else if (character.luck === 0) {
            dispatch(addPartPlot({id: 47, title: 'Ящик не расковырять ЮЗ'}))
        } else {
            dispatch(addPartPlot({id: 48, title: 'Почти сломанный нож ЮЗ'}))
            dispatch(decreaseHp(1))
        }
        dispatch(removePartPlot({id: 44, title: 'Разбить ящик ЮЗ'}))
        dispatch(addTiredness(1))
    };

    const wayKnife = () => {
        dispatch(removePartPlot({id: 47, title: 'Ящик не расковырять ЮЗ'}))
        dispatch(addPartPlot({id: 44, title: 'Разбить ящик ЮЗ'}))
    };

    const wayWithoutKnife = () => {
        dispatch(removePartPlot({id: 48, title: 'Почти сломанный нож ЮЗ'}))
        dispatch(addPartPlot({id: 44, title: 'Разбить ящик ЮЗ'}))
    };

    const axe = () => {
        if (character.luck >= 0) {
            dispatch(addPartPlot({id: 45, title: 'Ящик разбит ЮЗ'}))
            dispatch(removeSouthwestItems({id: 40, item: 'Ящик'}))
        } else {
            dispatch(addPartPlot({id: 49, title: 'Ящик не разрублен ЮЗ'}))
            dispatch(decreaseHp(1))
        }
        dispatch(removePartPlot({id: 44, title: 'Разбить ящик ЮЗ'}))
        dispatch(addTiredness(1))
    };

    const wayAxe = () => {
        dispatch(removePartPlot({id: 49, title: 'Ящик не разрублен ЮЗ'}))
        dispatch(addPartPlot({id: 44, title: 'Разбить ящик ЮЗ'}))
    };

    const leaveTheBox = () => {
        dispatch(removePartPlot({id: 44, title: 'Разбить ящик ЮЗ'}))
        navigate('/southwest')
    };

    return(
        <div>
            {character.partPlot.find((part) => part.id === 44)
            ? <div>
                <p className="description">
                    Перед тобой небольшой, но тяжёлый ящик, в котором среди повреждённого могло уцелеть и что-то полезное
                </p>
                {character.hp > 6 && character.tiredness <= 16
                ? <button className="answerButton" onClick={hand}>
                    "А если вдарить рукой?!"
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 14 &&
                character.hp > 3 &&
                character.tiredness <= 32)
                ? <button className="answerButton" onClick={knife}>
                    Расковырять ножом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15) &&
                character.hp > 6 &&
                character.tiredness <= 24
                ? <button className="answerButton" onClick={axe}>
                    Сломать топором
                </button>
                : ''}
                <button className="answerButton" onClick={leaveTheBox}>
                    Оставить как есть
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 45)
            ? <div>
                <p className="description">
                    Ты постарался на славу! Теперь у тебя есть дрова, ром, вино и сухари
                </p>
                <button className="answerButton" onClick={welldone}>
                    "Отличная работа"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 46)
            ? <div>
                <p className="description">
                    Ты разбиваешь руку, но не ящик. Крови не очень много, жить можно
                </p>
                <p className="dialog">
                    "В такие минуты я счастлив, что никто не видит моих дурацких выходок"
                </p>
                <button className="answerButton" onClick={wayHand}>
                    "Попробую по-другому"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 47)
            ? <div>
                <p className="dialog">
                    "Ничего не выходит"
                </p>
                <button className="answerButton" onClick={wayKnife}>
                    "Попробую по-другому"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 48)
            ? <div>
                <p className="description">
                    Нож выскакивает из твоей хватки и случайно ранит руку
                </p>
                <button className="answerButton" onClick={wayWithoutKnife}>
                    "Сегодня не мой день"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 49)
            ? <div>
                <p className="description">
                    Ты бьёшь по ящику, но топор отскакивает тебе в ногу... Победа за ящиком!
                </p>
                <button className="answerButton" onClick={wayAxe}>
                    "Да чтоб тебя...!"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default BreakTheBoxSW;