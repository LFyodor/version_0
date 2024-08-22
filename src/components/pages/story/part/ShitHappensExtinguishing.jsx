import { useDispatch, useSelector } from "react-redux";
import { removePartPlot } from "../../../store/characterSlice";
import { useNavigate } from "react-router-dom";
import AgainDied from "../../../AgainDied";

const ShitHappensExtinguishing = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayShitHappensExtinguishing = () => {
        dispatch(removePartPlot({id: 14, title: 'Дерьмо случается: тушим факел'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 14) && character.hp > 0
            ? <div>
                <p className="description">
                    Пытаясь потушить факел ногой, ты ломаешь его и случайно ранишь ногу
                </p>
                <button className="answerButton" onClick={wayShitHappensExtinguishing}>
                    "Я сам себе враг"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 14) && character.hp === 0
            ? <div>
                <p className="description">
                    Пытаясь потушить факел ногой, ты ломаешь его, случайно ранишь ногу и истекаешь кровью
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default ShitHappensExtinguishing;