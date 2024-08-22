import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInventory, addPartPlot } from "../store/characterSlice";
import { removeSouthItems } from "../store/itemsSlice";

const SouthActions = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tryGetKnife = () => {
        dispatch(addPartPlot({id: 30, title: 'Попытка с ножом'}))
        // Knife
        navigate('/partplot')
    };

    const medallion = () => {
        dispatch(addPartPlot({id: 34, title: 'Медальон'}))
        // Medallion
        navigate('/partplot')
    };

    const tryGetKnife2 = () => {
        dispatch(addPartPlot({id: 114, title: 'Достать нож'}))
        // Knife
        navigate('/partplot')
    };

    const getRum = () => {
        dispatch(removeSouthItems({id: 6, item: 'Бутылка рома'}))
        dispatch(addInventory({id: 6, item: 'Бутылка рома'}))
    };

    const inscription = () => {
        dispatch(addPartPlot({id: 199, title: 'Надпись у входа в пещеру'}))
        // Inscription
        navigate('/partplot')
    };

    return (
        <div>
            {(character.usedDark > 20 || character.torch > 0) &&
            items.southItems.find((elem) => elem.id === 14) &&
            character.drunkenness <= 6 &&
            character.partPlot.find((part) => part.id === 32) &&
            character.partPlot.find((part) => part.id === 37)
            ? <button onClick={tryGetKnife}>
                Достать нож
            </button>
            : ''}
            {character.tiredness <= 16 &&
            (character.usedDark > 20 || character.torch > 0) &&
            items.southItems.find((elem) => elem.id === 33) &&
            character.drunkenness <= 6
            ? <button onClick={medallion}>
                Поднять блестяшку
            </button>
            : ''}
            {(character.partPlot.find((part) => part.id === 39) ||
            character.partPlot.find((part) => part.id === 41)) &&
            (character.partPlot.find((part) => part.id === 32) ||
            character.partPlot.find((part) => part.id === 33)) &&
            (character.usedDark > 20 || character.torch > 0) &&
            items.southItems.find((elem) => elem.id === 14) &&
            character.drunkenness <= 6
            ? <button onClick={tryGetKnife2}>
                Достать нож
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 6)
            ? ''
            : character.time >= 17 && items.southItems.find((elem) => elem.id === 6)
                ? <button onClick={getRum}>
                    Поднять бутылку рома
                </button>
                : ''}
            {character.crafts === 3
            ? <button onClick={inscription}>
                Осмотреть вход в пещеру
            </button>
            : ''}
        </div>
    );
};

export default SouthActions;