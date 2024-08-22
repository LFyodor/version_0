import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPartPlot, removePartPlot } from "../../../store/characterSlice";
import AgainDied from "../../../AgainDied";

const DeepIntoTheCave = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goBack0 = () => {
        dispatch(removePartPlot({id: 109, title: 'Вглубь пещеры 0'}))
        navigate('/cave')
    };

    const goBack1 = () => {
        dispatch(removePartPlot({id: 110, title: 'Вглубь пещеры 1'}))
        navigate('/cave')
    };

    const getKnowledge = () => {
        dispatch(removePartPlot({id: 111, title: 'Вглубь пещеры 2'}))
        dispatch(addPartPlot({id: 157, title: 'Повышение знаний'}))
    };

    const goBack2 = () => {
        dispatch(removePartPlot({id: 111, title: 'Вглубь пещеры 2'}))
        navigate('/cave')
    };

    const final = () => {
        dispatch(removePartPlot({id: 112, title: 'Вглубь пещеры 3'}))
        dispatch(addPartPlot({id: 152, title: 'Конец'}))
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 109)
            ? <div>
                <p className="description">
                    Ты делаешь вперёд пятнадцать шагов, опираясь на стену, и натыкаешься на тупик. Здесь ничего нет.
                </p>
                <button className="answerButton" onClick={goBack0}>
                    Вернуться обратно
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 110)
            ? <div>
                <p className="description">
                    Ты делаешь вперёд двадцать семь шагов, опираясь на стену, и натыкаешься на тупик. Здесь ничего нет.
                    {character.inventory.find((elem) => elem.id === 35)
                    ? ` Перо в пещере светится ярче, и, если поднести его к стене, на ней проявляются неизвестные 
                    символы.`: ''}
                    {character.hp <= 3 && character.tiredness > 24
                    ? ` Едва слышен слабый шёпот из-за стены. Быть может, иллюзия от воя ветра в щелях пещеры. Он шепчет: 
                    "Сыграй со мной".`: ''}
                </p>
                <button className="answerButton" onClick={goBack1}>
                    Вернуться обратно
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 111)
            ? <div>
                <p className="description">
                    Ты делаешь вперёд сорок четыре шага, опираясь на стену, и натыкаешься на тупик. Здесь ничего нет.
                    {character.inventory.find((elem) => elem.id === 35)
                    ? ` Перо в пещере светится ярче, и, если поднести его к стене, на ней проявляются неизвестные 
                    символы. Хотя, впрочем, среди них встречаются и вполне знакомые буквы, хоть и непонятные тебе.`: ''}
                    {character.hp <= 6 && character.tiredness > 16
                    ? ` Едва слышен слабый шёпот из-за стены. Быть может, иллюзия от воя ветра в щелях пещеры. Он шепчет: 
                    "Сыграй со мной".`: ''}
                </p>
                {character.inventory.find((elem) => elem.id === 35) &&
                character.crafts === 2
                ? <button className="answerButton" onClick={getKnowledge}>
                    Прислушаться
                </button>
                : ''}
                <button className="answerButton" onClick={goBack2}>
                    Вернуться обратно
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 112)
            ? <div>
                <p className="description">
                    Сделав несколько шагов вперёд, ты ясно видишь свет в конце пещеры и ощущаешь его прикосновениие. Он обжигающе 
                    холодный, и, попав в его объятия, ты лишаешься собственной воли. Вопреки здравому смыслу, бунтующему против 
                    где-то глубоко внутри сердца и ума, ты идёшь... И в конце пути тебя ждёт тёмная фигура, что чернее любого света 
                    во всём мире. Совсем недавно ты уплыл от неё после кораблекрушения, и много раз она близко подбиралась к 
                    тебе на этом проклятом острове. Ты всегда ощущал её присутствие и боролся за отсрочку встречи с ней. 
                    Но сейчас время настало...
                </p>
                <button className="answerButton" onClick={final}>
                    "Вот и всё!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 113)
            ? <div>
                <p className="description">
                    Ты подскальзываешься на мокром камне босыми ногами и бьёшься головой о неровный пол. Ощущая привкус собственной 
                    крови во рту, ты проваливаешься в небытие. Очнуться тебе не суждено.
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default DeepIntoTheCave;