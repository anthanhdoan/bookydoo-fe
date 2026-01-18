<script setup lang="ts">
import { provide, ref } from 'vue'
import AddTodo from '@/components/todo-app/AddTodo.vue'
import TodoList from '@/components/todo-app/TodoList.vue'
import type { ITodo, UUID } from '@/types/TodoApp'

// Mocked data, replace with local storage or API calls later
const todoList = ref<ITodo[]>([
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    title: 'Extract AddTodo component',
    completed: true,
  },
  {
    id: '1e3a5f7c-2d4b-486e-8a9d-0f1e2c3d4e5f',
    title: 'Extract TodoList component',
    completed: true,
  },
  {
    id: '9b8c7d6e-5a4b-4c3d-9e8f-7a6b5c4d3e2f',
    title: 'Extract TodoItem component',
    completed: true,
  },
  {
    id: '3d2e1f0c-7b6a-4d3c-2e1f-0c9d8b7a6f5e',
    title: 'Create EditTodo component',
    completed: false,
  },
  {
    id: '6a5b4c3d-2e1f-0c9d-8a7b-6f5e4d3c2b1a',
    title: 'Make data persistent in LocalStorage or Pinia/Backend',
    completed: false,
  },
])

const addTodo = (todo: ITodo): void => {
  todoList.value.push(todo)
}

const toggleComplete = (id: UUID): void => {
  const currentTodo = todoList.value.find((todo) => todo.id === id) as ITodo
  currentTodo.completed = !currentTodo.completed
}

const deleteTodo = (id: UUID): void => {
  const currentTodo = todoList.value.find((todo) => todo.id === id) as ITodo
  const index: number = todoList.value.indexOf(currentTodo)
  if (currentTodo) {
    todoList.value.splice(index, 1)
  }
}

provide('toggleComplete', toggleComplete)
provide('deleteTodo', deleteTodo)
</script>

<template>
  <div class="todo-app">
    <h1>To Do app</h1>
    <AddTodo @add-todo="addTodo" />
    <TodoList :todoList="todoList" />
  </div>
</template>

<style scoped>
.todo-app {
  box-sizing: border-box;
  width: 500px;
  background-color: #fffaf5;
  padding: 1rem;
}
</style>
