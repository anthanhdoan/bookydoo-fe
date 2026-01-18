<script setup lang="ts">
import { provide, ref } from 'vue'
import AddTodo from '@/components/todo-app/AddTodo.vue'
import TodoList from '@/components/todo-app/TodoList.vue'
import type { ITodo, UUID } from '@/types/TodoApp'

// Mocked data, replace with local storage or API calls later
const todoList = ref<ITodo[]>([
  {
    id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    title: 'Scaffold VUE project',
    completed: true,
  },
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    title: 'Remove extra boilerplate code',
    completed: true,
  },
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    title: 'Set up routes',
    completed: true,
  },
  {
    id: '9c3e5e7f-0a1b-2c3d-4e5f-6a7b8c9d0e1f',
    title: 'Create monolithic Todo App',
    completed: true,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    title: 'Add styling as you go',
    completed: true,
  },
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
    completed: true,
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

const editTodo = (id: UUID, newTitle: string): void => {
  const currentTodo = todoList.value.find((todo) => todo.id === id)
  if (currentTodo) {
    currentTodo.title = newTitle
  }
}

provide('toggleComplete', toggleComplete)
provide('deleteTodo', deleteTodo)
provide('editTodo', editTodo)
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
