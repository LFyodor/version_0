import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import AgainDied from "../../../AgainDied";
import { addPartPlot, addTime, removePartPlot } from "../../../store/characterSlice";
import YouAdneyFirst from "./YouAdneyFirst";
import Adney from "./Adney";
import FirstAdney from "./FirstAdney";

const Voyage = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const theOldWay = () => {
        dispatch(removePartPlot({id: 173, title: 'Обойти скалы'}))
        dispatch(addTime(1))
        navigate('/sea')
    };

    const anotherIsland = () => {
        dispatch(removePartPlot({id: 173, title: 'Обойти скалы'}))
        dispatch(addPartPlot({id: 174, title: 'Конец на другом острове'}))
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 172)
            ? <div>
                <p className="description">
                    Течение сносит плот обратно к острову, ты не успеваешь обойти скалы, что на северо-востоке, и встречаешь 
                    смерть только начав путь к спасению.
                </p>
                <p className="dialog">
                    {character.partPlot.find((part) => part.id === 158)
                    ? `"Чего ещё ожидать от плота без руля и паруса?! Необходимо стараться лучше"`: ''}
                    {character.partPlot.find((part) => part.id === 159)
                    ? `Подошёл слишком близко, сам виноват. Необходимо вспомнить, что я моряк, а не пьянчуга, не способный попасть 
                    в отхожую яму в упор.`: ''}
                </p>
                <AgainDied />
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 173)
            ? <div>
                <p className="description">
                    Ловко управляясь с рулём на плоту, ты проходишь мимо скал и подходишь к другому неизведанному острову. 
                    Покрытый острыми камнями, стремящимися проткнуть ночное небо, он лишь отдалённо напоминает тот, с которого 
                    ты только что устроил побег.
                </p>
                <p className="dialog">
                    "Здесь определённо есть что-то интересное, и оно даст ответы на многие мои вопросы, но... Если б я был персонажем 
                    чьей-то истории, я бы сказал: "Это место достойно приключений Кросби Барнесса, неповторимого смельчака и 
                    бесподобного ловеласа." Только я не смельчак, я просто пытаюсь выжить, поэтому лучше свалю отсюда, пока меня 
                    туземцы не съели. И я давно не стригся, ещё примут самого за женщину. Прости меня, Господи, уж лучше быть съеденным..."
                </p>
                <button className="answerButton" onClick={theOldWay}>
                    Вернуться на прежний путь
                </button>
                <button className="answerButton" onClick={anotherIsland}>
                    "Или рискнуть?!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 174)
            ? <div>
                <p className="description">
                    Ты спрыгиваешь на мелководье и тянешь за собой плот на берег. Быть может, здесь есть выжившие или те, кто 
                    поможет с возвращением домой. Но ощущения леденящие, за тобой словно следят... прямо сейчас... и один из них 
                    за твоей спиной...
                </p>
                <p className="dialog">
                    "Чёрт! Любопытство - не порок, но верный путь к короткой жизни. Необходимо быть более разумным."
                </p>
                <AgainDied />
            </div>
            : ''}
            <Adney />
            <YouAdneyFirst />
            <FirstAdney />
        </div>
    );
};

export default Voyage;