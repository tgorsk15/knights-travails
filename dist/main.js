/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/knight-moves.js":
/*!*****************************!*\
  !*** ./src/knight-moves.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   knightMovesController: () => (/* binding */ knightMovesController)
/* harmony export */ });
/* harmony import */ var _node_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-class */ "./src/node-class.js");
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




const knightMovesController = function() {
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

            const newBoardSpot = new _node_class__WEBPACK_IMPORTED_MODULE_0__.BoardSpot(newCoords);
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
        const newSpot = new _node_class__WEBPACK_IMPORTED_MODULE_0__.BoardSpot(verticesArray);
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

/***/ }),

/***/ "./src/node-class.js":
/*!***************************!*\
  !*** ./src/node-class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardSpot: () => (/* binding */ BoardSpot)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
class BoardSpot {
    constructor(coordinates) {
        this.coordinates = coordinates;
        this.path = []
        this.adjacentSpots = [];

    }

}


// reference for BFS function taken form another project:

// function levelOrder(callback) {
//     console.log(root)

//     const rootOrder =[];
//     const queue = [root];

//     if (!callback) {
//         callback = (node) => {

//             if (node.data !== null) {
//                 rootOrder.push(node.data);
//             }
//         }
//     }

//     while (queue.length > 0) {
//         const node = queue.shift();

//         if (node.left !== null) {
//             queue.push(node.left)
//         } 
//         if (node.right !== null) {
//             queue.push(node.right);
//         }
        
//         callback(node)
//     }
//     return rootOrder
   
// }

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _knight_moves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight-moves */ "./src/knight-moves.js");



const testRun = (0,_knight_moves__WEBPACK_IMPORTED_MODULE_0__.knightMovesController)();

