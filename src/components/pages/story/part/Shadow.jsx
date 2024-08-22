import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addInventory, addPartPlot, removeInventory, removePartPlot } from "../../../store/characterSlice";
import AgainDied from "../../../AgainDied";

const Shadow = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const comeUp = () => {
        dispatch(removePartPlot({id: 131, title: 'Первый бой с тенью'}))
        dispatch(addPartPlot({id: 132, title: 'Тень побеждает'}))
    };

    const run = () => {
        dispatch(removePartPlot({id: 131, title: 'Первый бой с тенью'}))
        dispatch(addPartPlot({id: 133, title: 'Убежать от тени'}))
    };

    const wayEast1 = () => {
        dispatch(removePartPlot({id: 133, title: 'Убежать от тени'}))
        dispatch(addPartPlot({id: 135, title: 'Тень преследует'}))
        navigate('/east')
    };

    const leave = () => {
        dispatch(removePartPlot({id: 131, title: 'Первый бой с тенью'}))
        dispatch(addPartPlot({id: 134, title: 'Бегство'}))
    };

    const wayEast2 = () => {
        dispatch(removePartPlot({id: 134, title: 'Бегство'}))
        dispatch(addPartPlot({id: 135, title: 'Тень преследует'}))
        dispatch(removeInventory({id: 14, item: 'Нож'}))
        navigate('/east')
    };

    const useThing = () => {
        dispatch(removePartPlot({id: 136, title: 'Второй бой с тенью'}))
        dispatch(addPartPlot({id: 137, title: 'От тени не отбиться'}))
    };

    const useTorch = () => {
        if (character.inventory.find((elem) => elem.id === 4)) {
            dispatch(removeInventory({id: 4, item: 'Незажжённый факел'}))
        } else {
            dispatch(removeInventory({id: 2, item: 'Короткая крепкая палка'}))
            dispatch(removeInventory({id: 3, item: 'Рваная тряпка'}))
            dispatch(removeInventory({id: 6, item: 'Бутылка рома'}))
        }
        dispatch(addInventory({id: 5, item: 'Горящий факел'}))
        dispatch(removePartPlot({id: 136, title: 'Второй бой с тенью'}))
        dispatch(addPartPlot({id: 138, title: 'Отбился факелом'}))
    };

    const useObsidianKnife = () => {
        dispatch(removePartPlot({id: 136, title: 'Второй бой с тенью'}))
        dispatch(addPartPlot({id: 139, title: 'Отбился обсидианом'}))
    };

    const giveUp = () => {
        dispatch(removePartPlot({id: 136, title: 'Второй бой с тенью'}))
        dispatch(addPartPlot({id: 140, title: 'Сдаться'}))
    };

    const runToTheBonfire1 = () => {
        dispatch(removeInventory({id: 5, item: 'Горящий факел'}))
        dispatch(removePartPlot({id: 138, title: 'Отбился факелом'}))
        dispatch(addPartPlot({id: 141, title: 'Пока живой'}))
        navigate('/bonfire')
    };

    const runToTheBonfire2 = () => {
        dispatch(removePartPlot({id: 139, title: 'Отбился обсидианом'}))
        dispatch(addPartPlot({id: 141, title: 'Пока живой'}))
        navigate('/bonfire')
    };

    const sitDown = () => {
        dispatch(removePartPlot({id: 142, title: 'Под защитой костра'}))
        dispatch(addPartPlot({id: 143, title: 'Подготовка к бою'}))
        navigate('/bonfire')
    };

    const cantSleep = () => {
        dispatch(removePartPlot({id: 144, title: 'Нельзя спать'}))
        navigate('/bonfire')
    };

    const useTorchLast = () => {
        dispatch(removePartPlot({id: 145, title: 'Последний бой с тенью'}))
        dispatch(addPartPlot({id: 146, title: 'Тень и факел'}))
    };

    const useObsidianKnifeAgain = () => {
        dispatch(removePartPlot({id: 145, title: 'Последний бой с тенью'}))
        dispatch(addPartPlot({id: 147, title: 'Удар обсидианом'}))
    };

    const useSmolderingStick = () => {
        dispatch(removePartPlot({id: 145, title: 'Последний бой с тенью'}))
        dispatch(addPartPlot({id: 150, title: 'Палочка-выручалочка'}))
    };

    const hitKnife = () => {
        dispatch(removePartPlot({id: 147, title: 'Удар обсидианом'}))
        dispatch(addPartPlot({id: 148, title: 'Удар мимо'}))
    };

    const throwKnife = () => {
        if (character.luck >= 3) {
            dispatch(addPartPlot({id: 149, title: 'Попал ножом'}))
        } else {
            dispatch(addPartPlot({id: 148, title: 'Удар мимо'}))
        }
        dispatch(removePartPlot({id: 147, title: 'Удар обсидианом'}))
    };

    const endShadow = () => {
        dispatch(removePartPlot({id: 149, title: 'Попал ножом'}))
        navigate('/bonfire')
    };

    const helpCame = () => {
        dispatch(removePartPlot({id: 150, title: 'Палочка-выручалочка'}))
        navigate('/bonfire')
    };

    return (
        <div>
            {character.partPlot.find((part) => part.id === 131)
            ? <div>
                <p className="description">
                    Взобравшись обратно со скалы на остров,
                    {character.torch > 0 ? ` факел в твоих руках тухнет от сильного порыва ветра, и ` : ''}
                    ты видишь человеческий силуэт, словно охраняющий путь на север. 
                    Кажется, это та самая фигура, что была на другом острове. Теперь он намного ближе, и ты убеждаешься: 
                    вокруг него правда дым, и без огня. В любом случае, ты больше не один... радуйся!
                </p>
                {character.partPlot.find((part) => part.id === 105)
                ? <p className="description">
                    Внезапно темноту разразил знакомый крик капитана Хаммонда: "Беги!"
                </p>
                : ''}
                <button className="answerButton" onClick={comeUp}>
                    Подойти
                </button>
                {character.partPlot.find((part) => part.id === 105)
                ? <button className="answerButton" onClick={run}>
                    "Ну нахер! Я сваливаю!"
                </button>
                : <button className="answerButton" onClick={leave}>
                    "Осторожность не помешает, пока уйду"
                </button>}
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 132)
            ? <div>
                <p className="description">
                    Ты подходишь ближе, и на твоих глазах силуэт незнакомца тает во тьме. Что-то холодное обхватывает голову сзади. 
                    Ты слышишь хруст собственной шеи
                </p>
                <AgainDied />
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 133)
            ? <div>
                <p className="description">
                    Ты бежишь без оглядки в противоположную сторону и боишься, но не человека чернее ночи, а то, что 
                    его совсем не слышно
                </p>
                <button className="answerButton" onClick={wayEast1}>
                    "Мне нужно к костру"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 134)
            ? <div>
                <p className="description">
                    Ты разворачиваешься и краем глаза замечаешь, как чёрная фигура срывается с места и неестественно быстро приближается 
                    к тебе. Ты испуган и пытаешься убежать. Неизвестный хватает тебя, ты вырываешься, но теряешь нож
                </p>
                <button className="answerButton" onClick={wayEast2}>
                    "Надо уносить ноги"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 136)
            ? <div>
                <p className="description">
                    Ты бежишь по каменистому пляжу и оступаешься. Кровь бурлит, и ты не чувствуешь боли, но ощущаешь 
                    приближение враждебной тени. Она чернее ночи перед рассветом и движется бесшумно - это самая настоящая 
                    ожившая Тень. И она пришла за тобой, потому что ты позвал её... Дымящаяся фигура приближалась. 
                    Необходимо дать ей отпор или хотя бы задержать
                </p>
                {character.inventory.find((elem) => elem.id === 14) &&
                character.hp > 3 && character.tiredness <= 32
                ? <button className="answerButton" onClick={useThing}>
                    Отмахнуться ножом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 15) &&
                character.hp > 6 && character.tiredness <= 24
                ? <button className="answerButton" onClick={useThing}>
                    Отмахнуться топором
                </button>
                : ''}
                {(character.inventory.find((elem) => elem.id === 4) ||
                (character.inventory.find((elem) => elem.id === 2) &&
                character.inventory.find((elem) => elem.id === 3) &&
                character.inventory.find((elem) => elem.id === 6))) &&
                character.inventory.find((elem) => elem.id === 0)
                ? <button className="answerButton" onClick={useTorch}>
                    Зажечь факел
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 55) &&
                character.hp > 3 && character.tiredness <= 32
                ? <button className="answerButton" onClick={useObsidianKnife}>
                    Отмахнуться обсидиановым ножом
                </button>
                : ''}
                <button className="answerButton" onClick={giveUp}>
                    "Я ничего не могу сделать"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 137)
            ? <div>
                <p className="description">
                    Удар стали прорезает тень насквозь, но она остаётся непоколебима. Невозможно навредить бесплотному 
                    существу чем-то обыкновенным. Необходим иной способ
                </p>
                <AgainDied />
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 138)
            ? <div>
                <p className="description">
                    Тебе вовремя удаётся зажечь факел. Тень бьёт по нему и от боли отстраняется назад. Огонь выпадает 
                    из твоих рук и тухнет в накатившейся волне. Тварь боится огня, и у тебя появился шанс
                </p>
                <button className="answerButton" onClick={runToTheBonfire1}>
                    Бежать к костру
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 139)
            ? <div>
                <p className="description">
                    Ты выхватываешь из-за пояса обсидиановый нож и бьёшь им наотмашь Этого вполне хватает, чтобы 
                    Тень схватилась за руку и отстранилась назад. Её можно ранить, а значит можно убить.
                </p>
                <p className="dialog">
                    "Здесь, в самой гуще тьмы, мне не победить на её территории. Я должен бежать..."
                </p>
                <button className="answerButton" onClick={runToTheBonfire2}>
                    "К костру"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 140)
            ? <div>
                <p className="dialog">
                    "Я бесполезен. Необходимо покончить с этим."
                </p>
                <AgainDied />
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 142)
            ? <div>
                <p className="description">
                    Подбежав к костру вплотную, ты разворачиваешься и видишь в нескольких метрах от себя Тень. Огонь 
                    приятно греет спину, а душу холодит взгляд чёрных глаз. Это твоя крепость и ловушка одновременно.
                </p>
                <p className="dialog">
                    "Я был прав! Ты, сволочь, боишься огня и не подойдёшь, пока есть свет. Старина Кросби подготовится и 
                    даст тебе отпор."
                </p>
                <button className="answerButton" onClick={sitDown}>
                    "Уж не сомневайся!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 144)
            ? <div>
                <p className="dialog">
                    "Костёр скоро зачахнет. Если лягу спать, уже никогда не проснусь. Тень не позволит"
                </p>
                <button className="answerButton" onClick={cantSleep}>
                    "Необходимо проявить стойкость"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 145)
            ? <div>
                <p className="description">
                    Костёр погас, а вместе с ним и надежда на спасение. Тень помчалась на Кросби, бесшумно и легко ступая 
                    по песку и гальке. Без большого огня оставалось лишь одно: дать Отродью Ночи последний бой.
                </p>
                <p className="dialog">
                    "Ну же, давай! Я готов!"
                </p>
                {character.inventory.find((elem) => elem.id === 5)
                ? <button className="answerButton" onClick={useTorchLast}>
                    Отбиться факелом
                </button>
                : ''}
                {character.inventory.find((elem) => elem.id === 55)
                ? <button className="answerButton" onClick={useObsidianKnifeAgain}>
                    Использовать обсидиановый нож
                </button>
                : <button className="answerButton" onClick={useSmolderingStick}>
                    Выхватить из костра тлеющую палку
                </button>}
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 146)
            ? <div>
                <p className="description">
                    Ты размахиваешь факелом перед существом Тьмы, и оно постоянно уворачивается от огня. А в какой-то момент и вовсе 
                    рассеивается у тебя на глазах. И ты спиной ощущаешь, как позади из твоей тени выползает сгусток 
                    беспричинной ненависти к тебе. Одним ударом тебя опрокидывает наземь. Чёрная рука выхватывает факел и тушит его 
                    в песке. Света больше нет...
                </p>
                {character.inventory.find((elem) => elem.id === 55)
                ? <button className="answerButton" onClick={useObsidianKnifeAgain}>
                    Использовать обсидиановый нож
                </button>
                : <button className="answerButton" onClick={useSmolderingStick}>
                    Выхватить из костра тлеющую палку
                </button>}
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 147)
            ? <div>
                <p className="description">
                    Ни секунды не раздумывая, ты хватаешь обсидиановый нож и...
                </p>
                <button className="answerButton" onClick={hitKnife}>
                    Ударить ножом Тень
                </button>
                <button className="answerButton" onClick={throwKnife}>
                    Бросить нож в Тень
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 148)
            ? <div>
                <p className="description">
                    Ты промахиваешься и теряешь сознание от сильного удара. Проваливаясь во тьму, ты думаешь об одном:
                </p>
                <p className="dialog">
                    "Необходимо практиковаться с ножом"
                </p>
                <AgainDied />
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 149)
            ? <div>
                <p className="description">
                    Чёрный-чёрный нож легко входит в чёрную-чёрную плоть. Из раны течёт чёрная-чёрная кровь. Тень падает 
                    на колени и расплывается в чёрной-чёрной ночи
                </p>
                <button className="answerButton" onClick={endShadow}>
                    "Да! И так будет с каждым!"
                </button>
            </div>
            : ''}
            {character.partPlot.find((part) => part.id === 150)
            ? <div>
                <p className="description">
                    {character.partPlot.find((part) => part.id === 105)
                    ? `Неожиданно Тень сбивает с ног человек и бросает её в ещё дымящийся костёр. Она сопротивляется 
                    и пытается выбраться, но твой покойный друг и капитан Хаммонд Ли крепко держит эту сволочь. Не время 
                    думать "Как? Что? И почему?. Время добить исчадие Тьмы! Ты пригвождаешь Тень своей палкой, и она растворяется в 
                    муках, растекаясь по песку. Хаммонд поднимается, отряхивает руки и кивает тебе на прощание.`
                    : `Тень обхватывает левой рукой тлеющую часть палки, которой ты ей угрожаешь, и сдавливает её в труху. 
                    Медленно и неизбежно тёмная сущность наклоняется и тянет руки к твоей шее. Дышать нечем, глаза закрываются, и 
                    твоё тело бессильно падает на песок.`}
                </p>
                {character.partPlot.find((part) => part.id === 105)
                ? <button className="answerButton" onClick={helpCame}>
                    "Спасибо!.. Но это было очень странно"
                </button>
                : <AgainDied />}
            </div>
            : ''}
        </div>
    );
};

export default Shadow;