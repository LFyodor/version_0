import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePartPlot } from "../../../store/characterSlice";

const Boots = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayBoots = () => {
        dispatch(removePartPlot({id: 3, title: 'Сапоги'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 3)
            ? <div>
                <p className="dialog">
                    "Так-то лучше!"
                </p>
                <button className="answerButton" onClick={wayBoots}>
                    "Мои ножки достойны комфорта"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Boots;