import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPartPlot, removePartPlot } from "../../../store/characterSlice";

const Earthquake = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayEarthquake1 = () => {
        dispatch(removePartPlot({id: 38, title: 'Землетрясение № 1'}))
        dispatch(addPartPlot({id: 39, title: 'До землетрясения № 2'}))
        navigate(-1)
    };

    const wayEarthquake2 = () => {
        if (character.partPlot.find((part) => part.id === 78)) {
            dispatch(removePartPlot({id: 78, title: 'Покойся с миром, капитан'}))
            dispatch(addPartPlot({id: 105, title: 'Хаммонд'}))
        }
        dispatch(removePartPlot({id: 40, title: 'Землетрясение № 2'}))
        dispatch(addPartPlot({id: 41, title: 'До землетрясения № 3'}))
        navigate(-1)
    };

    const wayEarthquake3 = () => {
        dispatch(removePartPlot({id: 42, title: 'Землетрясение № 3'}))
        dispatch(addPartPlot({id: 201, title: 'После всего'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 38)
            ? <div>
                <p className="description">
                    Неожиданно земля под ногами задрожала, крепкий камень кругом затрещал и гул пролетел по всему острову. 
                    Спустя пару минут небольшое землетрясение успокоилось
                </p>
                <button className="answerButton" onClick={wayEarthquake1}>
                    "Остров пытается сбросить меня как блоху?!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 40)
            ? <div>
                <p className="description">
                    Всё произошло неожиданно и быстро, как в первый раз. Камень трещал и сыпался с горы. Валуны гремели ударами 
                    друг об друга. Кросби чудом удалось остаться в живых и даже не пораниться
                </p>
                <button className="answerButton" onClick={wayEarthquake2}>
                    "Намёк понял, надо валить. Мне нужен плот"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 42)
            ? <div>
                <p className="description">
                    Остров затрясло в несколько раз сильней, чем в последний раз. Чёрные волны вокруг клочка суши расходились 
                    метра три-четыре.
                </p>
                <p className="dialog">
                    "Видимо, это знак, кое-кто ждёт от меня возвращения долга."
                </p>
                <button className="answerButton" onClick={wayEarthquake3}>
                    "Но готов ли я?!"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Earthquake;