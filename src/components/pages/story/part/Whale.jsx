import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addLuck, addPartPlot, removePartPlot } from "../../../store/characterSlice";
import { removeSeaItems } from "../../../store/itemsSlice";

const Whale = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const continueOnTheWay = () => {
        dispatch(removePartPlot({id: 161, title: 'Встреча с китом'}))
        dispatch(addPartPlot({id: 160, title: 'Кит на удачу'}))
        dispatch(removeSeaItems({id: 56, item: 'Кит'}))
        dispatch(addLuck(1))
        navigate('/sea')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 161)
            ? <div>
                <p className="description">
                    В тёмной воде что-то показалось и вновь исчезло. "Очередное испытание по твою искалеченную душу," - так 
                    подумал Кросби. Это что-то массивное, и оно задело лодку. Её качнуло, и ты схватился за верёвку, скрепляющую между 
                    собой брёвна. "Если б я только мог начать сначала," - подумал моряк. И в этот момент тебя окатил фонтан. 
                    Перед тобой вынырнул кит, совсем недалеко, и посмотрел на тебя одним большим глазом. Ещё одно живое существо 
                    в бескрайнем океане одиночества. Встреча длится недолго, и кит уплывает на глубину. Наконец, улыбка 
                    расцветает на твоём лице, потому что:
                </p>
                <p className="dialog">
                    "Увидеть кита в плавании - к удаче!"
                </p>
                <button className="answerButton" onClick={continueOnTheWay}>
                    Продолжить путь
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Whale;