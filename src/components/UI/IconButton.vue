<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { IconButtonVariant } from '../../types/IconButton'

defineProps({
  variant: {
    type: String as () => IconButtonVariant,
    required: true,
  },
})
</script>

<template>
  <button class="icon-button">
    <Icon :icon="variant" class="icon-style" />
  </button>
</template>

<style scoped>
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
  cursor: pointer;
}

.icon-button:disabled {
  background-color: #ccc;
}

.icon-button:disabled:hover {
  background-color: #ccc;
  cursor: default;
}
</style>
