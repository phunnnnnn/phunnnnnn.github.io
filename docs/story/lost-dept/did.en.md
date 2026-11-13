Lost Dept is a solo project: the design and the code are mine, built with help from Claude Code.

### How I worked

Claude Code was my AI coding partner, and it wrote much of the code. I worked through it one decision at a time: question, options, my decision, a draft, then my approval, and nothing was committed without my say. The pixel art, sound effects and music come from generator scripts as well, all except the Vent Snail, which was drawn by hand.

### What I built

- **Pets:** 20 of them, each with its own skill, an AI that picks its next move ten times a second from a priority list, rarities and levels.
- **Waves and bosses:** a wave spawner that sets enemy HP from the damage your team is expected to deal, three kinds of enemies, a mini boss, and five bosses with their own attack cycles and intro cards.
- **The shop:** drag-and-drop items, pet cards with rarity, level and XP, and a paid refresh.
- **Game feel:** an event system that plays every sound and screen shake from one place, hit-stop on big impacts, water and light shaders, a pause menu, a tutorial and arrows to off-screen enemies.
- **Quality:** 15 automated tests and a bot that plays the game to balance it.

### Release

Lost Dept went out on itch.io on October 21, 2026, for the browser and Windows. The web build runs single-threaded, so it works on itch.io without special server headers.
