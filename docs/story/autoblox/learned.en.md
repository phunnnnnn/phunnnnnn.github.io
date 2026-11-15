### What the network does to data

- Number keys with gaps arrive as strings after Roblox sends them
- So lookups by number failed
- Deaths never played and dead units kept dancing
- Sending IDs in a shape that survives the trip fixed it

### Don't drop the last frame

- Fights stream at about 10 frames a second
- A kill one tick before the end was lost, with its loot
- Now the server sends every leftover frame when a fight ends

### Refactor before it hurts

- By July, the fight playback code was 1,626 lines
- The combat engine had grown to 1,253 lines
- I spent two days splitting it up before building more

### Every choice has a cost

- Fight rendering moved to each player's own client
- The server no longer builds any fight bodies
- But watching other players' fights stopped being free
