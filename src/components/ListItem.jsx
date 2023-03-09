import React, {useState, useEffect} from "react";

export default function ListItem({listItem, dispatch}) {
    const [editing, setEditing] = useState(false);

    return (
        <li className="flex items-center border rounded space-x-2 p-2 mb-2">
            <input id={'checkbox' + listItem.id} type="checkbox" onChange={e => dispatchWithEvent(e, 'check_item', listItem.id)} checked={listItem.checked}/>
            {editing ?
                <input className="grow border rounded grow p-1" onChange={e => dispatchWithEvent(e, 'change_item', listItem.id)} value={listItem.text}/> :
                <div className={'grow' + (listItem.checked ? ' line-through' : '')}>{listItem.text}</div>
            }
            <small className="text-slate-600">Created {new Date(listItem.created).toLocaleDateString('en-us', {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: 'numeric',
                minute: 'numeric'
            })}</small>
            {editing ?
                <button className="text-green-600" onClick={() => {
                    setEditing(false)
                }}>Save</button> :
                <button className="text-blue-600" onClick={() => {
                    setEditing(true)
                }}>Edit</button>
            }
            <button className="text-red-600" onClick={() => {
                dispatch({
                    type: "delete_item",
                    id: listItem.id
                })
            }}>Delete
            </button>
        </li>
    );

    function dispatchWithEvent(event, type, id) {
        dispatch({
            type: type,
            event: event,
            id: id,
        });
    }
}