import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { removePartPlot } from "../../../store/characterSlice";

const Dream = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wakeUp = () => {
        dispatch(removePartPlot({id: 202, title: 'Сон'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 202)
            ? <div>
                <p className="description">
                    Ты видишь болезненный сон. Тебя преследуют взгляд незрячих глаз и повторяющий одну и ту же фразу голос, 
                    звучащий будто в голове и в то же время сразу везде:
                </p>
                <p className="dialog">
                    "Принеси их! Исполни обещанное! Или обреки себя на вечные муки!"
                </p>
                <button className="answerButton" onClick={wakeUp}>
                    Проснуться
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Dream;