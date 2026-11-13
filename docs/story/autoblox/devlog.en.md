114 commits between June 2 and October 19, 2026, most of them in July.

### Timeline

- **Jun 2:** the hex board, the camera and unit placement; gold and rerolls.
- **Jun 6–13:** the shop pool, multiple bases, and the round and combat system in six milestones.
- **Jun 15–19:** abilities, the player avatar, items and combining, traits applied in combat.
- **Jun 26–Jul 6:** monster rounds, augments, loot, summons and the unit info panel.
- **Jul 11–17:** the first full roster of units, the victory dance, the break phase and faster combat.
- **Jul 18–19:** a big architecture refactor, in six phases and about 50 commits.
- **Jul 20–24:** skills up to the 3-cost units, the first 4-cost skills, and item passives.
- **Jul 26–28:** real-time combat, ability timing, and moving fight rendering to the clients.
- **Jul 30–Aug 1:** the code split by place, the lobby and rooms, PvP rounds, the leaderboard and the carousel.
- **Oct 18–19:** a blocky UI style, the spectator camera, fixes for deaths, dances and projectiles, and an update log (versions 0.0.1 to 0.7.1).

### How it's laid out

```
src/
  lobby/    rooms, codes, cross-server messages, launching matches + the room UI
  game/     the match: combat engine, rounds, economy, carousel, loot, summons,
            unit inventory, augments + the client renderer and UI
  shared/   unit, trait and item data, combat rendering, config, network, rooms
```

- **Two places, one game.** The lobby and the match are separate places with their own Rojo projects.
- **The combat engine** ticks every 0.1 seconds and finds paths on the hex grid each tick. One routine runs both instant fights and live ones, so the rules live in one place.
- **Streaming fights.** The server sends a setup message, then about 10 frames a second, then the end, only to the player in that fight.
- **Rooms across servers.** Room records live in MemoryStore; MessagingService only says "something changed", and each server re-reads the record. Launching reserves a match server and teleports the party, retrying once and rolling back if it fails.
- **Strict types.** 107 of the 111 files use Luau's strict type checking.

### What's next

Skills for the remaining 4- and 5-cost units, stats for every cost, the rest of the traits, augments offered in normal play instead of only through the admin menu, saving, and a real multiplayer test with teleports.
