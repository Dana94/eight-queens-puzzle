import { ADD_QUEEN, REMOVE_QUEEN, CLEAR_BOARD, SET_THEME, ADD_INVALID, REMOVE_INVALID, SET_FOCUS } from './labels';
import affectedAreas from './helper';

const state = {
    board: new Map(),
    availableQueens: 8,
    theme: 'classic',
    invalids: 0,
    focus: {
        x: 0,
        y: 0
    }
}

// a Queen's position contains all the squares it connects to
// {
//     [x,y] : [[x1,y1], [x2,y2]]
// }

const mutations = {
    ADD_QUEEN(state, coords) {
        let areas = affectedAreas(coords.x, coords.y);
        state.board.set([coords.x, coords.y] + "", new Set(areas));
        state.availableQueens -= 1;
    },
    REMOVE_QUEEN(state, coords) {
        state.board.delete(`${coords.x},${coords.y}`)
        state.availableQueens += 1;
    },
    CLEAR_BOARD(state) {
        state.board.clear();
        state.availableQueens = 8;
    },
    SET_THEME(state, theme) {
        state.theme = theme;
    },
    ADD_INVALID(state) {
        state.invalids += 1;
    },
    REMOVE_INVALID(state) {
        state.invalids -= 1;
    },
    // use arrow keys to navigate the board
    SET_FOCUS(state, { x, y }) {
        if (x >= 0 && y >= 0 && y <= 7 && x <= 7) {
            state.focus.x = x;
            state.focus.y = y;
        }
        // up arrow will focus on the bottom most grid in the column
        if (x < 0) {
            state.focus.x = 7;
        }
        // down arrow will focus on the top most grid in the column
        if (x > 7) {
            state.focus.x = 0;
        }
        // left arrow will focus on right most square in the row
        if (y < 0) {
            state.focus.y = 7;
        }
        // right arrow will focus on left most square in the row
        if (y > 7) {
            state.focus.y = 0;
        }
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
    setTheme({ commit }, theme) {
        commit(SET_THEME, theme);
    },
    addInvalid({ commit }) {
        commit(ADD_INVALID)
    },
    removeInvalid({ commit }) {
        commit(REMOVE_INVALID);
    },
    setFocus({ commit }, payload) {
        commit(SET_FOCUS, payload);
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
                // wouldn't .has() work here?
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
    },
    getFocus(state) {
        return state.focus;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
