<script setup lang="ts">
import type { ITodo } from '@/types/TodoApp'
import TodoItem from './TodoItem.vue'

defineProps<{
  todoList: ITodo[]
}>()
</script>

<template>
  <ul class="todo-list">
    <li v-for="todo in todoList" :key="todo.id" class="todo-item">
      <TodoItem :todo="todo" />
    </li>
  </ul>
</template>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.4rem;
}

.todo-item:hover {
  background-color: #fff4e7;
}
</style>
