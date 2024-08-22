import { useDispatch, useSelector } from "react-redux";
import { addInventory, addPartPlot, addTorch, decreaseTiredness, decreaseHp, removeInventory } from "../store/characterSlice";
import { useNavigate } from "react-router-dom";

const FireTorch = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fireTorch = () => {
        if (character.drunkenness > 6 || (character.tiredness > 24 && character.tiredness <= 32) || character.luck < 0) {
            dispatch(addPartPlot({id: 5, title: 'Обжёгся'}))
            dispatch(decreaseHp(1))
            dispatch(decreaseTiredness(3))
            // GotBurned
            navigate('/partplot')
        }
        dispatch(removeInventory({id: 4, item: 'Незажжённый факел'}))
        dispatch(addInventory({id: 5, item: 'Горящий факел'}))
        dispatch(addTorch())
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 5)
            ? ''
            : character.inventory.find((elem) => elem.id === 0) && character.inventory.find((elem) => elem.id === 4)
                ? <button onClick={fireTorch}>
                    Зажечь факел
                </button>
                : ''}
        </div>
    );
};

export default FireTorch;