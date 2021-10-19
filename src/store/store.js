import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // use는 플러그인 Vue를 사용하는 모든 영역에 Vuex를 사용하겠다라고 명시적으로 추가
// 위에서 추가하면
// Todo.vue 에서 this.$store로 접근이 가능하게 된다


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

export const store = new Vuex.Store({
    state : { // state의 변경은 mutations에서 변경해야한다. 아니면 추적하기 어려움
        headerText : 'TODO it!!!!',
        todoItems: storage.fetch()
    },
    getters: {
        getTodoItems : state => {
            return state.todoItems;
        }
    },
    mutations: {
        addOneItem (state, payload) {
            const obj = { completed: false, item: payload}
            localStorage.setItem(payload, JSON.stringify(obj))
            state.todoItems.push(obj);
        },
        // removeOneItem(todoItem, index){
        removeOneItem(state, payload){
            // localStorage.removeItem(payload.todoItem.item);
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index,1);
        },
        // toggleOneItem(todoItem, index){
        toggleOneItem(state, payload){
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            // todoItem.completed = !todoItem.completed;
            localStorage.removeItem(payload.todoItem);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        todoItemAllClear (state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
})

//state : 여러 컴포넌트에 공유되는 데이터 data
//getters : 연산된  state 값을 접근하는 속성 computed
//mutations : state 값을 변경하는 이벤트 로드 methods
//actions : 비동기 처리 로직을 선언하는 메서드 aysnc methods