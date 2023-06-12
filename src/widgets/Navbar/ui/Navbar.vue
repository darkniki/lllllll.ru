<template>
    <nav>
        <LanguageSwitcher />
    </nav>
</template>

<script setup>
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
</script>
<style scoped lang="scss">
nav {
    margin: 0 auto;
    padding-right: 10px;
    display: flex;
    justify-content: right;
}
</style>
