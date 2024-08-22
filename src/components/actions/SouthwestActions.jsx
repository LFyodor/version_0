import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, addPartPlot } from "../store/characterSlice";
import { removeSouthwestItems } from "../store/itemsSlice";

const SouthwestActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const examineTheBody = () => {
        dispatch(addPartPlot({id: 43, title: 'Осмотр тела'}))
        // ExamineTheBody
        navigate('/partplot')
    };

    const breakTheBox = () => {
        dispatch(addPartPlot({id: 44, title: 'Разбить ящик ЮЗ'}))
        // BreakTheBoxSW
        navigate('/partplot')
    };

    const openTheBarrel = () => {
        dispatch(addPartPlot({id: 50, title: 'Вскрыть бочку'}))
        // OpenTheBarrel
        navigate('/partplot')
    };

    const getCornedBeef = () => {
        dispatch(addInventory({id: 30, item: 'Солонина'}))
    };

    const getFirewood = () => {
        dispatch(removeSouthwestItems({id: 1, item: 'Охапка сломанных досок'}))
        dispatch(addInventory({id: 1, item: 'Охапка сломанных досок'}))
    };

    const getRum = () => {
        dispatch(removeSouthwestItems({id: 6, item: 'Бутылка рома'}))
        dispatch(addInventory({id: 6, item: 'Бутылка рома'}))
    };

    const getWine = () => {
        dispatch(removeSouthwestItems({id: 7, item: 'Бутылка вина'}))
        dispatch(addInventory({id: 7, item: 'Бутылка вина'}))
    };

    const getCrackers = () => {
        dispatch(removeSouthwestItems({id: 29, item: 'Сухари'}))
        dispatch(addInventory({id: 29, item: 'Сухари'}))
    };

    const getStick = () => {
        dispatch(removeSouthwestItems({id: 2, item: 'Короткая крепкая палка'}))
        dispatch(addInventory({id: 2, item: 'Короткая крепкая палка'}))
    };

    const getLostBoot = () => {
        dispatch(removeSouthwestItems({id: 41, item: 'Левый сапог'}))
        dispatch(addInventory({id: 41, item: 'Левый сапог'}))
    };

    return (
        <div>
            {items.southwestItems.find((elem) => elem.id === 39)
            ? <button onClick={examineTheBody}>
                Осмотреть тело
            </button>
            : ''}
            {items.southwestItems.find((elem) => elem.id === 40)
            ? <button onClick={breakTheBox}>
                Разбить ящик
            </button>
            : ''}
            {items.southwestItems.find((elem) => elem.id === 48)
            ? <button onClick={openTheBarrel}>
                Вскрыть бочку
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 30)
            ? ''
            : items.southwestItems.find((elem) => elem.id === 30)
                ? <button onClick={getCornedBeef}>
                    Взять солонину из бочки
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 1)
            ? ''
            : items.southwestItems.find((elem) => elem.id === 1)
                ? <button onClick={getFirewood}>
                    Собрать доски от ящика
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 6)
            ? ''
            : items.southwestItems.find((elem) => elem.id === 6)
                ? <button onClick={getRum}>
                    Поднять бутылку рома
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 7)
            ? ''
            : items.southwestItems.find((elem) => elem.id === 7)
                ? <button onClick={getWine}>
                    Поднять бутылку вина
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 29)
            ? ''
            : items.southwestItems.find((elem) => elem.id === 29)
                ? <button onClick={getCrackers}>
                    Поднять сухари
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 2)
            ? ''
            : items.southwestItems.find((elem) => elem.id === 2)
                ? <button onClick={getStick}>
                    Взять палку
                </button>
                : ''}
            {items.southwestItems.find((elem) => elem.id === 41) &&
            (character.usedDark > 20 || character.torch > 0)
            ? <button onClick={getLostBoot}>
                "А вот и потерянный сапог!"
            </button>
            : ''}
        </div>
    );
};

export default SouthwestActions;