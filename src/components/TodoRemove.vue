<script setup>
import toast from "../alerts/toast";
import { useTodos } from "../stores/todos";

const props = defineProps({
  id: Number,
  title: String,
});

const store = useTodos();

const removeItemFromTodo = (int) => {
  store.deleteTodo(int);

  toast("success", `"${props.title}" removed from your todo list`);
};
</script>

<template>
  <div class="col-1 text-end" @click="removeItemFromTodo(props.id)">
    <i class="fas fa-times cursor-pointer text-danger mt-2"></i>
  </div>
</template>
