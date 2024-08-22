import { useDispatch, useSelector } from "react-redux";
import { addHp, decreaseTiredness, removeInventory } from "../store/characterSlice";

const EatCrackers = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();

    const eatCrackers = () => {
        dispatch(removeInventory({id: 29, item: 'Сухари'}))
        dispatch(addHp(1))
        dispatch(decreaseTiredness(1))
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 29) &&
            character.hp < 12
            ? <button onClick={eatCrackers}>
                Поесть сухарей
            </button>
            : ''}
        </div>
    );
};

export default EatCrackers;