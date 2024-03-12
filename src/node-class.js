/* eslint-disable import/prefer-default-export */
export class BoardSpot {
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