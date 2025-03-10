# Instructions

## Step 1 - Initialize grid

The goal of this is to create the cells in the grid. The grid should have a div
for each cell, which is a child of the grid div element and with gridColumnStart
and gridRowStart set to position it correctly in the grid.

See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start and
https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start for
documentation on the styles needed.

To do this:

1. Have a `createCell` function which takes a `grid`, a `row` and a `col` and
   creates the cell / positions it.

APIs to use:

- `document.createElement('div');`
- `element.appendChild(child)`
- `element.style.gridColumnStart = ...`
- `element.style.gridRowStart = ...`

2. Call this from `setupGrid`

3. Test that the cells are in the right place by placing some debug text in
   each one.

APIs to use:

`element.innerHTML = ...`

## Step 2 - Design the game model

What data structure would be used to represent the game state?

How would you update the state each step?

How would you "run" the game?

## Step 3 - Implement the game model

Complete the unit `game.ts`
