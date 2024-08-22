import { useDispatch, useSelector } from "react-redux";
import { removePartPlot } from "../../../store/characterSlice";
import { useNavigate } from "react-router-dom";

const Start = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayStart = () => {
        dispatch(removePartPlot({id: 0, title: 'Начало'}))
        navigate('/southeast')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 0)
            ? <div>
                <p className="dialog">
                    "Необходимо найти выживших, еду и воду, а также развести костёр. Пожалуй, это место у 
                    мачты подойдёт для лагеря. Тем более, сил сдвинуть большое бревно у меня не осталось. Глаза немного 
                    привыкли к темноте, стоит оглядеться. Наши припасы могло выбросить на берег, 
                    и я очень надеюсь на это... А вот и первый улов!"
                </p>
                <button className="answerButton" onClick={wayStart}>
                    "За дело!"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Start;