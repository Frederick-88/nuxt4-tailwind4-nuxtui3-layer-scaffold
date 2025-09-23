<script lang="ts" setup>
// Set page title and meta
useHead({
  title: "Layer Nuxt 4 + Nuxt UI Showcase",
  meta: [
    {
      name: "description",
      content:
        "A beautiful showcase of Nuxt 4 with Nuxt UI and Tailwind CSS components",
    },
  ],
});
</script>

<template>
  <div>
    <SharedLayerTest />
    <SharedPartialsLayerTest />
  </div>
</template>
