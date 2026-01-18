<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'home' }" class="header-appname">BookyDoo</RouterLink>

    <nav class="header-nav">
      <RouterLink :to="{ name: 'bookmark-manager' }">Bookmark Manager</RouterLink>
      <RouterLink :to="{ name: 'todo-app' }">Todo App</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
:root {
  --navbar-height: 3rem;
  --color-text-primary: #333;
  --color-text-secondary: #666;
  --color-text-accent: #ff8800;
  --color-muted: #fdfdfd;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
p,
span {
  color: var(--color-text-primary);
}

body {
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: var(--color-muted);
}

header {
  display: flex;
  justify-content: space-between;
  height: var(--navbar-height);
  align-items: center;
  background-color: var(--color-text-accent);
}

.header-nav {
  display: flex;
  height: 100%;
  align-items: center;
}

.header-appname,
.header-nav a {
  text-decoration: none;
  color: var(--color-muted);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 1.5rem;
  height: 100%;
  align-content: center;
  cursor: pointer;
}

.header-nav a:hover,
.header-appname:hover {
  background-color: #ffffff51;
}
</style>
