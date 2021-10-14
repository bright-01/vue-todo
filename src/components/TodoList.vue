<template>
  <div>
<!--    transition을 사용하게 되면 name에 해당 태그의 클래스. tag에 태그 이름을 넣는다-->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.item}"
           v-on:click="toggleComplete(todoItem, index)"></i>
         <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
         <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data(){
    return {
    }
  },
  props:{
    propsdata : Array
  },
  methods:{
    removeTodo(todoItem, index){
      this.$emit("removeTodoItem", todoItem, index);
      // localStorage.removeItem(todoItem);
      // this.todoItems.splice(index,1);
    },
    toggleComplete(todoItem, index){
      console.log(todoItem, index);
      this.$emit('toggleItem', todoItem, index);
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* transition css */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>