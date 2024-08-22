import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeInventory, removePartPlot } from "../../../store/characterSlice";

const ShitHappensTorch = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayShitHappensTorch = () => {
        dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
        dispatch(removePartPlot({id: 13, title: 'Дерьмо случается: факел'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 13)
            ? <div>
                <p className="description">
                    Пытаясь сделать факел, ты роняешь бутылку с ромом, она разбивается вдребезги
                </p>
                <button className="answerButton" onClick={wayShitHappensTorch}>
                    "Проклятье!"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default ShitHappensTorch;