<template>
    <div id="app" class="app">
        <header>
            <Navbar />
        </header>
        <div class="content-page">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Navbar } from '@/widgets/Navbar';
</script>
