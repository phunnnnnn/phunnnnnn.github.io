Stawberry was built in 10 days in August 2026 and synced into Roblox Studio with Rojo. The map lives in the place file in the repo, and a pre-commit hook keeps it in every commit.

### Timeline

- **Aug 5:** the Rojo project, the map in the repo, and the whole seed-to-sale loop: the belt, planting, harvesting, the fruit price card, the seller and the leaderboard.
- **Aug 6:** 18 typed seeds bought off a single-file belt; fruit refined into pies at player-placed factories; factories chained into a five-tier refining ladder; NPC workers who farm, refine and sell, then hired from a rotating pool instead of handed out free.
- **Aug 7:** levelled factories won from a per-player generator.
- **Aug 14:** levels for the seed belt, and a shop to buy them.

### How the code is laid out

```
src/
  shared/   ReplicatedStorage.Shared      config + shared rules: seeds, plants,
                                          farm placement, factory grid, models
  server/   ServerScriptService.Server    services: inventory, farming, factories,
                                          generators, upgrades, selling, workers
  client/   StarterPlayerScripts.Client   tool handling, previews, price card,
                                          sell dialogue, upgrade shop, leaderboard
```

- **Services start in order.** Inventory first, because the others award into it; workers last, because they need the farm, the factories and the seller to exist.
- **Workers run fully on the server.** Hiring and dismissing are plain proximity prompts, so there's no remote to exploit. Each worker walks a loop: harvest a ripe fruit, take it to a factory, collect the product, sell it, and the coins land on its owner.
- **Workers are real R6 rigs.** They're built part by part instead of from an avatar description, so hiring never waits on Roblox's avatar service, and their walk cycle follows the distance they travel, so their legs stop when they stop.
- **Upgrades are data.** A generator track is a name, a price list and three functions; adding one is one more entry in a table.
