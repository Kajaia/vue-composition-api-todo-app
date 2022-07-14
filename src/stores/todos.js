import { defineStore } from "pinia";

export const useTodos = defineStore({
  id: "todos",
  state: () => ({
    todos: [
      { id: 1, title: "Lorem ipsum", status: false },
      { id: 2, title: "Dolore ipsem", status: true },
      { id: 3, title: "Sit amet", status: false },
    ],
  }),
  actions: {
    addTodo(title) {
      this.todos.push({
        id: this.todos.length + 1,
        title: title,
        status: false,
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    checkTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.status = !todo.status;
      }
    },
  },
});
