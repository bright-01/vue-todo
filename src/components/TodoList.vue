<template>
  <div>
<!--    transition을 사용하게 되면 name에 해당 태그의 클래스. tag에 태그 이름을 넣는다-->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in getTodoItems" v-bind:key="todoItem" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
           v-on:click="toggleOneItem({todoItem, index})"></i>
         <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
         <span class="removeBtn" v-on:click="removeOneItem({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "TodoList",
  data(){
    return {
    }
  },
  computed : {
    ...mapGetters(['getTodoItems'])
  },
  methods:{
    ...mapMutations(['removeOneItem','toggleOneItem']),
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
</style>