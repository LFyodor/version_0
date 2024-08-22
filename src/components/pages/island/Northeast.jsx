import React, { useEffect } from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addPartPlot, addTime, addTiredness, removeInventory, removePartPlot, removeTorch } from "../../store/characterSlice";
import NortheastActions from "../../actions/NortheastActions";
import SleepOnTheRock from "../../SleepOnTheRock";

const Northeast = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (character.partPlot.find((part) => part.id === 130)) {
            dispatch(removePartPlot({id: 130, title: 'Тень нападает'}))
            dispatch(addPartPlot({id: 131, title: 'Первый бой с тенью'}))
            dispatch(removeInventory({id: 5, item: 'Горящий факел'}))
            dispatch(removeTorch())
            // Shadow
            navigate('/partplot')
        }
    }, [character.partPlot, dispatch, navigate]);

    const wayNorth = () => {
        dispatch(addTime(1))
        navigate('/north')
    };

    const wayEast = () => {
        dispatch(addTime(1))
        navigate('/east')
    };

    const wayRock = () => {
        if (character.hp > 6 && character.tiredness <= 16 && character.luck >= 0 && character.drunkenness <= 6 &&
            character.inventory.find((elem) => elem.id === 12)) {
            dispatch(addTime(2))
            dispatch(addTiredness(1))
            navigate('/rock')
        } else {
            dispatch(addPartPlot({id: 66, title: 'Падение со скалы'}))
            // Descent
            navigate('/partplot')
        }
    };

    const wayRockRope = () => {
        if (character.hp > 3 && character.drunkenness <= 6) {
            dispatch(addTime(1))
            navigate('/rock')
        } else {
            dispatch(addPartPlot({id: 66, title: 'Падение со скалы'}))
            // Descent
            navigate('/partplot')
        }
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
                            Северо-восток острова
                        </p>
                        <p className="description">
                            Каменистый пляж, протянувшийся с востока на север и поднимающийся на двадцать метров над волнующимся морем. 
                            Если рискнуть, возможно спуститься по отвесному пути на узкий скальный хребет, уходящий во тьму. И всё же 
                            там скользко.
                            {items.northeastItems.find((elem) => elem.id === 16)
                            ? ` Для более безопасного и быстрого спуска здесь находится верёвка.`
                            : ''}
                            {items.northeastItems.find((elem) => elem.id === 15) &&
                            (character.torch > 0 || character.usedDark > 20)
                            ? ` В стороне в одном из остроугольных высотой с человеческий рост камней торчит топор.`
                            : ''}
                        </p>
                        <div className="way">
                            <button onClick={wayNorth}>
                                Пойти на север острова
                            </button>
                            {items.northeastItems.find((elem) => elem.id === 16)
                            ? <button onClick={wayRockRope}>
                                Спуститься на скалу по верёвке
                            </button>
                            : <button onClick={wayRock}>
                                Спуститься на скалу
                            </button>}
                            <button onClick={wayEast}>
                                Пойти на восток острова
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <NortheastActions />
                        <CommonActions />
                    </div>
                </div>
                : <SleepOnTheRock /> }
            </div>
        </div>
    )
}

export default Northeast;