import React, { useEffect} from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addPartPlot, addTime } from "../../store/characterSlice";
import CenterActions from "../../actions/CenterActions";
import SleepOnTheRock from "../../SleepOnTheRock";

const Center = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayNorth = () => {
        dispatch(addTime(1))
        navigate('/north')
    };

    useEffect(() => {
        if (items.centerItems.find((elem) => elem.id === 26) &&
        (character.time % 24 === 10 || character.time % 24 === 22)) {
            dispatch(addTime(1))
            dispatch(addPartPlot({id: 121, title: 'Битва со змеёй'}))
            // FightWithSnake
            navigate('/partplot')
        }
    });

    return (
        <div>
            <CharacterInfo />
            <div className="table">
                <InventoryInfo />
                {character.hp > 0 && character.tiredness <= 32
                ? <div className="locationAndActions">
                    <div className="location">
                        <p className="description">
                            Гора в центре острова
                        </p>
                        <p className="description">
                            Вершина горы - застывший вулкан, в котором есть небольшое озеро пресной воды. Судя по всему, здесь водится 
                            рыба.
                            {items.centerItems.find((elem) => elem.id === 26) &&
                            (character.torch > 0 || character.usedDark > 20)
                            ? ` И, как можно рассмотреть в темноте, есть что-то крупнее и опаснее рыбы.`
                            : ''}
                            {items.centerItems.find((elem) => elem.id === 3) &&
                            (character.torch > 0 || character.usedDark > 10)
                            ? ` На берегу тихого и спокойного места лежит рваная рубаха. Её хозяина не видно и не слышно.`
                            : ''}
                            {items.centerItems.find((elem) => elem.id === 35) &&
                            character.usedDark > 30
                            ? ` На самом дне озера заметно тусклое сияние. Можно попробовать выловить любопытный предмет... 
                            Мою прелесть!..`
                            : ''}
                            {items.centerItems.find((elem) => elem.id === 27)
                            ? ` На берегу лежит мёртвая змея, чьё мясо сгодится в пищу.`
                            : ''}
                        </p>
                        <div className="way">
                            <button onClick={wayNorth}>
                                Спуститься с горы
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <CenterActions />
                        <CommonActions />
                    </div>
                </div>
                : <SleepOnTheRock /> }
            </div>
        </div>
    )
}

export default Center;