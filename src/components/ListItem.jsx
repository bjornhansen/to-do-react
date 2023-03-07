import React, {useState} from "react";

export default function ListItem({listItem, handleDeleteItem, handleCheckItem, handleChangeItem}) {
    const [editing, setEditing] = useState(false);

    return (
        <li className="flex border rounded space-x-2 p-2 mb-2">
            <input id={'checkbox' + listItem.id} type="checkbox" onChange={e => handleCheckItem(e, listItem.id)} checked={listItem.checked}/>
            {editing ?
                <input className="grow border rounded grow p-1" onChange={e => handleChangeItem(e, listItem.id)} value={listItem.text} /> :
                <div className={'grow' + (listItem.checked ? ' line-through' : '')}>{listItem.text}</div>
            }
            {editing ?
                <button className="text-green-600" onClick={() => { setEditing(false) }}>Save</button> :
                <button className="text-blue-600" onClick={() => { setEditing(true) }}>Edit</button>
            }
            <button className="text-red-600" onClick={() => { handleDeleteItem(listItem.id) }}>Delete</button>
        </li>
    );
}