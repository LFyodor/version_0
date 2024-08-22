import { useDispatch, useSelector } from "react-redux";
import { addTiredness, addHp, addPartPlot, decreaseTiredness, removeInventory, decreaseDrunkenness, removePartPlot } from "../store/characterSlice";
import { useNavigate } from "react-router-dom";

const EatFish = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const eatTrout = () => {
        dispatch(removeInventory({id: 20, item: 'Свежая форель'}))
        dispatch(addHp(1))
    };

    const eatFriedTrout = () => {
        dispatch(removeInventory({id: 21, item: 'Жареная форель'}))
        dispatch(addHp(2))
        dispatch(decreaseTiredness(2))
        dispatch(decreaseDrunkenness(1))
    };

    const eatSalmon = () => {
        dispatch(removeInventory({id: 22, item: 'Свежий лосось'}))
        dispatch(addHp(1))
        dispatch(addTiredness(4))
        dispatch(addPartPlot({id: 11, title: 'Отравился лососем'}))
        // GotPoisonedFish
        navigate('/partplot')
    };

    const eatFriedSalmon = () => {
        dispatch(removeInventory({id: 23, item: 'Жареный лосось'}))
        dispatch(addHp(2))
        dispatch(decreaseTiredness(3))
        dispatch(decreaseDrunkenness(1))
    };

    const eatTuna = () => {
        dispatch(removeInventory({id: 24, item: 'Свежий тунец'}))
        dispatch(addHp(1))
        dispatch(addTiredness(2))
        dispatch(addPartPlot({id: 12, title: 'Отравился тунцом'}))
        // GotPoisonedFish
        navigate('/partplot')
    };

    const eatFriedTuna = () => {
        if (character.time % 24 >= 1 && character.time <= 6 && character.partPlot.find((part) => part.id === 29)) {
            dispatch(removePartPlot({id: 29, title: 'Кубик в рыбе не найден'}))
            dispatch(addPartPlot({id: 4, title: 'Кубик в рыбе'}))
            // CubeInFish
            navigate('/partplot')
        }
        dispatch(removeInventory({id: 25, item: 'Жареный тунец'}))
        dispatch(addHp(2))
        dispatch(decreaseTiredness(2))
        dispatch(decreaseDrunkenness(1))
    };

    return (
        <div>
            {character.inventory.find((elem) => elem.id === 20) &&
            character.hp <= 3 &&
            character.hp > 0
            ? <button onClick={eatTrout}>
                Съесть сырую форель
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 21) &&
            character.hp < 12
            ? <button onClick={eatFriedTrout}>
                Съесть жареную форель
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 22) &&
            character.hp <= 3 &&
            character.hp > 0
            ? <button onClick={eatSalmon}>
                Съесть сырого лосося
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 23) &&
            character.hp < 12
            ? <button onClick={eatFriedSalmon}>
                Съесть жареного лосося
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 24) &&
            character.hp <= 3 &&
            character.hp > 0
            ? <button onClick={eatTuna}>
                Съесть сырого тунца
            </button>
            : ''}
            {character.inventory.find((elem) => elem.id === 25) &&
            character.hp < 12
            ? <button onClick={eatFriedTuna}>
                Съесть жареного тунца
            </button>
            : ''}
        </div>
    );
};

export default EatFish;