<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
        <RouterLink :to="{ name: 'todo-app' }">Todo App</RouterLink> |
        <RouterLink :to="{ name: 'bookmark-manager' }">Bookmark Manager</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Helvetica, Arial, sans-serif;
  background-color: #999;
  margin: 0;
  box-sizing: border-box;
}
</style>
