import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePartPlot } from "../../../store/characterSlice";

const GotPoisonedFish = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayGotPoisonedSalmon = () => {
        dispatch(removePartPlot({id: 11, title: 'Отравился лососем'}))
        navigate(-1)
    };

    const wayGotPoisonedTuna = () => {
        dispatch(removePartPlot({id: 12, title: 'Отравился тунцом'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 11)
            ? <div>
                <p className="dialog">
                    "Питательно, хотя мой желудок не привык к такому. Фу-фу-фууу!"
                </p>
                <button className="answerButton" onClick={wayGotPoisonedSalmon}>
                    "Что-то мне дурно..."
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 12)
            ? <div>
                <p className="dialog">
                    "Не очень вкусно и не очень полезно"
                </p>
                <button className="answerButton" onClick={wayGotPoisonedTuna}>
                    "Но немного помогло"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default GotPoisonedFish;