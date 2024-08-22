import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, addPartPlot, removeInventory } from "../store/characterSlice";
import { addNortheastItems, removeNortheastItems } from "../store/itemsSlice";

const NortheastActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getAxe = () => {
        if (character.hp > 9 && character.tiredness <= 16 && character.drunkenness < 6) {
            dispatch(addPartPlot({id: 64, title: 'Хватает сил на топор'}))
        } else {
            dispatch(addPartPlot({id: 65, title: 'Не хватает сил на топор'}))
        }
        // GetAxe
        navigate('/partplot')
    };

    const lowerTheRope = () => {
        dispatch(removeInventory({id: 16, item: 'Верёвка'}))
        dispatch(addNortheastItems({id: 16, item: 'Верёвка'}))
    };

    const getTheRope = () => {
        dispatch(removeNortheastItems({id: 16, item: 'Верёвка'}))
        dispatch(addInventory({id: 16, item: 'Верёвка'}))
    };

    return (
        <div>
            {items.northeastItems.find((elem) => elem.id === 15) &&
            (character.torch > 0 || character.usedDark > 20)
            ? <button onClick={getAxe}>
                Вытащить топор
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 16)
            ? <button onClick={lowerTheRope}>
                Спустить верёвку
            </button>
            : ''}
            {items.northeastItems.find((elem) => elem.id === 16)
            ? <button onClick={getTheRope}>
                Забрать верёвку
            </button>
            : ''}
        </div>
    );
};

export default NortheastActions;