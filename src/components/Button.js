import React from "react";

export default function Button({ text, handleClick }) {
    return (
        <button className="bg-amber-400 p-2 rounded-lg ring-amber-200 ring-offset-2 hover:ring" onClick={handleClick}>
            {text}
        </button>
    );
}