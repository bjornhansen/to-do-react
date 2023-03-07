import React from "react";

export default function ListItem({listItem, handleDeleteItem, handleCheckItem}) {
    return (
        <li className="flex border rounded space-x-2 p-2 mb-2">
            <input id={'checkbox' + listItem.id} type="checkbox" onChange={e => handleCheckItem(e, listItem.id)} checked={listItem.checked}/>
            <div className={'grow' + (listItem.checked ? ' line-through' : '')}>{listItem.text}</div>
            <button className="text-red-600" onClick={() => { handleDeleteItem(listItem.id) }}>Delete</button>
        </li>
    );
}