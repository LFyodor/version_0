import { useDispatch, useSelector } from "react-redux";
import { addInventory, addPartPlot, removeInventory } from "../store/characterSlice";
import { useNavigate } from "react-router-dom";

const UnlitTorch = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const unlitTorch = () => {
        if (character.luck < 0) {
            dispatch(addPartPlot({id: 13, title: 'Дерьмо случается: факел'}))
            // ShitHappensTorch
            navigate('/partplot')
        } else {
            dispatch(removeInventory({id: 2, item: 'Короткая крепкая палка'}))
            dispatch(removeInventory({id: 3, item: 'Рваная тряпка'}))
            dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
            if (character.inventory.find((elem) => elem.id === 8)) {
            } else {
                dispatch(addInventory({id: 8, item: 'Пустая бутыль'}))
            }
            dispatch(addInventory({id: 4, item: 'Незажжённый факел'}))
        }
    };

    return (
        <div>
        {character.inventory.find((elem) => elem.id === 4)
        ? ''
        : character.inventory.find((elem) => elem.id === 2) &&
        character.inventory.find((elem) => elem.id === 3) &&
        character.inventory.find((elem) => elem.id === 6)
            ? <button onClick={unlitTorch}>
                Сделать факел
            </button>
            : ''}
        </div>
    );
};

export default UnlitTorch;