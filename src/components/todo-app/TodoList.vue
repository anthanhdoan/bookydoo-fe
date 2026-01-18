<script setup lang="ts">
import IconButton from '@/components/UI/IconButton.vue'
import { IconButtonVariant } from '@/types/IconButton'
import type { ITodo, UUID } from '@/types/TodoApp'

defineProps<{
  todoList: ITodo[]
}>()

defineEmits(['toggleComplete', 'deleteTodo'])

const returnId = (id: UUID): UUID => id
</script>

<template>
  <ul class="todo-list">
    <li v-for="todo in todoList" :key="todo.id" class="todo-item">
      <input
        type="checkbox"
        class="todo-checkbox"
        name="todo-checkbox"
        :id="todo.id"
        :checked="todo.completed"
        @change="$emit('toggleComplete', returnId(todo.id))"
      />

      <span
        :class="{ completed: todo.completed }"
        @click="$emit('toggleComplete', returnId(todo.id))"
        >{{ todo.title }}</span
      >

      <div class="todo-buttons">
        <IconButton
          :variant="IconButtonVariant.EDIT"
          class="icon-button"
          @click="console.log('Edit Todo functionality')"
        />
        <IconButton
          :variant="IconButtonVariant.DELETE"
          class="icon-button"
          @click="$emit('deleteTodo', returnId(todo.id))"
        />
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
