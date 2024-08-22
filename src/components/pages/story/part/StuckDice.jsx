import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInventory, removeInventory, removePartPlot } from "../../../store/characterSlice";
import { removeSouthItems } from "../../../store/itemsSlice";

const StuckDice = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getDice = () => {
        if (character.partPlot.find((part) => part.id === 35)) {
            dispatch(removePartPlot({id: 35, title: 'Прилипшая костяшка'}))
        } else {
            dispatch(removeSouthItems({id: 36, item: 'Игральная кость'}))
        }
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
        dispatch(removeSouthItems({id: 36, item: 'Игральная кость'}))
        navigate('/south')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 35)
            ? <div>
                <p className="description">
                    Поднявшись с песка, ты отряхиваешься и обнаруживаешь прилипшую к щеке игральную кость
                </p>
                <button className="answerButton" onClick={getDice}>
                    "Вот так неожиданность"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 36)
            ? <div>
                <p className="description">
                    Ты спотыкаешься на ровном месте и падаешь лицом в песок. Твоя неуклюжесть помогает найти игральную кость
                </p>
                <button className="answerButton" onClick={getDice}>
                    "Я везучий чертяка!"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default StuckDice;