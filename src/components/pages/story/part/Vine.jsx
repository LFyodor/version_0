import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { removePartPlot } from "../../../store/characterSlice";
import AgainDied from "../../../AgainDied";

const Vine = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayVine = () => {
        dispatch(removePartPlot({id: 82, title: 'Нет прохода из-за лозы'}))
        navigate('/north')
    };

    const loseKnife = () => {
        dispatch(removePartPlot({id: 84, title: 'Потерял нож в лозе'}))
        navigate('/north')
    };

    const wayAxe = () => {
        dispatch(removePartPlot({id: 85, title: 'Отскочил топор'}))
        navigate('/north')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 82)
            ? <div>
                <p className="description">
                    Ты застреваешь в колючих зарослях и высвобождаешься из них спустя час, к тому же весь израненый. 
                    Но пройти тебе так и не удаётся
                </p>
                <button className="answerButton" onClick={wayVine}>
                    "Тут подумать надо... или топор"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 83)
            ? <div>
                <p className="description">
                    Ты застреваешь в колючих зарослях без шанса выбраться и умираешь от кровотечения. Но перед смертью успеваешь подумать...
                </p>
                <p className="dialog">
                    "Необходимо было жениться на той фермерской дочери..."
                </p>
                <AgainDied />
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 84)
            ? <div>
                <p className="description">
                    Орудуя ножом против лозы, ты ранишь руку и теряешь нож. Пока есть колючки, до ножа не добраться
                </p>
                <button className="answerButton" onClick={loseKnife}>
                    "Когда же удача смилуется надо мной?!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 85)
            ? <div>
                <p className="description">
                    Заканчивая с последней ветвью лозы, ты попадаешь по камню, топор отскакивает от него и ранит твою ногу
                </p>
                <button className="answerButton" onClick={wayAxe}>
                    "Я здесь точно помру, правда?.."
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 86)
            ? <div>
                <p className="description">
                    Наблюдая за поднимающимся по лозе огню, ты замечаешь, как огромные камни над твоей головой, 
                    прежде сдерживаемые колючим растением, срываются и сыпятся к подножию. Ты хочешь отпрыгнуть, но не успеваешь.
                </p>
                <p className="dialog">
                    "Да прыгай же ты, Марио, мать твою! - кричит твой внутренний голос. - В следующий раз я это сделаю! 
                    В следующий раз необходимо сильнее жать на кнопки..."
                </p>
                <AgainDied />
            </div>
            : ''}
        </div>
    );
};

export default Vine;