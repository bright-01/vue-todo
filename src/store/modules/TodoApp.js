const storage = {
    fetch() {
        let arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) != 'loglevel:webpack-dev-server') {
                    JSON.parse(localStorage.getItem(localStorage.key(i)));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}

const state = { // state의 변경은 mutations에서 변경해야한다. 아니면 추적하기 어려움
    headerText : 'TODO it!!!!',
    todoItems: storage.fetch()
}

const getters = {
    getTodoItems(state){
        return state.todoItems;
    }
}

const mutations = {
    addOneItem (state, payload) {
        const obj = { completed: false, item: payload}
        localStorage.setItem(payload, JSON.stringify(obj))
        state.todoItems.push(obj);
    },

    removeOneItem (state, payload){
        // localStorage.removeItem(payload.todoItem.item);
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index,1);
    },

    toggleOneItem (state, payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        // todoItem.completed = !todoItem.completed;
        localStorage.removeItem(payload.todoItem);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    todoItemAllClear (state){
        localStorage.clear();
        state.todoItems = [];
    },
}

export default {
    state,
    getters,
    mutations
}
