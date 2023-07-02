import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import Todo from "@/types/todo";
export const useMainStore = defineStore("main", {
  state: () => ({
    todos: [] as Array<Todo>,
  }),
  getters: {
    getIsChangingStatus: (state) => {
      return (todoId: string) =>
        state.todos.find((todo) => todo.id == todoId)?.isChanging;
    },
  },
  actions: {
    addTodo(todoText: string) {
      if (!todoText) return alert("You can't provide a empty todo !");
      const todo: Todo = {
        id: uuidv4(),
        value: todoText.trim(),
        isDone: false,
        isChanging: false,
      };
      this.todos.push(todo);
    },
    deleteTodo(todoId: string) {
      this.todos.forEach((todo, index) => {
        if (toRaw(todo).id == todoId) this.todos.splice(index, 1);
      });
    },
    changeChangingStatus(todoId: string) {
      this.todos.forEach((todo) => {
        if (toRaw(todo).id == todoId) {
          todo.isChanging = !todo.isChanging;
        }
      });
    },
    changeTodo(todoId: string, newTodo: string) {
      if (!newTodo) return alert("You can't provide a empty todo !");
      this.todos.forEach((todo) => {
        if (toRaw(todo).id == todoId) {
          todo.value = newTodo;
          this.changeChangingStatus(todoId);
        }
      });
    },
  },
});
