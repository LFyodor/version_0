import React from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addPartPlot, addTime, clearUsedDark } from "../../store/characterSlice";
import { removeSoutheastItems } from "../../store/itemsSlice";
import SoutheastActions from "../../actions/SoutheastActions";
import SleepOnTheSand from "../../SleepOnTheSand";

const Southeast = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const waySouth = () => {
        dispatch(addTime(1))
        navigate('/south')
    };

    const wayBonfire = () => {
        if (character.bonfire > 0) {
            dispatch(clearUsedDark())
        }
        navigate('/bonfire')
    };

    const waySea = () => {
        if (items.southeastItems.find((elem) => elem.id === 17)) {
            dispatch(removeSoutheastItems({id: 17, item: 'Плот на скорую руку'}))
            dispatch(addPartPlot({id: 158, title: 'На плохом плоту'}))
        } else {
            dispatch(removeSoutheastItems({id: 19, item: 'Отличный плот'}))
            dispatch(addPartPlot({id: 159, title: 'На хорошем плоту'}))
        }
        dispatch(addPartPlot({id: 165, title: 'Близко к берегу'}))
        dispatch(addTime(1))
        navigate('/sea')
    };

    const wayEast = () => {
        dispatch(addTime(1))
        navigate('/east')
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
                            Юго-восток острова
                        </p>
                        <p className="description">
                            {items.southeastItems.find((elem) => elem.id === 47)
                            ? `Посреди песчаного пляжа расположился внушительный осколок мачты.`
                            : `Песчаный пляж.`}
                            {character.partPlot.find((part) => part.id === 17)
                            ? ` Возле костра можно набраться сил и отдохнуть.`
                            : ''}
                            {items.southeastItems.find((elem) => elem.id === 37)
                            ? ` Рядом бревно для постройки плота.`
                            : ''}
                            {items.southeastItems.find((elem) => elem.id === 38)
                            ? ` Там же и бревно, которое один человек не поднимет, но из которого вкупе с мачтой можно сделать отличный плот.`
                            : ''}
                            {items.southeastItems.find((elem) => elem.id === 40)
                            ? ` Неподалёку лежит выброшенный на берег ящик с повреждённым грузом.`
                            : ''} 
                            {items.southeastItems.find((elem) => elem.id === 2)
                            ? ` В темноте видно, как что-то длиною в локоть торчит из песка.`
                            : ''}
                            {items.southeastItems.find((elem) => elem.id === 17) ||
                            items.southeastItems.find((elem) => elem.id === 19)
                            ? ` У воды плот, готовый в любой момент отправиться в плавание.`
                            : ''}
                        </p>
                        <div className="way">
                            <button onClick={waySouth}>
                                Пойти на юг острова
                            </button>
                            {character.partPlot.find((part) => part.id === 17)
                            ? <button onClick={wayBonfire}>
                                Подойти к костру
                            </button>
                            : ''}
                            {items.southeastItems.find((elem) => elem.id === 17) ||
                            items.southeastItems.find((elem) => elem.id === 19)
                            ? <button onClick={waySea}>
                                Отправиться в море
                            </button>
                            : ''}
                            <button onClick={wayEast}>
                                Пойти на восток острова
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <SoutheastActions />
                        <CommonActions />
                    </div>
                </div>
                : <SleepOnTheSand />}
            </div>
        </div>
    );
};

export default Southeast;