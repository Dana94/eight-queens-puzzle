<template>
  <div class="board">
      <Row v-for="i in 8" :key="i" :index_x="i-1" />
  </div>
</template>

<script>
import Row from './Row.vue';

export default {
    name: "Board",
    components: {
        Row
    }
}
</script>

<style>
.board {
    display: grid;
    grid-template-rows: repeat(8, 100px);
    margin: 0 auto;
}
</style>
