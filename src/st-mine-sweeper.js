import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {

let columns = matrix[0].length;
let rows = matrix.length;
let board = new Array(rows).fill(0).map(() => new Array(columns).fill(0));

function check(x1, y1)        // this function returns the value of the tile using the (x1,y1) coordinates. (0,0) is in the upper left corner.
        {
        if((x1>=0)&&(y1>=0)&&(x1<rows)&&(y1<columns)) //Verify if coordinates do not fall outside of the board.
                return matrix[x1][y1];
        }

for(let x = 0; x < rows; x++) {

 for(let y = 0; y < columns; y++) {

 board[x][y]=

                                ((check(x,y+1) == true)|0)        

                               +((check(x-1,y+1) == true)|0)      

                               +((check(x+1,y+1) == true)|0)        

                               +((check(x,y-1) == true)|0)        

                               +((check(x-1,y-1) == true)|0)        

                               +((check(x+1,y-1) == true)|0)        

                               +((check(x-1,y) == true)|0)        

                               +((check(x+1,y) == true)|0);      

                               

 }}

return board;  
}
