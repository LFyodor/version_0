import React, { useEffect } from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import SouthActions from "../../actions/SouthActions";
import { addPartPlot, addTime } from "../../store/characterSlice";
import SleepOnTheSand from "../../SleepOnTheSand";

const South = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(items.southItems.find((elem) => elem.id === 36) &&
        (character.drunkenness > 6 ||
        (character.tiredness > 24 &&
        character.usedDark <= 20))) {
            dispatch(addPartPlot({id: 36, title: 'Костяшка в песке'}))
            // StuckDice
            navigate('/partplot')
        }
    }, [character.drunkenness, character.tiredness, character.usedDark, dispatch, items.southItems, navigate]);

    const waySouthwest = () => {
        dispatch(addTime(1))
        navigate('/southwest')
    };

    const waySoutheast = () => {
        dispatch(addTime(1))
        navigate('/southeast')
    };

    const wayCave = () => {
        dispatch(addTime(1))
        navigate('/cave')
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
                            Юг острова
                        </p>
                        <p className="description">
                            Каменистый пляж с небольшой линией песка у кромки моря.
                            Здесь же вход в пещеру, уходящей глубоко в чёрную гору, что стоит в самом центре острова, 
                            и во тьме которой тонет всё.
                            {(character.usedDark > 20 || character.torch > 0) &&
                            items.southItems.find((elem) => elem.id === 14) &&
                            character.drunkenness <= 6 &&
                            character.partPlot.find((part) => part.id === 32) &&
                            character.partPlot.find((part) => part.id === 37)
                            ? ` В небольшой расщелине под ногами застрял нож.`
                            : ''}
                            {character.partPlot.find((part) => part.id === 33) &&
                            character.partPlot.find((part) => part.id === 37)
                            ? ` Глубоко в расщелине лежит нож, и нет способа его достать.`
                            : ''}
                            {(character.partPlot.find((part) => part.id === 39) ||
                            character.partPlot.find((part) => part.id === 41)) &&
                            (character.partPlot.find((part) => part.id === 32) ||
                            character.partPlot.find((part) => part.id === 33)) &&
                            (character.usedDark > 20 || character.torch > 0) &&
                            items.southItems.find((elem) => elem.id === 14) &&
                            character.drunkenness <= 6
                            ? ` После землетрясения расщелина расширилась, и подобрать нож стало более возможным.`
                            : ''}
                            {character.time >= 17 && items.southItems.find((elem) => elem.id === 6)
                            ? ` У берега стучит о камешки причалившая бутылка рома.`
                            : ''}
                            {character.tiredness <= 16 &&
                            (character.usedDark > 20 || character.torch > 0) &&
                            items.southItems.find((elem) => elem.id === 33) &&
                            character.drunkenness <= 6
                            ? ` В песке под водой что-то блестит.`
                            : ''}
                        </p>
                        <div className="way">
                            <button onClick={waySouthwest}>
                                Пойти на юго-запад острова
                            </button>
                            <button onClick={wayCave}>
                                Войти в пещеру
                            </button>
                            <button onClick={waySoutheast}>
                                Пойти на юго-восток острова
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <SouthActions />
                        <CommonActions />
                    </div>
                </div>
                : <SleepOnTheSand />}
            </div>
        </div>
    )
}

export default South;