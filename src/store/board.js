import {ADD_QUEEN} from './labels';

const state = {
    board: new Map()
}

// a Queen's position contains all the squares it connects to
// {
//     [x,y] : [[x1,y1], [x2,y2]]
// }

//mutations
//add/remove Queen
//clear board
const mutations = {
    ADD_QUEEN(state, coords) {
        // calculate diagonal values (helper?)
        // maybe change this later
        state.board.set([coords.x, coords.y] + "", new Set());
    },
    // REMOVE_QUEEN(state, coords) {

    // },
    CLEAR_BOARD(state) {
        state.board.clear();
    }
}

const actions = {
    addQueen({commit}, coords) {
        commit(ADD_QUEEN, coords);
    },
    // removeQueen({commit}, coords) {

    // },
    // clearBoard({commit}) {

    // }
}


//getters
//error
const getters = {
    invalidMove: (state) => (coords) => {
        for(let i = 0; i < 8; i++) {
            console.log(state, coords)
            // if()
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
