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


    function startPath(verticesArray) {
        const newSpot = new _node_class__WEBPACK_IMPORTED_MODULE_0__.BoardSpot(verticesArray);
        console.log(newSpot);

        for (let i = 0; i < possibleMoves.length; i++) {
            const newCoords = [newSpot.coordinates[0] + possibleMoves[i][0], 
            newSpot.coordinates[1] + possibleMoves[i][1] ];

            console.log(newCoords)
        }
    }

        return {startPath}

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

testRun.startPath([2,3]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXlDOzs7QUFHbEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSw0QkFBNEIsa0RBQVM7QUFDckM7O0FBRUEsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCOzs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxlQUFlOztBQUVmOzs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051RDs7O0FBR3ZELGdCQUFnQixvRUFBcUI7O0FBRXJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9rbmlnaHQtbW92ZXMuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9ub2RlLWNsYXNzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuLy8gY3JlYXRlIGFuIGFycmF5IHRoYXQgc3RvcmVzIHRoZSBjb29yZGluYXRlcyBvZiBlYWNoIHNwb3Qgb24gdGhlIGJvYXJkIHRoYXRcbi8vIHRoZSBrbmlnaHQgdmlzaXRzLCBhbmQgdGhlbiBzcGl0IGJhY2sgdGhhdCBhcnJheSBvbmNlIHRoZSBkZXN0aW5hdGlvbiBzcG90XG4vLyBpcyByZWFjaGVkXG5cbi8vIHBvc3NpYmx5IGJ1aWxkIGEgXCJuLWFyeSBzZWFyY2ggdHJlZVwiIHRvIGJlIGFibGUgdG8gaGF2ZSBlYWNoIGJvYXJkIHNwb3Rcbi8vIGJyYW5jaCBvZmYgaW50byBtb3JlIHRoYW4gdHdvIGRpcmVjdGlvbnNcblxuLy8gcG9zc2libHkgY3JlYXRlIGEgY2hlY2tlciBmdW5jdGlvbiB0aGF0IGNoZWNrcyB0byBzZWUgaWYgYW55IG9mIHRoZSBjaGlsZHJlblxuLy8gYm9hcmQgc3BvdHMgaGF2ZSBpbmRpY2VzIGFib3ZlIDcgLi4uIGlmIHRoZXkgZG8sIHJlbW92ZSB0aGVtXG4vLyAuLi4gdGhpcyB3YXkgdGhlIGtuaWdodCBzdGF5cyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgY2hlc3MgYm9hcmRcblxuaW1wb3J0IHsgQm9hcmRTcG90IH0gZnJvbSBcIi4vbm9kZS1jbGFzc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBrbmlnaHRNb3Zlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwb3NzaWJsZU1vdmVzID0gW1xuICAgICAgICBbMiwgMV0sXG4gICAgICAgIFsxLCAyXSxcbiAgICAgICAgWy0yLCAxXSxcbiAgICAgICAgWy0xLCAyXSxcbiAgICAgICAgWy0yLCAtMV0sXG4gICAgICAgIFstMSwgLTJdLFxuICAgICAgICBbMiwgLTFdLFxuICAgICAgICBbMSwgLTJdXG4gICAgXVxuXG4gICAgY29uc3QgdmlzaXRlZCA9IFtdXG5cblxuICAgIGZ1bmN0aW9uIHN0YXJ0UGF0aCh2ZXJ0aWNlc0FycmF5KSB7XG4gICAgICAgIGNvbnN0IG5ld1Nwb3QgPSBuZXcgQm9hcmRTcG90KHZlcnRpY2VzQXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdTcG90KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IFtuZXdTcG90LmNvb3JkaW5hdGVzWzBdICsgcG9zc2libGVNb3Zlc1tpXVswXSwgXG4gICAgICAgICAgICBuZXdTcG90LmNvb3JkaW5hdGVzWzFdICsgcG9zc2libGVNb3Zlc1tpXVsxXSBdO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdDb29yZHMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtzdGFydFBhdGh9XG5cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5leHBvcnQgY2xhc3MgQm9hcmRTcG90IHtcbiAgICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlcykge1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIHRoaXMuYWRqYWNlbnRTcG90cyA9IFtdO1xuXG4gICAgfVxuXG59XG5cbi8vIGNvbnN0IGdyYXBoID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIGNvbnN0IGJvYXJkU3BvdHMgPSB7fTtcblxuLy8gICAgIGNvbnN0IHNpemUgPSA4O1xuXG4vLyAgICAgZnVuY3Rpb24gY3JlYXRlVmVydGljZXMoKSB7XG5cbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc2l6ZTsgaSsrKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBib2FyZFxuLy8gICAgICAgICB9XG5cbi8vICAgICB9XG4gICAgXG5cblxuLy8gICAgIHJldHVybiB7Y3JlYXRlVmVydGljZXN9XG5cbi8vIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGtuaWdodE1vdmVzQ29udHJvbGxlciB9IGZyb20gXCIuL2tuaWdodC1tb3Zlc1wiO1xuXG5cbmNvbnN0IHRlc3RSdW4gPSBrbmlnaHRNb3Zlc0NvbnRyb2xsZXIoKTtcblxudGVzdFJ1bi5zdGFydFBhdGgoWzIsM10pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9