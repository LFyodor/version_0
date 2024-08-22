import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addPartPlot, removePartPlot } from "../../../store/characterSlice";
import { addRockItems } from "../../../store/itemsSlice";

const SignalLight = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const welldoneSignal = () => {
        dispatch(removePartPlot({id: 79, title: 'Сигнальный огонь'}))
        dispatch(addPartPlot({id: 130, title: 'Тень нападает'}))
        dispatch(addRockItems({id: 51, item: 'Сигнальный огонь'}))
        navigate('/rock')
    };

    const waySignalLight = () => {
        dispatch(removePartPlot({id: 80, title: 'Не хватает для сигнала'}))
        navigate('/rock')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 79)
            ? <div>
                <p className="description">
                    С трепетом в сердце ты зажигаешь сигнальный огонь, и он становится посланием во тьме: на этом острове есть человек, 
                    живой человек. Твой взор устремляется вдаль, прорезая тьму привыкшими к темноте глазами, и ты видишь, 
                    как дымящееся дерево зашевелилось. Это был человек, стоявший неподвижно столько, сколько ты его наблюдал, 
                    а теперь он сорвался с места и исчез
                </p>
                <button className="answerButton" onClick={welldoneSignal}>
                    "Скоро я буду не один"
                </button>
            </div>
            :''}
            {character.partPlot.find((part) => part.id === 80)
            ? <div>
                <p className="dialog">
                    "Для сигнального огня мне не хватает
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
                <button className="answerButton" onClick={waySignalLight}>
                    "Не так много ради спасения"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default SignalLight;