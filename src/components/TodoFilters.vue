<script setup>
import { useTodos } from "../stores/todos";

const store = useTodos();

const updateFilterStatus = (status) => {
  store.statusChange(status);
};
</script>

<template>
  <div class="d-flex align-items-center gap-2">
    <button
      @click.stop="updateFilterStatus('all')"
      class="btn btn-sm shadow-sm px-3"
      :class="store.status === 'all' ? 'btn-primary' : 'btn-light'"
    >
      All
    </button>
    <button
      @click.stop="updateFilterStatus('active')"
      class="btn btn-sm shadow-sm px-3"
      :class="store.status === 'active' ? 'btn-primary' : 'btn-light'"
    >
      Active
    </button>
    <button
      @click.stop="updateFilterStatus('completed')"
      class="btn btn-sm shadow-sm px-3"
      :class="store.status === 'completed' ? 'btn-primary' : 'btn-light'"
    >
      Completed
    </button>
  </div>
</template>
