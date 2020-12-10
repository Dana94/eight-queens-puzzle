<template>
  <div class="square" :class="{dark: dark, light: !dark}"></div>
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
      }
    }
}
</script>

<style>
.square {
    background-color: aqua;
}

.square.dark {
  background-color: black;
  border-bottom: 1px solid white;
}

.square.light {
  background-color: white;
  border: 1px solid black;
}
</style>
