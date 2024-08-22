import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addTiredness, decreaseHp, removePartPlot } from "../../../store/characterSlice";
import AgainDied from "../../../AgainDied";

const FightWithSnake = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const minorWound = () => {
        dispatch(removePartPlot({id: 121, title: 'Битва со змеёй'}))
        dispatch(decreaseHp(1))
        navigate('/center')
    };

    const terribleWound = () => {
        dispatch(removePartPlot({id: 121, title: 'Битва со змеёй'}))
        dispatch(decreaseHp(3))
        dispatch(addTiredness(3))
        navigate('/center')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 121) && character.hp > 3
            ? <div>
                <p className="description">
                    {character.inventory.find((elem) => elem.id === 12)
                    ? `Из воды выпрыгивает огромная змея. Ты успеваешь отпрыгнуть, но получаешь лёгкую рану. На этот раз 
                    тебе удалось выжить.`
                    : `Из воды выпрыгивает огромная змея и уносит тебя под воду. Ваша битва затягивается, но тебе удаётся 
                    выбраться и спастись, получив жуткую рану и потеряв много сил.`}
                </p>
                <button className="answerButton"
                onClick={character.inventory.find((elem) => elem.id === 12) ? minorWound : terribleWound}>
                    {character.inventory.find((elem) => elem.id === 12)
                    ? `Надо быть настороже` : `Этот червяк меня убьёт`}
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 121) && character.hp <= 3
            ? <div>
                <p className="description">
                    Огромная змея неожиданно нападает из воды. Ты не в силах оказать сопротивление и в глубине души понимаешь, 
                    необходимо смириться...
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default FightWithSnake;