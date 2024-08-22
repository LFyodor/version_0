import { useDispatch, useSelector } from "react-redux";
import { addPartPlot, removeInventory, removePartPlot } from "../../../store/characterSlice";

const Adney = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();

    const helpHim = () => {
        dispatch(removePartPlot({id: 175, title: 'Выживший'}))
        dispatch(addPartPlot({id: 176, title: 'Жажда'}))
    };

    const giveRum = () => {
        dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
        dispatch(removePartPlot({id: 176, title: 'Жажда'}))
        dispatch(addPartPlot({id: 177, title: 'Напоил'}))
        dispatch(addPartPlot({id: 178, title: 'Голод'}))
    };

    const giveWine = () => {
        dispatch(removeInventory({id: 7, item: 'Бутылка вина'}))
        dispatch(removePartPlot({id: 176, title: 'Жажда'}))
        dispatch(addPartPlot({id: 177, title: 'Напоил'}))
        dispatch(addPartPlot({id: 178, title: 'Голод'}))
    };

    const giveWater = () => {
        if (character.inventory.find((elem) => elem.id === 10)) {
            dispatch(removeInventory({id: 10, item: 'Бутыль с водой'}))
        } else {
            dispatch(removeInventory({id: 11, item: 'Бутыль с водой'}))
        }
        dispatch(removePartPlot({id: 176, title: 'Жажда'}))
        dispatch(addPartPlot({id: 177, title: 'Напоил'}))
        dispatch(addPartPlot({id: 178, title: 'Голод'}))
    };

    const nothingToDrink = () => {
        dispatch(removePartPlot({id: 176, title: 'Жажда'}))
        dispatch(addPartPlot({id: 178, title: 'Голод'}))
    };

    const giveFriedTrout = () => {
        dispatch(removeInventory({id: 21, item: 'Жареная форель'}))
        dispatch(removePartPlot({id: 178, title: 'Голод'}))
        dispatch(addPartPlot({id: 179, title: 'Накормил'}))
        dispatch(addPartPlot({id: 180, title: 'Мало'}))
    };

    const giveFriedSalmon = () => {
        dispatch(removeInventory({id: 23, item: 'Жареный лосось'}))
        dispatch(removePartPlot({id: 178, title: 'Голод'}))
        dispatch(addPartPlot({id: 179, title: 'Накормил'}))
        dispatch(addPartPlot({id: 180, title: 'Мало'}))
    };

    const giveFriedTuna = () => {
        dispatch(removeInventory({id: 25, item: 'Жареный тунец'}))
        dispatch(removePartPlot({id: 178, title: 'Голод'}))
        dispatch(addPartPlot({id: 179, title: 'Накормил'}))
        dispatch(addPartPlot({id: 180, title: 'Мало'}))
    };

    const giveFriedSnake = () => {
        dispatch(removeInventory({id: 28, item: 'Жареная змея'}))
        dispatch(removePartPlot({id: 178, title: 'Голод'}))
        dispatch(addPartPlot({id: 179, title: 'Накормил'}))
        dispatch(addPartPlot({id: 180, title: 'Мало'}))
    };

    const giveCrackers = () => {
        dispatch(removeInventory({id: 29, item: 'Сухари'}))
        dispatch(removePartPlot({id: 178, title: 'Голод'}))
        dispatch(addPartPlot({id: 179, title: 'Накормил'}))
        dispatch(addPartPlot({id: 180, title: 'Мало'}))
    };

    const giveCornedBeef = () => {
        dispatch(removeInventory({id: 30, item: 'Солонина'}))
        dispatch(removePartPlot({id: 178, title: 'Голод'}))
        dispatch(addPartPlot({id: 179, title: 'Накормил'}))
        dispatch(addPartPlot({id: 180, title: 'Мало'}))
    };

    const giveFriedSeagull = () => {
        dispatch(removeInventory({id: 50, item: 'Жареная чайка'}))
        dispatch(removePartPlot({id: 178, title: 'Голод'}))
        dispatch(addPartPlot({id: 179, title: 'Накормил'}))
        dispatch(addPartPlot({id: 180, title: 'Мало'}))
    };

    const nothingToEat = () => {
        dispatch(removePartPlot({id: 178, title: 'Голод'}))
        dispatch(addPartPlot({id: 180, title: 'Мало 1'}))
    };

    const wantMore = () => {
        if (character.inventory.find((elem) => elem.id === 12)) {
            dispatch(addPartPlot({id: 182, title: 'Хорошие сапоги'}))
        } else {
            dispatch(addPartPlot({id: 183, title: 'Мало 2'}))
        }
        dispatch(removePartPlot({id: 180, title: 'Мало 1'}))
    };

    const keepCalm = () => {
        dispatch(removePartPlot({id: 182, title: 'Хорошие сапоги'}))
        dispatch(addPartPlot({id: 183, title: 'Мало 2'}))
    };

    const pounce = () => {
        dispatch(removePartPlot({id: 182, title: 'Хорошие сапоги'}))
        dispatch(addPartPlot({id: 184, title: 'Ты набросился первым'}))
    };

    const youSayNo = () => {
        dispatch(removePartPlot({id: 183, title: 'Мало 2'}))
        dispatch(addPartPlot({id: 185, title: 'Адней набросился первым'}))
    };


    return (
        <div>
            {character.partPlot.find((part) => part.id === 175)
            ? <div>
                <p className="description">
                    Ты подплываешь к дрейфующим обломкам корабля: только доски да брёвна. В памяти всплывает ужасный шторм, накрывший 
                    экипаж посреди водной пустыни. "Гарпию" разбил не сам шторм. Корабль затянуло в гигантский водоворот. Кого-то выбросило 
                    за борт, кто-то захлебнулся, стоя на палубе, хаос под громогласный рокот волн оказался не по силам 
                    экспедиционному кораблю. Кросби снял свой ремень и перекинул его вокруг мачты. Схватившись за другой конец ремня, 
                    он держался на ногах, пока последний проблеск света не потух в его сознании. Очнулся он уже в тёмных водах, держась 
                    за осколок спасительной мачты.
                </p>
                <p className="dialog">
                    "Воспоминания ещё свежи и болезненны. Погибли все... Быть может, я и вправду попал во чрево кракена. Но, 
                    раз я жив, необходимо бороться."
                </p>
                <p className="description">
                    Неожиданно его схватили за ногу и чуть не утащили в воду. Моряк вцепился в плот, а из воды показалось знакомое лицо.
                </p>
                <p className="dialog">
                    "Кросби, это ты? Помоги мне, Кросби, я больше не выдержу."
                </p>
                <button className="answerButton" onClick={helpHim}>
                    Помочь Аднею
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 176)
            ? <div>
                <p className="description">
                    Ты помогаешь товарищу влезть на плот. Адней был матросом на борту "Гарпии", а теперь гость на борту 
                    безымянной посудины посреди безбрежной пустоты, в которой провёл один уйму времени, и его разум держится 
                    за тонкую нить, чтобы не сорваться в омут безумия.
                </p>
                <p className="dialog">
                    "Поразительно! Как ты спасся?"
                </p>
                <p className="dialog">
                    "Видимо, мне повезло, как и тебе, Кросби. Я хочу пить. У тебя есть что-нибудь?"
                </p>
                {character.inventory.find((elem) => elem.id === 6)
                ? <button className="answerButton" onClick={giveRum}>
                    Дать ром
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 7)
                ? <button className="answerButton" onClick={giveWine}>
                    Дать вино
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 10) ||
                character.inventory.find((elem) => elem.id === 11)
                ? <button className="answerButton" onClick={giveWater}>
                    Дать воды
                </button>
                : ''}
                <button className="answerButton" onClick={nothingToDrink}>
                    Ничего не давать
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 178)
            ? <div>
                <p className="description">
                    {character.partPlot.find((part) => part.id === 177)
                    ? `Адней жадно выпивает бутыль до дна и хватает тебя за руку.`
                    : `Широко раскрытые глаза измученного Аднея блестят во тьме, уставившись на тебя.`}
                </p>
                <p className="dialog">
                    "У тебя должна быть еда. Я хочу есть, Кросби. Дай мне еды!"
                </p>
                {character.inventory.find((elem) => elem.id === 21)
                ? <button className="answerButton" onClick={giveFriedTrout}>
                    Дать жареную форель
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 23)
                ? <button className="answerButton" onClick={giveFriedSalmon}>
                    Дать жареного лосося
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 25)
                ? <button className="answerButton" onClick={giveFriedTuna}>
                    Дать жареного тунца
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 28)
                ? <button className="answerButton" onClick={giveFriedSnake}>
                    Дать жареной змеи
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 29)
                ? <button className="answerButton" onClick={giveCrackers}>
                    Дать сухарей
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 30)
                ? <button className="answerButton" onClick={giveCornedBeef}>
                    Дать солонины
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 50)
                ? <button className="answerButton" onClick={giveFriedSeagull}>
                    Дать жареную чайку
                </button>
                : ''}
                <button className="answerButton" onClick={nothingToEat}>
                    Ничего не давать
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 180)
            ? <div>
                <p className="description">
                    {character.partPlot.find((part) => part.id === 179)
                    ? `Спасённый вновь хватает тебя за руку и требует больше.`
                    : `Спасённый подбирается к тебе вплотную и задаёт неудобный вопрос.`}
                </p>
                <p className="dialog">
                    {character.partPlot.find((part) => part.id === 179)
                    ? `"Этого мало, хочу ещё!"`
                    : `"Ничего нет?! С пустыми руками отправился в опасное плавание?! Не верю."`}
                </p>
                {character.partPlot.find((part) => part.id === 177) &&
                character.partPlot.find((part) => part.id === 179)
                ? ''
                : <button className="answerButton" onClick={wantMore}>
                    "Да, я пуст и я рискнул"
                </button>}
                {character.partPlot.find((part) => part.id === 177) ||
                character.partPlot.find((part) => part.id === 179)
                ? <button className="answerButton" onClick={wantMore}>
                    "Будем тратить понемногу"
                </button>
                : ''}
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 182)
            ? <div>
                <p className="dialog">
                    "То же самое ты и Хаммонду сказал перед тем, как его убить?! Это ведь его сапоги на тебе."
                </p>
                <p className="dialog">
                    "Всё не так, Адней..."
                </p>
                <p className="dialog">
                    "Всё путём, Кросби. Только один вопрос меня тревожит: ты убил его, чтоб не делиться или от голода?"
                </p>
                <p className="description">
                    Его глаза отражали прогнившую безумием душу. В темноте плохо видно, но атмосфера на плоту ощущалась 
                    напряжённой. Адней готов наброситься на тебя... или сдержится?
                </p>
                <button className="answerButton" onClick={keepCalm}>
                    Сохранять спокойствие
                </button>
                <button className="answerButton" onClick={pounce}>
                    Наброситься первым
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 183)
            ? <div>
                <p className="dialog">
                    "Я голоден и хочу сейчас!"
                </p>
                <p className="description">
                    Требовательно и громко произнёс спасённый. Он не остановится, пока не съест все припасы, и тогда о спасении 
                    можно забыть навсегда.
                </p>
                <button className="answerButton" onClick={youSayNo}>
                    "Нет!"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Adney;