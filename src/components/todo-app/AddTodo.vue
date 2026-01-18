<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { ITodo } from '@/views/TodoView.vue'
import IconButton from '@/components/UI/IconButton.vue'
import { IconButtonVariant } from '@/types/IconButton'

defineEmits(['add-todo'])

const userInput = ref('')

const addTodo = (): ITodo => {
  const newTodo: ITodo = {
    id: uuidv4(),
    title: userInput.value,
    completed: false,
  }

  userInput.value = ''

  return newTodo
}
</script>

<template>
  <form @submit.prevent="$emit('add-todo', addTodo())" class="todo-add">
    <input v-model="userInput" type="text" id="todo-add-input" />
    <IconButton
      :variant="IconButtonVariant.ADD"
      class="todo-add-button"
      :disabled="userInput === ''"
    />
  </form>
</template>

<style scoped>
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
</style>
