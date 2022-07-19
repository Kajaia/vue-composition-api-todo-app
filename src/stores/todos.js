import { defineStore } from "pinia";

const updateLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const useTodos = defineStore({
  id: "todos",
  state: () => ({
    todos: localStorage.todos
      ? JSON.parse(localStorage.todos)
      : [
          { id: 1, title: "Lorem ipsum", status: false },
          { id: 2, title: "Dolore ipsem", status: true },
          { id: 3, title: "Sit amet", status: false },
        ],
    status: "all",
  }),
  getters: {
    filteredTodos() {
      if (this.status === "all") {
        return this.todos;
      } else if (this.status === "active") {
        return this.todos.filter((todo) => todo.status === false);
      } else if (this.status === "completed") {
        return this.todos.filter((todo) => todo.status === true);
      }
    },
    completedTodosCount() {
      return this.todos.filter((todo) => todo.status === true).length;
    },
  },
  actions: {
    addTodo(title) {
      this.todos.push({
        id: this.todos.length + 1,
        title: title,
        status: false,
      });

      updateLocalStorage(this.todos);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);

      updateLocalStorage(this.todos);
    },
    checkTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.status = !todo.status;
      }

      updateLocalStorage(this.todos);
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => todo.status !== true);

      updateLocalStorage(this.todos);
    },
    updateTodoTitle(obj, str) {
      const todo = this.todos.find((todo) => todo.id === obj.id);

      if (todo) {
        todo.title = str;
      }

      updateLocalStorage(this.todos);
    },
    statusChange(status) {
      this.status = status;
    },
  },
});
