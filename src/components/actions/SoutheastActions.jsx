import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBonfire, addInventory, addPartPlot, addTime, addTiredness, removeInventory, removePartPlot } from "../store/characterSlice";
import { addSoutheastItems, removeSoutheastItems } from "../store/itemsSlice";

const SoutheastActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const lightFire = () => {
        if (character.inventory.find((elem) => elem.id === 0) &&
        character.inventory.find((elem) => elem.id === 1) &&
        character.inventory.find((elem) => elem.id === 6)) {
            dispatch(removeInventory({id: 1, item: 'Охапка сломанных досок'}))
            dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
            dispatch(addPartPlot({id: 17, title: 'Развёл костёр'}))
            dispatch(addTime(1))
            dispatch(addBonfire())
        } else {
            dispatch(addPartPlot({id: 20, title: 'Не хватает для костра'}))
            // AlmostBonfire
            navigate('/partplot')
        }
    };

    const getStick = () => {
        dispatch(removeSoutheastItems({id: 2, item: 'Короткая крепкая палка'}))
        dispatch(addInventory({id: 2, item: 'Короткая крепкая палка'}))
    };

    const breakTheBox = () => {
        dispatch(addPartPlot({id: 21, title: 'Разбить ящик ЮВ'}))
        // BreakTheBoxSE
        navigate('/partplot')
    };

    const getFirewood = () => {
        dispatch(removeSoutheastItems({id: 1, item: 'Охапка сломанных досок'}))
        dispatch(addInventory({id: 1, item: 'Охапка сломанных досок'}))
    };

    const getRum = () => {
        dispatch(removeSoutheastItems({id: 6, item: 'Бутылка рома'}))
        dispatch(addInventory({id: 6, item: 'Бутылка рома'}))
    };

    const getWine = () => {
        dispatch(removeSoutheastItems({id: 7, item: 'Бутылка вина'}))
        dispatch(addInventory({id: 7, item: 'Бутылка вина'}))
    };

    const getCrackers = () => {
        dispatch(removeSoutheastItems({id: 29, item: 'Сухари'}))
        dispatch(addInventory({id: 29, item: 'Сухари'}))
    };

    const buildBadRaft = () => {
        if (character.hp > 9 && character.tiredness <= 16) {
            dispatch(removeSoutheastItems({id: 37, item: 'Бревно'}))
            dispatch(removeInventory({id: 16, item: 'Верёвка'}))
            dispatch(addSoutheastItems({id: 17, item: 'Плот на скорую руку'}))
            dispatch(addTime(6))
            dispatch(addTiredness(3))
            dispatch(addPartPlot({id: 18, title: 'Плохой плот'}))
        } else {
            dispatch(addPartPlot({id: 28, title: 'Не хватит сил на плот'}))
        }
        // Raft
        navigate('/partplot')
    };

    const talkToHammond = () => {
        dispatch(removePartPlot({id: 162, title: 'Хаммонд отдаёт парус'}))
        dispatch(addPartPlot({id: 163, title: 'Второй разговор с Хаммондом'}))
        // TalkToHammond
        navigate('/partplot')
    };

    const buildGoodRaft = () => {
        if (character.hp > 9 && character.tiredness <= 16) {
            dispatch(removeSoutheastItems({id: 37, item: 'Бревно'}))
            dispatch(removeSoutheastItems({id: 38, item: 'Тяжёлое бревно'}))
            dispatch(removeInventory({id: 16, item: 'Верёвка'}))
            dispatch(removeSoutheastItems({id: 17, item: 'Плот на скорую руку'}))
            dispatch(removeInventory({id: 18, item: 'Кусок парусины'}))
            dispatch(removeSoutheastItems({id: 47, item: 'Мачта'}))
            dispatch(addSoutheastItems({id: 19, item: 'Отличный плот'}))
            dispatch(addTime(13))
            dispatch(addTiredness(3))
            dispatch(addPartPlot({id: 19, title: 'Хороший плот'}))
        } else {
            dispatch(addPartPlot({id: 28, title: 'Не хватит сил на плот'}))
        }
        // Raft
        navigate('/partplot')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 17)
            ? ''
            : <button onClick={lightFire}>
                Развести костёр
            </button>}
            {character.inventory.find((elem) => elem.id === 2)
            ? ''
            : items.southeastItems.find((elem) => elem.id === 2)
                ? <button onClick={getStick}>
                    Подобрать палку
                </button>
                : ''}
            {items.southeastItems.find((elem) => elem.id === 40)
            ? <button onClick={breakTheBox}>
                Разбить ящик
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 1)
            ? ''
            : items.southeastItems.find((elem) => elem.id === 1)
                ? <button onClick={getFirewood}>
                    Собрать доски от ящика
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 6)
            ? ''
            : items.southeastItems.find((elem) => elem.id === 6)
                ? <button onClick={getRum}>
                    Поднять бутылку рома
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 7)
            ? ''
            : items.southeastItems.find((elem) => elem.id === 7)
                ? <button onClick={getWine}>
                    Поднять бутылку вина
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 29)
            ? ''
            : items.southeastItems.find((elem) => elem.id === 29)
                ? <button onClick={getCrackers}>
                    Поднять сухари
                </button>
                : ''}
            {items.southeastItems.find((elem) => elem.id === 37) &&
            character.inventory.find((elem) => elem.id === 16) &&
            character.inventory.find((elem) => elem.id === 15) &&
            character.crafts === 3
            ? <button onClick={buildBadRaft}>
                Построить плот
            </button>
            : ''}
            {character.partPlot.find((part) => part.id === 162)
            ? <button onClick={talkToHammond}>
                Поговорить с Хаммондом
            </button>
            : ''}
            {((items.southeastItems.find((elem) => elem.id === 37) &&
            character.inventory.find((elem) => elem.id === 16)) ||
            items.southeastItems.find((elem) => elem.id === 17)) &&
            character.inventory.find((elem) => elem.id === 15) &&
            items.southeastItems.find((elem) => elem.id === 38) &&
            character.inventory.find((elem) => elem.id === 18) &&
            items.southeastItems.find((elem) => elem.id === 47) &&
            character.partPlot.find((part) => part.id === 105) &&
            character.crafts === 3
            ? <button onClick={buildGoodRaft}>
                Построить отличный плот вместе с Хаммондом
            </button>
            : ''}
        </div>
    );
};

export default SoutheastActions;