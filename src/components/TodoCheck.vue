<script setup>
import { useTodos } from "@/stores/todos";
import toast from "../alerts/toast";

const props = defineProps({
  todo: Object,
});

const store = useTodos();

const updateTodoStatus = (id) => {
  store.checkTodo(id);

  toast(
    "success",
    `Updated "${props.todo.title}" todo item status to ${
      props.todo.status ? "completed" : "active"
    }`
  );
};
</script>

<template>
  <div class="form-check">
    <input
      class="form-check-input shadow-sm p-2 cursor-pointer"
      type="checkbox"
      @click.stop="updateTodoStatus(props.todo.id)"
      :checked="props.todo.status"
    />
  </div>
</template>
