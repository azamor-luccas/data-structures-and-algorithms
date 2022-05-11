// 11-05-2022 https://leetcode.com/problems/number-of-closed-islands/
/**
 * @param {number[][]} grid
 * @return {number}
 */

var recursiveFlood = function(grid, x, y, color, isClosed) {
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] == color) {
        grid[x][y] = 2
        isClosed = recursiveFlood(grid, x+1, y, color, isClosed) && isClosed
        isClosed = recursiveFlood(grid, x-1, y, color, isClosed) && isClosed
        isClosed = recursiveFlood(grid, x, y+1, color, isClosed) && isClosed
        isClosed = recursiveFlood(grid, x, y-1, color, isClosed) && isClosed
        if (x == 0 || y == 0 || x == grid.length - 1 || y == grid[0].length - 1) isClosed = false
        return isClosed
    }
    return isClosed
}

var closedIsland = function(grid) {
    nClosed = 0
    for (i=0; i<grid.length; i++){
        for(j=0; j<grid[0].length; j++){
            if( grid[i][j] == 1 ) {
                recursiveFlood(grid, i, j, 1, false)
            } else if ( grid[i][j] == 0 ){
                isClosed = recursiveFlood(grid, i, j, 0, i > 0 && i < grid.length-1 && j>0 && j<grid[0].length-1)
                if (isClosed) nClosed++
            }
        }
    }
    return nClosed
};
