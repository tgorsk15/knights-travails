/* eslint-disable no-use-before-define */
/* eslint-disable yoda */
/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
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
        if (isVisited) {
            console.log('already in array again!');
            return false
        }

        if ((coordArray[0] >= 0 && coordArray[0] <= 8) && (coordArray[1] >= 0 && coordArray[1] <= 8)) {
            // keep working memory of what spots have been visited, so that we can rule them out:
            visited.push(coordArray);
            return true
        } else {
            return false
        }

    }

    function buildAdjacencyList(boardSpot) {

        for (let i = 0; i < possibleMoves.length; i++) {
            const newCoords = [boardSpot.coordinates[0] + possibleMoves[i][0], 
            boardSpot.coordinates[1] + possibleMoves[i][1] ];

            const newBoardSpot = new BoardSpot(newCoords, boardSpot);

            // call function here that checks if the newCoords are within board boundaries:
            const checkBoard = checkBoardConstraints(newCoords);

            if (checkBoard === true) {
                // console.log('adding')
                boardSpot.adjacentSpots.push(newBoardSpot);
            } else if (checkBoard === false) {
                // console.log('not adding')
            }

        }
        return boardSpot

    }


    function startPath(verticesArray) {
        const newSpot = new BoardSpot(verticesArray, null);
        console.log(newSpot);
        buildAdjacencyList(newSpot)
        return newSpot
    };

    function knightMoves(start, end) {
        const firstBoardSpot = startPath(start);
        const searchResult = bfsSearch(firstBoardSpot, end)
        console.log(searchResult);

        const finalList = printShortestPath(searchResult);
        console.log(finalList)
    }

    function bfsSearch(boardSpot, end) {

        const queue = [boardSpot]
        boardSpot.adjacentSpots.forEach(newSpot => {
            queue.push(newSpot)
        });

        while (queue.length > 0) {
            const spot = queue.shift();

            if (spot.coordinates[0] === end[0] && spot.coordinates[1] === end[1]) {
                console.log('match!');
                return spot
            };

            if (spot.adjacentSpots.length === 0) {
                buildAdjacencyList(spot);
                spot.adjacentSpots.forEach(newSpot => {
                    queue.push(newSpot);
                    // console.log(queue)
                })
                console.log('STARTING WITH NEW NODE THAT HAS CHILDREN')
            }

        }

        
    }

    function printShortestPath(endBoardSpot) {
        let currentSpot = endBoardSpot;
        const movesList = [currentSpot.coordinates];

        while (currentSpot.prevNode) {
            movesList.push(currentSpot.prevNode.coordinates)
            currentSpot = currentSpot.prevNode;

        }

        return movesList.reverse()
    }

    

        return {knightMoves}

}