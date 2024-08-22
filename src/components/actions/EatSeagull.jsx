import { useDispatch, useSelector } from "react-redux"
import { addHp, decreaseDrunkenness, decreaseTiredness, removeInventory } from "../store/characterSlice";

const EatSeagull = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();

    const eatFriedSeagull = () => {
        dispatch(removeInventory({id: 50, item: 'Жареная чайка'}))
        dispatch(addHp(3))
        dispatch(decreaseTiredness(4))
        dispatch(decreaseDrunkenness(2))
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 50) &&
            character.hp < 12
            ? <button onClick={eatFriedSeagull}>
                Съесть жареную чайку
            </button>
            : ''}
        </div>
    );
};

export default EatSeagull;