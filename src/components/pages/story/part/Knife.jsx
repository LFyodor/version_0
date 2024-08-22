import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInventory, addPartPlot, addTiredness, removePartPlot } from "../../../store/characterSlice";
import { removeSouthItems } from "../../../store/itemsSlice";

const Knife = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tryToGet = () => {
        dispatch(removePartPlot({id: 30, title: 'Попытка с ножом'}))
        dispatch(addPartPlot({id: 31, title: 'Неудача с ножом'}))
        dispatch(addTiredness(1))
    };

    const fail = () => {
        dispatch(removePartPlot({id: 31, title: 'Неудача с ножом'}))
        dispatch(removePartPlot({id: 32, title: 'Нож в расщелине'}))
        dispatch(addPartPlot({id: 33, title: 'Нож в расщелине глубже'}))
        navigate('/south')
    };

    const leaveKnife = () => {
        dispatch(removePartPlot({id: 30, title: 'Попытка с ножом'}))
        navigate('/south')
    };

    const getKnife = () => {
        dispatch(removePartPlot({id: 114, title: 'Достать нож'}))
        dispatch(removePartPlot({id: 33, title: 'Нож в расщелине глубже'}))
        dispatch(removeSouthItems({id: 14, item: 'Нож'}))
        dispatch(addInventory({id: 14, item: 'Нож'}))
        navigate('/south')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 30)
            ? <div>
                <p className="description">
                    В небольшой каменной расщелине ты замечаешь отблеск металла - это нож. Весьма полезный предмет во многих делах. 
                    Можно попытаться его достать, но выглядит это непросто
                </p>
                {character.hp > 3
                ? <button className="answerButton" onClick={tryToGet}>
                    Достать рукой
                </button>
                : ''}
                {character.hp > 3
                ? <button className="answerButton" onClick={tryToGet}>
                    Использовать палку
                </button>
                : ''}
                <button className="answerButton" onClick={leaveKnife}>
                    Оставить затею
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 31)
            ? <div>
                <p className="description">
                    Ты почти подтягиваешь к себе нож, но он срывается и падает в расщелину ещё глубже
                </p>
                <button className="answerButton" onClick={fail}>
                    "Ничего не поделать, вернусь позже"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 114)
            ? <div>
                <p className="description">
                    Ты находишь расщелину с ножом. Он провалился глубоко, но и расщелина стала больше. Спускаешься вниз и протягиваешь 
                    к нему руку
                </p>
                <button className="answerButton" onClick={getKnife}>
                    "Иди к папочке"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Knife;