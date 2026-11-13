### One set of rules for client and server

The planting preview, the factory grid preview and the upgrade shop all read the same shared code and config the server uses. So the preview can never promise a spot the server will refuse, and the shop can never show odds the server won't roll.

### Award first, destroy second

Every fruit and product takes a backpack slot, so giving an item can partly fail. Harvesting leaves the fruit on the plant, and a factory leaves the pie in its slot, until the player has really received it. Never the other way round.

### Money moves in exactly two places

Coins only change through one add function and one spend function. Every purchase checks first, spends second, commits third and refunds if the commit fails. Buying a seed checks for backpack room before charging, because paying for a seed with nowhere to put it is the one outcome a player can't recover from.

### Don't trust names

With 18 seed species, a tool's name is only a label. A check by name would find one species out of eighteen and silently miss the rest, so seeds are recognised by an attribute instead.

### One owner for tricky bookkeeping

Tools move between the backpack and the character when equipped and get replaced on respawn. Re-implementing that tracking in each feature cost hours of debugging, so one module now owns it and every tool action registers with it.

### Keep cosmetics from taking the game down

A loading error in a purely cosmetic client module once killed the whole client script and silently disabled planting. Now each cosmetic module starts on its own, behind its own error guard.
