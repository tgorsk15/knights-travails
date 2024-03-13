The Knights-Travails project is an algorithm I have created that effectively finds the shortest path possible for a knight on a chessboard to move from a given start point[X, Y], to a given end point[X,Y]. 

My overall approach and structure of the program was to have every spot on the board that was visited be turned into a class instance of BoardSpot. I used a BFS data structure to traverse through the possible board spots from whatever spot I was currently "on".

Once a path was found that reached the desired end BoardSpot, I used a LinkedList to essentially trace back to my beginning BoardSpot, and finally printed out the list of moves back to the user.
