import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePartPlot } from "../../../store/characterSlice";
import AgainDied from "../../../AgainDied";

const GotPoisonedSnake = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayGotPoisonedSnake = () => {
        dispatch(removePartPlot({id: 16, title: 'Отравился змеёй'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 16) && character.hp > 0
            ? <div>
                <p className="dialog">
                    "Как же мне плохо! Эта тварь нанесла удар даже после смерти"
                </p>
                <button className="answerButton" onClick={wayGotPoisonedSnake}>
                    "Жареный кабанчик так подло не поступил бы"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 16) && character.hp === 0
            ? <div>
                <p className="description">
                    Твоя кровь быстро загустела, ты повалился на землю и умер под неизвестным ночным небом
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default GotPoisonedSnake;