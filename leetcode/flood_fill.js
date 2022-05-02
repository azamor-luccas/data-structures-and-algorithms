// 01-05-2022 https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if (newColor === image[sr][sc]) return image

    var recursiveFlood = function(img, x, y, color) {
        currentColor = img[x][y]
        img[x][y] = color
        
        //up
        if (y - 1 >= 0) { // boundary
            if (img[x][y - 1] === currentColor) recursiveFlood(img, x, y - 1, newColor)
        }
        
        //down
        if (y + 1 < img[0].length) { // boundary
            if (img[x][y + 1] === currentColor) recursiveFlood(img, x, y + 1, newColor)
        }
        
        //left
        if (x - 1 >= 0) { // boundary
            if (img[x - 1][y] === currentColor) recursiveFlood(img, x - 1, y, newColor)
        }
        
        //right
        if (x + 1 < img.length) { // boundary
            if (img[x + 1][y] === currentColor) recursiveFlood(img, x + 1, y, newColor)
        }
    }
    
    recursiveFlood(image, sr, sc, newColor)
    return image
};
