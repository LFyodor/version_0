import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePartPlot } from "../../../store/characterSlice";
import AgainDied from "../../../AgainDied";

const GotBurned = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayGotBurned = () => {
        dispatch(removePartPlot({id: 5, title: 'Обжёгся'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 5) && character.hp > 0
            ? <div>
                <p className="dialog">
                    "Чёрт, обжёгся!"
                </p>
                <button className="answerButton" onClick={wayGotBurned}>
                    "А это бодрит!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 5) && character.hp === 0
            ? <div>
                <p className="description">
                    Вместе с факелом загорелась и твоя рубаха. Не в силах сбить огонь, ты погибаешь
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default GotBurned;