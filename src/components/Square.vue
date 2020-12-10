<template>
  <div class="square" :class="{dark: dark, light: !dark}">
    <img :src="queen" alt="Queen" class="queen" />
  </div>
</template>

<script>
export default {
    name: "Square",
    props: {
      index_x: {
        type: Number,
        required: true
      },
      index_y: {
        type: Number,
        required: true
      }
    },
    computed: {
      dark() {
        // only coordiantes that are not both even or both odd values are dark
        return (this.index_x % 2 === 0 && this.index_y % 2 !== 0) || (this.index_x % 2 !== 0 && this.index_y % 2 === 0)
      },
      queen() {
        return this.dark ? require("../assets/white-queen.svg") : require("../assets/black-queen.svg");
      }
    }
}
</script>

<style>
.square {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.square:hover {
  cursor: pointer;
}
.square.dark {
  background-color: black;
}

.square.light {
  background-color: white;
}
.queen {
  height: 70%;
  width: 70%;
}
</style>
