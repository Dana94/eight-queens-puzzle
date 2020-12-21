<template>
  <div id="app">
    <header>
      <h1>8 Queens Puzzle</h1>
    </header>
    <Board />
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board
  }
}
</script>

<style>
@import './App.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

h1 {
  font-family: 'Playfair Display', serif;
  background-color: white;
  border-radius: 10px;
  max-width: 796px; /*work on this*/
  margin: 0 auto;
  padding: 2rem;
}
</style>
