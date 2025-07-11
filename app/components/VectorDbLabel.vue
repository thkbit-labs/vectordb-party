<script lang="ts" setup>
const { db } = defineProps<{
  db: { id: string; logo: string; name: string };
}>();

const size = 20;
</script>

<template>
  <div class="flex items-center space-x-1">
    <img
      :src="`/db/${db.logo}`"
      :width="size"
      :height="size"
      class="inline mr-[5px] mb-0 mt-0"
    />
    <span class="flex-shrink-0">{{ db.name }}</span>
  </div>
</template>

<style></style>
