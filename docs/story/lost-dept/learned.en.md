### Fair attacks are readable

![The Kraken's attacks marked as lines](assets/projects/lost-dept/kraken.jpg)

- Faster moves must be warned first and locked to a line
- A test checks every homing boss move is slower than the player
- So no attack is impossible to dodge

### Keep your tools up to date

![Pets fighting the Storm Eel](assets/projects/lost-dept/eel.jpg)

- A bot plays the game and times each wave and boss fight
- Those times set each boss's HP
- When harvesting switched to clicking, the bot never clicked
- Fixed and re-measured, boss fights took 60 to 66 seconds

### Iterate on the core feel

- Harvesting went from a key press to a scythe, clicking, then sweeping
- Boss fights went from about 5 minutes to 75 seconds
- A fire bender became a vent snail to fit the ocean

### Tests need care too

- A hung test run once deleted the real save file
- Now tests write to their own save file
- One test failed about 2 runs out of 3 from a timing bug
- Controlling the clock inside the test fixed it
