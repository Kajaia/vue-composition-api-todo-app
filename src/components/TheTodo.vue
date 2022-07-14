<script setup>
import TodoList from "./TodoList.vue";
import TodoFilters from "./TodoFilters.vue";
import TodoClearCompleted from "./TodoClearCompleted.vue";
import TodoForm from "./TodoForm.vue";

const header = "ToDo";
</script>

<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-6">
          <div class="card border-0 shadow">
            <div class="card-header bg-white border-light">
              <h1 class="mb-0 fs-4 text-center">{{ header }}</h1>
            </div>
            <div class="card-body">
              <div class="row justify-content-between">
                <TodoForm />
                <TodoList />
              </div>
            </div>
            <div
              class="card-footer bg-white border-light d-flex align-items-center justify-content-between flex-wrap gap-2"
            >
              <TodoFilters />
              <TodoClearCompleted />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
