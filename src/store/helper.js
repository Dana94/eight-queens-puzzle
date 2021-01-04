
// diagonals
const affectedAreas = (x, y) => {
    let areas = [];

    // [x-1,y-1]
    for(let i = x-1, j = y-1; i >= 0 && j >= 0; i--, j--) {
        areas.push([i,j]);
    }
    // [x-1,y+1]
    for(let i = x-1, j = y+1; i >= 0 && j < 8; i--, j++) {
        areas.push([i,j]);
    }
    // [x+1,y-1]
    for(let i = x+1, j = y-1; i < 8 && j >= 0; i++, j--) {
        areas.push([i,j]);
    }
    // [x+1,y+1]
    for(let i = x+1, j = y+1; i < 8 && j < 8; i++, j++) {
        areas.push([i,j]);
    }
    return areas;
}

export default affectedAreas;
