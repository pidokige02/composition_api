<template>
  <div class="modularize">
    <h1>{{ msg }}</h1>
  </div>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <button @click="decreaseCapacity()">Decrease Capacity</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: 'Modularize',
  props: {
    msg: String
  },

  setup() {
    return useEventSpace();
  }
};

function useEventSpace() {
      const capacity = ref(4);
      const attending = ref(["Tim", "Bob", "Joe"]);
      const spacesLeft = computed(() => {
        return capacity.value - attending.value.length;
      });

      function increaseCapacity() {
        capacity.value++;
      };

      function decreaseCapacity() { // <--- Our new function
      capacity.value--
      };

      return { capacity, increaseCapacity, decreaseCapacity, attending, spacesLeft };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>