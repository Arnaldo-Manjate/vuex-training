<template>
  <Todos />
</template>

<script>
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Todos
  }
}
</script>

<style>
body {
  background-color: whitesmoke;
  line-break: 1.6;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
