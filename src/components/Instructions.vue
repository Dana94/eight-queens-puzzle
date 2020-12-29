<template>
  <div class="instructions">
    From the
    <a href="https://en.wikipedia.org/wiki/Eight_queens_puzzle" target="_blank" rel="noopener noreferrer">Wikipedia page</a>:
    <blockquote> The eight queens puzzle is the problem of placing eight chess queens on an 8×8 chessboard so that no two queens threaten each other;
    thus, a solution requires that no two queens share the same row, column, or diagonal. </blockquote>
    If a queen is outlined in red, that means it's threatened by the position of another queen on the board.
  </div>
</template>

<script>
export default {
    name: 'Instructions'
}
</script>

<style>
.instructions {
    text-align: left;
    padding: 0 2rem;
    padding-bottom: 1rem;
    max-width: fit-content;
}
</style>
