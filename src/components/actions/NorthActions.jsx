import { useDispatch, useSelector } from "react-redux"
import { addNorthItems, removeNorthItems } from "../store/itemsSlice";
import { addInventory, addPartPlot, addTime, decreaseHp, removeInventory } from "../store/characterSlice";
import { useNavigate } from "react-router-dom";

const NorthActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getRag = () => {
        dispatch(removeNorthItems({id: 3, item: 'Рваная тряпка'}))
        dispatch(addInventory({id: 3, item: 'Рваная тряпка'}))
    };

    const useKnife = () => {
        if (character.luck >= 3) {
            dispatch(removeNorthItems({id: 52, item: 'Сухая лоза'}))
        } else {
            dispatch(addPartPlot({id: 84, title: 'Потерял нож в лозе'}))
            dispatch(removeInventory({id: 14, item: 'Нож'}))
            dispatch(addNorthItems({id: 14, item: 'Нож'}))
            dispatch(decreaseHp(1))
            // Vine
            navigate('/partplot')
        }
        dispatch(addTime(1))
    };

    const getKnife = () => {
        dispatch(removeNorthItems({id: 14, item: 'Нож'}))
        dispatch(addInventory({id: 14, item: 'Нож'}))
    };

    const useAxe = () => {
        if (character.luck < 0) {
            dispatch(addPartPlot({id: 85, title: 'Отскочил топор'}))
            dispatch(decreaseHp(1))
            // Vine
            navigate('/partplot')
        }
        dispatch(removeNorthItems({id: 52, item: 'Сухая лоза'}))
        dispatch(addTime(1))
    };

    const useTorch = () => {
        if (character.luck >= 0) {
            dispatch(removeNorthItems({id: 52, item: 'Сухая лоза'}))
            dispatch(removeNorthItems({id: 3, item: 'Рваная тряпка'}))
        } else {
            dispatch(addPartPlot({id: 86, title: 'Накрыло камнями'}))
            dispatch(decreaseHp(12))
            // Vine
            navigate('/partplot')
        }
        dispatch(addTime(1))
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 3)
            ? ''
            : (character.torch > 0 || character.usedDark > 10) &&
            character.drunkenness <= 6 &&
            items.northItems.find((elem) => elem.id === 3)
                ? <button onClick={getRag}>
                    Взять тряпку
                </button>
                : ''}
            {(character.torch > 0 || character.usedDark > 30) && character.hp > 3 &&
            character.tiredness <= 32 && character.drunkenness <= 6 &&
            items.northItems.find((elem) => elem.id === 52) &&
            character.inventory.find((elem) => elem.id === 14)
            ? <button onClick={useKnife}>
                Срезать лозу ножом
            </button>
            : ''}
            {(character.torch > 0 || character.usedDark > 30) && character.hp > 6 &&
            character.tiredness <= 24 && character.drunkenness <= 6 &&
            items.northItems.find((elem) => elem.id === 52) &&
            character.inventory.find((elem) => elem.id === 15)
            ? <button onClick={useAxe}>
                Срубить лозу топором
            </button>
            : ''}
            {character.torch > 0 && character.drunkenness <= 6 &&
            items.northItems.find((elem) => elem.id === 52) &&
            character.inventory.find((elem) => elem.id === 5)
            ? <button onClick={useTorch}>
                Поджечь лозу факелом
            </button>
            : ''}
            {items.northItems.find((elem) => elem.id === 52)
            ? ''
            : items.northItems.find((elem) => elem.id === 14) &&
            (character.usedDark > 20 || character.torch > 0)
                ? <button onClick={getKnife}>
                    Поднять нож
                </button>
                : ''}
        </div>
    );
};

export default NorthActions;