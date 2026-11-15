### Never trust the client

- An exploiter could skip a level wall and grab a waifu before being sent back
- Now the server checks the level is unlocked at the moment of pickup
- A second player could take a waifu someone else was holding
- The speed check has a known limit; knowing it is part of the job

### Engine details break real games

- With StreamingEnabled on, players fell through the floor after an obby rebuild
- They were unfrozen before their device had loaded the new floor
- Now the game waits for the area to stream in, then settles
- I'd never have seen it in Studio alone

### Measure, don't guess

![Piggyback climbing a ladder while carrying a waifu](assets/projects/help-your-waifu/piggyback-climb-side.jpg)

- The carry pose locked the legs: only 1 of 6 test climbs reached the top
- Switching to piggyback made it 5 of 5

### New tools I learned

- ProfileStore: a Roblox library that saves player data safely
- MCP: a way to connect the AI to tools like Roblox Studio
- Claude skills: written instructions the AI can reuse for a task
