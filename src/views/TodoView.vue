<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

interface ITodo {
  id: number
  title: string
  completed: boolean
}

// Mocked data, replace with API calls later
let id: number = 6
const todoList = ref<ITodo[]>([
  {
    id: 1,
    title: 'Create VUE app',
    completed: false,
  },
  {
    id: 2,
    title: 'Set up routes',
    completed: false,
  },
  {
    id: 3,
    title: 'mock a db',
    completed: true,
  },
  {
    id: 4,
    title: 'Create add todo functionality',
    completed: false,
  },
  {
    id: 5,
    title: "This one is 'completed'",
    completed: true,
  },
])

const userInput = ref('')

const addTodo = (): void => {
  const newTodo = {
    id: id,
    title: userInput.value,
    completed: false,
  }

  todoList.value.push(newTodo)

  id++
  userInput.value = ''
}

const toggleComplete = (id: number): void => {
  const currentTodo = todoList.value.find((todo) => todo.id === id) as ITodo
  currentTodo.completed = !currentTodo.completed
}

const deleteTodo = (id: number): void => {
  const currentTodo = todoList.value.find((todo) => todo.id === id) as ITodo
  const index: number = todoList.value.indexOf(currentTodo)
  if (currentTodo) {
    todoList.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="todo-app">
    <h1>This is the todo app</h1>

    <form @submit.prevent="addTodo" class="todo-add">
      <input v-model="userInput" type="text" id="todo-add-input" />
      <button class="todo-add-button icon-button">
        <Icon icon="fa7-solid:add" class="icon-style" />
      </button>
    </form>

    <ul class="todo-list">
      <li v-for="todo in todoList" :key="todo.id" class="todo-item">
        <input
          type="checkbox"
          class="todo-checkbox"
          name="todo-checkbox"
          :id="todo.id.toString()"
          :checked="todo.completed"
          @change="toggleComplete(todo.id)"
        />

        <span :class="{ completed: todo.completed }" @click="toggleComplete(todo.id)">{{
          todo.title
        }}</span>

        <div class="todo-buttons">
          <button type="button" class="icon-button">
            <Icon icon="fa7-solid:edit" class="icon-style" />
          </button>

          <button type="button" class="icon-button" @click="deleteTodo(todo.id)">
            <Icon icon="fa7-solid:trash" class="icon-style" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-app {
  box-sizing: border-box;
  width: 500px;
  background-color: #fff;
  padding: 1rem;
}

.todo-add {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 0.4rem 0 0;
}

#todo-add-input {
  height: 1.5rem;
  flex: 1;
  margin: 0 0.7rem 0 0.4rem;
  padding-left: 0.5rem;
}

.todo-add-button {
  margin-left: auto;
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
}
</style>
