import { useDispatch } from "react-redux";
import { addTime } from "../store/characterSlice";

const Wait = () => {
    const dispatch = useDispatch();

    const wait = () => {
        dispatch(addTime(1))
    };

    return (
        <button onClick={wait}>
            Ждать
        </button>
    );
};

export default Wait;