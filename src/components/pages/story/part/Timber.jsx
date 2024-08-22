import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPartPlot, addTime, addTiredness, removePartPlot } from "../../../store/characterSlice";
import { addSoutheastItems, removeWestItems } from "../../../store/itemsSlice";

const Timber = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const letsGo = () => {
        dispatch(removePartPlot({id: 103, title: 'Поднять бревно'}))
        dispatch(removeWestItems({id: 37, item: 'Бревно'}))
        dispatch(addSoutheastItems({id: 37, item: 'Бревно'}))
        dispatch(addTime(5))
        dispatch(addTiredness(10))
        navigate('/southeast')
    };

    const leaveTimber = () => {
        dispatch(removePartPlot({id: 103, title: 'Поднять бревно'}))
        navigate('/west')
    };
    
    const letsGoBig = () => {
        dispatch(removePartPlot({id: 104, title: 'Поднять громоздкое бревно'}))
        dispatch(removeWestItems({id: 38, item: 'Тяжёлое бревно'}))
        dispatch(addSoutheastItems({id: 38, item: 'Тяжёлое бревно'}))
        dispatch(addPartPlot({id: 162, title: 'Хаммонд отдаёт парус'}))
        dispatch(addTime(5))
        dispatch(addTiredness(10))
        navigate('/southeast')
    };

    const leaveBigTimber = () => {
        dispatch(removePartPlot({id: 104, title: 'Поднять громоздкое бревно'}))
        navigate('/west')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 103)
            ? <div>
                <p className="dialog">
                    "Если брать его, то тащить прямиком через весь остров к лагерю"
                </p>
                {character.hp > 9 && character.tiredness <= 16 && character.drunkenness <= 6
                ? <button className="answerButton" onClick={letsGo}>
                    "Я свеж и полон сил. Вперёд!"
                </button>
                : <button className="answerButton" onClick={leaveTimber}>
                    "Сейчас я на это не способен"
                </button>}
                <button className="answerButton" onClick={leaveTimber}>
                    Оставить бревно на месте
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 104)
            ? <div>
                <p className="dialog">
                    "Похоже, я нашёл нашей мачте друга. Этому здоровяку место рядом с ней"
                </p>
                {character.partPlot.find((part) => part.id === 105)
                ? <div>
                    <p className="description">
                        Облокотившись на неподъёмное бревно, перед тобой стоит капитан Хаммонд Ли во всей красе: 
                        бледное лицо с синюшними прожилками и такого же цвета губами.
                    </p>
                    <p className="dialog">
                        "Рад тебя видеть вновь, Кросби! Нужна помощь?!"
                    </p>
                    <p className="dialog">
                        "Да, необходимо донести это бревно до моего лагеря."
                    </p>
                    <p className="dialog">
                        "Отлично! Я твой должник и помогу."
                    </p>
                    {character.hp > 9 && character.tiredness <= 16 && character.drunkenness <= 6
                    ? <button className="answerButton" onClick={letsGoBig}>
                        "Давай! Сделаем это!"
                    </button>
                    : <button className="answerButton" onClick={leaveBigTimber}>
                        "В таком состоянии я его не осилю"
                    </button>}
                </div>
                : <button className="answerButton" onClick={leaveBigTimber}>
                    "Оно неподъёмное! Плохая была идея"
                </button>}
            </div>
            : ''}
        </div>
    );
};

export default Timber;