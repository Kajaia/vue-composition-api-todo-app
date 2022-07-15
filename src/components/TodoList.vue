<script setup>
import { useTodos } from "@/stores/todos";
import { storeToRefs } from "pinia";
import TodoRemove from "./TodoRemove.vue";
import TodoCheck from "./TodoCheck.vue";
import TodoEditTitle from "./TodoEditTitle.vue";

const store = useTodos();

const { todos } = storeToRefs(store);
</script>

<template>
  <div class="col-12 mb-2" v-for="todo in todos" :key="todo.id">
    <div class="row">
      <div class="col-11">
        <div class="d-flex align-items-center gap-1">
          <TodoCheck :todo="todo" />
          <TodoEditTitle :todo="todo" />
        </div>
      </div>
      <TodoRemove :id="todo.id" :title="todo.title" />
    </div>
  </div>
  <p class="mb-1 text-center" v-if="!todos.length">No todos in your list!</p>
</template>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
