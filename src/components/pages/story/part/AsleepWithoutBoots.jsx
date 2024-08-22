import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeInventory, removePartPlot, sleepHere } from "../../../store/characterSlice";
import { addSouthwestItems } from "../../../store/itemsSlice";

const AsleepWithoutBoots = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayAsleepWithoutBoots = () => {
        dispatch(removePartPlot({id: 6, title: 'Уснул без сапог'}))
        dispatch(sleepHere(4))
        navigate(-1)
    };

    const wayAsleepWithoutOneBoot = () => {
        dispatch(removePartPlot({id: 6, title: 'Уснул без сапог'}))
        dispatch(removeInventory({id: 41, item: 'Левый сапог'}))
        dispatch(addSouthwestItems({id: 41, item: 'Левый сапог'}))
        dispatch(sleepHere(4))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 6) && character.luck >= 2
            ? <div>
                <p className="dialog">
                    "Я был пьян и уснул, пытаясь обуться..."
                </p>
                <button className="answerButton" onClick={wayAsleepWithoutBoots}>
                    "Надеюсь, никто не видел"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 6) && character.luck < 2
            ? <div>
                <p className="dialog">
                    "Я был пьян и уснул, пытаясь обуться..."
                </p>
                <button className="answerButton" onClick={wayAsleepWithoutOneBoot}>
                    "А где мой второй сапог?!"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default AsleepWithoutBoots;