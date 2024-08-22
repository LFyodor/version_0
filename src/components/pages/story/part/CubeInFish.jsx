import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInventory, removeInventory, removePartPlot } from "../../../store/characterSlice";

const CubeInFish = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayCubeInFish = () => {
        if (character.inventory.find((elem) => elem.id === 36)) {
            dispatch(removeInventory({id: 36, item: 'Игральная кость'}))
            dispatch(addInventory({id: 43, item: 'Две игральные кости'}))
        } else {
            if (character.inventory.find((elem) => elem.id === 43)) {
                dispatch(removeInventory({id: 43, item: 'Две игральные кости'}))
                dispatch(addInventory({id: 44, item: 'Три игральные кости'}))
            } else {
                if (character.inventory.find((elem) => elem.id === 44)) {
                    dispatch(removeInventory({id: 44, item: 'Три игральные кости'}))
                    dispatch(addInventory({id: 45, item: 'Четыре игральные кости'}))
                } else {
                    if (character.inventory.find((elem) => elem.id === 45)) {
                        dispatch(removeInventory({id: 45, item: 'Четыре игральные кости'}))
                        dispatch(addInventory({id: 46, item: 'Комплект игральных костей'}))
                    } else {
                        dispatch(addInventory({id: 36, item: 'Игральная кость'}))
                    }
                }
            }
        }
        dispatch(removePartPlot({id: 4, title: 'Кубик в рыбе'}))
        navigate(-1)
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 4)
            ? <div>
                <p className="description">
                    Внутри рыбы оказалась игральная кость.
                </p>
                <p className="dialog">
                    "Понятия не имею, как она туда попала, но может пригодится"
                </p>
                <button className="answerButton" onClick={wayCubeInFish}>
                    В мешочек
                </button>
            </div>
            : ''}
        </div>
    );
};

export default CubeInFish;