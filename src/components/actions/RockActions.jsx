import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPartPlot, addTime, removeInventory } from "../store/characterSlice";

const RockActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fishing = () => {
        switch (character.time % 24) {
            case 1:
                if (character.inventory.find((elem) => elem.id === 3)) {
                    dispatch(addTime(1))
                } else if (items.rockItems.find((elem) => elem.id === 3)) {
                    dispatch(addPartPlot({id: 67, title: 'Улов: тряпка'}))
                    dispatch(addTime(1))
                    // Catch
                    navigate('/partplot')
                } else {
                    dispatch(addTime(1))
                }
                break;
            case 7:
                if (character.inventory.find((elem) => elem.id === 22)) {
                    dispatch(addTime(1))
                } else {
                    dispatch(addPartPlot({id: 68, title: 'Улов: лосось'}))
                    dispatch(addTime(1))
                    // Catch
                    navigate('/partplot')
                }
                break;
            case 13:
                if (character.inventory.find((elem) => elem.id === 24)) {
                    dispatch(addTime(1))
                } else {
                    dispatch(addPartPlot({id: 69, title: 'Улов: тунец'}))
                    dispatch(addTime(1))
                    // Catch
                    navigate('/partplot')
                }
                break;
            case 19:
                if (items.rockItems.find((elem) => elem.id === 41)) {
                    dispatch(addPartPlot({id: 70, title: 'Улов: сапог'}))
                    dispatch(addTime(1))
                    // Catch
                    navigate('/partplot')
                } else {
                    dispatch(addTime(1))
                }
                break;
            case 23:
                if (character.inventory.find((elem) => elem.id === 6)) {
                    dispatch(addTime(1))
                } else {
                    dispatch(addPartPlot({id: 119, title: 'Улов: ром'}))
                    dispatch(addTime(1))
                    // Catch
                    navigate('/partplot')
                }
                break;
            default:
                dispatch(addTime(1))
        }
    };

    const signalLight = () => {
        if (character.inventory.find((elem) => elem.id === 0) &&
        character.inventory.find((elem) => elem.id === 1) &&
        character.inventory.find((elem) => elem.id === 6)) {
            dispatch(removeInventory({id: 1, item: 'Охапка сломанных досок'}))
            dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
            dispatch(addPartPlot({id: 79, title: 'Сигнальный огонь'}))
            dispatch(addTime(1))
        } else {
            dispatch(addPartPlot({id: 80, title: 'Не хватает для сигнала'}))
        }
        // SignalLight
        navigate('/partplot')
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 13)
            ? <button onClick={fishing}>
                Рыбачить с помощью ловушки для птиц
            </button>
            : ''}
            {items.rockItems.find((elem) => elem.id === 51)
            ? ''
            : character.usedDark > 20 && character.tiredness <= 16 && character.drunkenness <= 6
                ? <button onClick={signalLight}>
                    Развести сигнальный костёр
                </button>
                : ''}
        </div>
    );
};

export default RockActions;