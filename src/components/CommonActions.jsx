import React from "react";
import '../styles/App.css';
import UnlitTorch from "./actions/UnlitTorch";
import FireTorch from "./actions/FireTorch";
import PutOutTorch from "./actions/PutOutTorch";
import DrinkRum from "./actions/DrinkRum";
import DrinkWine from "./actions/DrinkWine";
import DrinkWater from "./actions/DrinkWater";
import PutOnBoots from "./actions/PutOnBoots";
import EatFish from "./actions/EatFish";
import EatSnake from "./actions/EatSnake";
import EatCrackers from "./actions/EatCrackers";
import EatCornedBeef from "./actions/EatCornedBeef";
import EatSeagull from "./actions/EatSeagull";
import Wait from "./actions/Wait";

const CommonActions = () => {

    return (
        <div>
            <UnlitTorch />
            <FireTorch />
            <PutOutTorch />
            <DrinkRum />
            <DrinkWine />
            <DrinkWater />
            <PutOnBoots />
            <EatFish />
            <EatSnake />
            <EatCrackers />
            <EatCornedBeef />
            <EatSeagull />
            <Wait />
        </div>
    );
};

export default CommonActions;