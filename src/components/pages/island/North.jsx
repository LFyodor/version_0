import React from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addPartPlot, addTime, decreaseHp } from "../../store/characterSlice";
import NorthActions from "../../actions/NorthActions";
import SleepOnTheRock from "../../SleepOnTheRock";

const North = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayNorthwest = () => {
        dispatch(addTime(1))
        navigate('/northwest')
    };

    const wayNortheast = () => {
        dispatch(addTime(1))
        navigate('/northeast')
    };

    const wayStop = () => {
        if (character.hp > 2) {
            dispatch(addPartPlot({id: 82, title: 'Нет прохода из-за лозы'}))
        } else {
            dispatch(addPartPlot({id: 83, title: 'Застрял в шипах'}))
        }
        dispatch(addTime(1))
        dispatch(decreaseHp(2))
        // Vine
        navigate('/partplot')
    };

    const wayCenter = () => {
        dispatch(addTime(1))
        navigate('/center')
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
                            Север острова
                        </p>
                        <p className="description">
                            Здесь чёрная гора - сердце острова - подходит ближе всего к каменистому побережью, оставляя узкий проход 
                            на северо-запад. Склон горы густо порос сухой лозой, крепко впивающийся шипами и в камень, и в плоть.
                            {(character.torch > 0 || character.usedDark > 10) && character.drunkenness <= 6 &&
                            items.northItems.find((elem) => elem.id === 3)
                            ? ` На одной из ветвей лозы висит чёрная тряпка. Уже и не скажешь точно, чем это было раньше.`
                            : ''}
                            {(character.torch > 0 || character.usedDark > 30) &&
                            character.tiredness <= 16 && character.drunkenness <= 6
                            ? ` В темноте можно рассмотреть тропинку, извивающуюся и уходящую меж высоких грубых камней вверх.`
                            + `${items.northItems.find((elem) => elem.id === 52)
                                ? ` Но из-за шипастой поросли туда не пройти.` : ''}`
                            : ''}
                            {items.northItems.find((elem) => elem.id === 52) && items.northItems.find((elem) => elem.id === 14)
                            ? ` И не подобрать потерянный нож.`
                            : items.northItems.find((elem) => elem.id === 14) && (character.usedDark > 20 || character.torch > 0)
                                ? ` Теперь можно добраться до потерянного ножа.`
                                : ''}
                        </p>
                        <div className="way">
                            <button onClick={wayNorthwest}>
                                Пойти на северо-запад острова
                            </button>
                            {character.usedDark > 30 &&
                            character.tiredness <= 16 && character.drunkenness <= 6 &&
                            items.northItems.find((elem) => elem.id === 52)
                            ? <button onClick={wayStop}>
                                Пролезть через лозу к тропинке
                            </button>
                            : (character.torch > 0 || character.usedDark > 30) &&
                            character.tiredness <= 16 && character.drunkenness <= 6
                                ? <button onClick={wayCenter}>
                                    Подняться по тропинке на гору
                                </button>
                                : ''}
                            <button onClick={wayNortheast}>
                                Пойти на северо-восток острова
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <NorthActions />
                        <CommonActions />
                    </div>
                </div>
                : <SleepOnTheRock /> }
            </div>
        </div>
    )
}

export default North;