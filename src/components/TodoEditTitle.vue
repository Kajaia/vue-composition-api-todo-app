<script setup>
import { onMounted, ref } from "vue";
import toast from "../alerts/toast";
import { useTodos } from "../stores/todos";

const props = defineProps({
  todo: Object,
});

const title = ref(props.todo.title);

onMounted(() => {
  title.value = props.todo.title;
});

const store = useTodos();

const updateTodoItemTitle = () => {
  if (props.todo.title !== title.value) {
    store.updateTodoTitle(props.todo, title.value);

    toast("success", `Updated todo item title to "${title.value}"`);
  }
};
</script>

<template>
  <input
    type="text"
    class="form-control w-100 border-0"
    v-model="title"
    :class="{ 'line-through': props.todo.status }"
    @blur="updateTodoItemTitle"
  />
</template>
