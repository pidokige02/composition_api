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
    <div>
        <h2>Reverse Test</h2>
        <p> {{normal}} </p>
        <p> {{reversed}} </p>
        <input v-model="texttest"> {{ reverseMessage() }}
        <input v-model="text"> {{ text }}
    </div>
  </template>

  <script>
  import useEventSpace from "@/use/event-space";
  import useReverse from "@/use/reverse";

  export default {
    name: 'Reuse',
    props: {
      msg: String
    },

    setup() {
      return {...useEventSpace(), ...useReverse()};
    //   return {...useEventSpace()};
    },

    data : function() {
        return {
            text : 'Edit me'
        }
    }
  };
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