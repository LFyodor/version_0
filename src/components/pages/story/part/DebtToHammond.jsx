import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPartPlot, removeInventory, removePartPlot } from "../../../store/characterSlice";

const DebtToHammond = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const giveRum = () => {
        dispatch(removePartPlot({id: 106, title: 'Первый разговор'}))
        dispatch(addPartPlot({id: 107, title: 'Отдал ром'}))
        dispatch(addPartPlot({id: 115, title: 'Долг уплачен'}))
        dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
    };

    const giveWine = () => {
        dispatch(removePartPlot({id: 106, title: 'Первый разговор'}))
        dispatch(addPartPlot({id: 108, title: 'Отдал вино'}))
        dispatch(removeInventory({id: 7, item: 'Бутылка вина'}))
    };

    const dontRepay = () => {
        dispatch(removePartPlot({id: 106, title: 'Первый разговор'}))
        dispatch(addPartPlot({id: 116, title: 'Не отдал ром'}))
    };

    const leaveDebt = () => {
        dispatch(removePartPlot({id: 106, title: 'Первый разговор'}))
        navigate('/southwest')
    };

    const thinkAboutIt = () => {
        dispatch(removePartPlot({id: 107, title: 'Отдал ром'}))
        dispatch(removePartPlot({id: 117, title: 'Ром, вино или ничего'}))
        navigate('/southwest')
    };

    const thinkAboutIt2 = () => {
        dispatch(removePartPlot({id: 108, title: 'Отдал вино'}))
        dispatch(removePartPlot({id: 117, title: 'Ром, вино или ничего'}))
        navigate('/southwest')
    };

    const curse = () => {
        dispatch(removePartPlot({id: 116, title: 'Не отдал ром'}))
        dispatch(addPartPlot({id: 118, title: 'Должник'}))
        dispatch(removePartPlot({id: 117, title: 'Ром, вино или ничего'}))
        navigate('/southwest')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 106)
            ? <div>
                <p className="description">
                    Ты очень устал и сильно ранен. С трудом присаживаешься на песок рядом с телом капитана и слышишь его голос 
                    будто наяву:
                </p>
                <p className="dialog">
                    "Надеюсь, ты пришёл вернуть бутылку рома, которую задолжал мне"
                </p>
                {character.inventory.find((elem) => elem.id === 6)
                ? <button className="answerButton" onClick={giveRum}>
                    "Конечно, капитан"
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 6)
                ? ''
                : character.inventory.find((elem) => elem.id === 7)
                    ? <button className="answerButton" onClick={giveWine}>
                        "Рома нет, могу отдать бутылку вина"
                    </button>
                    : ''}
                {character.inventory.find((elem) => elem.id === 6)
                ? <button className="answerButton" onClick={dontRepay}>
                    "Я не готов выбросить бутылку хорошего рома на ветер. Отвали, Хаммонд"
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 6)
                ? ''
                : <button className="answerButton" onClick={leaveDebt}>
                    "Сейчас у меня ничего нет, капитан"
                </button>}
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 107)
            ? <div>
                <p className="description">
                    Ты ставишь бутылку рома рядом с телом капитана - долг уплачен.
                </p>
                <p className="dialog">
                    "Отличный парень ты, Кросби! Уверен, это лучший ром, который мне доводилось пробовать. 
                    Вот бы ещё раз услужил мне, похоронив по доброй традиции."
                </p>
                <p className="dialog">
                    {items.southwestItems.find((elem) => elem.id === 32)
                    ? `"Если хорошо присмотришься, увидишь чёрную кошку на моём теле. Забирай, пусть она принесёт тебе удачу."`
                    : `"Кстати, ты уже забрал мою чёрную кошку. Знай, я не держу на тебя зла. Пусть она принесёт тебе удачу."`}
                </p>
                <p className="description">
                    И сомнения одолевают тебя: звучит этот разговор лишь в твоей голове или посиневший труп высказал 
                    свою последнюю просьбу?..
                </p>
                <button className="answerButton" onClick={thinkAboutIt}>
                    "Я подумаю над этим, капитан"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 108)
            ? <div>
                <p className="description">
                    Ты ставишь бутылку вина рядом с телом капитана.
                </p>
                <p className="dialog">
                    "Это что за пойло, Кросби?! Брал ром, а возвращаешь мочу аристократов. Я прощу тебя, если сделаешь ещё одно: 
                    Похорони меня, как подобает моряку"
                </p>
                <p className="description">
                    Более требовательных трупов тебе встречать ещё не приходилось
                </p>
                <button className="answerButton" onClick={thinkAboutIt2}>
                    "Я подумаю над этим"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 116)
            ? <div>
                <p className="dialog">
                    "Будь ты проклят, Кросби Барнесс! Если море не заберёт меня, оно заберёт тебя"
                </p>
                <button className="answerButton" onClick={curse}>
                    "Выпью за твоё здоровье, Хаммонд"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default DebtToHammond;