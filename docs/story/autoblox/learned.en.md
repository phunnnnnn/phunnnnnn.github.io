### What the network does to your data

Roblox sends a table differently when its number keys have gaps: the keys arrive as strings, so lookups by number fail. Deaths never played and dead units kept dancing until the IDs were sent in a shape that survives the trip.

### Don't drop the last frame

Fights stream at about 10 frames a second, and a kill that landed one tick before the end was lost, along with the loot it dropped. Now, when a fight ends, the server sends every frame that hasn't gone out yet.

### Each side has its own copy

Shared modules run separately on the server and on each client, so setting the game mode in one didn't reach the other. The active mode is now published as an attribute everyone can read.

### Engine features interact

- Collision groups also stop `Touched` events, so picking up carousel prizes uses distance checks instead.
- Dance animations made for R15 characters won't play on R6 rigs.
- A leaderboard bound itself to a copy of its UI that was destroyed later, and stayed blank.

### Refactor before it hurts

By July some files had grown huge (the fight playback code was 1,626 lines, the combat engine 1,253), so I stopped and split the code into smaller pieces over two days before building more on top.

### Every choice has a cost

Moving fight rendering to each player's own client means the server no longer builds any fight bodies, but it also took away watching other players' fights for free.
