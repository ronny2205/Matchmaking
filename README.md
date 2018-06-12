# Matchmaking
Matching users together to play games according to level of skill(MMR) and experience.
The protoype is built only for 1 X 1 normal games.

This is a backend service that takes a player id and finds a match based on the following assumptions:
1. Match players within reasonable level of skill. 
   For the prototype, I assumed that the REASONABLE_MMR_DIFFERENCE = 200, but that would be changed according to the gaming platform
2. Withink that MMR range select the player with closest experience difference, but only if the experience is not more than 
   a REASONABLE_EXPERIENCE_DIFFERENC (which I chose to be 10 games for the prototype purposes). 
3. If no player in the REASONABLE_MMR_DIFFERENCE has close enough experience, find the player with the closest experience
among the players in the REASONABLE_MMR_DIFFERENCE.    
4. If there are no players within the REASONABLE_MMR_DIFFERENCE, find the player with the closest MMR.

To build the prototype I used an in memory storage - sorted array of objects.

The project was created with node.js + npm, and uses mocha for tests.
To run the tests:
Clone the repo
Run the server: npm run start
Run the tests: npm test
