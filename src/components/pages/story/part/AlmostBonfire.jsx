import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePartPlot } from "../../../store/characterSlice";

const AlmostBonfire = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayAlmostBonfire = () => {
        dispatch(removePartPlot({id: 20, title: 'Не хватает для костра'}))
        navigate('/southeast')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 20)
            ? <div>
                <p className="dialog">
                    "Для костра мне не хватает
                    {character.inventory.find((elem) => elem.id === 6)
                    ? ''
                    : ` того, что заставит гореть даже сырые дрова,`}
                    {character.inventory.find((elem) => elem.id === 0)
                    ? ''
                    : ` хорошей искры,`}
                    {character.inventory.find((elem) => elem.id === 1)
                    ? ''
                    : ` самих дров,`} и всё"
                </p>
                <button className="answerButton" onClick={wayAlmostBonfire}>
                    "Это просто, я справлюсь"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default AlmostBonfire;