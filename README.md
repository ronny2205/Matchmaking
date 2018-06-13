# Matchmaker Service

The goal of this backend service is to match users together to play games according to their level of skill (MMR) and experience. This is intended to be one service within a larger gaming platform.

*The service takes a player id and finds the id of a matched player, based on the following assumptions:*

1. The players' skill level (MMR) should be within a reasonable distance from each other. For this prototype, I defined that the REASONABLE_MMR_DIFFERENCE = 200. In a real scenario, the actual preferred difference would likely depend on the specific gaming platform and its parameters and players (e.g. range of MMR among players across the platform).

2. In addition, the players' experience level should be within a reasonable distance from each other. Experience is defined as total number of games played. For this prototype, I defined that the REASONABLE_EXPERIENCE_DIFFERENCE = 10. Again, this may depend on the broader context of the gaming platform (e.g. the point at which the uncertainty factor becomes more stable).

*About the matching approach (algorithm):*

1. The player data is stored as an array of players, sorted by MMR. I selected a NoSQL approach in order to optimize the speed of matching by sorting the data in advance.

2. The service takes a player id, and finds the player with the closest MMR by looking at the players immediately above and below the specified player.

3. If the found player also has a REASONABLE_EXPERIENCE_DIFFERENCE, return that found player's id as the match.

4. If not, move to the player with the next closest MMR, and repeat as long as we do not exceed the REASONABLE_MMR_DIFFERENCE.

5. If we exceed the REASONABLE_MMR_DIFFERENCE, return the id of the player with the closest experience from the group of all the found players that were within the REASONABLE_MMR_DIFFERENCE.

6. If there are no players within the REASONABLE_MMR_DIFFERENCE, find the player with the closest MMR to the given player.

*Notes on the project:*
* For simplicity while building this prototype, I used in-memory storage instead of a database.
* The protoype is intended only for 1v1 normal games.
* The project was created with node.js + npm, and uses mocha for tests.

*To run the tests:*
1. Clone the repo
2. Run the server: `npm run start`
3. Run the tests: `npm test`
