import React, { useEffect } from "react";
import '../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPartPlot, againBegin, decreaseLuck, removePartPlot } from "./store/characterSlice";
import { removeSouthwestItems } from "./store/itemsSlice";

const CharacterInfo = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(character);
    console.log(items);

    useEffect(() => {
        if (character.time >= 17 && character.partPlot.find((part) => part.id === 37)) {
            dispatch(removePartPlot({id: 37, title: 'До землетрясения № 1'}))
            dispatch(addPartPlot({id: 38, title: 'Землетрясение № 1'}))
            dispatch(decreaseLuck(1))
            // Earthquake
            navigate('/partplot')
        }
    }, [character.partPlot, character.time, dispatch, navigate]);

    useEffect(() => {
        if (character.time >= 146 && character.partPlot.find((part) => part.id === 39)) {
            dispatch(removePartPlot({id: 39, title: 'До землетрясения № 2'}))
            dispatch(addPartPlot({id: 40, title: 'Землетрясение № 2'}))
            dispatch(removeSouthwestItems({id: 39, item: 'Труп'}))
            dispatch(removeSouthwestItems({id: 30, item: 'Солонина'}))
            dispatch(removeSouthwestItems({id: 3, item: 'Рваная тряпка'}))
            dispatch(removeSouthwestItems({id: 32, item: 'Татуировка чёрной кошки на коже'}))
            dispatch(removeSouthwestItems({id: 0, item: 'Огниво'}))
            dispatch(removeSouthwestItems({id: 31, item: 'Счастливая монетка капитана'}))
            dispatch(removeSouthwestItems({id: 42, item: 'Правый сапог'}))
            dispatch(removeSouthwestItems({id: 36, item: 'Игральная кость'}))
            dispatch(decreaseLuck(1))
            // Earthquake
            navigate('/partplot')
        }
    }, [character.partPlot, character.time, dispatch, navigate]);

    useEffect(() => {
        if (character.time >= 248 && character.partPlot.find((part) => part.id === 41)) {
            dispatch(removePartPlot({id: 41, title: 'До землетрясения № 3'}))
            dispatch(addPartPlot({id: 42, title: 'Землетрясение № 3'}))
            dispatch(decreaseLuck(1))
            // Earthquake
            navigate('/partplot')
        }
    }, [character.partPlot, character.time, dispatch, navigate])

    useEffect(() => {
        if (character.time >= 213 && character.partPlot.find((part) => part.id === 201)) {
            dispatch(removePartPlot({id: 201, title: 'После всего'}))
            dispatch(addPartPlot({id: 203, title: 'Полный конец'}))
            // Final
            navigate('/partplot')
        }
    }, [character.partPlot, character.time, dispatch, navigate])

    useEffect(() => {
        if (character.inGame === false) {
            dispatch(againBegin())
            localStorage.clear()
            navigate('/')
        }
    }, [character.inGame, dispatch, navigate]);

    const light = window.location.pathname.slice(1) === "bonfire" && character.bonfire > 0
        ? 'Возле костра'
        : character.torch > 3
            ? 'Путь освещает факел'
            : character.torch <= 3 && character.torch > 1
                ? 'Факел светит тускло'
                : character.torch === 1
                    ? 'Факел вот-вот погаснет'
                    : 'В полной тьме';

    const health = character.hp > 9
    ? 'Здоров как бык'
    : character.hp <= 9 && character.hp > 6
        ? 'Здоров'
        : character.hp <= 6 && character.hp > 3
            ? 'Ранен'
            : character.hp <= 3 && character.hp > 1
                ? 'Сильно ранен'
                : character.hp === 1
                    ? 'Одной ногой в могиле'
                    : 'Мёртв';

    const condition = character.drunkenness > 6
        ? 'пьян'
        : character.tiredness <= 16
            ? 'бодр'
            : character.tiredness > 16 && character.tiredness <= 24
                ? 'устал'
                : character.tiredness > 24 && character.tiredness <= 32
                    ? 'хочет спать'
                    : 'крепко спит';

    const strength = character.drunkenness > 6
        ? 'на пустые угрозы'
        : character.hp > 9 && condition === 'бодр'
            ? 'почти на всё'
            : character.hp > 6 && condition === 'бодр'
                ? 'на высокие нагрузки'
                : (character.hp > 6 && condition === 'устал') || (health === 'Ранен' && condition === 'бодр')
                    ? 'на средние нагрузки'
                    : (character.hp > 6 && condition === 'хочет спать') || (health === 'Ранен' && condition === 'устал') || (health === 'Сильно ранен' && condition === 'бодр')
                        ? 'на минимальные нагрузки'
                        : character.hp > 0 && condition === 'крепко спит' && character.partPlot.find((part) => part.id === 15)
                            ? 'видеть вещие сны'
                            : (health === 'Ранен' && condition === 'хочет спать') || (health === 'Сильно ранен' && (condition === 'устал' || condition === 'хочет спать'))
                                ? 'только языком трепать'
                                : 'говорить с духами';

    const luckOrNot = character.luck >= 3
        ? 'Счастливчик'
        : character.luck === 2
            ? 'Удачлив'
            : character.luck === 1
                ? 'Иногда везёт'
                : character.luck === 0
                    ? 'Не стоит надеяться на удачу'
                    : 'Дерьмо случается';

    const whatCrafts = character.crafts === 2 
        ? 'простейших '
        : 'сложных ';

    const observancy = character.drunkenness > 6
        ? 'Спотыкается на ровном месте'
        : condition === 'бодр' && character.usedDark > 30
            ? 'Подмечает каждую деталь'
            : (condition === 'бодр' && ((character.usedDark > 20 && character.usedDark <= 30) || character.torch > 0)) ||
            (condition === 'устал' && (character.usedDark > 30 || character.torch > 0))
                ? 'Хорошо сконцентрирован'
                : (condition === 'бодр' && ((character.usedDark > 10 && character.usedDark <= 20) || character.torch > 0)) ||
                (condition === 'устал' && ((character.usedDark > 20 && character.usedDark <= 30) || character.torch > 0)) ||
                (condition === 'хочет спать' && (character.usedDark > 30 || character.torch > 0))
                    ? 'Внимателен'
                    : (condition === 'бодр' && (character.usedDark <= 10 || character.torch > 0)) ||
                    (condition === 'устал' && ((character.usedDark > 10 && character.usedDark <= 20) || character.torch > 0)) ||
                    (condition === 'хочет спать' && ((character.usedDark > 20 && character.usedDark <= 30) || character.torch > 0))
                        ? 'Рассеян'
                        : (condition === 'устал' && character.usedDark <= 10) ||
                        (condition === 'хочет спать' && character.usedDark > 10 && character.usedDark <= 20)
                            ? 'И бревна в глазу не увидит'
                            : (condition === 'хочет спать' && character.usedDark <= 10)
                                ? 'Спотыкается на ровном месте'
                                : 'Пока жив';

    const residenceDay = Math.floor(character.time/24);
    const residenceHour = character.time % 24;
    const residenceEnd = 261 - character.time;

    return (
        <header>
            <div className="nameAndTime">
                <h1>{character.characterFirstName} {character.characterLastName}</h1>
                <p
                data-tooltip="Свет огня позволяет ориентироваться в темноте. Без огня глаза привыкают к темноте, но на это уходит время."
                >{light}</p>
                {character.partPlot.find((part) => part.id === 200 &&
                character.partPlot.find((part) => part.id === 201))
                ? <p>Смерть придёт за тобой через {residenceEnd}</p>
                : <p>Время пребывания на острове: {`день ${residenceDay} -й, час ${residenceHour}-й`}</p>}
            </div>
            <div className="infoStat">
                <div>
                    <p
                    data-tooltip="Физическое здоровье"
                    >{health}</p>
                    <p
                    data-tooltip="Физическое состояние"
                    >{health === 'Мёртв' ? ' ' : `Чертовски ${condition}`}</p>
                </div>
                <div>
                    <p
                    data-tooltip="Физическая сила: зависит от здоровья и состояния"
                    >Способен {strength}</p>
                    <p
                    data-tooltip="Удача влияет на поиск предметов и результат исходов некоторых действий"
                    >{luckOrNot}</p>
                </div>
                <div>
                    <p
                    data-tooltip="Внимательность: зависит от состояния и способности видеть в темноте с факелом или без"
                    >{observancy}</p>
                    <p>{health === 'Мёртв' ? ' ' : `Изготовление ${whatCrafts} предметов из подручных средств`}
                    </p>
                </div>
            </div>
        </header>
    );
};

export default CharacterInfo;