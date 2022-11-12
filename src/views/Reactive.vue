<template>
  <div class="Reactive">
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
import { reactive, computed, toRefs } from "vue";

export default {
  name: 'Reactive',
  props: {
    msg: String
  },
  setup() {
    const event = reactive({
          capacity: 4,
          attending: ["Tim", "Bob", "Joe"],
          spacesLeft: computed(() => {
            return event.capacity - event.attending.length;
          })
    });

    // this 를 사용하지 않았다
    function increaseCapacity() {
      event.capacity++;
    }

    function decreaseCapacity() { // <--- Our new function
      event.capacity--;
    }

    return { ...toRefs(event), increaseCapacity, decreaseCapacity};
  }
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
