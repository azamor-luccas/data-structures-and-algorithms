// 01-05-2022 https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    seen = Array(grid.length);
    for (i = 0; i < grid.length; i++) { seen[i] = [] }
        
    recursiveFlood = function(img, x, y, color) {
        if (0 <= x && x < img.length && 0 <= y && y < img[0].length && !seen[x][y]) {
            if (img[x][y] == color) {
                seen[x][y] = true
                recursiveFlood(img, x - 1, y, color)
                recursiveFlood(img, x + 1, y, color)
                recursiveFlood(img, x, y - 1, color)
                recursiveFlood(img, x, y + 1, color)
            } else {
                notSeen.push([x, y])
            }
        }
    }
    
    
    numberOfLands = 0
    numberOfSeas = 0
    
    notSeen = [[0, 0]];

    
    nextShotIndex = 0
    
    /* for (i = 0; i < grid.length; i++){
        for (j=0; j<grid[0].length; j++){
            if (!seen[i][j]) {
                color = grid[i][j]
                recursiveFlood(grid, i, j, color)
        
                if (color == 1) { // increment numberOfLands
                    numberOfLands++;
                } else { // increment numberOfSeas
                    numberOfSeas++;
                }
            }
        }
    } */
    
    while(nextShotIndex < notSeen.length) {
        px = notSeen[nextShotIndex][0]
        py = notSeen[nextShotIndex][1]
        
       if (!seen[px][py]) { 
        
            color = grid[px][py]
            recursiveFlood(grid, px, py, color)
        
            if (color == 1) { // increment numberOfLands
                numberOfLands++;
            } else { // increment numberOfSeas
                numberOfSeas++;
            }
        }
        nextShotIndex++;
    }
    
    return numberOfLands
    
};
