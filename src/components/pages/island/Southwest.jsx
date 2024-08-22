import React, { useEffect } from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addPartPlot, addTime, removePartPlot } from "../../store/characterSlice";
import SouthwestActions from "../../actions/SouthwestActions";
import SleepOnTheSand from "../../SleepOnTheSand";

const Southwest = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (character.partPlot.find((part) => part.id === 197)) {
            dispatch(removePartPlot({id: 197, title: 'Возвращение на остров'}))
            dispatch(addPartPlot({id: 198, title: 'Лишиться плота'}))
            // ReturnToTheIsland
            navigate('/partplot')
        }
    }, [character.partPlot, dispatch, navigate]);

    const waySouth = () => {
        dispatch(addTime(1))
        navigate('/south')
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
                            Юго-запад острова
                        </p>
                        <p className="description">
                            {items.southwestItems.find((elem) => elem.id === 39)
                            ? `На этом песчаном пляже взгляд сразу цепляется за лежащее на берегу тело мужчины.`
                                + `${items.southwestItems.find((elem) => elem.id === 41)
                                ? ` Рядом с ним стоит сапог.` : ''}`
                                + ` В заливе на западе плавают обломки корабля, но скалы мешают пройти.`
                            : `Песчаный пляж, упирающийся в залив, куда не пройти из этой части острова.`
                                + `${items.southwestItems.find((elem) => elem.id === 41)
                                ? ` Рядом с местом, где лежало тело Хаммонда, стоит сапог... Но куда он сам подевался?!` : ''}`}
                            {items.southwestItems.find((elem) => elem.id === 40)
                            ? ` Волнами омывается выброшенный на берег ящик с повреждённым грузом.`
                            : ''}
                            {items.southwestItems.find((elem) => elem.id === 48)
                            ? ` В темноте прослеживается силуэт наглухо закупоренной бочки.`
                            : ''}
                            {items.southwestItems.find((elem) => elem.id === 30)
                            ? ` В темноте прослеживается силуэт бочки, полной бесконечных запасов солонины.`
                            : ''}
                        </p>
                        <div className="way">
                            <button onClick={waySouth}>
                                Пойти на юг острова
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <SouthwestActions />
                        <CommonActions />
                    </div>
                </div>
                : <SleepOnTheSand /> }
            </div>
        </div>
    )
}

export default Southwest;