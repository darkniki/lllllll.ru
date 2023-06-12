<template>
    <h1 class="badge">{{ text }}</h1>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<style lang="scss" scoped>
@import "styles";
</style>
