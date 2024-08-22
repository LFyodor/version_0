import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPartPlot, removePartPlot } from "../../../store/characterSlice";

const Inscription = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const moveAway = () => {
        dispatch(removePartPlot({id: 199, title: 'Надпись у входа в пещеру'}))
        dispatch(addPartPlot({id: 200, title: 'Тринадцать'}))
        navigate('/south')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 199)
            ? <div>
                <p className="description">
                    Ты замечаешь надпись у входа в пещеру. Судя по всему, она здесь очень давно, только прочесть её стало 
                    возможным сейчас:
                </p>
                <p className="dialog">
                    "После трёх шагов четвёртого не жди, сам приходи... Тринадцать..."
                </p>
                <button className="answerButton" onClick={moveAway}>
                    Отойти
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Inscription;