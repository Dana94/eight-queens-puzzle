import {ADD_QUEEN, REMOVE_QUEEN, CLEAR_BOARD} from './labels';
import affectedAreas from './helper';

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
        let areas = affectedAreas(coords.x, coords.y);
        state.board.set([coords.x, coords.y] + "", new Set(areas));
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
    invalidMove: (state) => (coords) => {
        let invalid = false;

        for(let [key, set] of state.board.entries()) {
            // check diagonals
            console.log(key)
            if(set.has([coords.x, coords.y])) {
                invalid = true;
                console.log(invalid);
            }
        }
        return invalid;
    },
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
