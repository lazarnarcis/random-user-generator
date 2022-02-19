import React, { useEffect, useState } from "react";
import users from "./users.json";
import Users from "./Users";
import "./App.css";

export default function App() {
    const [message, setMessage] = useState(null);

    const generateuser = (arrayLength) => {
        return Math.floor((Math.random() * arrayLength) + 0);
    }
    const [randomNumber, setRand] = useState(generateuser(users.length));
    const generate = () => {
        setRand(generateuser(users.length));
    }

    useEffect(() => {
        setMessage(`${users[randomNumber].name}'s account has been generated!`);
    }, [randomNumber]);

    return (
        <>
            <h2>Generate a random user</h2>
            <button type="button" onClick={generate}>Generate</button>
            <p>{message}</p>
            <Users user={users[randomNumber]} />
        </>
    )
}