import {useState} from 'react';
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
                {listItems.map((obj) => <ListItem key={obj.id} id={obj.id} checked={obj.checked} text={obj.text}
                                                  handleDeleteItem={handleDeleteItem} handleCheckItem={handleCheckItem}></ListItem>)}
            </List>
        </div>
    );

    function handleAddItem(text) {
        setListItems([
            ...listItems,
            {
                id: getId(),
                text: text,
                checked: false
            }
        ]);
    }

    function handleCheckItem(id, enable) {
        setListItems(listItems.map(element => {
            if (element.id === id) {
                return {...element, checked: enable};
            } else {
                return element;
            }
        }));
    }

    function handleDeleteItem(id) {
        setListItems(listItems.filter(element => element.id !== id));
    }

    function getId() {
        let id = '';
        for (let i = 0; i < 10; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }
}