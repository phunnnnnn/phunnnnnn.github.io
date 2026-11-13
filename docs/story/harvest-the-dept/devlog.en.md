### NSC, the first version (March–June 2025)

- **Mar 30:** the project starts.
- **Apr 2:** the base code.
- **May 8:** water drops.
- **Jun 7–8:** a pop-up, the garden grid, and picking up pots.
- **Jun 11:** version 1.0.
- **Jun 24:** a new structure.

### Harvest the Dept (July–September 2025)

- **Jul 29:** a fresh project for the IS subject.
- **Sep 9:** v0.1 and v0.11: seed bags, pots that grow a sunflower through its stages, the day counter and the Next Day button.

### How it's built

- **Global scripts:** one holds the item data (the pot, seed and plant pictures, including every growth stage), one holds shared state (what's being dragged, the selection box, the current day), and one holds helper functions.
- **Drag and select:** seed bags are dragged with the mouse, and a selection box tells each pot when a drag is over it.
- **Days:** pressing Next Day fires an event every planted pot listens to, so each one grows a stage on its own.
- **Debug view:** press P to see every item's hit area, which turns green on the drop target.
