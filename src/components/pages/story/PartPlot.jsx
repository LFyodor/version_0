import React from "react";
import CharacterInfo from "../../CharacterInfo";
import InventoryInfo from "../../InventoryInfo";
import Start from "./part/Start";
import DrunkRum from "./part/DrunkRum";
import DrunkWine from "./part/DrunkWine";
import Boots from "./part/Boots";
import CubeInFish from "./part/CubeInFish";
import GotBurned from "./part/GotBurned";
import AsleepWithoutBoots from "./part/AsleepWithoutBoots";
import GotPoisonedFish from "./part/GotPoisonedFish";
import ShitHappensTorch from "./part/ShitHappensTorch";
import ShitHappensExtinguishing from "./part/ShitHappensExtinguishing";
import GotPoisonedSnake from "./part/GotPoisonedSnake";
import AlmostBonfire from "./part/AlmostBonfire";
import BreakTheBoxSE from "./part/BreakTheBoxSE";
import Raft from "./part/Raft";
import Knife from "./part/Knife";
import Medallion from "./part/Medallion";
import StuckDice from "./part/StuckDice";
import Earthquake from "./part/Earthquake";
import ExamineTheBody from "./part/ExamineTheBody";
import BreakTheBoxSW from "./part/BreakTheBoxSW";
import OpenTheBarrel from "./part/OpenTheBarrel";
import GetTheTrap from "./part/GetTheTrap";
import GetAxe from "./part/GetAxe";
import Descent from "./part/Descent";
import Catch from "./part/Catch";
import Seagull from "./part/Seagull";
import SignalLight from "./part/SignalLight";
import JumpOfRock from "./part/JumpOfRock";
import Vine from "./part/Vine";
import BreakTheBoxNW from "./part/BreakTheBoxNW";
import BreakTheBoxW from "./part/BreakTheBoxW";
import OpenTheBox from "./part/OpenTheBox";
import FallInTheBay from "./part/FallInTheBay";
import Timber from "./part/Timber";
import DebtToHammond from "./part/DebtToHammond";
import DeepIntoTheCave from "./part/DeepIntoTheCave";
import FightWithSnake from "./part/FightWithSnake";
import CatchFeather from "./part/CatchFeather";
import Shadow from "./part/Shadow";
import Final from "./part/Final";
import Knowledge from "./part/Knowledge";
import TalkToHammond from "./part/TalkToHammond";
import Voyage from "./part/Voyage";
import ReturnToTheIsland from "./part/ReturnToTheIsland";
import Inscription from "./part/Inscription";
import Dream from "./part/Dream";

const PartPlot = () => {

    return (
        <div>
            <CharacterInfo />
            <div className="table">
                <InventoryInfo />
                <div className="locationAndActions">
                    <Start />
                    <DrunkRum />
                    <DrunkWine />
                    <Boots />
                    <CubeInFish />
                    <GotBurned />
                    <AsleepWithoutBoots />
                    <GotPoisonedFish />
                    <ShitHappensTorch />
                    <ShitHappensExtinguishing />
                    <GotPoisonedSnake />
                    <AlmostBonfire />
                    <BreakTheBoxSE />
                    <Raft />
                    <Knife />
                    <Medallion />
                    <StuckDice />
                    <Earthquake />
                    <ExamineTheBody />
                    <BreakTheBoxSW />
                    <OpenTheBarrel />
                    <GetTheTrap />
                    <GetAxe />
                    <Descent />
                    <Catch />
                    <Seagull />
                    <SignalLight />
                    <JumpOfRock />
                    <Vine />
                    <BreakTheBoxNW />
                    <BreakTheBoxW />
                    <OpenTheBox />
                    <FallInTheBay />
                    <Timber />
                    <DebtToHammond />
                    <DeepIntoTheCave />
                    <FightWithSnake />
                    <CatchFeather />
                    <Shadow />
                    <Final />
                    <Knowledge />
                    <TalkToHammond />
                    <Voyage />
                    <ReturnToTheIsland />
                    <Inscription />
                    <Dream />
                </div>
            </div>
        </div>
    )
}

export default PartPlot;