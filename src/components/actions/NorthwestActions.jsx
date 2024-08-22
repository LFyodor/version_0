import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, addPartPlot } from "../store/characterSlice";
import { removeNorthwestItems } from "../store/itemsSlice";

const NorthwestActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const breakTheBox = () => {
        dispatch(addPartPlot({id: 87, title: 'Разбить ящик СЗ'}))
        // BreakTheBoxNW
        navigate('/partplot')
    };

    const getFirewood = () => {
        dispatch(removeNorthwestItems({id: 1, item: 'Охапка сломанных досок'}))
        dispatch(addInventory({id: 1, item: 'Охапка сломанных досок'}))
    };

    const getCrackers = () => {
        dispatch(removeNorthwestItems({id: 29, item: 'Сухари'}))
        dispatch(addInventory({id: 29, item: 'Сухари'}))
    };

    const getRope = () => {
        dispatch(removeNorthwestItems({id: 16, item: 'Верёвка'}))
        dispatch(addInventory({id: 16, item: 'Верёвка'}))
    };

    const getRum = () => {
        dispatch(removeNorthwestItems({id: 6, item: 'Бутылка рома'}))
        dispatch(addInventory({id: 6, item: 'Бутылка рома'}))
    };

    const getWine = () => {
        dispatch(removeNorthwestItems({id: 7, item: 'Бутылка вина'}))
        dispatch(addInventory({id: 7, item: 'Бутылка вина'}))
    };

    const getStick = () => {
        dispatch(removeNorthwestItems({id: 2, item: 'Короткая крепкая палка'}))
        dispatch(addInventory({id: 2, item: 'Короткая крепкая палка'}))
    };

    return (
        <div>
            {items.northwestItems.find((elem) => elem.id === 40) &&
            (character.usedDark > 10 || character.torch > 0)
            ? <button onClick={breakTheBox}>
                Разбить ящик
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 1)
            ? ''
            : items.northwestItems.find((elem) => elem.id === 1)
                ? <button onClick={getFirewood}>
                    Собрать доски от ящика
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 29)
            ? ''
            : items.northwestItems.find((elem) => elem.id === 29)
                ? <button onClick={getCrackers}>
                    Поднять сухари
                </button>
                : ''}
            {items.northwestItems.find((elem) => elem.id === 16)
            ? <button onClick={getRope}>
                Поднять моток верёвки
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 6)
            ? ''
            : items.northwestItems.find((elem) => elem.id === 6)
                ? <button onClick={getRum}>
                    Поднять бутылку рома
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 7)
            ? ''
            : items.northwestItems.find((elem) => elem.id === 7)
                ? <button onClick={getWine}>
                    Поднять бутылку вина
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 2)
            ? ''
            : items.northwestItems.find((elem) => elem.id === 2) &&
            Math.floor(character.time/24) >= 2
                ? <button onClick={getStick}>
                    Поднять палку
                </button>
                : ''}
        </div>
    );
};

export default NorthwestActions;