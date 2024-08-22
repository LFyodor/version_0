import React from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonActions from "../../CommonActions";
import { addTime } from "../../store/characterSlice";
import AgainDied from "../../AgainDied";
import WestActions from "../../actions/WestActions";

const West = () => {
    const character = useSelector((state) => state.character);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wayNorthwest = () => {
        dispatch(addTime(1))
        navigate('/northwest')
    };

    return (
        <div>
            <CharacterInfo />
            <div className="table">
                <InventoryInfo />
                {character.hp > 0 && character.tiredness <= 32
                ? <div className="locationAndActions">
                    <div className="location">
                        <p className="description">
                            Запад острова
                        </p>
                        <p className="description">
                            {character.time % 24 >= 3 && character.time % 24 <= 5
                            ? `Узкая каменная гряда, переходящая в обнажившиеся при отливе камни. 
                            Они, словно скользкая дорога смерти к тому, что может спасти жизнь, - к обломкам корабля.`
                            + `${items.westItems.find((elem) => elem.id === 3)
                                ? ` Ближе всего лежит тряпка. Тебе решать: понадобится она или нет.` : ''}`
                            + `${items.westItems.find((elem) => elem.id === 40)
                                ? ` Самое приметное "сокровище" - ящик с грузом. Его хорошо помотало, но внутри должно остаться что-то 
                                полезное.` : ''}`
                            + `${items.westItems.find((elem) => elem.id === 18)
                                ? ` После чего нельзя оставить незамеченным большой кусок парусины. В такой могут замотаться двое 
                                человек.` : ''}`
                            + `${(items.westItems.find((elem) => elem.id === 53) &&
                                character.torch > 0 &&
                                Math.floor(character.time/24) >= 3)
                                ? ` В луже морской воды блестит шкатулка.` : ''}`
                            + `${items.westItems.find((elem) => elem.id === 2)
                                ? ` Недалеко от этого лежит палка - может сгодиться.` : ''}`
                            + `${items.westItems.find((elem) => elem.id === 37)
                                ? ` Дальше всего находится бревно, из которого можно сделать плот.` : ''}`
                            + `${items.westItems.find((elem) => elem.id === 38)
                                ? ` И ещё одно более громоздкое бревно - из таких строят корабли.` : ''}`
                            : `Узкая каменная гряда, выходящая на залив, в котором плавают обломки корабля. Добраться до них 
                            не представляется возможным из-за массивных волн, способных как накрыть человека, прижимая ко дну, 
                            так и разбить его об острые скалы побережья.`}
                        </p>
                        <div className="way">
                            <button onClick={wayNorthwest}>
                                Пойти на северо-запад острова
                            </button>
                        </div>
                    </div>
                    <div className="actions">
                        {character.time % 24 >= 3 && character.time % 24 <= 5
                        ? <WestActions />
                        : ''}
                        <CommonActions />
                    </div>
                </div>
                : character.hp > 0 && character.tiredness > 32
                    ? <div>
                        <p className="description">
                            Обессиленный и уставший, ты проваливаешься в сон, падаешь со скользкого камня и тонешь в заливе. 
                            Тебе нужен был отдых, а сейчас...
                        </p>
                        <AgainDied />
                    </div>
                    : ''}
            </div>
        </div>
    )
}

export default West;