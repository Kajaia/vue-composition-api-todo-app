<script setup>
import toast from "../alerts/toast";
import { useTodos } from "../stores/todos";

const store = useTodos();

const clearCompletedTodos = () => {
  store.clearCompleted();

  toast("success", "Cleared all completed todos from your list");
};
</script>

<template>
  <div>
    <button
      @click.stop="clearCompletedTodos"
      class="btn btn-sm btn-danger shadow-sm px-3"
    >
      Clear completed
    </button>
  </div>
</template>
