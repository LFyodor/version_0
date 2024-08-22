import { useDispatch, useSelector } from "react-redux";
import { addHp, addInventory, decreaseTiredness, removeInventory } from "../store/characterSlice";

const DrinkWater = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();

    const drinkWater1 = () => {
        if (character.inventory.find((elem) => elem.id === 8)) {
        } else {
            dispatch(addInventory({id: 8, item: 'Пустая бутыль'}))
        }
        dispatch(removeInventory({id: 10, item: 'Бутыль с водой'}))
        dispatch(addHp(2))
        dispatch(decreaseTiredness(5))
    };

    const drinkWater2 = () => {
        if (character.inventory.find((elem) => elem.id === 9)) {
        } else {
            dispatch(addInventory({id: 9, item: 'Пустая бутыль'}))
        }
        dispatch(removeInventory({id: 11, item: 'Бутыль с водой'}))
        dispatch(addHp(2))
        dispatch(decreaseTiredness(5))
    };

    return (
        <div>
            {(character.hp < 12 || character.tiredness > 0) &&
            character.inventory.find((elem) => elem.id === 10)
            ? <button onClick={drinkWater1}>
                Утолить жажду
            </button>
            : ''}
            {(character.hp < 12 || character.tiredness > 0) &&
            character.inventory.find((elem) => elem.id === 11)
            ? <button onClick={drinkWater2}>
                Утолить жажду
            </button>
            : ''}
        </div>
    );
};

export default DrinkWater;