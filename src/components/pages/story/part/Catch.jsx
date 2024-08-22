import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, removePartPlot } from "../../../store/characterSlice";
import { removeRockItems } from "../../../store/itemsSlice";

const Catch = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const rag = () => {
        dispatch(removePartPlot({id: 67, title: 'Улов: тряпка'}))
        dispatch(removeRockItems({id: 3, item: 'Рваная тряпка'}))
        dispatch(addInventory({id: 3, item: 'Рваная тряпка'}))
        navigate('/rock')
    };

    const salmon = () => {
        dispatch(removePartPlot({id: 68, title: 'Улов: лосось'}))
        dispatch(addInventory({id: 22, item: 'Свежий лосось'}))
        navigate('/rock')
    };

    const tuna = () => {
        dispatch(removePartPlot({id: 69, title: 'Улов: тунец'}))
        dispatch(addInventory({id: 24, item: 'Свежий тунец'}))
        navigate('/rock')
    };

    const boot = () => {
        dispatch(removePartPlot({id: 70, title: 'Улов: сапог'}))
        dispatch(removeRockItems({id: 41, item: 'Левый сапог'}))
        dispatch(addInventory({id: 41, item: 'Левый сапог'}))
        navigate('/rock')
    };

    const rum = () => {
        dispatch(removePartPlot({id: 119, title: 'Улов: ром'}))
        dispatch(addInventory({id: 6, item: 'Бутылка рома'}))
        navigate('/rock')
    };

    const trout = () => {
        dispatch(removePartPlot({id: 120, title: 'Улов: форель'}))
        dispatch(addInventory({id: 20, item: 'Свежая форель'}))
        navigate('/center')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 67)
            ? <div>
                <p className="dialog">
                    "Я поймал тряпку..."
                </p>
                <button className="answerButton" onClick={rag}>
                    "Отличный будет суп"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 68)
            ? <div>
                <p className="dialog">
                    "Настоящий лосось! Рыбак из меня отличный"
                </p>
                <button className="answerButton" onClick={salmon}>
                    "А вот повар - не знаю"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 69)
            ? <div>
                <p className="dialog">
                    "Средненький тунец. Но я не в том положении, чтобы перебирать"
                </p>
                <button className="answerButton" onClick={tuna}>
                    "Главное - сытый желудок"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 70)
            ? <div>
                {character.inventory.find((elem) => elem.id === 42)
                ? <p className="dialog">
                    "А вот и левый сапог! Останусь голоден, но доволен"
                </p>
                : <p className="dialog">
                    "Я выловил левый сапог, значит где-то должен быть и правый"
                </p>}
                <button className="answerButton" onClick={boot}>
                    "Интересный подарок судьбы"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 119)
            ? <div>
                <p className="dialog">
                    "Лучшая рыба, что я когда-либо видел, - рыба-ром!"
                </p>
                <button className="answerButton" onClick={rum}>
                    "Нажрусь до одури"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 120)
            ? <div>
                <p className="dialog">
                    "Это форель! От голода и жажды с чудо-озером я не умру"
                </p>
                <button className="answerButton" onClick={trout}>
                    "И это всё моё!"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Catch;