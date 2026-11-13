### Keep your measuring tools up to date

The balance bot plays the game and reports how long waves and boss fights last, and those numbers set each boss's HP. But after harvesting changed from a scythe to clicking, the bot never clicked, so its old numbers meant nothing. Once fixed and re-measured, boss fights came out at 60 to 66 seconds.

### Fair attacks are readable attacks

The rule became: faster moves must be warned first and locked to a line. A test checks that every homing boss move is slower than the player, so no attack is impossible to dodge.

### Tests must never touch real data

A test run that hung once deleted the real save file. Now tests write to their own save file.

### Timing bugs hide in tests too

One test failed about 2 runs out of 3, because a game-time timer could fire before a real-time cooldown had passed. The fix was to control the clock inside the test.

### Iterate on the core feel

Harvesting went through four versions: a key press, an automatic scythe, clicking, and finally sweeping. Boss fights went from about 5 minutes to 150 seconds to 75 seconds. Even the pets were re-themed: a fire bender, a golden bee and a healing fairy became a vent snail, an archerfish and a cleaner wrasse, to fit the ocean.

### Engine details

- Firing an ability right inside a physics callback caused errors; it has to wait until the end of the frame.
- Paused games need care: audio froze while paused, and a hurt flash stuck on screen after a killing blow. The test for that bug was written to fail first.
