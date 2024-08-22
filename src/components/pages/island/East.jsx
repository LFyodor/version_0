import React, { useEffect } from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addPartPlot, addTime, removePartPlot } from "../../store/characterSlice";
import EastActions from "../../actions/EastActions";
import SleepOnTheRock from "../../SleepOnTheRock";

const East = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (character.partPlot.find((part) => part.id === 135)) {
            dispatch(removePartPlot({id: 135, title: 'Тень преследует'}))
            dispatch(addPartPlot({id: 136, title: 'Второй бой с тенью'}))
            // Shadow
            navigate('/partplot')
        }
    }, [character.partPlot, dispatch, navigate]);

    const wayNortheast = () => {
        dispatch(addTime(1))
        navigate('/northeast')
    };

    const waySoutheast = () => {
        dispatch(addTime(1))
        navigate('/southeast')
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
                            Восток острова
                        </p>
                        <p className="description">
                            Каменистый и ничем непримечательный пляж.
                            {items.eastItems.find((elem) => elem.id === 2) && character.luck >= 3
                            ? ` В задумчивости ты берёшь с земли небольшой камушек, и под галькой видишь крепкую деревяшку.`
                            : ''}
                            {items.eastItems.find((elem) => elem.id === 13) &&
                            (character.torch > 0 || character.usedDark > 30)
                            ? ` На одном из высоких камней под горой ты замечаешь деревянную ловушку для птиц, но, чтобы до неё добраться, 
                            необходимо приложить большие усилия.`
                            : ''}
                            {items.eastItems.find((elem) => elem.id === 14) &&
                            (character.usedDark > 20 || character.torch > 0) &&
                            character.drunkenness <= 6
                            ? ` Среди камней и гальки блестит потерянный нож.`
                            : ''}
                        </p>
                        <div className="way">
                            <button onClick={wayNortheast}>
                                Пойти на северо-восток острова
                            </button>
                            <button onClick={waySoutheast}>
                                Пойти на юго-восток острова
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <EastActions />
                        <CommonActions />
                    </div>
                </div>
                : <SleepOnTheRock />}
            </div>
        </div>
    )
}

export default East;