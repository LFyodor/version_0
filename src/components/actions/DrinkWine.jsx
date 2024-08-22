import { useDispatch, useSelector } from "react-redux";
import { addDrunkenness, addHp, addInventory, addPartPlot, decreaseTiredness, removeInventory } from "../store/characterSlice";
import { useNavigate } from "react-router-dom";

const DrinkWine = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const drinkWine = () => {
        if (character.hp === 12 && character.tiredness === 0 && character.drunkenness === 12) {
            dispatch(addPartPlot({id: 8, title: 'Пьян и счастлив от вина'}))
            // DrunkWine
            navigate('/partplot')
        } else {
            if (character.drunkenness < 12) {
                dispatch(addHp(1))
                dispatch(decreaseTiredness(2))
                dispatch(addDrunkenness(1))
                if (character.inventory.find((elem) => elem.id === 9)) {
                    dispatch(removeInventory({id: 7, item: 'Бутылка вина'}))
                } else {
                    dispatch(removeInventory({id: 7, item: 'Бутылка вина'}))
                    dispatch(addInventory({id: 9, item: 'Пустая бутыль'}))
                }
            } else {
                dispatch(addPartPlot({id: 9, title: 'Пьян от вина'}))
                // DrunkWine
                navigate('/partplot')
            }
        }
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 7)
            ? <button onClick={drinkWine}>
                Выпить вина
            </button>
            : ''}
        </div>
    );
};

export default DrinkWine;