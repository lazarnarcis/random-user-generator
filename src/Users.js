import React from "react";
import "./users.css";

export default function Users({ user }) {
    return <div className="card_user">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
    </div>
}