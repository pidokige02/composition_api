<template>
    <div>
      Search for <input v-model="searchInput" />
      <div>
        <p>Number of characters: {{ results }}</p>
      </div>
    </div>
  </template>
  <script>
  import { ref, watchEffect } from "vue";

  export default {
    setup() {
      const searchInput = ref("");
      const results = ref(0);

      watchEffect(() => (
        results.value = searchInput.value.length)
      )

      return { searchInput, results };
    }
  };
  </script>