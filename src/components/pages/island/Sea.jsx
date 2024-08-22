import React from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addPartPlot, addTime, removePartPlot } from "../../store/characterSlice";
import SleepOnRaft from "../../SleepOnRaft";
import SeaActions from "../../actions/SeaActions";
import { addSoutheastItems } from "../../store/itemsSlice";

const Sea = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const waySoutheast = () => {
        if (character.partPlot.find((part) => part.id === 158)) {
            dispatch(removePartPlot({id: 158, title: 'На плохом плоту'}))
            dispatch(addSoutheastItems({id: 17, item: 'Плот на скорую руку'}))
        } else {
            dispatch(removePartPlot({id: 159, title: 'На хорошем плоту'}))
            dispatch(addSoutheastItems({id: 19, item: 'Отличный плот'}))
        }
        dispatch(removePartPlot({id: 165, title: 'Близко к берегу'}))
        dispatch(removePartPlot({id: 166, title: 'Дальше от берега'}))
        dispatch(removePartPlot({id: 167, title: 'Далеко от берега'}))
        dispatch(removePartPlot({id: 168, title: 'Остров не видно'}))
        dispatch(addTime(3))
        navigate('/southeast')
    };

    const swimFurther1 = () => {
        dispatch(removePartPlot({id: 165, title: 'Близко к берегу'}))
        dispatch(addPartPlot({id: 166, title: 'Дальше от берега'}))
        dispatch(addTime(1))       
    };

    const swimFurther2 = () => {
        dispatch(removePartPlot({id: 166, title: 'Дальше от берега'}))
        dispatch(addPartPlot({id: 167, title: 'Далеко от берега'}))
        dispatch(addTime(1))
    };

    const swimFurther3 = () => {
        dispatch(removePartPlot({id: 167, title: 'Далеко от берега'}))
        dispatch(addPartPlot({id: 168, title: 'Остров не видно'}))
        dispatch(addTime(1))
    };

    const swimFurther4 = () => {
        dispatch(removePartPlot({id: 168, title: 'Остров не видно'}))
        dispatch(addPartPlot({id: 169, title: 'Потеряться вновь'}))
        dispatch(addPartPlot({id: 197, title: 'Возвращение на остров'}))
        dispatch(addTime(1))
    };

    const northIsland1 = () => {
        dispatch(addPartPlot({id: 172, title: 'Сносит на скалы'}))
        // Voyage
        navigate('/partplot')
    };

    const northIsland2 = () => {
        if (character.partPlot.find((part) => part.id === 159)) {
            dispatch(addPartPlot({id: 173, title: 'Обойти скалы'}))
        } else {
            dispatch(addPartPlot({id: 172, title: 'Сносит на скалы'}))
        }
        dispatch(addTime(1))
        // Voyage
         navigate('/partplot')
    };

    const survivor = () => {
        dispatch(removePartPlot({id: 168, title: 'Остров не видно'}))
        dispatch(addPartPlot({id: 175, title: 'Выживший'}))
        dispatch(addPartPlot({id: 197, title: 'Возвращение на остров'}))
        dispatch(addTime(1))
        // Voyage
        navigate('/partplot')
    };

    const awaitThis = () => {
        dispatch(addTime(1))
    };

    const seagull = () => {
        dispatch(removePartPlot({id: 169, title: 'Потеряться вновь'}))
        dispatch(addPartPlot({id: 196, title: 'За чайкой'}))
        // Seagull
        navigate('/partplot')
    };

    return (
        <div>
            <CharacterInfo />
            <div className="table">
                <InventoryInfo />
                {character.hp > 0 && character.tiredness <= 32
                ? <div className="locationAndActions">
                    <div className="location">
                        <p className="description">
                            Открытое море
                        </p>
                        <p className="description">
                            Бескрайний простор, готовый погубить любого отважного моряка. И в то же время единственный путь домой.
                            {character.partPlot.find((part) => part.id === 165)
                            ? ` Берег совсем близко, при желании можно легко и быстро вернуться обратно.`: ''}
                            {character.partPlot.find((part) => part.id === 166)
                            ? ` Силуэт острова всё ещё видно целиком во тьме.`: ''}
                            {character.partPlot.find((part) => part.id === 167)
                            ? ` Силуэт острова меньше ладони на горизонте и слабо различим во тьме.`: ''}
                            {character.partPlot.find((part) => part.id === 168)
                            ? ` Острова больше не видно и не слышно, но вернуться ещё не поздно. Зато в стороне показались обломки 
                            корабля. Там может быть что-то или кто-то...`: ''}
                            {character.partPlot.find((part) => part.id === 169)
                            ? ` Но ты больше не знаешь, куда плыть.`: ''}
                            {character.partPlot.find((part) => part.id === 171)
                            ? ` И, пусть ты не видишь его, но знаешь про северный остров, что скрыт во тьме.`: ''}
                        </p>
                        <div className="way">
                            {character.partPlot.find((part) => part.id === 169)
                            ? ''
                            : <button onClick={waySoutheast}>
                                Вернуться на остров
                            </button>}
                            {character.partPlot.find((part) => part.id === 165)
                            ? <button onClick={swimFurther1}>
                                Плыть дальше
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 166)
                            ? <button onClick={swimFurther2}>
                                Плыть дальше
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 167)
                            ? <button onClick={swimFurther3}>
                                Плыть дальше
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 168)
                            ? <button onClick={swimFurther4}>
                                Плыть дальше
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 166) &&
                            character.partPlot.find((part) => part.id === 171)
                            ? <button onClick={northIsland1}>
                                Свернуть к северному острову
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 167) &&
                            character.partPlot.find((part) => part.id === 171)
                            ? <button onClick={northIsland2}>
                                Свернуть к северному острову
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 168)
                            ? <button onClick={survivor}>
                                Плыть к обломку судна
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 169)
                            ? <button onClick={awaitThis}>
                                Плыть в пустоту
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 181) &&
                            character.time/5 === 0
                            ? <button onClick={seagull}>
                                Прислушаться к чайке
                            </button>
                            : ''}
                        </div>
                    </div>
                    <div className="actions">
                        <SeaActions />
                        <CommonActions />
                    </div>
                </div>
                : <SleepOnRaft />}
            </div>
        </div>
    );
};

export default Sea; 