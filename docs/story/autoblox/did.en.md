AutoBlox is a duo project: my partner works on unit design and balance, and I build the game.

### How I work

I design the architecture and build with Claude Code as an AI coding partner. For big changes I plan with one AI session, have another carry out the plan step by step, then review the result. One review of the new client renderer turned up eleven real defects before they shipped.

### What I built

- **Combat engine:** a server-side simulation that ticks 10 times a second, with hex pathfinding, armor and crit math, and attacks and abilities that wind up, hit and recover, so a stun during a wind-up cancels it.
- **Client rendering:** the server streams each fight to its player, and that player's client spawns and animates the units.
- **Rounds:** planning, combat, a short victory break and the result, across monster rounds, PvP rounds and carousels.
- **Economy and shop:** gold, interest, streaks, rerolls, XP and levels, star upgrades and the shared unit pool.
- **Traits, items and augments:** trait bonuses applied in combat, item components that combine, item passives, and augments.
- **Lobby and rooms:** rooms with codes and Quick Play, kept in sync across servers, then teleported into reserved match servers.
- **UI:** the shop, the trait panel, unit info with a stat breakdown and skill tooltips, the item inventory, the round timeline, a health leaderboard, a free spectator camera and an admin menu.
