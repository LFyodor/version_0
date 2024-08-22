import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, addPartPlot, addTiredness, decreaseHp, removeInventory, removePartPlot } from "../../../store/characterSlice";
import { addEastItems, removeEastItems } from "../../../store/itemsSlice";

const GetTheTrap = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hand = () => {
        if (character.luck >= 0) {
            dispatch(addPartPlot({id: 60, title: 'Ловушка и руки'}))
        } else {
            dispatch(addPartPlot({id: 61, title: 'Падение без ловушки'}))
        }
        dispatch(removePartPlot({id: 59, title: 'Достать ловушку'}))
        dispatch(addTiredness(1))
    };

    const wayHand = () => {
        dispatch(removePartPlot({id: 60, title: 'Ловушка и руки'}))
        dispatch(addPartPlot({id: 59, title: 'Достать ловушку'}))
    };

    const fall = () => {
        dispatch(removePartPlot({id: 61, title: 'Падение без ловушки'}))
        dispatch(decreaseHp(2))
        navigate('/east')
    };

    const knife = () => {
        if (character.luck >= 0) {
            dispatch(addPartPlot({id: 62, title: 'Ловушка и нож'}))
        } else {
            dispatch(addPartPlot({id: 63, title: 'Падение с ловушкой'}))
        }
        dispatch(removePartPlot({id: 59, title: 'Достать ловушку'}))
        dispatch(addTiredness(1))
    };

    const wayKnife = () => {
        dispatch(removePartPlot({id: 62, title: 'Ловушка и нож'}))
        dispatch(addPartPlot({id: 59, title: 'Достать ловушку'}))
        dispatch(removeEastItems({id: 13, item: 'Деревянная ловушка'}))
        dispatch(addInventory({id: 13, item: 'Деревянная ловушка'}))
    };

    const fallWithTrap = () => {
        dispatch(removePartPlot({id: 63, title: 'Падение с ловушкой'}))
        dispatch(removeEastItems({id: 13, item: 'Деревянная ловушка'}))
        dispatch(addInventory({id: 13, item: 'Деревянная ловушка'}))
        dispatch(removeInventory({id: 14, item: 'Нож'}))
        dispatch(addEastItems({id: 14, item: 'Нож'}))
        dispatch(decreaseHp(2))
        navigate('/east')
    };

    const leaveTheTrap = () => {
        dispatch(removePartPlot({id: 59, title: 'Достать ловушку'}))
        dispatch(addTiredness(2))
        navigate('/east')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 59)
            ? <div>
                {items.eastItems.find((elem) => elem.id === 13)
                ? <p className="description">
                    С огромным трудом взобравшись на валун, ты видишь, что ловушка застряла в зарослях сухого колючего кустарника
                </p>
                : <p className="description">
                    Осталось спуститься, не убившись
                </p>}
                {items.eastItems.find((elem) => elem.id === 13)
                ? <button className="answerButton" onClick={hand}>
                    Попробовать вытащить руками
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 14) &&
                items.eastItems.find((elem) => elem.id === 13)
                ? <button className="answerButton" onClick={knife}>
                    Подрезать кустарник ножом
                </button>
                : ''}
                <button className="answerButton" onClick={leaveTheTrap}>
                    Спуститься
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 60)
            ? <div>
                <p className="description">
                    Голыми руками не получается освободить ловушку из цепкого захвата кустарника
                </p>
                <button className="answerButton" onClick={wayHand}>
                    "Надо что-то острое"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 61)
            ? <div>
                <p className="description">
                    В попытке справиться с упрямым колючим кустом ты срываешься и падаешь на твёрдую морскую гальку
                </p>
                <button className="answerButton" onClick={fall}>
                    "Ааааа..."
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 62)
            ? <div>
                <p className="description">
                    У тебя получается прорезать путь к ловушке и добраться до неё
                </p>
                <button className="answerButton" onClick={wayKnife}>
                    "Легче лёгкого!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 63)
            ? <div>
                <p className="description">
                    У тебя получается достать ловушку и даже не пораниться, но ты соскальзываешь с камня и падаешь на гальку вместе
                     с добычей. При этом теряешь нож
                </p>
                <button className="answerButton" onClick={fallWithTrap}>
                    "Кажется, остров хочет от меня избавиться"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default GetTheTrap;