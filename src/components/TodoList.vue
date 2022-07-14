<script setup>
import { ref } from "vue";

const todos = ref([
  { id: 1, title: "Lorem ipsum", status: false },
  { id: 2, title: "Dolore ipsem", status: true },
  { id: 3, title: "Sit amet", status: false },
]);
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
      <div class="col-1 text-end">
        <i class="fas fa-times cursor-pointer text-danger mt-2"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
