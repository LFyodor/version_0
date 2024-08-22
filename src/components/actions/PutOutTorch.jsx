import { useDispatch, useSelector } from "react-redux";
import { addTiredness, addPartPlot, decreaseHp, removeInventory, removeTorch } from "../store/characterSlice";
import { useNavigate } from "react-router-dom";

const PutOutTorch = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const putOutTorch = () => {
        dispatch(removeInventory({id: 5, item: 'Горящий факел'}))
        dispatch(removeTorch())
        if (character.luck < 0) {
            dispatch(addPartPlot({id: 14, title: 'Дерьмо случается: тушим факел'}))
            dispatch(decreaseHp(1))
            dispatch(addTiredness(2))
            // ShitHappensExtinguishing
            navigate('/partplot')
        }
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 5)
            ? <button onClick={putOutTorch}>
                Затушить факел
            </button>
            : ''}
        </div>
    );
};

export default PutOutTorch;