// 03-05-2022 https://leetcode.com/problems/max-area-of-island/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    seen = Array(grid.length);
    for (i = 0; i < grid.length; i++) { seen[i] = [] }
        
    recursiveFlood = function(img, x, y, color) {
        if (0 <= x && x < img.length && 0 <= y && y < img[0].length && !seen[x][y]) {
            if (img[x][y] == color) {
                seen[x][y] = true
                size++
                recursiveFlood(img, x - 1, y, color, size)
                recursiveFlood(img, x + 1, y, color, size)
                recursiveFlood(img, x, y - 1, color, size)
                recursiveFlood(img, x, y + 1, color, size)
            } else {
                notSeen.push([x, y])
            }
        }
    }
    
    
    biggestLand = 0
    numberOfSeas = 0
    
    notSeen = [[0, 0]];

    nextShotIndex = 0
    
    
    while(nextShotIndex < notSeen.length) {
        px = notSeen[nextShotIndex][0]
        py = notSeen[nextShotIndex][1]
        
       if (!seen[px][py]) { 
        
            color = grid[px][py]
            size = 0
            recursiveFlood(grid, px, py, color)
        
            if (color == 1 && size > biggestLand) {
                biggestLand = size;
                
            } else {
                numberOfSeas++;
            }
        }
        nextShotIndex++;
    }
    
    return biggestLand
};
