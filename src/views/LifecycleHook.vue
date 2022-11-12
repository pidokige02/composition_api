<template>
    <div class="Hook">
      <h1>{{ msg }}</h1>
    </div>
    <div>
    </div>
  </template>

  <script>
  import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onActivated,
    onDeactivated,
    onErrorCaptured
  } from "vue";

  export default {
    name: 'LifecycleHook',
    props: {
      msg: String
    },
    setup() {
      onBeforeMount(() => {
        console.log("Before Mount!");
      });
      onMounted(() => {
        console.log("Mounted!");
      });
      onBeforeUpdate(() => {
        console.log("Before Update!");
      });
      onUpdated(() => {
        console.log("Updated!");
      });
      onBeforeUnmount(() => {
        console.log("Before Unmount!");
      });
      onUnmounted(() => {
        console.log("Unmounted!");
      });
      onActivated(() => {
        console.log("Activated!");
      });
      onDeactivated(() => {
        console.log("Deactivated!");
      });
      onErrorCaptured(() => {
        console.log("Error Captured!");
      });
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
