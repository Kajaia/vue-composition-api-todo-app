<script setup>
import { useTodos } from "@/stores/todos";
import { storeToRefs } from "pinia";
import TodoRemove from "./TodoRemove.vue";

const store = useTodos();

const { todos } = storeToRefs(store);
</script>

<template>
  <div class="col-12 mb-2" v-for="todo in todos" :key="todo.id">
    <div class="row">
      <div class="col-11">
        <div class="d-flex align-items-center gap-1">
          <div class="form-check">
            <input
              class="form-check-input shadow-sm p-2 cursor-pointer"
              type="checkbox"
            />
          </div>
          <input
            type="text"
            class="form-control w-100 border-0"
            :value="todo.title"
          />
        </div>
      </div>
      <TodoRemove :id="todo.id" />
    </div>
  </div>
</template>
