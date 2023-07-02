<script setup lang="ts">
import todoItem from '../components/todoItem.vue';
import { useMainStore } from '@/store';
const mainStore = useMainStore();
</script>

<template>
    <div class="mt-2">
        <h1 class="text-center mb-3">TODOS</h1>
        <ul class="list-group overflow-auto list-group-numbered w-50 container">
            <todoItem :todo="todo" v-for="(todo, index) in mainStore.todos" :key="index"></todoItem>
        </ul>
    </div>
</template>

<style scoped>
.mt-2 {
    height: 500px;
}

.list-group {
    height: 430px;
}
</style>