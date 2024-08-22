import { useDispatch, useSelector } from "react-redux";
import { addTiredness, addHp, decreaseTiredness, decreaseHp, removeInventory, addPartPlot, decreaseDrunkenness } from "../store/characterSlice";
import { useNavigate } from "react-router-dom";

const EatSnake = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const eatSnake = () => {
        dispatch(removeInventory({id: 27, item: 'Сырая змея'}))
        dispatch(decreaseHp(6))
        dispatch(addTiredness(6))
        dispatch(addPartPlot({id: 15, title: 'Вещий сон'}))
        dispatch(addPartPlot({id: 16, title: 'Отравился змеёй'}))
        // GotPoisonedSnake
        navigate('/partplot')
    };

    const eatFriedSnake = () => {
        dispatch(removeInventory({id: 28, item: 'Жареная змея'}))
        dispatch(addHp(6))
        dispatch(decreaseTiredness(6))
        dispatch(decreaseDrunkenness(3))
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 27) &&
            character.hp < 12
            ? <button onClick={eatSnake}>
                Съесть сырую змею
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 28) &&
            character.hp < 12
            ? <button onClick={eatFriedSnake}>
                Съесть жареную змею
            </button>
            : ''}
        </div>
    );
};

export default EatSnake;