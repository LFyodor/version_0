import React, { useEffect } from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addPartPlot, removePartPlot, sleepBonfire, sleepHere } from "../../store/characterSlice";
import BonfireActions from "../../actions/BonfireActions";

const Bonfire = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (character.partPlot.find((part) => part.id === 141) && character.bonfire > 0) {
            dispatch(removePartPlot({id: 141, title: 'Пока живой'}))
            dispatch(addPartPlot({id: 142, title: 'Под защитой костра'}))
            // Shadow
            navigate('/partplot')
        }
    }, [character.bonfire, character.partPlot, dispatch, navigate]);

    useEffect(() => {
        if ((character.partPlot.find((part) => part.id === 141) ||
        character.partPlot.find((part) => part.id === 143)) &&
        character.bonfire === 0) {
            dispatch(removePartPlot({id: 141, title: 'Пока живой'}))
            dispatch(removePartPlot({id: 143, title: 'Подготовка к бою'}))
            dispatch(addPartPlot({id: 145, title: 'Последний бой с тенью'}))
            // Shadow
            navigate('/partplot')
        }
    }, [character.bonfire, character.partPlot, dispatch, navigate]);

    const save = () => {
        if (character.partPlot.find((part) => part.id === 143) &&
        character.bonfire <= 4) {
            dispatch(addPartPlot({id: 144, title: 'Нельзя спать'}))
            // Shadow
            navigate('/partplot')
        } else if (character.partPlot.find((part) => part.id === 15)) {
            dispatch(addPartPlot({id: 202, title: 'Сон'}))
            // Dream
            navigate('/partplot')
        } else {
            dispatch(sleepBonfire());
            localStorage.setItem('bonfire', JSON.stringify(character));
            localStorage.setItem('island', JSON.stringify(items));
        }
    }

    const waySoutheast = () => {
        if (character.partPlot.find((part) => part.id === 143)) {
            dispatch(addPartPlot({id: 140, title: 'Сдаться'}))
            // Shadow
            navigate('/partplot')
        } else {
            navigate('/southeast')
        }
    };

    const SleepHere = () => {
        if (character.partPlot.find((part) => part.id === 15)) {
            dispatch(addPartPlot({id: 202, title: 'Сон'}))
            // Dream
            navigate('/partplot')
        }
        dispatch(sleepHere(character.tiredness - 32))
    };

    return (
        <div>
            <CharacterInfo />
            <div className="table">
                <InventoryInfo />
                {character.hp > 0 && character.tiredness <=32
                ? <div className="locationAndActions">
                    <div className="location">
                        <p className="description">
                            Костёр
                        </p>
                        <p className="description">
                            {character.bonfire > 0
                            ? `Лучшее место для отдыха на острове, окутанном тьмой. Возле костра можно спать без опаски на тёплом песке.`
                            : `Костёр погас, и тлеющие угли никого не спасут.`}
                            {character.bonfire >= 5 && character.bonfire <= 10
                            ? ` Но гореть ему осталось недолго.`
                            : character.bonfire > 0 && character.bonfire < 5
                                ? ` Только огонь скоро зачахнет.`
                                : ''}
                            {character.partPlot.find((part) => part.id === 143)
                            ? ` Тень, словно проклятый надзиратель, следит и ждёт.`
                            : ''}
                        </p>
                        <div className="way">
                            {character.bonfire > 0
                            ? <button onClick={save}>
                                Спать у костра
                            </button>
                            : ''}
                            <button onClick={waySoutheast}>
                                Отойти от костра
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        <BonfireActions />
                        <CommonActions />
                    </div>
                </div>
                : character.hp > 0 && character.tiredness > 32 && character.bonfire > 0
                    ? <div>
                        <p className="dialog">
                            "Я очень устал"
                        </p>
                        <button className="answerButton" onClick={save}>
                            "Пожалуй, вздремну у костра"
                        </button>
                    </div>
                    : character.hp && character.tiredness > 32 && character.bonfire <= 0
                        ? <div>
                            <p className="description">
                                Обессиленный и уставший, ты засыпаешь на песке
                            </p>
                            <button className="answerButton" onClick={SleepHere}>
                                Спать здесь
                            </button>
                        </div>
                        : ''}
            </div>
        </div>
    )
}

export default Bonfire;