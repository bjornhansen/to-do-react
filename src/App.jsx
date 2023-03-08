import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import AddItemField from "./components/AddItemField";
import ListItem from "./components/ListItem";

export default function App() {
    const initialListItems = JSON.parse(localStorage.getItem('listItems'));
    const [listItems, setListItems] = useState(initialListItems ? initialListItems : []);
    const [showCompletedItems, setShowCompletedItems] = useState(false);

    useEffect(() => {
        localStorage.setItem('listItems', JSON.stringify(listItems));
    }, [listItems]);

    return (
        <>
            <Header showCompletedItems={showCompletedItems} handleToggleCompleted={handleToggleCompletedItems}></Header>
            <AddItemField handleAddItem={handleAddItem}></AddItemField>
            <List>
                {listItems.map(e => {
                    if (showCompletedItems) {
                        return e.checked ? <ListItem key={e.id} listItem={e} handleDeleteItem={handleDeleteItem} handleCheckItem={handleCheckItem} handleChangeItem={handleChangeItem}></ListItem> : null;
                    } else {
                        return !e.checked ? <ListItem key={e.id} listItem={e} handleDeleteItem={handleDeleteItem} handleCheckItem={handleCheckItem} handleChangeItem={handleChangeItem}></ListItem> : null;
                    }
                })}
            </List>
        </>
    );

    function handleAddItem(text) {
        setListItems([
            ...listItems,
            {
                id: getId(),
                text: text,
                checked: false,
                created: new Date().toJSON(),
            }
        ]);
    }

    function handleCheckItem(event, id) {
        setListItems(listItems.map(e => {
            if (e.id === id) {
                return {
                    ...e,
                    checked: event.target.checked,
                };
            } else {
                return e;
            }
        }));
    }

    function handleChangeItem(event, id) {
        setListItems(listItems.map(e => {
            if (e.id === id) {
                return {
                    ...e,
                    text: event.target.value,
                };
            } else {
                return e;
            }
        }));
    }

    function handleToggleCompletedItems() {
        setShowCompletedItems(!showCompletedItems);
    }

    function handleDeleteItem(id) {
        setListItems(listItems.filter(e => e.id !== id));
    }

    function getId() {
        let id = '';
        for (let i = 0; i < 10; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }
}