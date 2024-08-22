import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, addLuck, addPartPlot, decreaseLuck, removeInventory, removePartPlot } from "../../../store/characterSlice";
import { removeRockItems } from "../../../store/itemsSlice";

const Seagull = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const stick = () => {
        if (character.luck >= 2 && character.drunkenness <= 6) {
            dispatch(addPartPlot({id: 72, title: 'Попадание в чайку'}))
        } else {
            dispatch(addPartPlot({id: 73, title: 'Промах с чайкой'}))
            dispatch(removeInventory({id: 2, item: 'Короткая крепкая палка'}))
        }
        dispatch(removePartPlot({id: 71, title: 'Чайка'}))
    };

    const bottle = () => {
        if (character.luck >= 2 && character.drunkenness <= 6) {
            dispatch(addPartPlot({id: 72, title: 'Попадание в чайку'}))
        } else if (character.inventory.find((elem) => elem.id === 8)) {
            dispatch(addPartPlot({id: 73, title: 'Промах с чайкой'}))
            dispatch(removeInventory({id: 8, item: 'Пустая бутыль'}))
        } else {
            dispatch(addPartPlot({id: 73, title: 'Промах с чайкой'}))
            dispatch(removeInventory({id: 9, item: 'Пустая бутыль'}))
        }
        dispatch(removePartPlot({id: 71, title: 'Чайка'}))
    };

    const knife = () => {
        if (character.luck >= 2 && character.drunkenness <= 6) {
            dispatch(addPartPlot({id: 72, title: 'Попадание в чайку'}))
        } else {
            dispatch(addPartPlot({id: 73, title: 'Промах с чайкой'}))
            dispatch(removeInventory({id: 14, item: 'Нож'}))
        }
        dispatch(removePartPlot({id: 71, title: 'Чайка'}))
    };

    const axe = () => {
        if (character.luck >= 2 && character.drunkenness <= 6) {
            dispatch(addPartPlot({id: 72, title: 'Попадание в чайку'}))
        } else {
            dispatch(addPartPlot({id: 73, title: 'Промах с чайкой'}))
            dispatch(removeInventory({id: 15, item: 'Топор'}))
        }
        dispatch(removePartPlot({id: 71, title: 'Чайка'}))
    };

    const hitTheSeagull = () => {
        dispatch(removePartPlot({id: 72, title: 'Попадание в чайку'}))
        dispatch(removeRockItems({id: 49, item: 'Дохлая чайка'}))
        dispatch(addInventory({id: 49, item: 'Дохлая чайка'}))
        dispatch(decreaseLuck(1))
        navigate('/rock')
    };

    const missTheSeagull = () => {
        dispatch(removePartPlot({id: 73, title: 'Промах с чайкой'}))
        dispatch(removeRockItems({id: 49, item: 'Дохлая чайка'}))
        dispatch(decreaseLuck(1))
        navigate('/rock')
    };

    const trout = () => {
        dispatch(removePartPlot({id: 71, title: 'Чайка'}))
        dispatch(addPartPlot({id: 74, title: 'Покормил чайку'}))
        dispatch(removeInventory({id: 20, item: 'Свежая форель'}))
    };

    const salmon = () => {
        dispatch(removePartPlot({id: 71, title: 'Чайка'}))
        dispatch(addPartPlot({id: 74, title: 'Покормил чайку'}))
        dispatch(removeInventory({id: 22, item: 'Свежий лосось'}))
    };

    const tuna = () => {
        dispatch(removePartPlot({id: 71, title: 'Чайка'}))
        dispatch(addPartPlot({id: 74, title: 'Покормил чайку'}))
        dispatch(removeInventory({id: 24, item: 'Свежий тунец'}))
    };

    const crackers = () => {
        dispatch(removePartPlot({id: 71, title: 'Чайка'}))
        dispatch(addPartPlot({id: 74, title: 'Покормил чайку'}))
        dispatch(removeInventory({id: 29, item: 'Сухари'}))
    };

    const feedTheSeagull = () => {
        dispatch(removePartPlot({id: 74, title: 'Покормил чайку'}))
        dispatch(removeRockItems({id: 49, item: 'Дохлая чайка'}))
        dispatch(addPartPlot({id: 181, title: 'Благодарность чайки'}))
        dispatch(addLuck(1))
        navigate('/rock')
    };

    const waySeagull = () => {
        dispatch(removePartPlot({id: 71, title: 'Чайка'}))
        dispatch(removeRockItems({id: 49, item: 'Дохлая чайка'}))
        navigate('/rock')
    };

    const seagullCry = () => {
        dispatch(removePartPlot({id: 196, title: 'За чайкой'}))
        dispatch(removePartPlot({id: 181, title: 'Благодарность чайки'}))
        navigate('/southwest')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 71)
            ? <div>
                <p className="description">
                    На камень в пяти шагах от тебя села чайка. Она пронзительно кричит и не улетает. 
                    С таким напарником улова не видать. Необходимо срочно что-то сделать
                </p>
                {character.inventory.find((elem) => elem.id === 2)
                ? <button className="answerButton" onClick={stick}>
                    Бросить палкой
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 8) || character.inventory.find((elem) => elem.id === 9)
                ? <button className="answerButton" onClick={bottle}>
                    Бросить пустой бутылкой
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 14)
                ? <button className="answerButton" onClick={knife}>
                    Бросить нож
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15)
                ? <button className="answerButton" onClick={axe}>
                    Бросить топор
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 20)
                ? <button className="answerButton" onClick={trout}>
                    Покормить форелью
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 22)
                ? <button className="answerButton" onClick={salmon}>
                    Покормить лососем
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 24)
                ? <button className="answerButton" onClick={tuna}>
                    Покормить тунцом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 29)
                ? <button className="answerButton" onClick={crackers}>
                    Покормить сухарями
                </button>
                : ''}
                <button className="answerButton" onClick={waySeagull}>
                    Прогнать
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 72)
            ? <div>
                <p className="description">
                    Ты попадаешь точно в чайку и забираешь её себе, не пропадать же добру
                </p>
                <button className="answerButton" onClick={hitTheSeagull}>
                    "Вполне сойдёт за курицу"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 73)
            ? <div>
                <p className="description">
                    Ты промахиваешься. Чайка улетает, а вместе с ней и брошенный предмет. Хотя бы тихо стало
                </p>
                <button className="answerButton" onClick={missTheSeagull}>
                    "Вот же дряньство!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 74)
            ? <div>
                <p className="description">
                    Ты бросаешь лакомство между тобой и чайкой. В три прыжка она оказывается у добычи, подхватывает её целиком и улетает, 
                    оставляя тебя в тишине
                </p>
                <button className="answerButton" onClick={feedTheSeagull}>
                    "Аж на сердце потеплело"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 196)
            ? <div>
                <p className="description">
                    После недолгих блужданий буквально вслепую и наугад ты слишишь крик чайки. Эти птицы гнездятся на скалах и далеко от 
                    берега не улетают.
                </p>
                <button className="answerButton" onClick={seagullCry}>
                    Плыть на крик чайки
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Seagull;