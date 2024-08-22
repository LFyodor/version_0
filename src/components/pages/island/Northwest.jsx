import React from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addTime } from "../../store/characterSlice";
import NorthwestActions from "../../actions/NorthwestActions";
import SleepOnTheRock from "../../SleepOnTheRock";

const Northwest = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayWest = () => {
        dispatch(addTime(1))
        navigate('/west')
    };

    const wayNorth = () => {
        dispatch(addTime(1))
        navigate('/north')
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
                            Северо-запад острова
                        </p>
                        <p className="description">
                            Каменистый пляж, упирающийся в залив на западной части острова.
                            {items.northwestItems.find((elem) => elem.id === 40) &&
                            (character.usedDark > 10 || character.torch > 0)
                            ? ` Из-под гальки торчит уголок ящика с повреждённым грузом.`
                            : ''}
                            {items.northwestItems.find((elem) => elem.id === 2) &&
                            Math.floor(character.time/24) >= 2
                            ? ` У кромки воды лежит выброшенная совсем недавно на берег палка для факела.`
                            : ''}
                        </p>
                        <div className="way">
                            <button onClick={wayWest}>
                                Пойти на запад острова
                            </button>
                            <button onClick={wayNorth}>
                                Пойти на север острова
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <NorthwestActions />
                        <CommonActions />
                    </div>
                </div>
                : <SleepOnTheRock /> }
            </div>
        </div>
    )
}

export default Northwest;