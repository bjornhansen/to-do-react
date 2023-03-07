import {React, useState} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import AddItemField from "./components/AddItemField";
import ListItem from "./components/ListItem";

export default function App() {
    const [listItems, setListItems] = useState([]);

    return (
        <div className="">
            <Header></Header>
            <AddItemField handleAddItem={handleAddItem}></AddItemField>
            <List>
                {listItems.map(e => (
                    <ListItem key={e.id} listItem={e} handleDeleteItem={handleDeleteItem}
                              handleCheckItem={handleCheckItem} handleChangeItem={handleChangeItem}></ListItem>
                ))}
            </List>
        </div>
    );

    function handleAddItem(text) {
        setListItems([
            ...listItems,
            {
                id: getId(),
                text: text,
                checked: false,
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