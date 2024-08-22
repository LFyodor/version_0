import React, { useEffect} from "react";
import '../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { removeInventory } from "./store/characterSlice";

const InventoryInfo = () => {
    const character = useSelector((state) => state.character);
    const dispatch = useDispatch();

    useEffect(() => {
        if (character.inventory.find((elem) => elem.id === 5) && character.torch <= 0) {
            dispatch(removeInventory({id: 5, item: 'Горящий факел'}))
        }
    }, [character.inventory, character.torch, dispatch]);

    const bag = character.inventory.map((elem) => {
        return (
            <p className="item" key={elem.id}>
                {elem.item}
            </p>
        )
    })

    return (
        <aside>
            {bag}
        </aside>
    );
};

export default InventoryInfo;