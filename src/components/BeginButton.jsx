import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/App.css';
import { useDispatch } from "react-redux";
import { inGameTurn } from "./store/characterSlice";

const BeginButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const begin = () => {
        dispatch(inGameTurn())
        // Start
        navigate('/partplot');
    };

    return (
        <button className="beginButton" onClick={begin}>
            "Начать с нуля"
        </button>
    )
}

export default BeginButton;