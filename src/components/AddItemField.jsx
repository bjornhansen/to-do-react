import React from "react";
import Button from "./Button";

export default function AddItemField({ handleAddItem }) {
    return (
        <div className="max-w-screen-md mx-auto flex justify-center items-center px-2 my-6 space-x-2">
            <input id="addItemInput" className="border rounded grow p-2" type="text" placeholder="Type item here"/>
            <Button text="Add" handleClick={doHandleAddItem}></Button>
        </div>
    );

    function doHandleAddItem() {
        const inputValue = document.getElementById('addItemInput').value;
        if (!inputValue) {
            return;
        }
        document.getElementById('addItemInput').value = '';
        handleAddItem(inputValue);
    }
}