<script setup>
import { ref } from "vue";
import { useTodos } from "@/stores/todos";
import toast from "../alerts/toast";

const todo = ref("");

const store = useTodos();

const addItemToStore = (title) => {
  store.addTodo(title);

  toast("success", `"${title}" added to your todo list`);

  todo.value = "";
};
</script>

<template>
  <div class="col-12 mb-4">
    <input
      type="text"
      class="form-control shadow-sm py-2"
      placeholder="What needs to be done?"
      v-model="todo"
      @keydown.enter="addItemToStore(todo)"
      autofocus
    />
  </div>
</template>
