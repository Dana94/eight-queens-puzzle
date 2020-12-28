<template>
  <div class="board">
      <Title />
      <Row v-for="i in 8" :key="i" :index_x="i-1" />
  </div>
</template>

<script>
import Title from './Title.vue';
import Row from './Row.vue';

export default {
    name: "Board",
    components: {
        Title,
        Row
    }
}
</script>

<style>
.board {
    display: grid;
    grid-template-rows: repeat(8, auto);
    margin: 0 auto;
    max-width: 836px;
}
</style>
