<template>
  <div class="board">
      <Square />
  </div>
</template>

<script>
import Square from './Square.vue';

export default {
    name: "Board",
    components: {
        Square
    }
}
</script>

<style>
.board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
}
</style>
