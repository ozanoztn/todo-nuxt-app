<script setup lang="ts">
import { useMainStore } from "@/store";
const mainStore = useMainStore();
const props = defineProps(['todo'])
const newTodo = ref(props.todo.value)
</script>

<template>
    <li class="list-group-item mb-4 rounded-3 d-flex justify-content-between align-items-center">
        <p v-if="!todo.isChanging" class="m-0 fs-5">{{ todo.value }}</p>
        <input v-model="newTodo" v-if="todo.isChanging" type="text" class="rounded-3">
        <div class="buttons">
            <i @click="mainStore.deleteTodo(todo.id)" class="fa-solid fa-trash fa-xl me-3"></i>
            <i v-if="!mainStore.getIsChangingStatus(todo.id)" @click="mainStore.changeChangingStatus(todo.id)"
                class="fa-solid fa-arrows-rotate fa-xl me-3"></i>
            <i v-if="mainStore.getIsChangingStatus(todo.id)" @click="mainStore.changeTodo(todo.id, newTodo)"
                class="fa-solid fa-check fa-xl"></i>
        </div>
    </li>
</template>

<style scoped>
.list-group-item:hover {
    background-color: silver;
}

.fa-trash,
.fa-arrows-rotate,
.fa-check,
.list-group-item {
    transition: 300ms all ease;
}

.fa-trash:hover {
    color: red;
}

.fa-arrows-rotate:hover {
    color: gold;
}

.fa-check:hover {
    color: greenyellow
}
</style>