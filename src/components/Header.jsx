import React from "react";
import Button from "./Button";

export default function Header({ showCompletedItems, handleToggleCompleted }) {
    return (
        <header className="flex justify-between items-center border-b p-3">
            <h1 className="text-3xl">React To Do App</h1>
            <Button text={showCompletedItems ? `Hide completed` : `Show completed`} handleClick={handleToggleCompleted}></Button>
        </header>
    );
}