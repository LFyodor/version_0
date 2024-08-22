import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addCrafts, removePartPlot } from "../../../store/characterSlice";

const Knowledge = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const exit = () => {
        dispatch(removePartPlot({id: 157, title: 'Повышение знаний'}))
        dispatch(addCrafts())
        navigate('/cave')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 157)
            ? <div>
                <p className="description">
                    Рука сама тянется к светящимся символам и буквам. От прикосновения по всей пещере проносится волна тусклого света, как 
                    и перо за поясом. Ты прикладываешь ухо к холодному камню и закрываешь глаза. Из глубины доносится 
                    шёпот незнакомых слов и знакомых. Некоторые всплывают в памяти, ты слышал их на базарной площади каждого города, 
                    что посещал за свою моряцкую жизнь. Неожиданно голову пробивает тёплое ощущение, потом снова и снова... 
                    Родные слова достигли твоего сердца. Они шепчутся невпопад и примешиваясь к другим, но среди мыслей 
                    возникает одна... Ты открываешь глаза и произносишь:
                </p>
                <p className="dialog">
                    "Я знаю плотницкое дело!"
                </p>
                <p className="description">
                    И словно рядом с собой слышишь голос Хаммонда:
                </p>
                <p className="dialog">
                    "Проверим?"
                </p>
                <button className="answerButton" onClick={exit}>
                    На выход
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Knowledge;