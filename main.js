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
        const newSpot = new _node_class__WEBPACK_IMPORTED_MODULE_0__.BoardSpot(verticesArray);
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
        this.adjacentSpots = [];

    }

}

// const graph = function () {
//     const boardSpots = {};

//     const size = 8;

//     function createVertices() {

//         for (let i = 0; i <= size; i++) {
//             const board
//         }

//     }
    


//     return {createVertices}

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

testRun.startPath([0,0]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV5Qzs7O0FBR2xDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSw0QkFBNEIsa0RBQVM7QUFDckM7O0FBRUEsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCO0FBQ2hCOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxlQUFlOztBQUVmOzs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051RDs7O0FBR3ZELGdCQUFnQixvRUFBcUI7O0FBRXJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9rbmlnaHQtbW92ZXMuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9ub2RlLWNsYXNzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHlvZGEgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbi8vIGNyZWF0ZSBhbiBhcnJheSB0aGF0IHN0b3JlcyB0aGUgY29vcmRpbmF0ZXMgb2YgZWFjaCBzcG90IG9uIHRoZSBib2FyZCB0aGF0XG4vLyB0aGUga25pZ2h0IHZpc2l0cywgYW5kIHRoZW4gc3BpdCBiYWNrIHRoYXQgYXJyYXkgb25jZSB0aGUgZGVzdGluYXRpb24gc3BvdFxuLy8gaXMgcmVhY2hlZFxuXG4vLyBwb3NzaWJseSBidWlsZCBhIFwibi1hcnkgc2VhcmNoIHRyZWVcIiB0byBiZSBhYmxlIHRvIGhhdmUgZWFjaCBib2FyZCBzcG90XG4vLyBicmFuY2ggb2ZmIGludG8gbW9yZSB0aGFuIHR3byBkaXJlY3Rpb25zXG5cbi8vIHBvc3NpYmx5IGNyZWF0ZSBhIGNoZWNrZXIgZnVuY3Rpb24gdGhhdCBjaGVja3MgdG8gc2VlIGlmIGFueSBvZiB0aGUgY2hpbGRyZW5cbi8vIGJvYXJkIHNwb3RzIGhhdmUgaW5kaWNlcyBhYm92ZSA3IC4uLiBpZiB0aGV5IGRvLCByZW1vdmUgdGhlbVxuLy8gLi4uIHRoaXMgd2F5IHRoZSBrbmlnaHQgc3RheXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGNoZXNzIGJvYXJkXG5cbmltcG9ydCB7IEJvYXJkU3BvdCB9IGZyb20gXCIuL25vZGUtY2xhc3NcIjtcblxuXG5leHBvcnQgY29uc3Qga25pZ2h0TW92ZXNDb250cm9sbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtcbiAgICAgICAgWzIsIDFdLFxuICAgICAgICBbMSwgMl0sXG4gICAgICAgIFstMiwgMV0sXG4gICAgICAgIFstMSwgMl0sXG4gICAgICAgIFstMiwgLTFdLFxuICAgICAgICBbLTEsIC0yXSxcbiAgICAgICAgWzIsIC0xXSxcbiAgICAgICAgWzEsIC0yXVxuICAgIF1cblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBbXVxuXG5cbiAgICBmdW5jdGlvbiBjaGVja0JvYXJkQ29uc3RyYWludHMoY29vcmRBcnJheSkge1xuICAgICAgICBpZiAoKGNvb3JkQXJyYXlbMF0gPj0gMCAmJiBjb29yZEFycmF5WzBdIDw9IDgpICYmIChjb29yZEFycmF5WzFdID49IDAgJiYgY29vcmRBcnJheVsxXSA8PSA4KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyBjb29yZHMgZml0IGJvYXJkJylcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29vcmQgZG9lc250IGZpdCBib2FyZCcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdGFydFBhdGgodmVydGljZXNBcnJheSkge1xuICAgICAgICBjb25zdCBuZXdTcG90ID0gbmV3IEJvYXJkU3BvdCh2ZXJ0aWNlc0FycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3U3BvdCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZU1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb29yZHMgPSBbbmV3U3BvdC5jb29yZGluYXRlc1swXSArIHBvc3NpYmxlTW92ZXNbaV1bMF0sIFxuICAgICAgICAgICAgbmV3U3BvdC5jb29yZGluYXRlc1sxXSArIHBvc3NpYmxlTW92ZXNbaV1bMV0gXTtcblxuICAgICAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiBoZXJlIHRoYXQgY2hlY2tzIGlmIHRoZSBuZXdDb29yZHMgYXJlIHdpdGhpblxuICAgICAgICAgICAgLy8gYm9hcmQgYm91bmRhcmllczpcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm9hcmQgPSBjaGVja0JvYXJkQ29uc3RyYWludHMobmV3Q29vcmRzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrQm9hcmQpO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tCb2FyZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRpbmcgdG8gYWRqYWNlbnQhJylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2tCb2FyZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm90IGFkZGluZycpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0Nvb3JkcylcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBcblxuICAgICAgICByZXR1cm4ge3N0YXJ0UGF0aCxcbiAgICAgICAgICAgIGNoZWNrQm9hcmRDb25zdHJhaW50c31cblxufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmV4cG9ydCBjbGFzcyBCb2FyZFNwb3Qge1xuICAgIGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICAgICAgdGhpcy5hZGphY2VudFNwb3RzID0gW107XG5cbiAgICB9XG5cbn1cblxuLy8gY29uc3QgZ3JhcGggPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc3QgYm9hcmRTcG90cyA9IHt9O1xuXG4vLyAgICAgY29uc3Qgc2l6ZSA9IDg7XG5cbi8vICAgICBmdW5jdGlvbiBjcmVhdGVWZXJ0aWNlcygpIHtcblxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzaXplOyBpKyspIHtcbi8vICAgICAgICAgICAgIGNvbnN0IGJvYXJkXG4vLyAgICAgICAgIH1cblxuLy8gICAgIH1cbiAgICBcblxuXG4vLyAgICAgcmV0dXJuIHtjcmVhdGVWZXJ0aWNlc31cblxuLy8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsga25pZ2h0TW92ZXNDb250cm9sbGVyIH0gZnJvbSBcIi4va25pZ2h0LW1vdmVzXCI7XG5cblxuY29uc3QgdGVzdFJ1biA9IGtuaWdodE1vdmVzQ29udHJvbGxlcigpO1xuXG50ZXN0UnVuLnN0YXJ0UGF0aChbMCwwXSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=