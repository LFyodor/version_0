import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, addPartPlot, removeInventory, removePartPlot } from "../../../store/characterSlice";

const TalkToHammond = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getSail = () => {
        dispatch(removePartPlot({id: 163, title: 'Второй разговор с Хаммондом'}))
        dispatch(addInventory({id: 18, item: 'Кусок парусины'}))
        dispatch(addPartPlot({id: 164, title: 'Ещё подарок от капитана'}))
    };

    const getThings = () => {
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
        dispatch(removePartPlot({id: 164, title: 'Ещё подарок от капитана'}))
        dispatch(addInventory({id: 31, item: 'Счастливая монетка капитана'}))
        navigate('/southeast')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 163)
            ? <div>
                <p className="dialog">
                    "Ладно, капитан, ты помог мне с бревном, один бы я ни за что не справился, значит ты не плод моего 
                    воображения. Я хочу сказать... Что происходит, мать твою?"
                </p>
                <p className="dialog">
                    "Ты поступил по совести и чести, предав моё тело морю, и я хочу отблагодарить тебя."
                </p>
                <p className="dialog">
                    "Это не объяснение. Мёртвые не возвращаются за долгами или чтобы отдать их."
                </p>
                <p className="dialog">
                    "Разве мало доказательств, что остров - место необычное?!"
                </p>
                <p className="dialog">
                    "Тут сложно поспорить. Если не собираешься отужинать моими мозгами, можешь остаться."
                </p>
                <p className="dialog">
                    "О нет, подобное блюдо меня вконец доконает. Лучше возьми это."
                </p>
                <p className="description">
                    Хаммонд указал куда-то в сторону. Там, в темноте, лежало светлое пятно - парусина, в которой Кросби 
                    отдал последние почести капитану. Это превосходная деталь, и с ней у моряка больше шансов на успешный побег с острова.
                </p>
                <button className="answerButton" onClick={getSail}>
                    "Спасибо!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 164)
            ? <div>
                <p className="dialog">
                    "Ах да, чуть не забыл! Мне уже не пригодится, а тебе - возможно."
                </p>
                <p className="description">
                    Оживший утопленник протянул руку. На ладони лежали его счастливая монета, с которой он никогда не расставался, и 
                    игральная кость.
                </p>
                <p className="dialog">
                    "Игральная кость?! Сыграем, капитан?"
                </p>
                <p className="dialog">
                    "Не со мной. Быть может, ты найдёшь азартного соперника... или он найдёт тебя."
                </p>
                <button className="answerButton" onClick={getThings}>
                    Взять монетку и кость
                </button>
            </div>
            : ''}
        </div>
    );
};

export default TalkToHammond;