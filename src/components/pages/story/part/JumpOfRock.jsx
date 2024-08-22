import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { againBegin } from "../../../store/characterSlice";

const JumpOfRock = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayDeath = () => {
        dispatch(againBegin())
        localStorage.clear()
        navigate('/')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 81)
            ? <div>
                <p className="dialog">
                    "Вот я был, и вот меня не стало"
                </p>
                <button className="answerButton" onClick={wayDeath}>
                    "Начать с нуля"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default JumpOfRock;