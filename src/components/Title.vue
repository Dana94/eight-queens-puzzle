<template>
  <header>
    <button
      aria-label="Change board theme"
      @click="setTheme"
      class="theme"
      :class="{'light': lightTheme, 'dark': !lightTheme}"
    ></button>
    <h1>8 Queens Puzzle</h1>
    <div>
      <button @click="clear" class="clear">Clear Board</button>
      <img src="../assets/question.svg" alt="Information" class="info" />
    </div>
  </header>
</template>

<script>
export default {
    name: 'Title',
    data() {
        return {
            lightTheme: false
        }
    },
    methods: {
        setTheme() {
            this.lightTheme = !this.lightTheme;
            this.$store.dispatch('setTheme', this.lightTheme ? 'light' : 'dark');
        },
        clear() {
            this.$store.dispatch('clearBoard');
        }
    }
}
</script>

<style>
header {
  background-color: white;
  border-radius: 10px;
  /* max-width: 796px; */
  margin: 0 auto;
  /* padding: 2rem; */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
}
h1 {
  font-family: "Playfair Display", serif;
}

header div {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

button.theme {
  border: none;
  padding: 1rem;
  width: 4rem;
  align-self: flex-end;
  margin: 1rem;
}
button.theme.light {
  background: linear-gradient(
    106deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}

button.theme.dark {
  background: linear-gradient(
    106deg,
    rgb(209, 139, 71) 0%,
    rgb(255, 206, 158) 100%
  );
}
button.clear {
  border: 0;
  padding: 1rem;
  border-radius: 10px;
}

img.info {
  width: 2rem;
}
button:hover,
img.info:hover {
  cursor: pointer;
}
</style>
