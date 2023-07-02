<script setup lang="ts">
import { useMainStore } from '@/store';
const mainStore = useMainStore()
const newTodo = ref('')
</script>

<template>
    <form class="w-100 py-5 d-flex flex-column align-items-center">
        <input v-model="newTodo" type="text" class="form-control w-50" placeholder="Please enter a todo">
        <button @click.prevent="() => { mainStore.addTodo(newTodo); newTodo = '' }" class="btn btn-primary mt-3">Save
            Todo</button>
    </form>
</template>