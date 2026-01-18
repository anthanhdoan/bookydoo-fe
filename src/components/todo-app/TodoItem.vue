<script setup lang="ts">
import IconButton from '@/components/UI/IconButton.vue'
import { IconButtonVariant } from '@/types/IconButton'
import type { ITodo, UUID } from '@/types/TodoApp'
import { inject } from 'vue'

defineProps<{
  todo: ITodo
}>()

const toggleComplete = inject<(id: UUID) => void>('toggleComplete')!
const deleteTodo = inject<(id: UUID) => void>('deleteTodo')!
</script>

<template>
  <input
    type="checkbox"
    class="todo-checkbox"
    name="todo-checkbox"
    :id="todo.id"
    :checked="todo.completed"
    @change="toggleComplete(todo.id)"
  />

  <span :class="{ completed: todo.completed }" @click="toggleComplete(todo.id)">{{
    todo.title
  }}</span>

  <div class="todo-buttons">
    <IconButton
      :variant="IconButtonVariant.EDIT"
      class="icon-button"
      @click="console.log('Edit Todo functionality')"
    />
    <IconButton
      :variant="IconButtonVariant.DELETE"
      class="icon-button"
      @click="deleteTodo(todo.id)"
    />
  </div>
</template>

<style scoped>
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
