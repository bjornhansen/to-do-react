export default function listItemsReducer(listItems, action) {
    switch (action.type) {
        case 'add_item': {
            return [
                ...listItems,
                {
                    id: getId(),
                    text: action.text,
                    checked: false,
                    created: new Date().toJSON(),
                }
            ];
        }

        case 'check_item': {
            return listItems.map(e => {
                if (e.id === action.id) {
                    return {
                        ...e,
                        checked: action.event.target.checked,
                    };
                } else {
                    return e;
                }
            });
        }

        case 'change_item': {
            return listItems.map(e => {
                if (e.id === action.id) {
                    return {
                        ...e,
                        text: action.event.target.value,
                    };
                } else {
                    return e;
                }
            });
        }

        case 'delete_item': {
            return listItems.filter(e => e.id !== action.id)
        }

        default:
            throw Error('Unknown action: ' + action.type);
    }
}

function getId() {
    let id = '';
    for (let i = 0; i < 10; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}