<script setup lang="ts">
import todosContainer from '/components/todosContainer.vue';
import addTodo from '/components/addTodo.vue';
</script>
<template>
    <main class="bg-dark h-100">
        <div class="container h-100">
            <div class="row">
                <div class="col-9 container mt-5 h-100 pt-5 rounded-3">
                    <h1 class="text-center">TODO APP</h1>
                    <addTodo></addTodo>
                    <todosContainer></todosContainer>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    font-family: "Poppins", sans-serif;
}

.col-9 {
    background: linear-gradient(#662D8C, #ED1E79);
}

.row {
    height: 800px;
}

.btn {
    width: 12%;
}
</style>