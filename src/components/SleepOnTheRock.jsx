import { useDispatch, useSelector } from "react-redux";
import { addPartPlot, decreaseHp, sleepHere } from "./store/characterSlice";
import AgainDied from "./AgainDied";
import { useNavigate } from "react-router-dom";

const SleepOnTheRock = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SleepHere = () => {
        if (character.partPlot.find((part) => part.id === 15) && character.hp > 1) {
            dispatch(addPartPlot({id: 202, title: 'Сон'}))
            // Dream
            navigate('/partplot')
        }
        dispatch(decreaseHp(1))
        dispatch(sleepHere(character.tiredness - 32))
    };

    return (
        <div>
            {character.hp > 0 && character.tiredness > 32
            ? <div>
                <p className="description">
                    Обессиленный и уставший, ты проваливаешься в сон на месте и случайно бьёшься головой о камень
                </p>
                <button className="answerButton" onClick={SleepHere}>
                    Спать здесь
                </button>
            </div>
            : character.hp <= 0
                ? <div>
                    <p className="description">
                        Удар стал критическим. Тьма окутывает тебя, и кошмар становится явью... Остров вновь стал необитаем
                    </p>
                    <AgainDied />
                </div>
                : ''}
        </div>
    );
};

export default SleepOnTheRock;