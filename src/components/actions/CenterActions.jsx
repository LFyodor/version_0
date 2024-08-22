import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { removeCenterItems } from "../store/itemsSlice";
import { addInventory, addHp, addPartPlot, addTime, decreaseTiredness, removeInventory } from "../store/characterSlice";

const CenterActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const drink = () => {
        dispatch(addHp(2))
        dispatch(decreaseTiredness(5))
    };

    const getWater = () => {
        if (character.inventory.find((elem) => elem.id === 8)) {
            dispatch(removeInventory({id: 8, item: 'Пустая бутыль'}))
            dispatch(addInventory({id: 10, item: 'Бутыль с водой'}))
        } else {
            dispatch(removeInventory({id: 9, item: 'Пустая бутыль'}))
            dispatch(addInventory({id: 11, item: 'Бутыль с водой'}))
        }
    };

    const getRag = () => {
        dispatch(removeCenterItems({id: 3, item: 'Рваная тряпка'}))
        dispatch(addInventory({id: 3, item: 'Рваная тряпка'}))
    };

    const fishing = () => {
        switch (character.time % 24) {
        case 4:
            if (character.inventory.find((elem) => elem.id === 20)) {
                dispatch(addTime(1))
            } else {
                dispatch(addPartPlot({id: 120, title: 'Улов: форель'}))
                dispatch(addTime(1))
                // Catch
                navigate('/partplot')
            }
            break;
        case 16:
            if (character.inventory.find((elem) => elem.id === 20)) {
                dispatch(addTime(1))
            } else {
                dispatch(addPartPlot({id: 120, title: 'Улов: форель'}))
                dispatch(addTime(1))
                // Catch
                navigate('/partplot')
            }
            break;
        default:
            dispatch(addTime(1))
        }
    };

    const catchFeather = () => {
        if (items.centerItems.find((elem) => elem.id === 54)) {
            dispatch(addPartPlot({id: 122, title: 'Выловить ключ'}))
        } else if (items.centerItems.find((elem) => elem.id === 36)) {
            dispatch(addPartPlot({id: 123, title: 'Выловить кубик'}))
        } else {
            dispatch(addPartPlot({id: 124, title: 'Выловить перо'}))
        }
        // CatchFeather
        navigate('/partplot')
    };

    const getSnake = () => {
        dispatch(addInventory({id: 27, item: 'Сырая змея'}))
    };

    return (
        <div>
            {(character.hp < 12 || character.tiredness > 0) &&
            items.centerItems.find((elem) => elem.id === 26)
            ? <button onClick={drink}>
                Попить из озера
            </button>
            : ''}
            {(character.inventory.find((elem) => elem.id === 8) ||
            character.inventory.find((elem) => elem.id === 9)) &&
            items.centerItems.find((elem) => elem.id === 26)
            ? <button onClick={getWater}>
                Набрать воды в пустую бутыль
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 3)
            ? ''
            : items.centerItems.find((elem) => elem.id === 3) &&
            (character.torch > 0 || character.usedDark > 10)
                ? <button onClick={getRag}>
                    Поднять тряпку
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 13) 
            ? <button onClick={items.centerItems.find((elem) => elem.id === 35 && character.usedDark > 30)
            ? catchFeather : fishing}>
                {items.centerItems.find((elem) => elem.id === 35) && character.usedDark > 30
                ? `Выловить тускло-светящийся предмет` : `Рыбачить с помощью ловушки для птиц`}
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 27)
            ? ''
            : items.centerItems.find((elem) => elem.id === 27)
                ? <button onClick={getSnake}>
                    Отрезать кусок от змеи
                </button>
                : ''}
        </div>
    );
};

export default CenterActions;