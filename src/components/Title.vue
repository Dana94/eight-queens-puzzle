<template>
  <header>
    <div class="title">
      <h1>8 Queens Puzzle</h1>
      <div class="buttons">
        <button
          aria-label="Change board theme"
          @click="setTheme"
          class="theme"
          :class="{'wood': woodTheme, 'classic': !woodTheme}"
        ></button>
        <button @click="clear" class="clear">Clear Board</button>
        <img src="../assets/question.svg" alt="Information" class="info" @click="showInfo = !showInfo" />
      </div>
    </div>
    <Instructions v-show="showInfo" />
  </header>
</template>

<script>
import Instructions from './Instructions.vue';

export default {
    name: 'Title',
    data() {
        return {
            woodTheme: false,
            showInfo: false
        }
    },
    methods: {
        setTheme() {
            this.woodTheme = !this.woodTheme;
            this.$store.dispatch('setTheme', this.woodTheme ? 'wood' : 'classic');
        },
        clear() {
            this.$store.dispatch('clearBoard');
        }
    },
    components: {
      Instructions
    }
}
</script>

<style>
header {
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-between;
  flex-direction: column;
  font-family: "Playfair Display", serif;
}

h1 {
  margin-left: 2rem;
}

header .title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

header .buttons {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
}

button.theme {
  padding: 1rem;
  margin: 1rem;
  border: 1px solid;
  border-radius: 10px;
}

button.theme.wood {
  background: linear-gradient(to bottom right, black 50%, white 50%);
}

button.theme.classic {
  background: linear-gradient(to bottom right,  rgb(209, 139, 71) 50%, rgb(255, 206, 158) 50%);
}

button.clear {
  border: 0;
  padding: 1rem;
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  letter-spacing: 1px;
}

img.info {
  width: 2rem;
  margin: 1rem;
}

button:hover,
img.info:hover {
  cursor: pointer;
}
</style>
