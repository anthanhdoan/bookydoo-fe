<script setup lang="ts">
import { ref } from 'vue'
import IconButton from '@/components/UI/IconButton.vue'
import { IconButtonVariant } from '@/types/IconButton'
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
  <ul class="todo-list">
    <li v-for="todo in todoList" :key="todo.id" class="todo-item">
      <input type="checkbox" class="todo-checkbox" name="todo-checkbox" :id="todo.id" :checked="todo.completed"
        @change="toggleComplete(todo.id)" />

      <span :class="{ completed: todo.completed }" @click="toggleComplete(todo.id)">{{
        todo.title
        }}</span>

      <div class="todo-buttons">
        <IconButton :variant="IconButtonVariant.EDIT" class="icon-button"
          @click="console.log('Edit Todo functionality')" />
        <IconButton :variant="IconButtonVariant.DELETE" class="icon-button" @click="deleteTodo(todo.id)" />
      </div>
    </li>
  </ul>
</template>

<style scoped>
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
</style>
