<template>
  <div
    class="square"
    :class="{
      dark: dark,
      light: !dark,
      'left-border': leftBorder,
      'right-border': rightBorder,
      'top-border': topBorder,
      'bottom-border': bottomBorder,
      'invalid': invalidMove
    }"
    @click="select"
  >
    <img :src="queen" alt="Queen" class="queen" v-if="showQueen" />
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
    data() {
      return {
        showQueen: false
      }
    },
    computed: {
      dark() {
        // only coordiantes that are not both even or both odd values are dark
        return (this.index_x % 2 === 0 && this.index_y % 2 !== 0) || (this.index_x % 2 !== 0 && this.index_y % 2 === 0)
      },
      leftBorder() {
        return this.index_y === 0;
      },
      rightBorder() {
        return this.index_y === 7;
      },
      topBorder() {
        return this.index_x === 0;
      },
      bottomBorder() {
        return this.index_x === 7;
      },
      queen() {
        return this.dark ? require("../assets/white-queen.svg") : require("../assets/black-queen.svg");
      },
      canAddQueen() {
        return this.$store.getters.availableQueens > 0;
      },
      invalidMove() {
        return this.$store.getters.invalidMove({x: this.index_x, y: this.index_y});
      }
    },
    watch: {
      showQueen() {
        if(this.showQueen) {
          this.$store.dispatch('addQueen', {x: this.index_x, y: this.index_y});
        } else {
          this.$store.dispatch('removeQueen', {x: this.index_x, y: this.index_y});
        }
      }
    },
    methods: {
      select() {
        // queens available to use
        if(!this.showQueen && this.canAddQueen) {
          this.showQueen = true;
        }
        // 8 queens are already on the board
        else if(!this.showQueen && !this.canAddQueen){
          alert('You can only add 8 Queens onto the board.');
        }
        // removing queen from store
        else if (this.showQueen) {
          this.showQueen = false;
        }
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
  border: 2px solid #cacaca;
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

.square.left-border {
  border-left-width: 4px;
}
.square.right-border {
  border-right-width: 4px;
}
.square.top-border {
  border-top-width: 4px;
}
.square.bottom-border {
  border-bottom-width: 4px;
}
.square.invalid {
  border-color: red;
}
</style>
