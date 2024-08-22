import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPartPlot, addTiredness, removeInventory, removePartPlot, removeTorch } from "../../../store/characterSlice";
import AgainDied from "../../../AgainDied";

const FirstAdney = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const stick11 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179) &&
        character.hp <= 6 && character.tiredness > 24 && character.luck <= 2) {
            dispatch(removeInventory({id: 2, item: 'Короткая крепкая палка'}))
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
        } else if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 3 && character.tiredness > 32 && character.luck <= 1) {
            dispatch(removeInventory({id: 2, item: 'Короткая крепкая палка'}))
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 185, title: 'Адней набросился первым'}))
    };

    const torch11 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179) &&
        character.hp <= 6 && character.tiredness > 24 && character.luck <= 2) {
            dispatch(removeInventory({id: 5, item: 'Горящий факел'}))
            dispatch(removeTorch())
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
        } else if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 3 && character.tiredness > 32 && character.luck <= 1) {
            dispatch(removeInventory({id: 5, item: 'Горящий факел'}))
            dispatch(removeTorch())
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 185, title: 'Адней набросился первым'}))
    };

    const knife11 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179) &&
        character.hp <= 6 && character.tiredness > 24 && character.luck <= 2) {
            dispatch(removeInventory({id: 14, item: 'Нож'}))
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
        } else if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 3 && character.tiredness > 32 && character.luck <= 1) {
            dispatch(removeInventory({id: 14, item: 'Нож'}))
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 185, title: 'Адней набросился первым'}))
    };

    const axe11 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179) &&
        character.hp <= 9 && character.tiredness > 16 && character.luck <= 3) {
            dispatch(removeInventory({id: 15, item: 'Топор'}))
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
        } else if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 6 && character.tiredness > 32 && character.luck <= 2) {
            dispatch(removeInventory({id: 15, item: 'Топор'}))
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(4))
        dispatch(removePartPlot({id: 185, title: 'Адней набросился первым'}))
    };

    const obsidianKnife11 = () => {
        if (character.partPlot.find((part) => part.id === 177) &&
        character.partPlot.find((part) => part.id === 179) &&
        character.hp <= 6 && character.tiredness > 24 && character.luck <= 2) {
            dispatch(removeInventory({id: 55, item: 'Обсидиановый нож'}))
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
        } else if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 3 && character.tiredness > 32 && character.luck <= 1) {
            dispatch(removeInventory({id: 55, item: 'Обсидиановый нож'}))
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 185, title: 'Адней набросился первым'}))
    };

    const fists11 = () => {
        if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 6 && character.tiredness > 24 && character.luck <= 2) {
            dispatch(addPartPlot({id: 192, title: 'Вторая попытка Аднея'}))
            dispatch(addPartPlot({id: 188, title: 'Вторая попытка на кулаках'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(3))
        dispatch(removePartPlot({id: 185, title: 'Адней набросился первым'}))
    };

    const stick12 = () => {
        if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 6 && character.tiredness > 24 && character.luck <= 2) {
            dispatch(removeInventory({id: 2, item: 'Короткая крепкая палка'}))
            dispatch(addPartPlot({id: 193, title: 'Третья попытка Аднея'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 192, title: 'Вторая попытка Аднея'}))
    };

    const torch12 = () => {
        if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 6 && character.tiredness > 24 && character.luck <= 2) {
            dispatch(removeInventory({id: 5, item: 'Горящий факел'}))
            dispatch(removeTorch())
            dispatch(addPartPlot({id: 193, title: 'Третья попытка Аднея'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 192, title: 'Вторая попытка Аднея'}))
    };

    const knife12 = () => {
        if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 6 && character.tiredness > 24 && character.luck <= 2) {
            dispatch(removeInventory({id: 14, item: 'Нож'}))
            dispatch(addPartPlot({id: 193, title: 'Третья попытка Аднея'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 192, title: 'Вторая попытка Аднея'}))
    };

    const axe12 = () => {
        if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 9 && character.tiredness > 16 && character.luck <= 3) {
            dispatch(removeInventory({id: 15, item: 'Топор'}))
            dispatch(addPartPlot({id: 193, title: 'Третья попытка Аднея'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(4))
        dispatch(removePartPlot({id: 192, title: 'Вторая попытка Аднея'}))
    };

    const obsidianKnife12 = () => {
        if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 6 && character.tiredness > 24 && character.luck <= 2) {
            dispatch(removeInventory({id: 55, item: 'Обсидиановый нож'}))
            dispatch(addPartPlot({id: 193, title: 'Третья попытка Аднея'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(2))
        dispatch(removePartPlot({id: 192, title: 'Вторая попытка Аднея'}))
    };

    const fists12 = () => {
        if ((character.partPlot.find((part) => part.id === 177) ||
        character.partPlot.find((part) => part.id === 179)) &&
        character.hp <= 9 && character.tiredness > 16 && character.luck <= 3) {
            dispatch(addPartPlot({id: 193, title: 'Третья попытка Аднея'}))
            dispatch(addPartPlot({id: 191, title: 'Третья попытка на кулаках'}))
        } else {
            dispatch(addPartPlot({id: 187, title: 'Адней оказался слаб'}))
        }
        dispatch(addTiredness(3))
        dispatch(removePartPlot({id: 192, title: 'Вторая попытка Аднея'}))
    };

    const youAreCaptured = () => {
        if (character.partPlot.find((part) => part.id === 105)) {
            dispatch(addPartPlot({id: 194, title: 'Хаммонд спасает тебя'}))
        } else {
            dispatch(addPartPlot({id: 195, title: 'Тебя прижали'}))
        }
        dispatch(removePartPlot({id: 193, title: 'Третья попытка Аднея'}))
    };

    const continueWay2 = () => {
        dispatch(removePartPlot({id: 194, title: 'Хаммонд спасает тебя'}))
        dispatch(removePartPlot({id: 188, title: 'Вторая попытка на кулаках'}))
        dispatch(removePartPlot({id: 191, title: 'Третья попытка на кулаках'}))
        dispatch(addPartPlot({id: 169, title: 'Потеряться вновь'}))
        navigate('/sea')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 185)
            ? <div>
                <p className="description">
                    Твоё "Нет!" мгновенно сорвало с места на вид обессиленного и уставшего от изнурительного плавания Аднея. Он 
                    повалил тебя на спину и стал забивать кулаками. Позиция невыгодная, но защищаться необходимо, иначе тебе конец. 
                    Попытаться отбиться...
                </p>
                {character.inventory.find((elem) => elem.id === 2)
                ? <button className="answerButton" onClick={stick11}>
                    Палкой
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 5)
                ? <button className="answerButton" onClick={torch11}>
                    Факелом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 14)
                ? <button className="answerButton" onClick={knife11}>
                    Ножом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15)
                ? <button className="answerButton" onClick={axe11}>
                    Топором
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 55)
                ? <button className="answerButton" onClick={obsidianKnife11}>
                    Обсидиановым ножом
                </button>
                : ''}
                <button className="answerButton" onClick={fists11}>
                    Голыми руками
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 192)
            ? <div>
                <p className="description">
                    {character.partPlot.find((part) => part.id === 188)
                    ? `Адней не обратил внимания на твои тщетные попытки и только крепче сомкнул руки на твоей шее. `
                    : `Адней смог выбить оружие из твоей руки, оно падает в воду и тонет в тёмной бездне. `}
                    Шансы на спасение улетучиваются с каждым твоим вздохом.
                </p>
                {character.inventory.find((elem) => elem.id === 2)
                ? <button className="answerButton" onClick={stick12}>
                    Ударить палкой
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 5)
                ? <button className="answerButton" onClick={torch12}>
                    Ударить факелом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 14)
                ? <button className="answerButton" onClick={knife12}>
                    Ударить ножом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15)
                ? <button className="answerButton" onClick={axe12}>
                    Ударить топором
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 55)
                ? <button className="answerButton" onClick={obsidianKnife12}>
                    Ударить обсидиановым ножом
                </button>
                : ''}
                <button className="answerButton" onClick={fists12}>
                    Отбиться голыми руками
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 193)
            ? <div>
                <p className="description">
                    {character.partPlot.find((part) => part.id === 191)
                    ? `Адней прижимает твои руки к плоту и бьёт тебя головой в лицо. На глаза накатили слёзы от резкой боли. 
                    Ты растерян и не понимаешь, как справиться с противником.`
                    : `Адней хватает твою руку, держащую оружие, и бьёт об край плота. Булькнув, предмет уходит на дно. 
                    Ты больше не в силах что-то сделать.`}
                </p>
                <button className="answerButton" onClick={youAreCaptured}>
                    "Всего лишь хотел помочь..."
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 194)
            ? <div>
                <p className="description">
                    Пока Адней продолжает тебя душить, ты видишь, как за плот схватилась чья-то рука. Силуэт человека упёрся 
                    и залез к вам. Он медленно выпрямился над вами и произнёс знакомым голосом:
                </p>
                <p className="dialog">
                    "Последняя услуга, дружище!"
                </p>
                <p className="description">
                    Крепкой хваткой он взял Аднея, поднял над собой и шагнул в воду. Испуганный крик звенел в ушах, а глаза 
                    следили, как пузырьки воздуха лопаются над поверхностью воды. Вскоре всё стихло, словно ничего и не было, 
                    кроме напоминания на твоей шее...
                </p>
                <button className="answerButton" onClick={continueWay2}>
                    "Я никогда не расплачусь за это"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 195)
            ? <div>
                <p className="description">
                    Дышать нечем, твои руки слабеют, сознание покидает тебя, и ты навсегда засыпаешь. Твой путь домой окончится 
                    здесь.
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default FirstAdney;