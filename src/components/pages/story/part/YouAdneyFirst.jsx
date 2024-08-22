import { useDispatch, useSelector } from "react-redux";
import { addPartPlot, addTiredness, removeInventory, removePartPlot, removeTorch } from "../../../store/characterSlice";
import { useNavigate } from "react-router-dom";
import AgainDied from "../../../AgainDied";

const YouAdneyFirst = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const stick1 = () => {
        if (character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) {
            dispatch(removeInventory({id: 2, item: 'Короткая крепкая палка'}))
            dispatch(addPartPlot({id: 186, title: 'Твоя вторая попытка'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 184, title: 'Ты набросился первым'}))
    };

    const torch1 = () => {
        if (character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) {
            dispatch(removeInventory({id: 5, item: 'Горящий факел'}))
            dispatch(removeTorch())
            dispatch(addPartPlot({id: 186, title: 'Твоя вторая попытка'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 184, title: 'Ты набросился первым'}))
    };

    const knife1 = () => {
        if (character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) {
            dispatch(removeInventory({id: 14, item: 'Нож'}))
            dispatch(addPartPlot({id: 186, title: 'Твоя вторая попытка'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 184, title: 'Ты набросился первым'}))
    };

    const axe1 = () => {
        if (character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) {
            dispatch(removeInventory({id: 15, item: 'Топор'}))
            dispatch(addPartPlot({id: 186, title: 'Твоя вторая попытка'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(4))
        dispatch(removePartPlot({id: 184, title: 'Ты набросился первым'}))
    };

    const obsidianKnife1 = () => {
        if (character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) {
            dispatch(removeInventory({id: 55, item: 'Обсидиановый нож'}))
            dispatch(addPartPlot({id: 186, title: 'Твоя вторая попытка'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 184, title: 'Ты набросился первым'}))
    };

    const fists1 = () => {
        if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp > 6 && character.tiredness <= 24) {
            dispatch(addPartPlot({id: 186, title: 'Твоя вторая попытка'}))
            dispatch(addPartPlot({id: 188, title: 'Вторая попытка на кулаках'}))
        } else {
            dispatch(addPartPlot({id: 189, title: 'Ты оказался слаб'}))
        }
        dispatch(addTiredness(3))
        dispatch(removePartPlot({id: 184, title: 'Ты набросился первым'}))
    };

    const stick2 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179)) {
            dispatch(removeInventory({id: 2, item: 'Короткая крепкая палка'}))
            dispatch(addPartPlot({id: 190, title: 'Твоя третья попытка'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 186, title: 'Твоя вторая попытка'}))
    };

    const torch2 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179)) {
            dispatch(removeInventory({id: 5, item: 'Горящий факел'}))
            dispatch(removeTorch())
            dispatch(addPartPlot({id: 190, title: 'Твоя третья попытка'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 186, title: 'Твоя вторая попытка'}))
    };

    const knife2 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179)) {
            dispatch(removeInventory({id: 14, item: 'Нож'}))
            dispatch(addPartPlot({id: 190, title: 'Твоя третья попытка'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 186, title: 'Твоя вторая попытка'}))
    };

    const axe2 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179)) {
            dispatch(removeInventory({id: 15, item: 'Топор'}))
            dispatch(addPartPlot({id: 190, title: 'Твоя третья попытка'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(4))
        dispatch(removePartPlot({id: 186, title: 'Твоя вторая попытка'}))
    };

    const obsidianKnife2 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179)) {
            dispatch(removeInventory({id: 55, item: 'Обсидиановый нож'}))
            dispatch(addPartPlot({id: 190, title: 'Твоя третья попытка'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 186, title: 'Твоя вторая попытка'}))
    };

    const fists2 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179) &&
        character.hp > 9 && character.tiredness <= 16) {
            dispatch(addPartPlot({id: 190, title: 'Твоя третья попытка'}))
            dispatch(addPartPlot({id: 191, title: 'Третья попытка на кулаках'}))
        } else {
            dispatch(addPartPlot({id: 189, title: 'Ты оказался слаб'}))
        }
        dispatch(addTiredness(3))
        dispatch(removePartPlot({id: 186, title: 'Твоя вторая попытка'}))
    };

    const youWon = () => {
        dispatch(removePartPlot({id: 190, title: 'Твоя третья попытка'}))
        dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        dispatch(addTiredness(4))
    };

    const fists3 = () => {
        if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp > 6 && character.tiredness <= 24) {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        } else {
            dispatch(addPartPlot({id: 189, title: 'Ты оказался слаб'}))
        }
        dispatch(addTiredness(3))
        dispatch(removePartPlot({id: 190, title: 'Твоя третья попытка'}))
    };

    const continueWay = () => {
        dispatch(removePartPlot({id: 187, title: 'Адней оказался слаб'}))
        dispatch(removePartPlot({id: 188, title: 'Вторая попытка на кулаках'}))
        dispatch(removePartPlot({id: 191, title: 'Третья попытка на кулаках'}))
        dispatch(addPartPlot({id: 169, title: 'Потеряться вновь'}))
        navigate('/sea')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 184)
            ? <div>
                <p className="description">
                    Ты посчитал его болтовню опасной и набросился первым
                    {character.inventory.find((elem) => elem.id === 2) ||
                    character.inventory.find((elem) => elem.id === 5) ||
                    character.inventory.find((elem) => elem.id === 14) ||
                    character.inventory.find((elem) => elem.id === 15) ||
                    character.inventory.find((elem) => elem.id === 55)
                    ? `, держа в руке...`: `.`}
                </p>
                {character.inventory.find((elem) => elem.id === 2)
                ? <button className="answerButton" onClick={stick1}>
                    Крепкую палку
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 5)
                ? <button className="answerButton" onClick={torch1}>
                    Факел
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 14)
                ? <button className="answerButton" onClick={knife1}>
                    Нож
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15)
                ? <button className="answerButton" onClick={axe1}>
                    Топор
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 55)
                ? <button className="answerButton" onClick={obsidianKnife1}>
                    Обсидиановый нож
                </button>
                : ''}
                <button className="answerButton" onClick={fists1}>
                    С голыми кулаками
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 186)
            ? <div>
                <p className="description">
                    {character.partPlot.find((part) => part.id === 188)
                    ? `Адней окреп и смог увернуться от ударов, едва не сбросив тебя в воду. `
                    : `Адней окреп и смог выбить оружие из твоей руки, оно падает в воду и тонет в тёмной бездне. `}
                    Назад дороги нет, придётся его прикончить или он прикончит тебя.
                </p>
                {character.inventory.find((elem) => elem.id === 2)
                ? <button className="answerButton" onClick={stick2}>
                    Ударить палкой
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 5)
                ? <button className="answerButton" onClick={torch2}>
                    Ударить факелом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 14)
                ? <button className="answerButton" onClick={knife2}>
                    Ударить ножом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15)
                ? <button className="answerButton" onClick={axe2}>
                    Ударить топором
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 55)
                ? <button className="answerButton" onClick={obsidianKnife2}>
                    Ударить обсидиановым ножом
                </button>
                : ''}
                <button className="answerButton" onClick={fists2}>
                    Справиться голыми руками
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 187)
            ? <div>
                <p className="description">
                    Пропустив несколько ударов, безумие в его глазах сменилось на страх. Адней оказался слаб. Когда ты решил 
                    остановиться, взгляд твоего друга остекленел, было уже поздно. Его кровь 
                    залила плот, тело медленно сползло в воду и скрылось в густой тьме. Более в пути тебе ничего не мешает.
                </p>
                <button className="answerButton" onClick={continueWay}>
                    "У меня не было выбора"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 189)
            ? <div>
                <p className="description">
                    Вместо того, чтобы наносить удары, ты пропускаешь их один за другим. Борьба кажется вечной, пока 
                    звёзды в глазах не гаснут вместе с твоим сознанием. Последний всполох разума поднимается наружу, когда 
                    ты ощущаешь зубы, впившиеся в горло. Пытаешься вдохнуть и захлёбываешься собственной кровью.
                </p>
                <p className="dialog">
                    "Необходимо... вдохнуть... глубже..."
                </p>
                <AgainDied />
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 190)
            ? <div>
                <p className="description">
                    Ты удачно наносишь два удара, но Адней, хватаясь всеми силами за свою жизнь, продолжает борьбу и
                    {character.partPlot.find((part) => part.id === 191)
                    ? `, не обращая внимания на сопротивление, даёт отпор. `: ` выбивает оружие, что соскользнув с плота, тонет в море. `}
                    Следующий удар станет решающим, выживет лишь один, ты или твой друг. Добить его...
                </p>
                {character.inventory.find((elem) => elem.id === 2)
                ? <button className="answerButton" onClick={youWon}>
                    Палкой
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 5)
                ? <button className="answerButton" onClick={youWon}>
                    Факелом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 14)
                ? <button className="answerButton" onClick={youWon}>
                    Ножом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15)
                ? <button className="answerButton" onClick={youWon}>
                    Топором
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 55)
                ? <button className="answerButton" onClick={youWon}>
                    Обсидиановым ножом
                </button>
                : ''}
                <button className="answerButton" onClick={fists3}>
                    Голыми руками
                </button>
            </div>
            : ''}
        </div>
    );
};

export default YouAdneyFirst;