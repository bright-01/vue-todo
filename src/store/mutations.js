
const addOneItem = (state, payload) => {
    const obj = { completed: false, item: payload}
    localStorage.setItem(payload, JSON.stringify(obj))
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) =>{
    // localStorage.removeItem(payload.todoItem.item);
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index,1);
}

const toggleOneItem = (state, payload) =>{
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    // todoItem.completed = !todoItem.completed;
    localStorage.removeItem(payload.todoItem);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const todoItemAllClear =  (state) =>{
    localStorage.clear();
    state.todoItems = [];
}

export {addOneItem, removeOneItem, toggleOneItem, todoItemAllClear};