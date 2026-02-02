<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div class="p-4">
    <div>pos: {{ x }}, {{ y }}</div>
    <UButton>Hello</UButton>
  </div>
</template>
