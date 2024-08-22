import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePartPlot } from "../../../store/characterSlice";

const Raft = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayBadRaft = () => {
        dispatch(removePartPlot({id: 18, title: 'Плохой плот'}))
        navigate('/southeast')
    };

    const wayGoodRaft = () => {
        dispatch(removePartPlot({id: 19, title: 'Хороший плот'}))
        navigate('/southeast')
    };

    const wayWithoutRaft = () => {
        dispatch(removePartPlot({id: 28, title: 'Не хватит сил на плот'}))
        navigate('/southeast')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 18)
            ? <div>
                <p className="dialog">
                    "Выглядит хлипко, как и моя надежда на возвращение домой"
                </p>
                <button className="answerButton" onClick={wayBadRaft}>
                    "Зато со мной удача!.. Надеюсь"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 19)
            ? <div>
                <p className="dialog">
                    "Я потратил на постройку уйму времени и горжусь собой. И я обязательно выберусь с этого Богом забытого острова"
                </p>
                <button className="answerButton" onClick={wayGoodRaft}>
                    "Уже не терпится свалить"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 28)
            ? <div>
                <p className="dialog">
                    "Как бы сильно мне не хотелось убраться отсюда, но необходимо залечить раны и отдохнуть, прежде чем 
                    приступать к постройке плота"
                </p>
                <button className="answerButton" onClick={wayWithoutRaft}>
                    "Взвешенное решение"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Raft;