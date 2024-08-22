import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addTime, removePartPlot } from "../../../store/characterSlice";

const ReturnToTheIsland = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const returnEnd = () => {
        if (character.partPlot.find((part) => part.id === 158)) {
            dispatch(removePartPlot({id: 158, title: 'На плохом плоту'}))
        } else {
            dispatch(removePartPlot({id: 159, title: 'На хорошем плоту'}))
        }
        dispatch(removePartPlot({id: 165, title: 'Близко к берегу'}))
        dispatch(removePartPlot({id: 166, title: 'Дальше от берега'}))
        dispatch(removePartPlot({id: 167, title: 'Далеко от берега'}))
        dispatch(removePartPlot({id: 168, title: 'Остров не видно'}))
        dispatch(removePartPlot({id: 198, title: 'Лишиться плота'}))
        dispatch(addTime(3))
        navigate('/southwest')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 198)
            ? <div>
                <p className="description">
                    Ты подплываешь к берегу, спрыгиваешь в нескольких метрах от него и бежишь ощутить твёрдую почву под ногами. 
                    И, вскинув голову к верху, замечаешь потухший вулкан в центре острова. В страхе ты оборачиваешься и видишь, как 
                    непривязанный плот уносит севернее, в опасный залив. Ты снова здесь, тебе не выбраться, смирись...
                </p>
                <button className="answerButton" onClick={returnEnd}>
                    "Я проклят"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default ReturnToTheIsland;