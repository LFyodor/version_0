import { useDispatch, useSelector } from "react-redux"
import { removeEastItems } from "../store/itemsSlice";
import { addInventory, addPartPlot, addTiredness } from "../store/characterSlice";
import { useNavigate } from "react-router-dom";

const EastActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getStick = () => {
        dispatch(removeEastItems({id: 2, item: 'Короткая крепкая палка'}))
        dispatch(addInventory({id: 2, item: 'Короткая крепкая палка'}))
    };

    const getTheTrap = () => {
        dispatch(addPartPlot({id: 59, title: 'Достать ловушку'}))
        dispatch(addTiredness(2))
        // GetTheTrap
        navigate('/partplot')
    };

    const getKnife = () => {
        dispatch(removeEastItems({id: 14, item: 'Нож'}))
        dispatch(addInventory({id: 14, item: 'Нож'}))
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 2)
            ? ''
            : items.eastItems.find((elem) => elem.id === 2) && character.luck >= 3
                ? <button onClick={getStick}>
                    Поднять палку
                </button>
                : ''}
            {items.eastItems.find((elem) => elem.id === 13) &&
            (character.torch > 0 || character.usedDark > 30) &&
            character.hp > 6 && character.tiredness <= 16 && character.drunkenness < 6
            ? <button onClick={getTheTrap}>
                Достать деревянную ловушку
            </button>
            : ''}
            {items.eastItems.find((elem) => elem.id === 14) &&
            (character.usedDark > 20 || character.torch > 0) &&
            character.drunkenness <= 6
            ? <button onClick={getKnife}>
                Поднять нож
            </button>
            : ''}
        </div>
    );
};

export default EastActions;