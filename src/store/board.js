import {ADD_QUEEN, REMOVE_QUEEN, CLEAR_BOARD} from './labels';

const state = {
    board: new Map(),
    availableQueens: 8
}

// a Queen's position contains all the squares it connects to
// {
//     [x,y] : [[x1,y1], [x2,y2]]
// }

const mutations = {
    ADD_QUEEN(state, coords) {
        // calculate diagonal values (helper?)
        // maybe change this later
        state.board.set([coords.x, coords.y] + "", new Set());
        state.availableQueens -= 1;
    },
    REMOVE_QUEEN(state, coords) {
        // remove key from board state
        state.board.delete(`${coords.x},${coords.y}`)
        state.availableQueens += 1;
    },
    CLEAR_BOARD(state) {
        state.board.clear();
    }
}

const actions = {
    addQueen({commit}, coords) {
        commit(ADD_QUEEN, coords);
    },
    removeQueen({commit}, coords) {
        commit(REMOVE_QUEEN, coords);
    },
    clearBoard({commit}) {
        commit(CLEAR_BOARD);
    }
}


const getters = {
    // invalidMove: (state) => (coords) => {
    //     for(let i = 0; i < 8; i++) {
    //         console.log(state, coords)
    //         // if()
    //     }
    //     // return state.availableQueens % 2 === 0;
    // },
    availableQueens(state) {
        return state.availableQueens;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
