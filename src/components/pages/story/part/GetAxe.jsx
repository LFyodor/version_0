import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, addTiredness, removePartPlot } from "../../../store/characterSlice";
import { removeNortheastItems } from "../../../store/itemsSlice";

const GetAxe = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const welldoneAxe = () => {
        dispatch(removeNortheastItems({id: 15, item: 'Топор'}))
        dispatch(removePartPlot({id: 64, title: 'Хватает сил на топор'}))
        dispatch(addInventory({id: 15, item: 'Топор'}))
        dispatch(addTiredness(3))
        navigate('/northeast')
    };

    const fail = () => {
        dispatch(removePartPlot({id: 65, title: 'Не хватает сил на топор'}))
        dispatch(addTiredness(3))
        navigate('/northeast')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 64)
            ? <div>
                <p className="description">
                    С преогромнейшим трудом ты вынимаешь топор из камня и поднимаешь над головой, празднуя победу
                </p>
                <button className="answerButton" onClick={welldoneAxe}>
                    "Теперь поборемся"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 65)
            ? <div>
                <p className="description">
                    Ты хватаешься за рукоятку и вкладываешь все силы, что есть в твоём теле, но лезвие поддаётся лишь на расстояние 
                    с ноготок... И то показалось - оно не сдвинулось ни на йоту
                </p>
                <button className="answerButton" onClick={fail}>
                    "Это невозможно"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default GetAxe;