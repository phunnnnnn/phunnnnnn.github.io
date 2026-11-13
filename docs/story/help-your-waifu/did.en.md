Help Your Waifu was a duo project. My friend led game design and level design; I handled everything that runs: the code and the UI.

### How I worked

I built the game with **Claude Code** as an AI coding partner. My job was deciding what to build and how it should feel, breaking that into systems, testing every change in Roblox Studio (on PC and in the phone emulator), and sending back what was wrong until it was right. Calls like piggyback carrying for ladders, the stud-textured UI style and the admin panel layout came from me.

### What I built

- **Procedural obby:** a generator that snaps hand-built pieces together into 8 levels and rebuilds them every 5 minutes, keeping players safe during the rebuild.
- **Mystery waifus and carrying:** spawning, rarity rolls, picking up, carrying (piggyback climbing included), dropping and checkpoints.
- **Bases:** claiming a plot, the house, and waifus that roam the yard and earn.
- **Economy:** income, offline earnings, selling, level walls, the Luck Boost and the Legendary event.
- **Shop and Robux store:** lootboxes with a shared server stock, 4 game passes and 7 developer products, following Roblox's rules for paid random items.
- **Saving:** ProfileStore with session locking, a one-time import from the game's older save system, and Robux receipts that can never be granted twice.
- **Anti-cheat:** server checks on every pickup, purchase and carry.
- **Admin panel:** 38 commands, a save editor, and live events like cash rain and low gravity.
- **UI:** a shared UI kit (colors, buttons, icons, sounds) that every screen is built from, in a simulator style that also works on phones.

### Launch prep

Right before launch I went through the game looking for ways to break it. I closed a wall-skip exploit and a way for a second player to steal someone's waifu, and removed a leftover debug hotkey that let any player dump save data. Then I switched every Robux item to its live ID and made the shop respect Roblox's PolicyService.
