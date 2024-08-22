import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { againBegin, load } from "./store/characterSlice";
import { againBeginItems, loadItems } from "./store/itemsSlice";

const AgainDied = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayDeath = () => {
        dispatch(againBegin())
        dispatch(againBeginItems())
        localStorage.clear()
        navigate('/')
    };

    const wakeUp = () => {
        dispatch(load())
        dispatch(loadItems())
        navigate('/bonfire')
    };

    return (
        <div>
            <p className="dialog">
                "Необходимо..."
            </p>
            <button className="answerButton" onClick={wayDeath}>
                "Начать с нуля"
            </button>
            {localStorage.length !== 0
            ? <button className="answerButton" onClick={wakeUp}>
                "Проснуться!"
            </button>
            : ''}
        </div>
    );
};

export default AgainDied;