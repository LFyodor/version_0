import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBonfire, addPartPlot, addTiredness, decreaseHp, removeInventory, removePartPlot } from "../../../store/characterSlice";
import { addSoutheastItems, removeSoutheastItems } from "../../../store/itemsSlice";

const BreakTheBoxSE = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hand = () => {
        if (character.luck >= 2) {
            dispatch(addPartPlot({id: 22, title: 'Ящик разбит ЮВ'}))
            dispatch(removeSoutheastItems({id: 40, item: 'Ящик'}))
        } else {
            dispatch(addPartPlot({id: 23, title: 'Ящик не разбит рукой ЮВ'}))
            dispatch(decreaseHp(1))
        }
        dispatch(removePartPlot({id: 21, title: 'Разбить ящик ЮВ'}))
        dispatch(addTiredness(1))
    };

    const welldone = () => {
        dispatch(removePartPlot({id: 22, title: 'Ящик разбит ЮВ'}))
        dispatch(addSoutheastItems({id: 1, item: 'Охапка сломанных досок'}))
        dispatch(addSoutheastItems({id: 6, item: 'Бутылка рома'}))
        dispatch(addSoutheastItems({id: 7, item: 'Бутылка вина'}))
        dispatch(addSoutheastItems({id: 29, item: 'Сухари'}))
        navigate('/southeast')
    };

    const wayHand = () => {
        dispatch(removePartPlot({id: 23, title: 'Ящик не разбит рукой ЮВ'}))
        dispatch(addPartPlot({id: 21, title: 'Разбить ящик ЮВ'}))
    };

    const fire = () => {
        dispatch(removePartPlot({id: 21, title: 'Разбить ящик ЮВ'}))
        dispatch(removeSoutheastItems({id: 40, item: 'Ящик'}))
        dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
        dispatch(addPartPlot({id: 17, title: 'Развёл костёр'}))
        dispatch(addPartPlot({id: 24, title: 'Ящик сгорел'}))
        dispatch(addBonfire())
    };

    const wayFire = () => {
        dispatch(removePartPlot({id: 24, title: 'Ящик сгорел'}))
        navigate('/southeast')
    };

    const knife = () => {
        if (character.luck >= 1) {
            dispatch(addPartPlot({id: 22, title: 'Ящик разбит ЮВ'}))
            dispatch(removeSoutheastItems({id: 40, item: 'Ящик'}))
        } else if (character.luck === 0) {
            dispatch(addPartPlot({id: 25, title: 'Ящик не расковырять ЮВ'}))
        } else {
            dispatch(addPartPlot({id: 26, title: 'Почти сломанный нож ЮВ'}))
            dispatch(decreaseHp(1))
        }
        dispatch(removePartPlot({id: 21, title: 'Разбить ящик ЮВ'}))
        dispatch(addTiredness(1))
    };

    const wayKnife = () => {
        dispatch(removePartPlot({id: 25, title: 'Ящик не расковырять ЮВ'}))
        dispatch(addPartPlot({id: 21, title: 'Разбить ящик ЮВ'}))
    };

    const wayWithoutKnife = () => {
        dispatch(removePartPlot({id: 26, title: 'Почти сломанный нож ЮВ'}))
        dispatch(addPartPlot({id: 21, title: 'Разбить ящик ЮВ'}))
    };

    const axe = () => {
        if (character.luck >= 0) {
            dispatch(addPartPlot({id: 22, title: 'Ящик разбит ЮВ'}))
            dispatch(removeSoutheastItems({id: 40, item: 'Ящик'}))
        } else {
            dispatch(addPartPlot({id: 27, title: 'Ящик не разрублен ЮВ'}))
            dispatch(decreaseHp(1))
        }
        dispatch(removePartPlot({id: 21, title: 'Разбить ящик ЮВ'}))
        dispatch(addTiredness(1))
    };

    const wayAxe = () => {
        dispatch(removePartPlot({id: 27, title: 'Ящик не разрублен ЮВ'}))
        dispatch(addPartPlot({id: 21, title: 'Разбить ящик ЮВ'}))
    };

    const leaveTheBox = () => {
        dispatch(removePartPlot({id: 21, title: 'Разбить ящик ЮВ'}))
        navigate('/southeast')
    };

    return(
        <div>
            {character.partPlot.find((part) => part.id === 21)
            ? <div>
                <p className="description">
                    Перед тобой небольшой, но тяжёлый ящик, в котором среди повреждённого могло уцелеть и что-то полезное
                </p>
                {character.hp > 6 && character.tiredness <= 16
                ? <button className="answerButton" onClick={hand}>
                    "А если вдарить рукой?!"
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 0) &&
                character.inventory.find((elem) => elem.id === 6)
                ? <button className="answerButton" onClick={fire}>
                    "Я устал от возьни, просто сожгу его"
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
            {character.partPlot.find((part) => part.id === 22)
            ? <div>
                <p className="description">
                    Ты постарался на славу! Теперь у тебя есть дрова, рома, вино и сухари
                </p>
                <button className="answerButton" onClick={welldone}>
                    "Отличная работа"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 23)
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
            {character.partPlot.find((part) => part.id === 24)
            ? <div>
                <p className="description">
                    Ящик сгорел, у тебя получилось! И всё, что было внутри, тоже
                </p>
                <button className="answerButton" onClick={wayFire}>
                    "Нет худа без добра. Вот и костёр!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 25)
            ? <div>
                <p className="dialog">
                    "Ничего не выходит"
                </p>
                <button className="answerButton" onClick={wayKnife}>
                    "Попробую по-другому"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 26)
            ? <div>
                <p className="description">
                    Нож выскакивает из твоей хватки и случайно ранит руку
                </p>
                <button className="answerButton" onClick={wayWithoutKnife}>
                    "Сегодня не мой день"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 27)
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

export default BreakTheBoxSE;