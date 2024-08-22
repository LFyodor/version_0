import React from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addPartPlot, addTime } from "../../store/characterSlice";
import SleepOnTheRock from "../../SleepOnTheRock";

const Cave = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const waySouth = () => {
        dispatch(addTime(1))
        navigate('/south')
    };

    const goDeep0 = () => {
        if (character.partPlot.find((part) => part.id === 37)) {
            dispatch(addPartPlot({id: 109, title: 'Вглубь пещеры 0'}))
            // DeepIntoTheCave
            navigate('/partplot')
        }
    };

    const goDeep1 = () => {
        if (character.partPlot.find((part) => part.id === 39)) {
            dispatch(addPartPlot({id: 110, title: 'Вглубь пещеры 1'}))
            // DeepIntoTheCave
            navigate('/partplot')
        }
    };

    const goDeep2 = () => {
        if (character.partPlot.find((part) => part.id === 41)) {
            dispatch(addPartPlot({id: 111, title: 'Вглубь пещеры 2'}))
            // DeepIntoTheCave
            navigate('/partplot')
        }
    };

    const goDeep3 = () => {
        if (character.partPlot.find((part) => part.id === 151)) {
            dispatch(addPartPlot({id: 112, title: 'Вглубь пещеры 3'}))
            // DeepIntoTheCave
            navigate('/partplot')
        }
    };

    const wayDown = () => {
        dispatch(addPartPlot({id: 113, title: 'Упасть в пещере'}))
        // DeepIntoTheCave
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
                            Пещера
                        </p>
                        <p className="description">
                            Ледяной холод наполняет воздух, пробирая до дрожи. Пол под ногами неровный и скользкий. И чем дальше, 
                            тем опасней.
                            {character.torch === 0 && character.usedDark <= 30
                            ? ` И в полной тьме ничего не разглядеть.`
                            : ''}
                            {character.torch > 0
                            ? ` Чёрные стены пещеры словно поедают свет факела. Видно ненамного больше, чем слепому.`
                            : ''}
                            {character.usedDark > 30
                            ? ` Стены бликуют, будто водная гладь перед закатом.`
                            : ''}
                        </p>
                        <div className="way">
                            <button onClick={waySouth}>
                                Выйти из пещеры
                            </button>
                            {character.partPlot.find((part) => part.id === 37)
                            ? <button onClick={goDeep0}>
                                Пройти вглубь пещеры
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 39)
                            ? <button onClick={character.inventory.find((elem) => elem.id === 12) ? goDeep1 : wayDown}>
                                Пройти вглубь пещеры
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 41)
                            ? <button onClick={character.inventory.find((elem) => elem.id === 12) ? goDeep2 : wayDown}>
                                Пройти вглубь пещеры
                            </button>
                            : ''}
                            {character.partPlot.find((part) => part.id === 151)
                            ? <button onClick={character.inventory.find((elem) => elem.id === 12) ? goDeep3 : wayDown}>
                                Пройти вглубь пещеры
                            </button>
                            : ''}
                        </div>
                    </div>
                    <div className="actions">
                        <CommonActions />
                    </div>
                </div>
                : <SleepOnTheRock />}
            </div>
        </div>
    )
}

export default Cave;