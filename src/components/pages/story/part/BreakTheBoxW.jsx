import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPartPlot, addTiredness, decreaseHp, removePartPlot } from "../../../store/characterSlice";
import { addWestItems, removeWestItems } from "../../../store/itemsSlice";

const BreakTheBoxW = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hand = () => {
        if (character.luck >= 2) {
            dispatch(addPartPlot({id: 94, title: 'Ящик разбит З'}))
            dispatch(removeWestItems({id: 40, item: 'Ящик'}))
        } else {
            dispatch(addPartPlot({id: 95, title: 'Ящик не разбит рукой З'}))
            dispatch(decreaseHp(1))
        }
        dispatch(removePartPlot({id: 93, title: 'Разбить ящик З'}))
        dispatch(addTiredness(1))
    };

    const welldone = () => {
        dispatch(removePartPlot({id: 94, title: 'Ящик разбит З'}))
        dispatch(addWestItems({id: 1, item: 'Охапка сломанных досок'}))
        dispatch(addWestItems({id: 7, item: 'Бутылка вина'}))
        dispatch(addWestItems({id: 6, item: 'Бутылка рома'}))
        navigate('/west')
    };

    const wayHand = () => {
        dispatch(removePartPlot({id: 95, title: 'Ящик не разбит рукой З'}))
        dispatch(addPartPlot({id: 93, title: 'Разбить ящик З'}))
    };

    const knife = () => {
        if (character.luck >= 1) {
            dispatch(addPartPlot({id: 94, title: 'Ящик разбит З'}))
            dispatch(removeWestItems({id: 40, item: 'Ящик'}))
        } else if (character.luck === 0) {
            dispatch(addPartPlot({id: 96, title: 'Ящик не расковырять З'}))
        } else {
            dispatch(addPartPlot({id: 97, title: 'Почти сломанный нож З'}))
            dispatch(decreaseHp(1))
        }
        dispatch(removePartPlot({id: 93, title: 'Разбить ящик З'}))
        dispatch(addTiredness(1))
    };

    const wayKnife = () => {
        dispatch(removePartPlot({id: 96, title: 'Ящик не расковырять З'}))
        dispatch(addPartPlot({id: 93, title: 'Разбить ящик З'}))
    };

    const wayWithoutKnife = () => {
        dispatch(removePartPlot({id: 97, title: 'Почти сломанный нож З'}))
        dispatch(addPartPlot({id: 93, title: 'Разбить ящик З'}))
    };

    const axe = () => {
        if (character.luck >= 0) {
            dispatch(addPartPlot({id: 94, title: 'Ящик разбит З'}))
            dispatch(removeWestItems({id: 40, item: 'Ящик'}))
        } else {
            dispatch(addPartPlot({id: 98, title: 'Ящик не разрублен З'}))
            dispatch(decreaseHp(1))
        }
        dispatch(removePartPlot({id: 93, title: 'Разбить ящик З'}))
        dispatch(addTiredness(1))
    };

    const wayAxe = () => {
        dispatch(removePartPlot({id: 92, title: 'Ящик не разрублен СЗ'}))
        dispatch(addPartPlot({id: 87, title: 'Разбить ящик СЗ'}))
    };

    const leaveTheBox = () => {
        dispatch(removePartPlot({id: 93, title: 'Разбить ящик З'}))
        navigate('/west')
    };

    return(
        <div>
            {character.partPlot.find((part) => part.id === 93)
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
            {character.partPlot.find((part) => part.id === 94)
            ? <div>
                <p className="description">
                    Ты постарался на славу! Теперь у тебя есть дрова, вино и ром
                </p>
                <button className="answerButton" onClick={welldone}>
                    "Отличная работа"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 95)
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
            {character.partPlot.find((part) => part.id === 96)
            ? <div>
                <p className="dialog">
                    "Ничего не выходит"
                </p>
                <button className="answerButton" onClick={wayKnife}>
                    "Попробую по-другому"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 97)
            ? <div>
                <p className="description">
                    Нож выскакивает из твоей хватки и случайно ранит руку
                </p>
                <button className="answerButton" onClick={wayWithoutKnife}>
                    "Сегодня не мой день"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 98)
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

export default BreakTheBoxW;