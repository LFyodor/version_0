import React, { useEffect} from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addTime, addPartPlot, addTiredness, removePartPlot } from "../../store/characterSlice";
import RockActions from "../../actions/RockActions";
import AgainDied from "../../AgainDied";

const Rock = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (items.rockItems.find((elem) => elem.id === 49) &&
        character.time % 24 === 17 &&
        character.inventory.find((elem) => elem.id === 13)) {
            dispatch(addPartPlot({id: 71, title: 'Чайка'}))
            // Seagull
            navigate('/partplot')
        }
    }, [character.time, dispatch, items.rockItems, navigate, character.inventory]);

    useEffect(() => {
        if ((((character.usedDark > 20 && character.tiredness <= 16) ||
        (character.usedDark > 30 && character.tiredness > 16 && character.tiredness <= 24)) &&
        character.drunkenness <= 6) && character.partPlot.find((part) => part.id === 170)) {
            dispatch(removePartPlot({id: 170, title: 'Другой остров не найден'}))
            dispatch(addPartPlot({id: 171, title: 'Другой остров'}))
        }
    }, [character.drunkenness, character.partPlot, character.tiredness, character.usedDark, dispatch]);

    const wayNortheast = () => {
        if (character.hp > 6 && character.tiredness <= 16 && character.luck >= 1 && character.drunkenness <= 6 &&
            character.inventory.find((elem) => elem.id === 12)) {
            dispatch(addTime(2))
            dispatch(addTiredness(2))
            navigate('/northeast')
        } else {
            dispatch(addPartPlot({id: 66, title: 'Падение со скалы'}))
            // Descent
            navigate('/partplot')
        }
    };

    const wayNortheastRope = () => {
        if (character.hp > 3 && character.drunkenness <= 6) {
            dispatch(addTime(1))
            navigate('/northeast')
        } else {
            dispatch(addPartPlot({id: 66, title: 'Падение со скалы'}))
            // Descent
            navigate('/partplot')
        }
    };

    const jumpOfRock = () => {
        dispatch(addPartPlot({id: 81, title: 'Прыгнуть со скалы'}))
        // JumpOfRock
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
                            Скала на северо-востоке острова
                        </p>
                        <p className="description">
                            Скала, на котороую сложно попасть, но это отличное место порыбачить, было бы чем...
                            {((character.usedDark > 20 && character.tiredness <= 16) ||
                            (character.usedDark > 30 && character.tiredness > 16 && character.tiredness <= 24)) &&
                            character.drunkenness <= 6
                            ? ` Сквозь тьму севернее скалы видно землю - другой остров, до которого вплавь не добраться.`
                            : ''}
                            {items.rockItems.find((elem) => elem.id === 51)
                            ? ` На скале горит сигнальный огонь. И кто-то его уже заметил...`
                            : character.usedDark > 20 && character.tiredness <= 16 && character.drunkenness <= 6
                                ? ` Глаза привыкли к темноте настолько хорошо, что на дальнем острове видны белый песок пляжа и 
                                силуэт дерева на нём. Оно словно дымится. Должно быть, это иллюзия или иной обман зрения. 
                                Но вдруг там есть люди? Другие выжившие... Эта скала - отличное место для сигнального огня, 
                                чтобы люди заметили меня.`
                                : ''}
                        </p>
                        <div className="way">
                            {items.northeastItems.find((elem) => elem.id === 16)
                            ? <button onClick={wayNortheastRope}>
                                Подняться по верёвке
                            </button>
                            : <button onClick={wayNortheast}>
                                Подняться
                            </button>}
                            <button onClick={jumpOfRock}>
                                Разбежавшись, прыгнуть со скалы
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <RockActions />
                        <CommonActions />
                    </div>
                </div>
                : character.hp > 0 && character.tiredness > 32
                    ? <div>
                        <p className="description">
                            Обессиленный и уставший, ты проваливаешься в сон, падаешь со скалы и тонешь в море. 
                            Тебе нужен был отдых, а сейчас...
                        </p>
                        <AgainDied />
                    </div>
                    : ''}
            </div>
        </div>
    )
}

export default Rock;