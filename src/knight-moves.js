/* eslint-disable no-use-before-define */
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
    // const adjacencyListCounter = 0;
    const visited = [];

    function checkVisited(coordArray) {
        const visitedString = JSON.stringify(visited);
        const coordString = JSON.stringify(coordArray);

        const tester = visitedString.indexOf(coordString);
        if (tester !== -1) {
            console.log('already in array!!')
            return true
        } else {
            console.log('not yet in array!!')
            return false
        }
    }


    function checkBoardConstraints(coordArray) {
        const isVisited = checkVisited(coordArray);
        console.log(isVisited)
        if (isVisited) {
            console.log('already in array again!');
            return false
        }
        console.log('first test passed')

        if ((coordArray[0] >= 0 && coordArray[0] <= 8) && (coordArray[1] >= 0 && coordArray[1] <= 8)) {
            // keep working memory of what spots have been visited, so that we can rule them out:
            visited.push(coordArray);
            console.log(visited);
            return true
        } else {
            return false
        }

    }

    function buildAdjacencyList(boardSpot) {
        console.log('starting list');
        for (let i = 0; i < possibleMoves.length; i++) {
            const newCoords = [boardSpot.coordinates[0] + possibleMoves[i][0], 
            boardSpot.coordinates[1] + possibleMoves[i][1] ];

            const newBoardSpot = new BoardSpot(newCoords);
            newBoardSpot.path.push(boardSpot);

            // call function here that checks if the newCoords are within
            // board boundaries:
            const checkBoard = checkBoardConstraints(newCoords);
            // console.log(checkBoard);


            if (checkBoard === true) {
                console.log('adding')
                boardSpot.adjacentSpots.push(newBoardSpot);
            } else if (checkBoard === false) {
                console.log('not adding')
            }
            // console.log(newBoardSpot)

        }
        console.log(boardSpot.adjacentSpots);
        return boardSpot

    }


    function startPath(verticesArray) {
        const newSpot = new BoardSpot(verticesArray);
        newSpot.path.push(newSpot)
        console.log(newSpot);
        buildAdjacencyList(newSpot)
        return newSpot
    };

    function knightMoves(start, end) {
        const firstBoardSpot = startPath(start);
        console.log(firstBoardSpot);
        const searchResult = bfsSearch(firstBoardSpot, end)
        console.log(searchResult);
        console.log(searchResult.path)
    }

    function bfsSearch(boardSpot, end) {
        // console.log(boardSpot)

        const queue = [boardSpot]
        boardSpot.adjacentSpots.forEach(newSpot => {
            queue.push(newSpot)
        });

        while (queue.length > 0) {
            const spot = queue.shift();
            console.log('queue running')
            console.log(spot);
            

            if (spot.coordinates[0] === end[0] && spot.coordinates[1] === end[1]) {
                console.log('match!');
                spot.path.push(spot)
                return spot
            };

            if (spot.adjacentSpots.length === 0) {
                buildAdjacencyList(spot);
                spot.adjacentSpots.forEach(newSpot => {
                    queue.push(newSpot);
                    console.log(queue)
                })
                console.log('STARTING WITH NEW NODE THAT HAS CHILDREN')
            }

        }

        
    }

    

        return {startPath,
            checkBoardConstraints,
            buildAdjacencyList,
            knightMoves,
            bfsSearch
        }

}