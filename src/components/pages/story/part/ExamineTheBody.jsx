import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, addLuck, addPartPlot, addTime, addTiredness, decreaseLuck, removeInventory, removePartPlot } from "../../../store/characterSlice";
import { removeSouthwestItems } from "../../../store/itemsSlice";
import { useEffect } from "react";

const ExamineTheBody = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (character.partPlot.find((part) => part.id === 39) && character.partPlot.find((part) => part.id === 43) &&
        character.time >= 26 && character.partPlot.find((part) => part.id === 117)) {
            dispatch(removePartPlot({id: 43, title: 'Осмотр тела'}))
            dispatch(addPartPlot({id: 106, title: 'Первый разговор'}))
            // DebtToHammond
            navigate('/partplot')
        }
    }, [character.partPlot, character.time, dispatch, navigate]);

    const getShirt = () => {
        dispatch(removeSouthwestItems({id: 3, item: 'Рваная тряпка'}))
        dispatch(addInventory({id: 3, item: 'Рваная тряпка'}))
    };

    const tatu = () => {
        dispatch(removePartPlot({id: 43, title: 'Осмотр тела'}))
        dispatch(addPartPlot({id: 58, title: 'Срезать тату'}))
    };

    const getTatu = () => {
        dispatch(removePartPlot({id: 58, title: 'Срезать тату'}))
        dispatch(addPartPlot({id: 75, title: 'Ты мне кусок кожи срезал'}))
        dispatch(addPartPlot({id: 43, title: 'Осмотр тела'}))
        dispatch(removeSouthwestItems({id: 32, item: 'Татуировка чёрной кошки на коже'}))
        dispatch(addInventory({id: 32, item: 'Татуировка чёрной кошки на коже'}))
        dispatch(addLuck(1))
    };

    const leaveTatu = () => {
        dispatch(removePartPlot({id: 58, title: 'Срезать тату'}))
        dispatch(addPartPlot({id: 43, title: 'Осмотр тела'}))
    };

    const getFlint = () => {
        dispatch(removeSouthwestItems({id: 0, item: 'Огниво'}))
        dispatch(addInventory({id: 0, item: 'Огниво'}))
    };

    const getStick = () => {
        dispatch(removeSouthwestItems({id: 2, item: 'Короткая крепкая палка'}))
        dispatch(addInventory({id: 2, item: 'Короткая крепкая палка'}))
    };

    const openHand = () => {
        dispatch(removePartPlot({id: 43, title: 'Осмотр тела'}))
        dispatch(addPartPlot({id: 53, title: 'Монета в ладони'}))
    };

    const leaveTheBody = () => {
        dispatch(removePartPlot({id: 43, title: 'Осмотр тела'}))
        navigate('/southwest')
    };

    const cut = () => {
        dispatch(removePartPlot({id: 53, title: 'Монета в ладони'}))
        dispatch(addPartPlot({id: 54, title: 'Рука отрублена'}))
    };

    const getCoin = () => {
        dispatch(removePartPlot({id: 54, title: 'Рука отрублена'}))
        dispatch(addPartPlot({id: 76, title: 'Ты меня руки лишил'}))
        dispatch(addPartPlot({id: 43, title: 'Осмотр тела'}))
        dispatch(removeSouthwestItems({id: 31, item: 'Счастливая монетка капитана'}))
        dispatch(addInventory({id: 31, item: 'Счастливая монетка капитана'}))
        dispatch(addLuck(1))
    };

    const leaveHand = () => {
        dispatch(removePartPlot({id: 53, title: 'Монета в ладони'}))
        dispatch(addPartPlot({id: 43, title: 'Осмотр тела'}))
    };

    const getBoot = () => {
        dispatch(removeSouthwestItems({id: 42, item: 'Правый сапог'}))
        dispatch(addInventory({id: 42, item: 'Правый сапог'}))
    };

    const abdomen = () => {
        dispatch(removePartPlot({id: 43, title: 'Осмотр тела'}))
        dispatch(addPartPlot({id: 55, title: 'Кубик в брюхе'}))
    };

    const getDice = () => {
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
        dispatch(removePartPlot({id: 55, title: 'Кубик в брюхе'}))
        dispatch(addPartPlot({id: 77, title: 'Ты мне брюхо вспорол'}))
        dispatch(removeSouthwestItems({id: 36, item: 'Игральная кость'}))
        dispatch(addPartPlot({id: 43, title: 'Осмотр тела'}))
        dispatch(decreaseLuck(1))
    };

    const buryCaptain = () => {
        dispatch(removePartPlot({id: 43, title: 'Осмотр тела'}))
        dispatch(addPartPlot({id: 56, title: 'Похороны капитана'}))
    };

    const dontBury = () => {
        dispatch(removePartPlot({id: 56, title: 'Похороны капитана'}))
        dispatch(addPartPlot({id: 43, title: 'Осмотр тела'}))
    };

    const letsBury = () => {
        dispatch(removePartPlot({id: 56, title: 'Похороны капитана'}))
        dispatch(addPartPlot({id: 57, title: 'Последнее плавание капитана'}))
    };

    const wayBody = () => {
        dispatch(removeSouthwestItems({id: 3, item: 'Рваная тряпка'}))
        dispatch(removeSouthwestItems({id: 32, item: 'Татуировка чёрной кошки на коже'}))
        dispatch(removeSouthwestItems({id: 0, item: 'Огниво'}))
        dispatch(removeSouthwestItems({id: 31, item: 'Счастливая монетка капитана'}))
        dispatch(removeSouthwestItems({id: 42, item: 'Правый сапог'}))
        dispatch(removeSouthwestItems({id: 36, item: 'Игральная кость'}))
        dispatch(removePartPlot({id: 57, title: 'Последнее плавание капитана'}))
        dispatch(addPartPlot({id: 78, title: 'Покойся с миром, капитан'}))
        dispatch(removeSouthwestItems({id: 39, item: 'Труп'}))
        dispatch(removeInventory({id: 18, item: 'Кусок парусины'}))
        dispatch(addTime(1))
        dispatch(addTiredness(3))
        navigate('/southwest')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 43)
            ? <div>
                <p className="description">
                    Ты подходишь к телу и узнаёшь в нём капитана своего почившего корабля, Хаммонда Ли. Ему повезло меньше, чем тебе. 
                    Он был хорошим человеком, его бы в море схоронить, как подобает настоящему моряку.
                    {items.southwestItems.find((elem) => elem.id === 3)
                    ? ` На нём одета некогда белая опрятная рубаха, теперь она годится только на тряпки.`
                    : ''}
                    {items.southwestItems.find((elem) => elem.id === 32) &&
                    (character.torch > 0 || character.usedDark > 30) &&
                    character.drunkenness <= 6
                    ? ` Эту важную деталь невозможно нащупать в темноте, но теперь, без рубахи, можно увидеть - татуировка 
                    чёрной кошки на груди капитана. Моряки верят в этот символ удачи.`
                    : ''}
                    {items.southwestItems.find((elem) => elem.id === 0)
                    ? ` Из-за пояса торчит огниво, и, по всей видимости, он им уже не воспользуется.`
                    : ''}
                    {items.southwestItems.find((elem) => elem.id === 31)
                    ? ` В правой руке крепко зажато что-то небольшое, но важное для капитана.`
                    : ` Правой кисти больше нет.`}
                    {items.southwestItems.find((elem) => elem.id === 2)
                    ? ` Совсем рядом с правой рукой лежит палка.`
                    : ''}
                    {items.southwestItems.find((elem) => elem.id === 42)
                    ? ` Только на одной ноге одет сапог - правый.`
                    : ''}
                    {character.hp > 0 && character.hp <= 3 && character.tiredness > 24
                    ? ` Ещё никогда капитан не выглядел столь аппетитно.`
                    : ''}
                </p>
                {character.inventory.find((elem) => elem.id === 3)
                ? ''
                : items.southwestItems.find((elem) => elem.id === 3)
                    ? <button className="answerButton" onClick={getShirt}>
                        Снять с него рваную рубаху
                    </button>
                    : ''}
                {items.southwestItems.find((elem) => elem.id === 32) &&
                (character.torch > 0 || character.usedDark > 30) &&
                character.drunkenness <= 6 &&
                character.inventory.find((elem) => elem.id === 14)
                ? <button className="answerButton" onClick={tatu}>
                    Срезать татуировку ножом
                </button>
                : ''}
                {items.southwestItems.find((elem) => elem.id === 0)
                ? <button className="answerButton" onClick={getFlint}>
                    Забрать огниво
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 2)
                ? ''
                : items.southwestItems.find((elem) => elem.id === 2)
                    ? <button className="answerButton" onClick={getStick}>
                        Взять палку
                    </button>
                    : ''}
                {items.southwestItems.find((elem) => elem.id === 31)
                ? <button className="answerButton" onClick={openHand}>
                    Попробовать раскрыть его правую ладонь
                </button>
                : ''}
                {items.southwestItems.find((elem) => elem.id === 42)
                ? <button className="answerButton" onClick={getBoot}>
                    Снять сапог и взять себе
                </button>
                : ''}
                {character.hp > 0 && character.hp <= 3 && character.tiredness > 24 &&
                character.inventory.find((elem) => elem.id === 14) &&
                items.southwestItems.find((elem) => elem.id === 36)
                ? <button className="answerButton" onClick={abdomen}>
                    Вспороть брюхо капитану
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 18) &&
                character.partPlot.find((part) => part.id === 115)
                ? <button className="answerButton" onClick={buryCaptain}>
                    Отдать последние почести капитану
                </button>
                : ''}
                <button className="answerButton" onClick={leaveTheBody}>
                    Оставить труп в покое
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 53)
            ? <div>
                <p className="dialog">
                    "Он явно держит в руке что-то ценное. Могу попробовать рубануть по пальцам чем-нибудь острым, 
                    но надо ли оно мне?! А если надо, то уж точно не на трезвую голову"
                </p>
                {character.inventory.find((elem) => elem.id === 14 &&
                character.drunkenness > 6 && character.hp > 3 && character.tiredness <= 32)
                ? <button className="answerButton" onClick={cut}>
                    Отрезать пальцы ножом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15 &&
                character.drunkenness > 6 && character.hp > 6 && character.tiredness <= 24)
                ? <button className="answerButton" onClick={cut}>
                    Отрубить кисть топором
                </button>
                : ''}
                <button className="answerButton" onClick={leaveHand}>
                    "Оставлю тайну без разгадки"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 54)
            ? <div>
                <p className="description">
                    Наконец, раскрыв ладонь мертвеца, ты получаешь его счастливую монету
                </p>
                <button className="answerButton" onClick={getCoin}>
                    "Надеюсь, мне это не аукнется"
                </button>
            </div>
            : ''}
            {character.partPlot.find((elem) => elem.id === 55)
            ? <div>
                <p className="description">
                    Твой нож с трудом разрезает живот мертвеца. Из брюшины вырывается ужасный запах, от которого тебя 
                    воротит, и ты забываешь о своей затее, недостойной честного, пусть и голодного моряка. 
                    Но вместе с этим получаешь кое-что другое...
                </p>
                <button className="answerButton" onClick={getDice}>
                    Игральную кость
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 56)
            ? <div>
                <p className="dialog">
                    "У меня есть добротный кусок белой парусины, и я могу похоронить в нём капитана, как он того заслуживает..."
                </p>
                <button className="answerButton" onClick={dontBury}>
                    "Или же могу оставить парусину, мертвецу ведь уже всё равно"
                </button>
                <button className="answerButton" onClick={letsBury}>
                    "Поступлю по чести"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 57)
            ? <div>
                <p className="description">
                    Ты аккуратно заворачиваешь тело в белую ткань и оттаскиваешь к морю. Волны подхватывают капитана и 
                    бережно уносят прочь. Стоя по пояс в холодной воде, ты наблюдаешь, как хороший человек, 
                    Хаммонд Ли, отправляется в своё последнее плавание, исчезая в темноте
                </p>
                <button className="answerButton" onClick={wayBody}>
                    "Я снова один"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 58)
            ? <div>
                <p className="dialog">
                    {character.partPlot.find((part) => part.id === 115)
                    ? `"Всё в порядке, Кросби, капитан сам просил об этом"`
                    : `"С одной стороны, удача ему теперь без надобности, мёртвым она не светит; с другой - это 
                    богохульство и неуважение к тому, кого я хорошо знал"`}
                </p>
                <button className="answerButton" onClick={getTatu}>
                    {character.partPlot.find((part) => part.id === 115)
                    ? `Так тому и быть`
                    : `Всё равно срезать`}
                </button>
                <button className="answerButton" onClick={leaveTatu}>
                    "Я этого не сделаю"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default ExamineTheBody;