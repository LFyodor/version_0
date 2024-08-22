import { useDispatch, useSelector } from "react-redux";
import { addInventory, addPartPlot, removeInventory } from "../store/characterSlice";
import { useNavigate } from "react-router-dom";

const PutOnBoots = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const putOnBoots = () => {
        if (character.drunkenness > 6) {
            dispatch(addPartPlot({id: 6, title: 'Уснул без сапог'}))
        } else {
            dispatch(removeInventory({id: 41, item: 'Левый сапог'}))
            dispatch(removeInventory({id: 42, item: 'Правый сапог'}))
            dispatch(addInventory({id: 12, item: 'Старые сапоги капитана'}))
            dispatch(addPartPlot({id: 3, title: 'Сапоги'}))
        }
        // AsleepWithoutBoots
        // Boots
        navigate('/partplot')
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 41) &&
            character.inventory.find((elem) => elem.id === 42)
            ? <button onClick={putOnBoots}>
                Одеть сапоги
            </button>
            : ''}
        </div>
    );
};

export default PutOnBoots;