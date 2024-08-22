import { useDispatch, useSelector } from "react-redux";
import AgainDied from "../../../AgainDied";
import { useNavigate } from "react-router-dom";
import { removePartPlot } from "../../../store/characterSlice";

const FallInTheBay = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const standUp = () => {
        dispatch(removePartPlot({id: 102, title: 'Упасть в заливе'}))
        navigate('/west')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 102) && character.hp > 0
            ? <div>
                <p className="description">
                    Ты подскальзываешься, больно падаешь на мокрый камень и медленно встаёшь, приходя в себя
                </p>
                <button className="answerButton" onClick={standUp}>
                    Подняться
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 102) && character.hp === 0
            ? <div>
                <p className="description">
                    Ты подскальзываешься, больно падаешь на мокрый камень, но уже не встаёшь. Необходимо быть осторожней
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default FallInTheBay;