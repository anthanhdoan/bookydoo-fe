<script setup lang="ts">
import IconButton from '@/components/UI/IconButton.vue'
import { IconButtonVariant } from '@/types/IconButton'
import type { ITodo, UUID } from '@/types/TodoApp'
import { inject, ref } from 'vue'

const props = defineProps<{
  todo: ITodo
}>()

const toggleComplete = inject<(id: UUID) => void>('toggleComplete')!
const deleteTodo = inject<(id: UUID) => void>('deleteTodo')!
const editTodo = inject<(id: UUID, newTitle: string) => void>('editTodo')!

const isEditing = ref(false)
const editedTitle = ref(props.todo.title)

const startEdit = () => {
  isEditing.value = true
  editedTitle.value = props.todo.title
}
const saveEdit = () => {
  if (editedTitle.value) {
    editTodo(props.todo.id, editedTitle.value)
    isEditing.value = false
  }
}
const cancelEdit = () => {
  editedTitle.value = props.todo.title
  isEditing.value = false
}
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

  <div v-if="!isEditing" class="todo-wrapper">
    <span
      :class="{ completed: todo.completed }"
      @click="toggleComplete(todo.id)"
      >{{ todo.title }}</span
    >

    <div class="todo-buttons">
      <IconButton
        :variant="IconButtonVariant.EDIT"
        class="icon-button"
        @click="startEdit"
      />
      <IconButton
        :variant="IconButtonVariant.DELETE"
        class="icon-button"
        @click="deleteTodo(todo.id)"
      />
    </div>
  </div>

  <div v-else class="todo-wrapper">
    <input
      class="todo-edit-input"
      v-model="editedTitle"
      type="text"
      @keyup.enter="saveEdit"
      :id="`edit-${todo.id}`"
    />
    <div class="todo-buttons">
      <IconButton
        :variant="IconButtonVariant.CONFIRM"
        class="icon-button"
        @click="saveEdit"
      />
      <IconButton
        :variant="IconButtonVariant.CANCEL"
        class="icon-button"
        @click="cancelEdit"
      />
    </div>
  </div>
</template>

<style scoped>
.todo-wrapper {
  display: flex;
  flex: 1;
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

.todo-edit-input {
  flex: 1;
  height: 1.5rem;
  font-size: medium;
  margin: 0 0.7rem 0 0.4rem;
  padding: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.todo-buttons {
  margin-left: auto;
  display: flex;
  gap: 0.3rem;
}
</style>
