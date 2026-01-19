<script setup lang="ts">
import TodoView from '@/views/TodoView.vue'
import BookmarkManagerView from './BookmarkManagerView.vue'
</script>

<template>
  <div class="home-wrapper">
    <TodoView />
    <BookmarkManagerView />
  </div>
</template>

<style scoped>
.home-wrapper {
  display: flex;
  min-height: calc(100vh - var(--navbar-height));
}
</style>
