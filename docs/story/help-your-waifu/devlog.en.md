The game started earlier in Roblox Studio (the place dates from December 2025), with first versions of carrying, bases and saving. On October 22, 2026 I moved it into Rojo and Git, and this is that push: 45 commits in 6 days, from the first commit to launch.

### Timeline

- **Oct 22, the foundation:** Rojo and ProfileStore set up, the obby generator, the rarity table and spawners, income and offline earnings, the cash HUD, checkpoints and void respawn, then progression, the lootbox shop, Robux products, admin tools and kill bricks.
- **Oct 23, making it a game:** a UI design system for every screen, a fix for faked carries, sound effects, the new-player guide, shop and sell signs, conveyor belts, and a rewrite of bases: display stands out, waifus roaming around a red house in.
- **Oct 24, the simulator look:** stud textures, an icon pack, a HUD that scales, name tags and income pops, 4 side paths off the start, and a written set of UI rules.
- **Oct 27, launch day:** mystery waifus, the Magic Carpet, quick travel, the phone layout, live Robux IDs and store art; then two security fixes, removing dev leftovers, collision groups, reroll protection, PolicyService, no repeated pieces, a streaming fix, pickup prices, the admin panel remake and piggyback climbing.

### How the code is laid out

56 Luau files, about 9,200 lines not counting the ProfileStore library, synced into Studio with Rojo:

```
src/
  ReplicatedStorage/Shared/             9 modules: config tables + the UI kit
  ServerScriptService/                  server services: obby, spawning, cash,
    BaseService/                        shop, Robux, admin, checkpoints...
    CarryWaifuService/
    DataService/
  StarterPlayer/StarterPlayerScripts/   18 client scripts: HUD, shop, waifus,
                                        quick travel, sprint, admin menu
```

- **Server services own the game.** Each one creates its own remotes (buy a box, buy a level, place a waifu, take a waifu…) and checks every request.
- **Clients mostly read attributes.** Shared state like the next rebuild time, the Luck Boost, unlocked levels, passes and income lives in attributes, so the UI updates itself without extra remotes.
- **Tags connect the world to the code.** Checkpoints, kill bricks, level walls and waifu squares are found by CollectionService tags, so building levels in Studio needs no code changes.
- **Numbers live in tables.** Rarities, income, cosmetics and Robux items are plain config tables in `Shared`, easy to balance.

### Saving

ProfileStore loads and saves each player with session locking, so one save can't be open on two servers at once. Saves from the game's older DataStores are imported once. The game saves right after every purchase, and Robux receipts remember the last 50 purchase IDs, so a purchase is never granted twice.

### The obby generator

Hand-built pieces for each difficulty are kept on the server. The generator snaps them together connector to connector, puts a checkpoint on every joint, and branches a side path off each main piece that ends in a waifu square. Every footprint is checked for overlaps; a path that doesn't fit is cut short, each level gets 10 layout attempts, and the best one is kept. Pieces are dealt from a shuffled deck so none repeat on a lane, and a seed makes any layout reproducible.

### Anti-cheat

- Pickups only within 12 studs, only on unlocked levels, and never a waifu someone else holds.
- Getting home faster than a player can run (60 studs a second, plus a margin) is refused.
- Range checks on the shop (25 studs) and the level walls (40 studs), and a carried tool has to match what's really in hand.

### Admin panel

8 player slots with avatars, and tabs for the player, waifus, save, movement, world and events. 38 commands in all, a save editor where destructive actions need a second click, and "admin abuse" events like cash rain, Mythic rain and low gravity.

![The admin panel](assets/projects/help-your-waifu/admin-v2-player.jpg)
