import { ADD_QUEEN, REMOVE_QUEEN, CLEAR_BOARD, SET_THEME, ADD_INVALID, REMOVE_INVALID } from './labels';
import affectedAreas from './helper';

const state = {
    board: new Map(),
    availableQueens: 8,
    theme: 'dark',
    invalids: 0
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
        state.availableQueens = 8;
    },
    SET_THEME(state, theme) {
        // set local storage
        state.theme = theme;
    },
    ADD_INVALID(state) {
        state.invalids += 1;
    },
    REMOVE_INVALID(state) {
        state.invalids -= 1;
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
    },
    setTheme({commit}, theme) {
        commit(SET_THEME, theme);
    },
    addInvalid({commit}) {
        commit(ADD_INVALID)
    },
    removeInvalid({commit}) {
        commit(REMOVE_INVALID);
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
    },
    getTheme(state) {
        return state.theme;
    },
    getBoardStatus: (state) => (coords) => {
        return state.board.has(`${coords.x},${coords.y}`)
    },
    invalids(state) {
        return state.invalids;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
