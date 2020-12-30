<template>
  <div class="success">
    <h2>You found a solution!</h2>
    <button @click="clear">Play Again</button>
  </div>
</template>

<script>
export default {
    name: 'Success',
    methods: {
      clear() {
          this.$store.dispatch('clearBoard');
      }
    }
}
</script>

<style>
.success {
  position: absolute;
  background-color: #ffffffeb;
  width: -webkit-fill-available;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.success button {
  border: 0;
  padding: 1rem;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: black;
  color: white;
}
</style>
