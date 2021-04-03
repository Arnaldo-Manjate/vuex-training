<template>
  <div v-for="todo in allTodos" :key="todo.id">
      {{todo.name}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name : "Todos",
    components : {

    },
    computed : mapGetters(["allTodos"])
}
</script>

<style>

</style>