49 commits, from a first prototype in May 2026 to release on October 21.

### Timeline

- **May 29:** a kelp-and-fish prototype, about 580 lines.
- **Sep 28 – Oct 5:** waves and the shop, the Shark, pet AI and the first 17 pets, four more bosses, the balance bot, the item shop, five-move boss attack cycles and the game-over screen.
- **Oct 20:** the event bus, sound, music, pixel art and the web export.
- **Oct 21:** pet art, the pause menu, the tutorial, game-feel effects, sweep harvesting, attack telegraphs, rarities, boss intro cards, the itch.io page and a video pipeline. Released the same day.

### How it's built

```
scenes/    12 scenes; KelpField is the game
scripts/   37 scripts: pets, waves, enemies, bosses, shop, tokens, UI
tests/     15 headless tests + the balance bot
tools/     asset generators, screenshot and video rigs
shaders/   water, sway, vignette, light rays
```

- **Five autoloads:** events, audio, game feel (screen shake and hit-stop), screen fades and cursors.
- **One event bus** with 10 signals, like an enemy dying or a wave starting. Audio plays each sound at most once every 0.08 seconds, so 20 hits in one frame make one sound, and overlapping screen shakes keep only the strongest.
- **Data in code:** pets, tokens, bosses and items are tables in their scripts, with tuning values exposed in the editor.
- **Tests** are headless scenes that check the rules and print `TEST PASS`, about 226 checks in all.
- **The balance bot** plays 5 rounds with an invincible player: it buys every pet it can afford, collects real tokens, sweeps the nearest kelp and clicks the boss, then prints each wave's length and the team's damage per second against each boss. A human-like version of it records gameplay video.

About 7,600 lines of GDScript across the game, the tests and the tools.
