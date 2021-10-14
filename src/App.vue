<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem">
    </TodoInput>
    <TodoList v-bind:propsdata="todoItems"
              v-on:removeTodoItem="removeOneItem"
              v-on:toggleItem="toggleOneItem">
    </TodoList>
    <TodoFooter v-on:todoClear="todoItemAllClear"></TodoFooter>

  </div>
</template>

<script>

import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";

export default {
  data() {
    return  {
      todoItems: []
    }
  },
   components: {
     TodoHeader,
     TodoInput,
     TodoFooter,
     TodoList
   },
  created() {
    console.log('created');
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != 'loglevel:webpack-dev-server') {
          JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  methods:{
    addOneItem (todoItem){
      const obj = { completed: false, item: todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index){
      console.log(todoItem);
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    todoItemAllClear (){
      localStorage.clear();
      this.todoItems = [];
    }

  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}


</style>
