### How a question is made

![The question generator in GDScript, one rule per difficulty](assets/projects/math-quiz/code-1.webp)

- Each difficulty picks its two numbers with its own rule
- Normal never needs carrying; Hard always does
- The same question never comes up twice in a row

### Checking the answer

![The code that checks an answer and moves on](assets/projects/math-quiz/code-2.webp)

- Right or wrong shows for 0.4 seconds
- After ten answers, the end screen, then back to the menu
