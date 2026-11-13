### Never trust the client

Most of my last fixes closed holes I only found by asking "how would I cheat this?":

- An exploiter could teleport past a level wall and grab a waifu in the half second before the wall check sent them back. Now the server checks the level is unlocked at the moment of pickup.
- A second player could take a waifu someone else was holding, because hiding the prompts used to switch every prompt back on.
- Teleporting home with a waifu is stopped by a speed check. It has a known limit (waiting a while before teleporting still works), and the real fix would be tracing the path. Knowing where your protection ends is part of the job.

### Engine details break real games

With StreamingEnabled on, the obby rebuild unfroze players the moment they were placed, before their device had loaded the new floor, so they fell straight through. The fix was to wait until the area had streamed in, plus a short settle time. I'd never have seen it in Studio alone.

### Measure, don't guess

- **Ladders:** the carry pose locked the player's legs, and only 1 of 6 test climbs reached the top. Switching to piggyback made it 5 of 5.
- **Repeated obby pieces:** I counted them (4 to 8 repeated main pieces in every build), changed the generator to deal pieces from a shuffled deck, and counted again: 0.

![Piggyback climbing a ladder while carrying a waifu](assets/projects/help-your-waifu/piggyback-climb-side.jpg)

### Clean up before launch

A debug hotkey left over from development let any player press K and fire a data-dump remote. It would have shipped if I hadn't gone through the game looking for leftovers.

### Follow the platform's rules

Lootboxes sold for Robux have rules on Roblox. The game asks PolicyService whether paid random items are allowed for each player and hides them where they aren't. If Roblox doesn't answer, it assumes they aren't.

### Small Studio gotchas

- BillboardGuis set to AlwaysOnTop didn't render at all.
- The phone emulator says the device has a keyboard, so "is this a phone?" checks need another way.
- Images only load in game if the game's owner owns them.

### Working with an AI coding partner

Clear rules beat repeated corrections: writing the UI rules down once (sizes, colors, what works on phones) made every new screen come out right. And the AI can't see the game, so playing every change myself was what actually found the bugs.
