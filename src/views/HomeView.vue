<script setup lang="ts">
import TodoView from '@/views/TodoView.vue'
import BookmarkManagerView from './BookmarkManagerView.vue'
</script>

<template>
  <h1>This is the home screen</h1>
  <div class="home-wrapper">
    <BookmarkManagerView class="bookmark-manager-app"></BookmarkManagerView>
    <TodoView class="todo-app"></TodoView>
  </div>
</template>

<style scoped>
.home-wrapper {
  background-color: #ddd;
  display: flex;
  justify-content: space-between;
}
</style>
