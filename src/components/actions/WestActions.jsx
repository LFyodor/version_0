import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { removeWestItems } from "../store/itemsSlice";
import { addInventory, addPartPlot, decreaseHp, removeInventory } from "../store/characterSlice";

const WestActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getRag = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(removeWestItems({id: 3, item: 'Рваная тряпка'}))
            dispatch(addInventory({id: 3, item: 'Рваная тряпка'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
            // FallInTheBay
            navigate('/partplot')
        }
    };

    const breakTheBox = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(addPartPlot({id: 93, title: 'Разбить ящик З'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
        }
        // FallInTheBay
        navigate('/partplot')
    };

    const getFirewood = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(removeWestItems({id: 1, item: 'Охапка сломанных досок'}))
            dispatch(addInventory({id: 1, item: 'Охапка сломанных досок'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
            // FallInTheBay
            navigate('/partplot')
        }
    };

    const getWine = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(removeWestItems({id: 7, item: 'Бутылка вина'}))
            dispatch(addInventory({id: 7, item: 'Бутылка вина'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
            // FallInTheBay
            navigate('/partplot')
        }
    };

    const getRum = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(removeWestItems({id: 6, item: 'Бутылка рома'}))
            dispatch(addInventory({id: 6, item: 'Бутылка рома'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
            // FallInTheBay
            navigate('/partplot')
        }
    };

    const getSailcloth = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(removeWestItems({id: 18, item: 'Кусок парусины'}))
            dispatch(addInventory({id: 18, item: 'Кусок парусины'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
            // FallInTheBay
            navigate('/partplot')
        }
    };

    const openTheBox = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(addPartPlot({id: 99, title: 'Открыть шкатулку'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
        }
        // FallInTheBay
        navigate('/partplot')
    };

    const getDice = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
        dispatch(removeWestItems({id: 36, item: 'Игральная кость'}))
            if (character.inventory.find((elem) => elem.id === 36)) {
                dispatch(removeInventory({id: 36, item: 'Игральная кость'}))
                dispatch(addInventory({id: 43, item: 'Две игральные кости'}))
            } else {
                if (character.inventory.find((elem) => elem.id === 43)) {
                    dispatch(removeInventory({id: 43, item: 'Две игральные кости'}))
                    dispatch(addInventory({id: 44, item: 'Три игральные кости'}))
                } else {
                    if (character.inventory.find((elem) => elem.id === 44)) {
                        dispatch(removeInventory({id: 44, item: 'Три игральные кости'}))
                        dispatch(addInventory({id: 45, item: 'Четыре игральные кости'}))
                    } else {
                        if (character.inventory.find((elem) => elem.id === 45)) {
                            dispatch(removeInventory({id: 45, item: 'Четыре игральные кости'}))
                            dispatch(addInventory({id: 46, item: 'Комплект игральных костей'}))
                        } else {
                            dispatch(addInventory({id: 36, item: 'Игральная кость'}))
                        }
                    }
                }
            }
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
            // FallInTheBay
            navigate('/partplot')
        }
    };

    const getHorseshoe = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(removeWestItems({id: 34, item: 'Подкова'}))
            dispatch(addInventory({id: 34, item: 'Подкова'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
            // FallInTheBay
            navigate('/partplot')
        }
    };

    const getObsidianKnife = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(removeWestItems({id: 55, item: 'Обсидиановый нож'}))
            dispatch(addInventory({id: 55, item: 'Обсидиановый нож'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
            // FallInTheBay
            navigate('/partplot')
        }
    };

    const getStick = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(removeWestItems({id: 2, item: 'Короткая крепкая палка'}))
            dispatch(addInventory({id: 2, item: 'Короткая крепкая палка'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
            // FallInTheBay
            navigate('/partplot')
        }
    };

    const getTimber = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(addPartPlot({id: 103, title: 'Поднять бревно'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
        }
        // Timber
        // FallInTheBay
        navigate('/partplot')
    };

    const getBulkyTimber = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(addPartPlot({id: 104, title: 'Поднять громоздкое бревно'}))
        } else {
            dispatch(addPartPlot({id: 102, title: 'Упасть в заливе'}))
            dispatch(decreaseHp(1))
        }
        // Timber
        // FallInTheBay
        navigate('/partplot')
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 3)
            ? ''
            : items.westItems.find((elem) => elem.id === 3)
                ? <button onClick={getRag}>
                    Поднять тряпку
                </button>
                : ''}
            {items.westItems.find((elem) => elem.id === 40)
            ? <button onClick={breakTheBox}>
                Разбить ящик
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 1)
            ? ''
            : items.westItems.find((elem) => elem.id === 1)
                ? <button onClick={getFirewood}>
                    Собрать доски от ящика
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 7)
            ? ''
            : items.westItems.find((elem) => elem.id === 7)
                ? <button onClick={getWine}>
                    Поднять бутылку вина
                </button>
                : ''}
            {character.inventory.find((elem) => elem.id === 6)
            ? ''
            : items.westItems.find((elem) => elem.id === 6)
                ? <button onClick={getRum}>
                    Поднять бутылку рома
                </button>
                : ''}
            {items.westItems.find((elem) => elem.id === 18)
            ? <button onClick={getSailcloth}>
                Поднять парусину
            </button>
            : ''}
            {(items.westItems.find((elem) => elem.id === 53) &&
            character.torch > 0 &&
            Math.floor(character.time/24) >= 3)
            ? <button onClick={openTheBox}>
                Открыть шкатулку
            </button>
            : ''}
            {items.westItems.find((elem) => elem.id === 36)
            ? <button onClick={getDice}>
                Взять игральную кость
            </button>
            : ''}
            {items.westItems.find((elem) => elem.id === 34)
            ? <button onClick={getHorseshoe}>
                Взять подкову
            </button>
            : ''}
            {items.westItems.find((elem) => elem.id === 55)
            ? <button onAbort={getObsidianKnife}>
                Взять обсидиановый нож
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 2)
            ? ''
            : items.westItems.find((elem) => elem.id === 2)
                ? <button onClick={getStick}>
                    Поднять палку
                </button>
                : ''}
            {items.westItems.find((elem) => elem.id === 37)
            ? <button onClick={getTimber}>
                Поднять бревно
            </button>
            : ''}
            {items.westItems.find((elem) => elem.id === 38)
            ? <button onClick={getBulkyTimber}>
                Поднять громоздкое бревно
            </button>
            : ''}
        </div>
    );
};

export default WestActions;