<template>
  <div class="board">
    <Success v-if="!invalidsExist && noQueensAvailable"/>
    <Row v-for="i in 8" :key="i" :index_x="i-1" />
  </div>
</template>

<script>
import Success from './Success.vue';
import Row from './Row.vue';

export default {
    name: "Board",
    components: {
        Success,
        Row
    },
    computed: {
        invalidsExist() {
            return this.$store.getters.invalids > 0;
        },
        noQueensAvailable() {
            return this.$store.getters.availableQueens === 0;
        }
    }
}
</script>

<style>
.board {
  display: grid;
  grid-template-rows: repeat(8, auto);
  margin: 0 auto;
  max-width: 836px;
  position: relative;
}
</style>
