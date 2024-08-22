import { useDispatch, useSelector } from "react-redux";
import { addPartPlot, sleepHere } from "./store/characterSlice";
import { useNavigate } from "react-router-dom";

const SleepOnTheSand = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SleepHere = () => {
        if (items.southItems.find((elem) => elem.id === 36) && window.location.pathname.slice(1) === "south") {
            dispatch(addPartPlot({id: 35, title: 'Прилипшая костяшка'}))
            // StuckDice
            navigate('/partplot')
        } else if (character.partPlot.find((part) => part.id === 15)) {
            dispatch(addPartPlot({id: 202, title: 'Сон'}))
            // Dream
            navigate('/partplot')
        }
        dispatch(sleepHere(character.tiredness - 32))
    };

    return (
        <div>
            {character.hp > 0 && character.tiredness > 32
            ? <div>
                <p className="description">
                    Обессиленный и уставший, ты засыпаешь на песке
                </p>
                <button className="answerButton" onClick={SleepHere}>
                    Спать здесь
                </button>
            </div>
            : ''}
        </div>
    );
};

export default SleepOnTheSand;