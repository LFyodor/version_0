import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeSouthItems } from "../../../store/itemsSlice";
import { addInventory, addLuck, removePartPlot } from "../../../store/characterSlice";

const Medallion = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getMedallion = () => {
        dispatch(removeSouthItems({id: 33, item: 'Медальон в виде четырёхлистного клевера'}))
        dispatch(addInventory({id: 33, item: 'Медальон в виде четырёхлистного клевера'}))
        dispatch(addLuck(1))
        dispatch(removePartPlot({id: 34, title: 'Медальон'}))
        navigate('/south')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 34)
            ? <div>
                <p className="description">
                    Из песка проглядывает зелёный обрамлённый золотом медальон, омываемый тёмными водами моря. 
                    Ты решаешь поднять его.
                </p>
                <p className="dialog">
                    "Да это же четырёхлистный клевер на удачу!"
                </p>
                <button className="answerButton" onClick={getMedallion}>
                    "Иди к папочке!"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default Medallion;