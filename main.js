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

            const newBoardSpot = new _node_class__WEBPACK_IMPORTED_MODULE_0__.BoardSpot(newCoords, boardSpot);

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
        const newSpot = new _node_class__WEBPACK_IMPORTED_MODULE_0__.BoardSpot(verticesArray, null);
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
    constructor(coordinates, prevNode) {
        this.coordinates = coordinates;
        this.prevNode = prevNode
        this.adjacentSpots = [];

    }

}



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

testRun.knightMoves([0,0], [5,7]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Qzs7O0FBR2xDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTs7QUFFQSxxQ0FBcUMsa0RBQVM7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSw0QkFBNEIsa0RBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCOztBQUVoQjs7Ozs7Ozs7Ozs7Ozs7QUMxSUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUQ7OztBQUd2RCxnQkFBZ0Isb0VBQXFCOztBQUVyQyIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMva25pZ2h0LW1vdmVzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvbm9kZS1jbGFzcy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgeW9kYSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IEJvYXJkU3BvdCB9IGZyb20gXCIuL25vZGUtY2xhc3NcIjtcblxuXG5leHBvcnQgY29uc3Qga25pZ2h0TW92ZXNDb250cm9sbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtcbiAgICAgICAgWzIsIDFdLFxuICAgICAgICBbMSwgMl0sXG4gICAgICAgIFstMiwgMV0sXG4gICAgICAgIFstMSwgMl0sXG4gICAgICAgIFstMiwgLTFdLFxuICAgICAgICBbLTEsIC0yXSxcbiAgICAgICAgWzIsIC0xXSxcbiAgICAgICAgWzEsIC0yXVxuICAgIF1cbiAgICBjb25zdCB2aXNpdGVkID0gW107XG5cbiAgICBmdW5jdGlvbiBjaGVja1Zpc2l0ZWQoY29vcmRBcnJheSkge1xuICAgICAgICBjb25zdCB2aXNpdGVkU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodmlzaXRlZCk7XG4gICAgICAgIGNvbnN0IGNvb3JkU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY29vcmRBcnJheSk7XG5cbiAgICAgICAgY29uc3QgdGVzdGVyID0gdmlzaXRlZFN0cmluZy5pbmRleE9mKGNvb3JkU3RyaW5nKTtcbiAgICAgICAgaWYgKHRlc3RlciAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbHJlYWR5IGluIGFycmF5ISEnKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgeWV0IGluIGFycmF5ISEnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrQm9hcmRDb25zdHJhaW50cyhjb29yZEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGlzVmlzaXRlZCA9IGNoZWNrVmlzaXRlZChjb29yZEFycmF5KTtcbiAgICAgICAgaWYgKGlzVmlzaXRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FscmVhZHkgaW4gYXJyYXkgYWdhaW4hJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoY29vcmRBcnJheVswXSA+PSAwICYmIGNvb3JkQXJyYXlbMF0gPD0gOCkgJiYgKGNvb3JkQXJyYXlbMV0gPj0gMCAmJiBjb29yZEFycmF5WzFdIDw9IDgpKSB7XG4gICAgICAgICAgICAvLyBrZWVwIHdvcmtpbmcgbWVtb3J5IG9mIHdoYXQgc3BvdHMgaGF2ZSBiZWVuIHZpc2l0ZWQsIHNvIHRoYXQgd2UgY2FuIHJ1bGUgdGhlbSBvdXQ6XG4gICAgICAgICAgICB2aXNpdGVkLnB1c2goY29vcmRBcnJheSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkQWRqYWNlbmN5TGlzdChib2FyZFNwb3QpIHtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IFtib2FyZFNwb3QuY29vcmRpbmF0ZXNbMF0gKyBwb3NzaWJsZU1vdmVzW2ldWzBdLCBcbiAgICAgICAgICAgIGJvYXJkU3BvdC5jb29yZGluYXRlc1sxXSArIHBvc3NpYmxlTW92ZXNbaV1bMV0gXTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Qm9hcmRTcG90ID0gbmV3IEJvYXJkU3BvdChuZXdDb29yZHMsIGJvYXJkU3BvdCk7XG5cbiAgICAgICAgICAgIC8vIGNhbGwgZnVuY3Rpb24gaGVyZSB0aGF0IGNoZWNrcyBpZiB0aGUgbmV3Q29vcmRzIGFyZSB3aXRoaW4gYm9hcmQgYm91bmRhcmllczpcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm9hcmQgPSBjaGVja0JvYXJkQ29uc3RyYWludHMobmV3Q29vcmRzKTtcblxuICAgICAgICAgICAgaWYgKGNoZWNrQm9hcmQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkaW5nJylcbiAgICAgICAgICAgICAgICBib2FyZFNwb3QuYWRqYWNlbnRTcG90cy5wdXNoKG5ld0JvYXJkU3BvdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoZWNrQm9hcmQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25vdCBhZGRpbmcnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkU3BvdFxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdGFydFBhdGgodmVydGljZXNBcnJheSkge1xuICAgICAgICBjb25zdCBuZXdTcG90ID0gbmV3IEJvYXJkU3BvdCh2ZXJ0aWNlc0FycmF5LCBudWxsKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3U3BvdCk7XG4gICAgICAgIGJ1aWxkQWRqYWNlbmN5TGlzdChuZXdTcG90KVxuICAgICAgICByZXR1cm4gbmV3U3BvdFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBrbmlnaHRNb3ZlcyhzdGFydCwgZW5kKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Qm9hcmRTcG90ID0gc3RhcnRQYXRoKHN0YXJ0KTtcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gYmZzU2VhcmNoKGZpcnN0Qm9hcmRTcG90LCBlbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdCk7XG5cbiAgICAgICAgY29uc3QgZmluYWxMaXN0ID0gcHJpbnRTaG9ydGVzdFBhdGgoc2VhcmNoUmVzdWx0KTtcbiAgICAgICAgY29uc29sZS5sb2coZmluYWxMaXN0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJmc1NlYXJjaChib2FyZFNwb3QsIGVuZCkge1xuXG4gICAgICAgIGNvbnN0IHF1ZXVlID0gW2JvYXJkU3BvdF1cbiAgICAgICAgYm9hcmRTcG90LmFkamFjZW50U3BvdHMuZm9yRWFjaChuZXdTcG90ID0+IHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2gobmV3U3BvdClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNwb3QgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAoc3BvdC5jb29yZGluYXRlc1swXSA9PT0gZW5kWzBdICYmIHNwb3QuY29vcmRpbmF0ZXNbMV0gPT09IGVuZFsxXSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaCEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3BvdFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHNwb3QuYWRqYWNlbnRTcG90cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBidWlsZEFkamFjZW5jeUxpc3Qoc3BvdCk7XG4gICAgICAgICAgICAgICAgc3BvdC5hZGphY2VudFNwb3RzLmZvckVhY2gobmV3U3BvdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobmV3U3BvdCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXVlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NUQVJUSU5HIFdJVEggTkVXIE5PREUgVEhBVCBIQVMgQ0hJTERSRU4nKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmludFNob3J0ZXN0UGF0aChlbmRCb2FyZFNwb3QpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRTcG90ID0gZW5kQm9hcmRTcG90O1xuICAgICAgICBjb25zdCBtb3Zlc0xpc3QgPSBbY3VycmVudFNwb3QuY29vcmRpbmF0ZXNdO1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50U3BvdC5wcmV2Tm9kZSkge1xuICAgICAgICAgICAgbW92ZXNMaXN0LnB1c2goY3VycmVudFNwb3QucHJldk5vZGUuY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICBjdXJyZW50U3BvdCA9IGN1cnJlbnRTcG90LnByZXZOb2RlO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW92ZXNMaXN0LnJldmVyc2UoKVxuICAgIH1cblxuICAgIFxuXG4gICAgICAgIHJldHVybiB7a25pZ2h0TW92ZXN9XG5cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5leHBvcnQgY2xhc3MgQm9hcmRTcG90IHtcbiAgICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlcywgcHJldk5vZGUpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICB0aGlzLnByZXZOb2RlID0gcHJldk5vZGVcbiAgICAgICAgdGhpcy5hZGphY2VudFNwb3RzID0gW107XG5cbiAgICB9XG5cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBrbmlnaHRNb3Zlc0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9rbmlnaHQtbW92ZXNcIjtcblxuXG5jb25zdCB0ZXN0UnVuID0ga25pZ2h0TW92ZXNDb250cm9sbGVyKCk7XG5cbnRlc3RSdW4ua25pZ2h0TW92ZXMoWzAsMF0sIFs1LDddKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==