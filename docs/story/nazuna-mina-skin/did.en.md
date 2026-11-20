### Fitting her to Mina's skeleton

![Mina and Nazuna side by side in the same pose](assets/projects/nazuna-mina-skin/compare.jpg)

- Turned and scaled the model until her hips matched Mina's within 0.1 units
- Copied Mina's bone weights onto Nazuna, then removed skirt and purse weights that would have flapped in the game
- Kept every vertex to 4 bones or fewer, the export limit

### The hands

![Nazuna's hand on Mina's finger bones, with her black nails](assets/projects/nazuna-mina-skin/hands.jpg)

- Nazuna's fingers were 1.9× longer than Mina's finger bones, so they bent in the wrong place
- Swapped in Mina's own hands, moved Nazuna's black nails onto them, and joined the wrist into one surface
- Deleted 7,747 hidden skin faces so her knees stopped poking through the boots

### Matching the game's look

![Nazuna's face after the colour pass](assets/projects/nazuna-mina-skin/face.jpg)

- Changed brightness, contrast and saturation on 15 materials, with no repainting
- Rendered both models under the same light and compared pixels: body skin 10 % brighter than Mina, face within 1 %

### Hero images

![The hero portraits at the game's sizes](assets/projects/nazuna-mina-skin/portraits.jpg)

- 6 portraits rendered from the mod model at the game's exact sizes, plus a hero-select background
- Written straight into copies of Mina's game image files, so no image compile was needed

### Purple bats

![Mina's red effect colours on top, the new purple and pink below](assets/projects/nazuna-mina-skin/bats.jpg)

- 73 ability effects and 4 bat materials recoloured from red to purple and pink; the ult's blood splatter stays red
- 13 effects used a newer format than the tools support; I relabelled them and checked the compiled sizes matched the originals within 0.5 %
