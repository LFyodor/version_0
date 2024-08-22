import { useDispatch, useSelector } from "react-redux";
import { addBonfire, addInventory, addTime, removeInventory } from "../store/characterSlice";

const BonfireActions = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();

    const fryTrout = () => {
        dispatch(removeInventory({id: 20, item: 'Свежая форель'}))
        dispatch(addInventory({id: 21, item: 'Жареная форель'}))
        dispatch(addTime(1))
    };

    const frySalmon = () => {
        dispatch(removeInventory({id: 22, item: 'Свежий лосось'}))
        dispatch(addInventory({id: 23, item: 'Жареный лосось'}))
        dispatch(addTime(1))
    };

    const fryTuna = () => {
        dispatch(removeInventory({id: 24, item: 'Свежий тунец'}))
        dispatch(addInventory({id: 25, item: 'Жареный тунец'}))
        dispatch(addTime(1))
    };

    const frySnake = () => {
        dispatch(removeInventory({id: 27, item: 'Сырая змея'}))
        dispatch(addInventory({id: 28, item: 'Жареная змея'}))
        dispatch(addTime(1))
    };

    const frySeagull = () => {
        dispatch(removeInventory({id: 49, item: 'Дохлая чайка'}))
        dispatch(addInventory({id: 50, item: 'Жареная чайка'}))
        dispatch(addTime(1))
    };

    const throwFirewood = () => {
        dispatch(removeInventory({id: 1, item: 'Охапка сломанных досок'}))
        dispatch(addBonfire())
    };

    const lightFire = () => {
        dispatch(removeInventory({id: 1, item: 'Охапка сломанных досок'}))
        dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
        dispatch(addTime(1))
        dispatch(addBonfire())
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 21)
            ? ''
            : character.inventory.find((elem) => elem.id === 20) && character.bonfire > 0
                ? <button onClick={fryTrout}>
                    Пожарить форель
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 23)
            ? ''
            : character.inventory.find((elem) => elem.id === 22) && character.bonfire > 0
                ? <button onClick={frySalmon}>
                    Пожарить лосося
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 25)
            ? ''
            : character.inventory.find((elem) => elem.id === 24) && character.bonfire > 0
                ? <button onClick={fryTuna}>
                    Пожарить тунца
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 28)
            ? ''
            : character.inventory.find((elem) => elem.id === 27) && character.bonfire > 0
                ? <button onClick={frySnake}>
                    Пожарить змею
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 49) && character.bonfire > 0
            ? <button onClick={frySeagull}>
                Пожарить чайку
            </button>
            : ''}
            {character.bonfire <= 20 && character.bonfire > 0 && character.inventory.find((elem) => elem.id === 1)
            ? <button onClick={throwFirewood}>
                Подкинуть дров
            </button>
            : ''}
            {character.bonfire === 0 &&
            character.inventory.find((elem) => elem.id === 0) &&
            character.inventory.find((elem) => elem.id === 1) &&
            character.inventory.find((elem) => elem.id === 6)
            ? <button onClick={lightFire}>
                Развести новый костёр
            </button>
            : ''}
        </div>
    );
};

export default BonfireActions;