testRun.knightMoves([0,0], [5,4]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXlDOzs7QUFHbEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBOztBQUVBLHFDQUFxQyxrREFBUztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsNEJBQTRCLGtEQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUMzQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051RDs7O0FBR3ZELGdCQUFnQixvRUFBcUI7O0FBRXJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9rbmlnaHQtbW92ZXMuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9ub2RlLWNsYXNzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSB5b2RhICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG4vLyBjcmVhdGUgYW4gYXJyYXkgdGhhdCBzdG9yZXMgdGhlIGNvb3JkaW5hdGVzIG9mIGVhY2ggc3BvdCBvbiB0aGUgYm9hcmQgdGhhdFxuLy8gdGhlIGtuaWdodCB2aXNpdHMsIGFuZCB0aGVuIHNwaXQgYmFjayB0aGF0IGFycmF5IG9uY2UgdGhlIGRlc3RpbmF0aW9uIHNwb3Rcbi8vIGlzIHJlYWNoZWRcblxuLy8gcG9zc2libHkgYnVpbGQgYSBcIm4tYXJ5IHNlYXJjaCB0cmVlXCIgdG8gYmUgYWJsZSB0byBoYXZlIGVhY2ggYm9hcmQgc3BvdFxuLy8gYnJhbmNoIG9mZiBpbnRvIG1vcmUgdGhhbiB0d28gZGlyZWN0aW9uc1xuXG4vLyBwb3NzaWJseSBjcmVhdGUgYSBjaGVja2VyIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIHRvIHNlZSBpZiBhbnkgb2YgdGhlIGNoaWxkcmVuXG4vLyBib2FyZCBzcG90cyBoYXZlIGluZGljZXMgYWJvdmUgNyAuLi4gaWYgdGhleSBkbywgcmVtb3ZlIHRoZW1cbi8vIC4uLiB0aGlzIHdheSB0aGUga25pZ2h0IHN0YXlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBjaGVzcyBib2FyZFxuXG5pbXBvcnQgeyBCb2FyZFNwb3QgfSBmcm9tIFwiLi9ub2RlLWNsYXNzXCI7XG5cblxuZXhwb3J0IGNvbnN0IGtuaWdodE1vdmVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSBbXG4gICAgICAgIFsyLCAxXSxcbiAgICAgICAgWzEsIDJdLFxuICAgICAgICBbLTIsIDFdLFxuICAgICAgICBbLTEsIDJdLFxuICAgICAgICBbLTIsIC0xXSxcbiAgICAgICAgWy0xLCAtMl0sXG4gICAgICAgIFsyLCAtMV0sXG4gICAgICAgIFsxLCAtMl1cbiAgICBdXG4gICAgLy8gY29uc3QgYWRqYWNlbmN5TGlzdENvdW50ZXIgPSAwO1xuICAgIGNvbnN0IHZpc2l0ZWQgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrVmlzaXRlZChjb29yZEFycmF5KSB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh2aXNpdGVkKTtcbiAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjb29yZEFycmF5KTtcblxuICAgICAgICBjb25zdCB0ZXN0ZXIgPSB2aXNpdGVkU3RyaW5nLmluZGV4T2YoY29vcmRTdHJpbmcpO1xuICAgICAgICBpZiAodGVzdGVyICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FscmVhZHkgaW4gYXJyYXkhIScpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCB5ZXQgaW4gYXJyYXkhIScpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tCb2FyZENvbnN0cmFpbnRzKGNvb3JkQXJyYXkpIHtcbiAgICAgICAgY29uc3QgaXNWaXNpdGVkID0gY2hlY2tWaXNpdGVkKGNvb3JkQXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpc1Zpc2l0ZWQpXG4gICAgICAgIGlmIChpc1Zpc2l0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbHJlYWR5IGluIGFycmF5IGFnYWluIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2ZpcnN0IHRlc3QgcGFzc2VkJylcblxuICAgICAgICBpZiAoKGNvb3JkQXJyYXlbMF0gPj0gMCAmJiBjb29yZEFycmF5WzBdIDw9IDgpICYmIChjb29yZEFycmF5WzFdID49IDAgJiYgY29vcmRBcnJheVsxXSA8PSA4KSkge1xuICAgICAgICAgICAgLy8ga2VlcCB3b3JraW5nIG1lbW9yeSBvZiB3aGF0IHNwb3RzIGhhdmUgYmVlbiB2aXNpdGVkLCBzbyB0aGF0IHdlIGNhbiBydWxlIHRoZW0gb3V0OlxuICAgICAgICAgICAgdmlzaXRlZC5wdXNoKGNvb3JkQXJyYXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codmlzaXRlZCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkQWRqYWNlbmN5TGlzdChib2FyZFNwb3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGxpc3QnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZU1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb29yZHMgPSBbYm9hcmRTcG90LmNvb3JkaW5hdGVzWzBdICsgcG9zc2libGVNb3Zlc1tpXVswXSwgXG4gICAgICAgICAgICBib2FyZFNwb3QuY29vcmRpbmF0ZXNbMV0gKyBwb3NzaWJsZU1vdmVzW2ldWzFdIF07XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0JvYXJkU3BvdCA9IG5ldyBCb2FyZFNwb3QobmV3Q29vcmRzKTtcbiAgICAgICAgICAgIG5ld0JvYXJkU3BvdC5wYXRoLnB1c2goYm9hcmRTcG90KTtcblxuICAgICAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiBoZXJlIHRoYXQgY2hlY2tzIGlmIHRoZSBuZXdDb29yZHMgYXJlIHdpdGhpblxuICAgICAgICAgICAgLy8gYm9hcmQgYm91bmRhcmllczpcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm9hcmQgPSBjaGVja0JvYXJkQ29uc3RyYWludHMobmV3Q29vcmRzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoZWNrQm9hcmQpO1xuXG5cbiAgICAgICAgICAgIGlmIChjaGVja0JvYXJkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZGluZycpXG4gICAgICAgICAgICAgICAgYm9hcmRTcG90LmFkamFjZW50U3BvdHMucHVzaChuZXdCb2FyZFNwb3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGVja0JvYXJkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgYWRkaW5nJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0JvYXJkU3BvdClcblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkU3BvdC5hZGphY2VudFNwb3RzKTtcbiAgICAgICAgcmV0dXJuIGJvYXJkU3BvdFxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdGFydFBhdGgodmVydGljZXNBcnJheSkge1xuICAgICAgICBjb25zdCBuZXdTcG90ID0gbmV3IEJvYXJkU3BvdCh2ZXJ0aWNlc0FycmF5KTtcbiAgICAgICAgbmV3U3BvdC5wYXRoLnB1c2gobmV3U3BvdClcbiAgICAgICAgY29uc29sZS5sb2cobmV3U3BvdCk7XG4gICAgICAgIGJ1aWxkQWRqYWNlbmN5TGlzdChuZXdTcG90KVxuICAgICAgICByZXR1cm4gbmV3U3BvdFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBrbmlnaHRNb3ZlcyhzdGFydCwgZW5kKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Qm9hcmRTcG90ID0gc3RhcnRQYXRoKHN0YXJ0KTtcbiAgICAgICAgY29uc29sZS5sb2coZmlyc3RCb2FyZFNwb3QpO1xuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBiZnNTZWFyY2goZmlyc3RCb2FyZFNwb3QsIGVuZClcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0KTtcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0LnBhdGgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmZzU2VhcmNoKGJvYXJkU3BvdCwgZW5kKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJvYXJkU3BvdClcblxuICAgICAgICBjb25zdCBxdWV1ZSA9IFtib2FyZFNwb3RdXG4gICAgICAgIGJvYXJkU3BvdC5hZGphY2VudFNwb3RzLmZvckVhY2gobmV3U3BvdCA9PiB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKG5ld1Nwb3QpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzcG90ID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdxdWV1ZSBydW5uaW5nJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwb3QpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChzcG90LmNvb3JkaW5hdGVzWzBdID09PSBlbmRbMF0gJiYgc3BvdC5jb29yZGluYXRlc1sxXSA9PT0gZW5kWzFdKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21hdGNoIScpO1xuICAgICAgICAgICAgICAgIHNwb3QucGF0aC5wdXNoKHNwb3QpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNwb3RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChzcG90LmFkamFjZW50U3BvdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRBZGphY2VuY3lMaXN0KHNwb3QpO1xuICAgICAgICAgICAgICAgIHNwb3QuYWRqYWNlbnRTcG90cy5mb3JFYWNoKG5ld1Nwb3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5ld1Nwb3QpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxdWV1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVEFSVElORyBXSVRIIE5FVyBOT0RFIFRIQVQgSEFTIENISUxEUkVOJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICAgICAgcmV0dXJuIHtzdGFydFBhdGgsXG4gICAgICAgICAgICBjaGVja0JvYXJkQ29uc3RyYWludHMsXG4gICAgICAgICAgICBidWlsZEFkamFjZW5jeUxpc3QsXG4gICAgICAgICAgICBrbmlnaHRNb3ZlcyxcbiAgICAgICAgICAgIGJmc1NlYXJjaFxuICAgICAgICB9XG5cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5leHBvcnQgY2xhc3MgQm9hcmRTcG90IHtcbiAgICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlcykge1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIHRoaXMucGF0aCA9IFtdXG4gICAgICAgIHRoaXMuYWRqYWNlbnRTcG90cyA9IFtdO1xuXG4gICAgfVxuXG59XG5cblxuLy8gcmVmZXJlbmNlIGZvciBCRlMgZnVuY3Rpb24gdGFrZW4gZm9ybSBhbm90aGVyIHByb2plY3Q6XG5cbi8vIGZ1bmN0aW9uIGxldmVsT3JkZXIoY2FsbGJhY2spIHtcbi8vICAgICBjb25zb2xlLmxvZyhyb290KVxuXG4vLyAgICAgY29uc3Qgcm9vdE9yZGVyID1bXTtcbi8vICAgICBjb25zdCBxdWV1ZSA9IFtyb290XTtcblxuLy8gICAgIGlmICghY2FsbGJhY2spIHtcbi8vICAgICAgICAgY2FsbGJhY2sgPSAobm9kZSkgPT4ge1xuXG4vLyAgICAgICAgICAgICBpZiAobm9kZS5kYXRhICE9PSBudWxsKSB7XG4vLyAgICAgICAgICAgICAgICAgcm9vdE9yZGVyLnB1c2gobm9kZS5kYXRhKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4vLyAgICAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuXG4vLyAgICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbi8vICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZS5sZWZ0KVxuLy8gICAgICAgICB9IFxuLy8gICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgcXVldWUucHVzaChub2RlLnJpZ2h0KTtcbi8vICAgICAgICAgfVxuICAgICAgICBcbi8vICAgICAgICAgY2FsbGJhY2sobm9kZSlcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHJvb3RPcmRlclxuICAgXG4vLyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBrbmlnaHRNb3Zlc0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9rbmlnaHQtbW92ZXNcIjtcblxuXG5jb25zdCB0ZXN0UnVuID0ga25pZ2h0TW92ZXNDb250cm9sbGVyKCk7XG5cbnRlc3RSdW4ua25pZ2h0TW92ZXMoWzAsMF0sIFs1LDRdKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==