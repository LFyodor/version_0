import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { againBegin } from "../../store/characterSlice";
import { againBeginItems } from "../../store/itemsSlice";

const End = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const repeat = () => {
        dispatch(againBegin())
        dispatch(againBeginItems())
        localStorage.clear()
        navigate('/')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 155)
            ? <div>
                <p className="dialog">
                    "Приветствую тебя, потерпевший кораблекрушение и переживший мою первую игру моряк. Понимаю, ты ожидал чего-то 
                    более интересного и загадочного. Я готов выслушать твоё мнение по поводу абсолютно всего. И я искренне буду 
                    рад узнать, что кто-то достиг настоящего финала приключения."
                </p>
                <p className="description">
                    Внимание! После нажатия Вас перекинет на страницу VK (ВКонтакте)
                </p>
                <button className="beginButton">
                    <a href="https://vk.com/finder_ideas">
                        Страница автора
                    </a>
                </button>
                <p className="dialog">
                    "Это действительно моя первая игра. Благодаря ей я выучил React JS, чтобы получить престижную работу и 
                    стать ближе к осуществлению мечты. И сейчас, когда ты читаешь это, я надеюсь, у меня получилось. Я также 
                    верю и надеюсь, что у тебя тоже получится добиться всего, чего ты пожелаешь. Если вышло у меня, у тебя 
                    на руках определённо огромные шансы на успех. Только верь!"
                </p>
                <p className="dialog">
                    "И самое главное: если неудача вновь собьёт с пути, не сдавайся и не бойся..."
                </p>
                <button className="beginButton" onClick={repeat}>
                    "Начать с нуля"
                </button>
                <p className="description author">
                    Автор и создатель Фёдор Лейбург
                </p>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 156)
            ? <div>
                <p className="dialog">
                    "Всё было зря..."
                </p>
                <button className="beginButton" onClick={repeat}>
                    "Начать с нуля"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default End;