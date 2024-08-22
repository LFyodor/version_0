import { useDispatch, useSelector } from "react-redux";
import { addHp, decreaseDrunkenness, decreaseTiredness, removeInventory } from "../store/characterSlice";

const EatCornedBeef = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();

    const eatCornedBeef = () => {
        dispatch(removeInventory({id: 30, item: 'Солонина'}))
        dispatch(addHp(3))
        dispatch(decreaseTiredness(3))
        dispatch(decreaseDrunkenness(1))
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 30) &&
            character.hp < 12
            ? <button onClick={eatCornedBeef}>
                Поесть солонины
            </button>
            : ''}
        </div>
    );
};

export default EatCornedBeef;