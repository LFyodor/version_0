import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, addPartPlot, addTiredness, decreaseHp, removeInventory, removePartPlot } from "../../../store/characterSlice";
import { addCenterItems, removeCenterItems } from "../../../store/itemsSlice";
import AgainDied from "../../../AgainDied";

const CatchFeather = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const useKnifeForKey = () => {
        if (character.luck >= 2) {
            dispatch(addPartPlot({id: 125, title: 'Отбился первый раз'}))
        } else {
            dispatch(addPartPlot({id: 126, title: 'Не отбился от змеи'}))
        }
        dispatch(removePartPlot({id: 122, title: 'Выловить ключ'}))
    };

    const useAxeForKey = () => {
        if (character.luck >= 1) {
            dispatch(addPartPlot({id: 125, title: 'Отбился первый раз'}))
        } else {
            dispatch(addPartPlot({id: 126, title: 'Не отбился от змеи'}))
        }
        dispatch(removePartPlot({id: 122, title: 'Выловить ключ'}))
    };

    const welldoneForKey = () => {
        dispatch(removePartPlot({id: 125, title: 'Отбился первый раз'}))
        dispatch(removeCenterItems({id: 54, item: 'Ключ из кости'}))
        dispatch(addInventory({id: 54, item: 'Ключ из кости'}))
        dispatch(decreaseHp(1))
        dispatch(addTiredness(2))
        navigate('/center')
    };

    const die = () => {
        dispatch(removePartPlot({id: 122, title: 'Выловить ключ'}))
        dispatch(addPartPlot({id: 126, title: 'Не отбился от змеи'}))
    };

    const useThingForDice = () => {
        dispatch(removePartPlot({id: 123, title: 'Выловить кубик'}))
        dispatch(addPartPlot({id: 127, title: 'Нож и топор не помогли'}))
    };

    const useObsidianForDice = () => {
        if (character.luck >= 1) {
            dispatch(addPartPlot({id: 128, title: 'Отбился второй раз'}))
        } else {
            dispatch(addPartPlot({id: 126, title: 'Не отбился от змеи'}))
        }
        dispatch(removePartPlot({id: 123, title: 'Выловить кубик'}))
    };

    const welldoneForDice = () => {
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
        dispatch(removePartPlot({id: 128, title: 'Отбился второй раз'}))
        dispatch(removeCenterItems({id: 36, item: 'Игральная кость'}))
        dispatch(decreaseHp(1))
        dispatch(addTiredness(2))
        navigate('/center')
    };

    const useThingForFeather = () => {
        dispatch(removePartPlot({id: 124, title: 'Выловить перо'}))
        dispatch(addPartPlot({id: 127, title: 'Нож и топор не помогли'}))
    };

    const useObsidianForFeather = () => {
        if (character.luck >= 2) {
            dispatch(addPartPlot({id: 129, title: 'Отбился третий раз'}))
        } else {
            dispatch(addPartPlot({id: 126, title: 'Не отбился от змеи'}))
        }
        dispatch(removePartPlot({id: 124, title: 'Выловить перо'}))
    };

    const welldoneForFeather = () => {
        dispatch(removePartPlot({id: 129, title: 'Отбился третий раз'}))
        dispatch(removeCenterItems({id: 26, item: 'Большая змея'}))
        dispatch(addCenterItems({id: 27, item: 'Сырая змея'}))
        dispatch(removeCenterItems({id: 35, item: 'Перо'}))
        dispatch(addInventory({id: 35, item: 'Перо'}))
        dispatch(decreaseHp(1))
        dispatch(addTiredness(2))
        navigate('/center')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 122)
            ? <div>
                <p className="description">
                    Когда вытаскиваешь ловушку из воды, твою руку обвивает крепкая змеиная хватка и тянет за собой
                </p>
                {character.hp > 3 && character.tiredness <= 32 &&
                character.inventory.find((elem) => elem.id === 14)
                ? <button className="answerButton" onClick={useKnifeForKey}>
                    Отбиться ножом
                </button>
                : ''}
                {character.hp > 6 && character.tiredness <= 24 &&
                character.inventory.find((elem) => elem.id === 15)
                ? <button className="answerButton" onClick={useAxeForKey}>
                    Отбиться топором
                </button>
                : ''}
                <button className="answerButton" onClick={die}>
                    Отдаться на милость судьбе
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 125)
            ? <div>
                <p className="description">
                    Тебе удаётся отмахнуться от змеи, пусть и не без вреда для себя. Но ты жив, а это главное! 
                    Вдовесок твоя раненая рука сжимает небольшую добычу - ключ из кости.
                </p>
                <button className="answerButton" onClick={welldoneForKey}>
                    "От чего он?.."
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 126)
            ? <div>
                <p className="description">
                    Удача оказалась не на твоей стороне. Хищный обитатель озера затягивает тебя под воду, где ты, барахтаясь, 
                    думаешь лишь об одном:
                </p>
                <p className="dialog">
                    "Необходимо сделать вдох, всего один вдох!"
                </p>
                <AgainDied />
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 123)
            ? <div>
                <p className="description">
                    И вновь ты видишь большой змеиный хвост в воде. Но уже поздно бежать, скользкая хищница в который раз 
                    пытается утянуть тебя на дно
                </p>
                {character.hp > 3 && character.tiredness <= 32 &&
                character.inventory.find((elem) => elem.id === 14)
                ? <button className="answerButton" onClick={useThingForDice}>
                    Отбиться ножом
                </button>
                : ''}
                {character.hp > 6 && character.tiredness <= 24 &&
                character.inventory.find((elem) => elem.id === 15)
                ? <button className="answerButton" onClick={useThingForDice}>
                    Отбиться топором
                </button>
                : ''}
                {character.hp > 3 && character.tiredness <= 32 &&
                character.inventory.find((elem)=> elem.id === 55)
                ? <button className="answerButton" onClick={useObsidianForDice}>
                    Отбиться обсидиановым ножом
                </button>
                : ''}
                <button className="answerButton" onClick={die}>
                    Отдаться на милость судьбе
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 127)
            ? <div>
                <p className="description">
                    Ты замахиваешься оружием для удара по чешуйчатой коже как в первый раз. Только вот змея следит за холодной 
                    сталью в твоей руке и рывком выхватывает её. Ты должен признать, этот монстр учится. И последнее, о чём 
                    ты думаешь, погружаясь на дно:
                </p>
                <p className="dialog">
                    "Мне тоже необходимо учиться!"
                </p>
                <AgainDied />
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 128)
            ? <div>
                <p className="description">
                    Чернейшим и незаметным во тьме клинком ты срезаешь кусочек плоти змеи. Рана для хищницы становится 
                    неожиданностью и жуткой проблемой. Хватка её ослабевает, и она уносится прочь. Отдышавшись, держась 
                    за пострадавший бок и стоя по колено в воде, ты нащупываешь под ногой камешек необычной формы - игральная кость
                </p>
                <button className="answerButton" onClick={welldoneForDice}>
                    "Не такой награды я ожидал, и всё же..."
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 124)
            ? <div>
                <p className="description">
                    Огромная змея резким прыжком в миг обвивает твоё тело и сдавливает в смертельных тисках. Тебе удаётся 
                    высвободить одну руку и дотянуться до оружия...
                </p>
                {character.hp > 3 && character.tiredness <= 32 &&
                character.inventory.find((elem) => elem.id === 14)
                ? <button className="answerButton" onClick={useThingForFeather}>
                    Отбиться ножом
                </button>
                : ''}
                {character.hp > 6 && character.tiredness <= 24 &&
                character.inventory.find((elem) => elem.id === 15)
                ? <button className="answerButton" onClick={useThingForFeather}>
                    Отбиться топором
                </button>
                : ''}
                {character.hp > 3 && character.tiredness <= 32 &&
                character.inventory.find((elem)=> elem.id === 55)
                ? <button className="answerButton" onClick={useObsidianForFeather}>
                    Отбиться обсидиановым ножом
                </button>
                : ''}
                <button className="answerButton" onClick={die}>
                    Отдаться на милость судьбе
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 129)
            ? <div>
                <p className="description">
                    Чёрный острый клинок уверенно лежит в твоей руке и также уверенно вонзается в крепкую плоть змеи. 
                    Она бросает раскрытую пасть, желая разом проглотить тебя и покончить в ожесточённой битве. Ты делаешь 
                    выпад рукой навстречу броску монстра и пробиваешь голову ей изнутри. Змея несколько раз успевает судорожно сжать 
                    твоё плечо мощной пастью до адской боли, после чего погибает, истекая горячей кровью. Она растекается по всему озеру, 
                    делая воду непригодной для питья, - цена победы. Теперь ты можешь поднять тускло-светящийся предмет, 
                    не опасаясь последствий. Это оказывается перо, сияющее, словно звезда на небе. Только вода в озере 
                    больше не пригодна для питья - цена победы
                </p>
                <button className="answerButton" onClick={welldoneForFeather}>
                    "Вот и всё. Ты станешь моим трофеем"
                </button>
            </div>
            : ''}
        </div>
    );
};

export default CatchFeather;