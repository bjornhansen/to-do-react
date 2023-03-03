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
        const newListItems = listItems.slice();
        newListItems.push({
            id: getId(),
            text: text,
            checked: false
        });
        setListItems(newListItems);
    }

    function handleCheckItem(id, enable) {
        const newListItems = listItems.slice();
        const elementToChange = newListItems.find((element) => element.id === id);
        elementToChange.checked = enable;
        setListItems(newListItems);
    }

    function handleDeleteItem(id) {
        setListItems(listItems.filter((element) => element.id !== id));
    }

    function getId() {
        let id = '';
        for (let i = 0; i < 10; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }
}