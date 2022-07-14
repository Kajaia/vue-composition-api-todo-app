<script setup>
import toast from "../alerts/toast";

const soon = () => {
  toast("warning", "Working on it, be patient!");
};
</script>

<template>
  <div class="d-flex align-items-center gap-2">
    <button @click.stop="soon" class="btn btn-sm btn-primary shadow-sm px-3">
      All
    </button>
    <button @click.stop="soon" class="btn btn-sm btn-light shadow-sm px-3">
      Active
    </button>
    <button @click.stop="soon" class="btn btn-sm btn-light shadow-sm px-3">
      Completed
    </button>
  </div>
</template>
