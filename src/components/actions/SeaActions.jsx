import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPartPlot, addTime } from "../store/characterSlice";

const SeaActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fishing = () => {
        switch (character.time % 24) {
            case 3:
                if (items.seaItems.find((elem) => elem.id === 56)) {
                    dispatch(addPartPlot({id: 161, title: 'Встреча с китом'}))
                    dispatch(addTime(1))
                    // Whale
                    navigate('/partplot')
                } else {
                    dispatch(addTime(1))
                }
                break;
            case 8:
                if (character.inventory.find((elem) => elem.id === 22)) {
                    dispatch(addTime(1))
                } else {
                    dispatch(addPartPlot({id: 68, title: 'Улов: лосось'}))
                    dispatch(addTime(1))
                    // Catch
                    navigate('/partplot')
                }
                break;
            case 15:
                if (character.inventory.find((elem) => elem.id === 24)) {
                    dispatch(addTime(1))
                } else {
                    dispatch(addPartPlot({id: 69, title: 'Улов: тунец'}))
                    dispatch(addTime(1))
                    // Catch
                    navigate('/partplot')
                }
                break;
            default:
                dispatch(addTime(1))
        }
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 13)
            ? <button onClick={fishing}>
                Рыбачить с помощью ловушки для птиц
            </button>
            : ''}
        </div>
    );
};

export default SeaActions;