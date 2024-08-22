import { useDispatch, useSelector } from "react-redux"
import { addPartPlot, removePartPlot } from "../../../store/characterSlice";
import { useNavigate } from "react-router-dom";

const Final = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goodEnd = () => {
        dispatch(removePartPlot({id: 152, title: 'Конец'}))
        dispatch(addPartPlot({id: 153, title: 'Хороший конец'}))
    };

    const badEnd = () => {
        dispatch(removePartPlot({id: 152, title: 'Конец'}))
        dispatch(addPartPlot({id: 154, title: 'Плохой конец'}))
    };

    const trueGoodEnd = () => {
        dispatch(removePartPlot({id: 153, title: 'Хороший конец'}))
        dispatch(addPartPlot({id: 155, title: 'Благодарность'}))
        navigate('/end')
    };

    const trueBadEnd = () => {
        dispatch(removePartPlot({id: 154, title: 'Плохой конец'}))
        dispatch(addPartPlot({id: 156, title: 'Не вышло'}))
        navigate('/end')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 152)
            ? <div>
                <p className="description">
                    Ты чувствуешь тяжёлую и леденящую руку на своём плече. Дрожь охватывает тело, но ты находишь в себе силы поднять 
                    голову и слышишь вопрос, заданный недвижимыми губами из-под капюшона старого балахона и беззвучно коснувшийся 
                    ушей, пока глаза цвета мистического нефрита, ярко прожигающие насквозь, не отводят взгляд от твоего испуганного лица.
                </p>
                {character.inventory.find((elem) => elem.id === 46)
                ? <button className="answerButton" onClick={goodEnd}>
                    Ты молча протягиваешь игральные кости
                </button>
                : <button className="answerButton" onClick={badEnd}>
                    "У меня нет того, что ты ищешь"
                </button>}
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 153)
            ? <div>
                <p className="description">
                    Ты чувствуешь облегчение на своём плече. Холодная и твёрдая как камень рука берёт игральные кости с ладони, 
                    а нефритовые глаза хитро щурятся. Холод больше не страшен, он словно принял тебя. Ты киваешь в ответ и 
                    произносишь то, чего от тебя ждут больше всего:
                </p>
                <button className="answerButton" onClick={trueGoodEnd}>
                    "Да, я сыграю с тобой"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 154)
            ? <div>
                <p className="description">
                    Хватка чёрной фигуры болезненно сильно сжала плечо. Даже если бы своды пещеры тотчас обрушились, не было бы 
                    так мучительно и ощущение невыносимого безволия в миг покинуло бы твоё сердце вместе с последним вздохом. 
                    Ты и на обычный крик не способен. Агония терзает все нервы твоего тела, не в силах излиться наружу и 
                    облегчить последние секунды жизни. Недовольная фигура в балахоне бросает тебя в холодный густой свет. 
                    И ты понимаешь, что необходимо держать данное слово, иначе получишь то, чего достоин
                </p>
                <button className="answerButton" onClick={trueBadEnd}>
                    Вечная пытка лишь началась
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 203)
            ? <div>
                <p className="description">
                    Погасли звёзды, море стихло... Только ощущение ледяного холода охватило тело, и сердце перестало стучать.
                </p>
                <p className="dialog">
                    "Время вышло! Ты не сдержал обещание. Отныне и навсегда твоя душа принадлежит мне."
                </p>
                <button className="answerButton" onClick={trueBadEnd}>
                    "Не нашёл игру, сам стал игрушкой"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Final;