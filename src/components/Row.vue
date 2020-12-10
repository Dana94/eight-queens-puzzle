<template>
  <div class="row">
    <Square v-for="i in 8" :key="i" :index_x="index_x" :index_y="i-1" />
  </div>
</template>

<script>
import Square from './Square.vue';

export default {
    name: "Row",
    props: {
        index_x: {
            type: Number,
            required: true
        }
    },
    components: {
        Square
    }
}
</script>

<style>
.row {
    display: grid;
    grid-template-columns: repeat(8, auto);
}
</style>
