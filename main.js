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
    const adjacencyListCounter = 0;
    const visited = [];


    function checkBoardConstraints(coordArray) {
        if ((coordArray[0] >= 0 && coordArray[0] <= 8) && (coordArray[1] >= 0 && coordArray[1] <= 8)) {
            return true
        } else {
            return false
        }

    }

    function buildAdjacencyList(boardSpot) {
        console.log(boardSpot);
        for (let i = 0; i < possibleMoves.length; i++) {
            const newCoords = [boardSpot.coordinates[0] + possibleMoves[i][0], 
            boardSpot.coordinates[1] + possibleMoves[i][1] ];
            // keep working memory of what spots have been visited, so that we can rule them out:
            // visited.push(newCoords);

            const newBoardSpot = new _node_class__WEBPACK_IMPORTED_MODULE_0__.BoardSpot(newCoords);
            newBoardSpot.path.push(boardSpot);

            // call function here that checks if the newCoords are within
            // board boundaries:
            const checkBoard = checkBoardConstraints(newCoords);
            console.log(checkBoard);

            if (checkBoard === true) {
                boardSpot.adjacentSpots.push(newBoardSpot);
            } else if (checkBoard === false) {
                console.log('not adding')
            }
            console.log(newBoardSpot)

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
        bfsSearch(firstBoardSpot, end)
    }

    function bfsSearch(boardSpot, end) {
        console.log(boardSpot)

        const queue = [boardSpot]
        boardSpot.adjacentSpots.forEach(newSpot => {
            queue.push(newSpot)
        });
        // console.log(queue);
        // console.log(queue[2]);

        while (queue.length > 0) {
            const spot = queue.shift();
            console.log(spot);
            console.log('queue running')

            if (spot.coordinates === end) {
                spot.path.push(spot)
                return spot
            };

        }

        // if all adjacentSpots do not get us to the destination,
        // we create another adjacency list:

        // adjacencyListCounter += 1;
        // buildAdjacencyList(visited[adjacencyListCounter]);

        
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

testRun.knightMoves([2,4], [5,6]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXlDOzs7QUFHbEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxrREFBUztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsNEJBQTRCLGtEQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQy9IQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzNDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVEOzs7QUFHdkQsZ0JBQWdCLG9FQUFxQjs7QUFFckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2tuaWdodC1tb3Zlcy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL25vZGUtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHlvZGEgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbi8vIGNyZWF0ZSBhbiBhcnJheSB0aGF0IHN0b3JlcyB0aGUgY29vcmRpbmF0ZXMgb2YgZWFjaCBzcG90IG9uIHRoZSBib2FyZCB0aGF0XG4vLyB0aGUga25pZ2h0IHZpc2l0cywgYW5kIHRoZW4gc3BpdCBiYWNrIHRoYXQgYXJyYXkgb25jZSB0aGUgZGVzdGluYXRpb24gc3BvdFxuLy8gaXMgcmVhY2hlZFxuXG4vLyBwb3NzaWJseSBidWlsZCBhIFwibi1hcnkgc2VhcmNoIHRyZWVcIiB0byBiZSBhYmxlIHRvIGhhdmUgZWFjaCBib2FyZCBzcG90XG4vLyBicmFuY2ggb2ZmIGludG8gbW9yZSB0aGFuIHR3byBkaXJlY3Rpb25zXG5cbi8vIHBvc3NpYmx5IGNyZWF0ZSBhIGNoZWNrZXIgZnVuY3Rpb24gdGhhdCBjaGVja3MgdG8gc2VlIGlmIGFueSBvZiB0aGUgY2hpbGRyZW5cbi8vIGJvYXJkIHNwb3RzIGhhdmUgaW5kaWNlcyBhYm92ZSA3IC4uLiBpZiB0aGV5IGRvLCByZW1vdmUgdGhlbVxuLy8gLi4uIHRoaXMgd2F5IHRoZSBrbmlnaHQgc3RheXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGNoZXNzIGJvYXJkXG5cbmltcG9ydCB7IEJvYXJkU3BvdCB9IGZyb20gXCIuL25vZGUtY2xhc3NcIjtcblxuXG5leHBvcnQgY29uc3Qga25pZ2h0TW92ZXNDb250cm9sbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtcbiAgICAgICAgWzIsIDFdLFxuICAgICAgICBbMSwgMl0sXG4gICAgICAgIFstMiwgMV0sXG4gICAgICAgIFstMSwgMl0sXG4gICAgICAgIFstMiwgLTFdLFxuICAgICAgICBbLTEsIC0yXSxcbiAgICAgICAgWzIsIC0xXSxcbiAgICAgICAgWzEsIC0yXVxuICAgIF1cbiAgICBjb25zdCBhZGphY2VuY3lMaXN0Q291bnRlciA9IDA7XG4gICAgY29uc3QgdmlzaXRlZCA9IFtdO1xuXG5cbiAgICBmdW5jdGlvbiBjaGVja0JvYXJkQ29uc3RyYWludHMoY29vcmRBcnJheSkge1xuICAgICAgICBpZiAoKGNvb3JkQXJyYXlbMF0gPj0gMCAmJiBjb29yZEFycmF5WzBdIDw9IDgpICYmIChjb29yZEFycmF5WzFdID49IDAgJiYgY29vcmRBcnJheVsxXSA8PSA4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZEFkamFjZW5jeUxpc3QoYm9hcmRTcG90KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkU3BvdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVNb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29vcmRzID0gW2JvYXJkU3BvdC5jb29yZGluYXRlc1swXSArIHBvc3NpYmxlTW92ZXNbaV1bMF0sIFxuICAgICAgICAgICAgYm9hcmRTcG90LmNvb3JkaW5hdGVzWzFdICsgcG9zc2libGVNb3Zlc1tpXVsxXSBdO1xuICAgICAgICAgICAgLy8ga2VlcCB3b3JraW5nIG1lbW9yeSBvZiB3aGF0IHNwb3RzIGhhdmUgYmVlbiB2aXNpdGVkLCBzbyB0aGF0IHdlIGNhbiBydWxlIHRoZW0gb3V0OlxuICAgICAgICAgICAgLy8gdmlzaXRlZC5wdXNoKG5ld0Nvb3Jkcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0JvYXJkU3BvdCA9IG5ldyBCb2FyZFNwb3QobmV3Q29vcmRzKTtcbiAgICAgICAgICAgIG5ld0JvYXJkU3BvdC5wYXRoLnB1c2goYm9hcmRTcG90KTtcblxuICAgICAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiBoZXJlIHRoYXQgY2hlY2tzIGlmIHRoZSBuZXdDb29yZHMgYXJlIHdpdGhpblxuICAgICAgICAgICAgLy8gYm9hcmQgYm91bmRhcmllczpcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm9hcmQgPSBjaGVja0JvYXJkQ29uc3RyYWludHMobmV3Q29vcmRzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrQm9hcmQpO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tCb2FyZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGJvYXJkU3BvdC5hZGphY2VudFNwb3RzLnB1c2gobmV3Qm9hcmRTcG90KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2tCb2FyZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGFkZGluZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdCb2FyZFNwb3QpXG5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhib2FyZFNwb3QuYWRqYWNlbnRTcG90cyk7XG4gICAgICAgIHJldHVybiBib2FyZFNwb3RcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3RhcnRQYXRoKHZlcnRpY2VzQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbmV3U3BvdCA9IG5ldyBCb2FyZFNwb3QodmVydGljZXNBcnJheSk7XG4gICAgICAgIG5ld1Nwb3QucGF0aC5wdXNoKG5ld1Nwb3QpXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Nwb3QpO1xuICAgICAgICBidWlsZEFkamFjZW5jeUxpc3QobmV3U3BvdClcbiAgICAgICAgcmV0dXJuIG5ld1Nwb3RcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24ga25pZ2h0TW92ZXMoc3RhcnQsIGVuZCkge1xuICAgICAgICBjb25zdCBmaXJzdEJvYXJkU3BvdCA9IHN0YXJ0UGF0aChzdGFydCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0Qm9hcmRTcG90KTtcbiAgICAgICAgYmZzU2VhcmNoKGZpcnN0Qm9hcmRTcG90LCBlbmQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmZzU2VhcmNoKGJvYXJkU3BvdCwgZW5kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkU3BvdClcblxuICAgICAgICBjb25zdCBxdWV1ZSA9IFtib2FyZFNwb3RdXG4gICAgICAgIGJvYXJkU3BvdC5hZGphY2VudFNwb3RzLmZvckVhY2gobmV3U3BvdCA9PiB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKG5ld1Nwb3QpXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWV1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXVlWzJdKTtcblxuICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3BvdCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzcG90KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdxdWV1ZSBydW5uaW5nJylcblxuICAgICAgICAgICAgaWYgKHNwb3QuY29vcmRpbmF0ZXMgPT09IGVuZCkge1xuICAgICAgICAgICAgICAgIHNwb3QucGF0aC5wdXNoKHNwb3QpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNwb3RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGFsbCBhZGphY2VudFNwb3RzIGRvIG5vdCBnZXQgdXMgdG8gdGhlIGRlc3RpbmF0aW9uLFxuICAgICAgICAvLyB3ZSBjcmVhdGUgYW5vdGhlciBhZGphY2VuY3kgbGlzdDpcblxuICAgICAgICAvLyBhZGphY2VuY3lMaXN0Q291bnRlciArPSAxO1xuICAgICAgICAvLyBidWlsZEFkamFjZW5jeUxpc3QodmlzaXRlZFthZGphY2VuY3lMaXN0Q291bnRlcl0pO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgICAgIHJldHVybiB7c3RhcnRQYXRoLFxuICAgICAgICAgICAgY2hlY2tCb2FyZENvbnN0cmFpbnRzLFxuICAgICAgICAgICAgYnVpbGRBZGphY2VuY3lMaXN0LFxuICAgICAgICAgICAga25pZ2h0TW92ZXMsXG4gICAgICAgICAgICBiZnNTZWFyY2hcbiAgICAgICAgfVxuXG59IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuZXhwb3J0IGNsYXNzIEJvYXJkU3BvdCB7XG4gICAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICB0aGlzLnBhdGggPSBbXVxuICAgICAgICB0aGlzLmFkamFjZW50U3BvdHMgPSBbXTtcblxuICAgIH1cblxufVxuXG5cbi8vIHJlZmVyZW5jZSBmb3IgQkZTIGZ1bmN0aW9uIHRha2VuIGZvcm0gYW5vdGhlciBwcm9qZWN0OlxuXG4vLyBmdW5jdGlvbiBsZXZlbE9yZGVyKGNhbGxiYWNrKSB7XG4vLyAgICAgY29uc29sZS5sb2cocm9vdClcblxuLy8gICAgIGNvbnN0IHJvb3RPcmRlciA9W107XG4vLyAgICAgY29uc3QgcXVldWUgPSBbcm9vdF07XG5cbi8vICAgICBpZiAoIWNhbGxiYWNrKSB7XG4vLyAgICAgICAgIGNhbGxiYWNrID0gKG5vZGUpID0+IHtcblxuLy8gICAgICAgICAgICAgaWYgKG5vZGUuZGF0YSAhPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICAgIHJvb3RPcmRlci5wdXNoKG5vZGUuZGF0YSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuLy8gICAgICAgICBjb25zdCBub2RlID0gcXVldWUuc2hpZnQoKTtcblxuLy8gICAgICAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4vLyAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUubGVmdClcbi8vICAgICAgICAgfSBcbi8vICAgICAgICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbi8vICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZS5yaWdodCk7XG4vLyAgICAgICAgIH1cbiAgICAgICAgXG4vLyAgICAgICAgIGNhbGxiYWNrKG5vZGUpXG4vLyAgICAgfVxuLy8gICAgIHJldHVybiByb290T3JkZXJcbiAgIFxuLy8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsga25pZ2h0TW92ZXNDb250cm9sbGVyIH0gZnJvbSBcIi4va25pZ2h0LW1vdmVzXCI7XG5cblxuY29uc3QgdGVzdFJ1biA9IGtuaWdodE1vdmVzQ29udHJvbGxlcigpO1xuXG50ZXN0UnVuLmtuaWdodE1vdmVzKFsyLDRdLCBbNSw2XSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=