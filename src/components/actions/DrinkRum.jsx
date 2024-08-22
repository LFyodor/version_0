import { useDispatch, useSelector } from "react-redux";
import { addDrunkenness, addHp, addInventory, addPartPlot, decreaseTiredness, removeInventory } from "../store/characterSlice";
import { useNavigate } from "react-router-dom";

const DrinkRum = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const drinkRum = () => {
        if (character.hp === 12 && character.tiredness === 0 && character.drunkenness === 12) {
            dispatch(addPartPlot({id: 1, title: 'Пьян и счастлив от рома'}))
            // DrunkRum
            navigate('/partplot')
        } else {
            if (character.drunkenness < 12) {
                dispatch(addHp(1))
                dispatch(decreaseTiredness(4))
                dispatch(addDrunkenness(3))
                if (character.inventory.find((elem) => elem.id === 8)) {
                    dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
                } else {
                    dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
                    dispatch(addInventory({id: 8, item: 'Пустая бутыль'}))
                }
            } else {
                dispatch(addPartPlot({id: 2, title: 'Пьян от рома'}))
                // DrunkRum
                navigate('/partplot')
            }
        }
    };

    return(
        <div>
            {character.inventory.find((elem) => elem.id === 6)
            ? <button onClick={drinkRum}>
                Выпить ром
            </button>
            : ''}
        </div>
    );
};

export default DrinkRum;