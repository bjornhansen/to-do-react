import React from "react";

export default function AddItemField({ handleAddItem }) {
    return (
        <div className="max-w-screen-md mx-auto flex justify-center items-center px-2 my-6 space-x-2">
            <input id="addItemInput" className="border rounded grow p-1" type="text" placeholder="Type item here"/>
            <button className="border rounded p-1 hover:shadow" onClick={doHandleAddItem}>Add</button>
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