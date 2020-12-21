import { ADD_QUEEN, REMOVE_QUEEN, CLEAR_BOARD } from './labels';
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
    addQueen({ commit }, coords) {
        commit(ADD_QUEEN, coords);
    },
    removeQueen({ commit }, coords) {
        commit(REMOVE_QUEEN, coords);
    },
    clearBoard({ commit }) {
        commit(CLEAR_BOARD);
    }
}


const getters = {
    invalidMove: (state) => (coords) => {
        let invalid = false;

        //optimize
        for (let [key, set] of state.board.entries()) {

            // check rows and columns
            let keyArr = key.split(",");
            //stop checking board coords when it reaches its own coords (otherwise it will find itself and say it's invalid)
            if (!(parseInt(keyArr[0]) === coords.x && parseInt(keyArr[1]) === coords.y)) {

                //rows and columns (only matches the x OR the y, not both)
                if (parseInt(keyArr[0]) === coords.x || parseInt(keyArr[1]) === coords.y) {
                    invalid = true;
                }
                //check diagonals
                for (let val of set.entries()) {
                    if (val[0][0] === coords.x && val[0][1] === coords.y) {
                        invalid = true;
                    }
                }
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
