import React, {useEffect, useState, useReducer} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import AddItemField from "./components/AddItemField";
import ListItem from "./components/ListItem";
import listItemsReducer from "./listItemsReducer";

export default function App() {
    const initialListItems = JSON.parse(localStorage.getItem('listItems'));
    const [listItems, dispatch] = useReducer(listItemsReducer, initialListItems ? initialListItems : []);
    const [showCompletedItems, setShowCompletedItems] = useState(false);

    useEffect(() => {
        localStorage.setItem('listItems', JSON.stringify(listItems));
    }, [listItems]);

    return (
        <>
            <Header showCompletedItems={showCompletedItems} handleToggleCompleted={handleToggleCompletedItems}></Header>
            <AddItemField dispatch={dispatch}></AddItemField>
            <List>
                {listItems.map(e => {
                    if (showCompletedItems) {
                        return e.checked ? <ListItem key={e.id} listItem={e} dispatch={dispatch}></ListItem> : null;
                    } else {
                        return !e.checked ? <ListItem key={e.id} listItem={e} dispatch={dispatch}></ListItem> : null;
                    }
                })}
            </List>
        </>
    );

    function handleToggleCompletedItems() {
        setShowCompletedItems(!showCompletedItems);
    }
}