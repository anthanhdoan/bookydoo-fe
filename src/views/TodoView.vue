<script setup lang="ts">
import { ref } from 'vue'
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
    completed: false,
  },
  {
    id: '9b8c7d6e-5a4b-4c3d-9e8f-7a6b5c4d3e2f',
    title: 'Extract TodoItem component',
    completed: false,
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

const addTodoFromChild = (todo: ITodo): void => {
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
</script>

<template>
  <div class="todo-app">
    <h1>To Do app</h1>
    <AddTodo @add-todo="addTodoFromChild" />
    <TodoList :todoList="todoList" @toggle-complete="toggleComplete" @delete-todo="deleteTodo" />
  </div>
</template>

<style scoped>
.todo-app {
  box-sizing: border-box;
  width: 500px;
  background-color: #fff;
  padding: 1rem;
}

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

.todo-checkbox {
  appearance: none;
  height: 1rem;
  width: 1rem;
  border: 0;
  border-radius: 3px;
  border: 1px solid #ff8800;
  position: relative;
  margin: 0;
  cursor: pointer;
}

.todo-checkbox:checked {
  background-color: #ff8800;
}

.completed {
  text-decoration: line-through;
}

.todo-item span {
  flex: 1;
  margin: 0 0.5rem;
  word-break: break-word;
  cursor: pointer;
}

.todo-buttons {
  margin-left: auto;
  display: flex;
  gap: 0.3rem;
}

.icon-style {
  font-size: 1.5em;
  color: #fff;
}

.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff8800;
  padding: 0;
  border: 0;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 3px;
  cursor: pointer;
}
</style>
