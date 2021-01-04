<template>
  <div id="app">
    <Title />
    <Board />
  </div>
</template>

<script>
import Board from './components/Board.vue'
import Title from './components/Title.vue';

export default {
  name: 'App',
  components: {
    Board,
    Title
  }
}
</script>

<style>
@import "./App.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
}
</style>
