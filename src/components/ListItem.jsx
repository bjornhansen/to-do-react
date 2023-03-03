import React from "react";

export default function ListItem({id, checked, text, handleDeleteItem, handleCheckItem}) {
    return (
        <li className="flex border rounded space-x-2 p-2 mb-2">
            <input id={'checkbox' + id} type="checkbox" onChange={doHandleCheckItem} checked={checked}/>
            <div className={'grow' + (checked ? ' line-through' : '')}>{text}</div>
            <button className="text-red-600" onClick={() => { handleDeleteItem(id) }}>Delete</button>
        </li>
    );

    function doHandleCheckItem() {
        const enabled = document.getElementById('checkbox' + id).checked;
        handleCheckItem(id, enabled);
    }
}