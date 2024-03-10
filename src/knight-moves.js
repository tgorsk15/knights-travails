/* eslint-disable yoda */
/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */

// create an array that stores the coordinates of each spot on the board that
// the knight visits, and then spit back that array once the destination spot
// is reached

// possibly build a "n-ary search tree" to be able to have each board spot
// branch off into more than two directions

// possibly create a checker function that checks to see if any of the children
// board spots have indices above 7 ... if they do, remove them
// ... this way the knight stays within the bounds of the chess board

import { BoardSpot } from "./node-class";


export const knightMovesController = function() {
    const possibleMoves = [
        [2, 1],
        [1, 2],
        [-2, 1],
        [-1, 2],
        [-2, -1],
        [-1, -2],
        [2, -1],
        [1, -2]
    ]

    const visited = []


    function checkBoardConstraints(coordArray) {
        if ((coordArray[0] >= 0 && coordArray[0] <= 8) && (coordArray[1] >= 0 && coordArray[1] <= 8)) {
            console.log('new coords fit board')
            return true
        } else {
            console.log('coord doesnt fit board')
            return false
        }

    }


    function startPath(verticesArray) {
        const newSpot = new BoardSpot(verticesArray);
        console.log(newSpot);

        for (let i = 0; i < possibleMoves.length; i++) {
            const newCoords = [newSpot.coordinates[0] + possibleMoves[i][0], 
            newSpot.coordinates[1] + possibleMoves[i][1] ];

            // call function here that checks if the newCoords are within
            // board boundaries:
            const checkBoard = checkBoardConstraints(newCoords);
            console.log(checkBoard);

            if (checkBoard === true) {
                // console.log('adding to adjacent!')
            } else if (checkBoard === false) {
                // console.log('not adding')
            }

            console.log(newCoords)
        }
    };

    

        return {startPath,
            checkBoardConstraints}

}