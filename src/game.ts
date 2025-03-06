export const GAME_WIDTH = 20;
export const GAME_HEIGHT = 20;

type GameRow = boolean[];
export type GameGrid = GameRow[];

// More complicated ruleset:
// * let the weighted value of a neighbour be 0 if it is dead, and
//   1 / (2^x distance + 2^y distance) if it is alive.
// * cells stay alive if they have a weited sum of neighbours of at least 4
//   but no more than 7.
// * dead cells become alive if they have a weighted sum of neighbours of
//   less than 3.

export function createGameGrid(): GameGrid {
  const result: GameGrid = [];
  for (let x = 0; x < GAME_WIDTH; x++) {
    const row: GameRow = [];
    for (let y = 0; y < GAME_HEIGHT; y++) {
      row.push(false);
    }
    result.push(row);
  }
  return result;
}

export function randomizeGameGrid(grid: GameGrid) {
  for (let x = 0; x < GAME_WIDTH; x++) {
    for (let y = 0; y < GAME_HEIGHT; y++) {
      grid[x][y] = Math.random() > 0.5;
    }
  }
}

function calculateWeightedSum(grid: GameGrid, x: number, y: number) {
  let sum = 0;
  for (let nx = 0; nx <= GAME_WIDTH; nx++) {
    for (let ny = 0; ny <= GAME_HEIGHT; ny++) {
      if (x === nx && y === ny) {
        continue;
      }
      if (nx < 0 || nx >= GAME_WIDTH || ny < 0 || ny >= GAME_HEIGHT) {
        continue;
      }
      if (!grid[nx][ny]) {
        continue;
      }
      const dx = Math.abs(x - nx);
      const dy = Math.abs(y - ny);
      sum += 1 / (2 ** dx + 2 ** dy);
    }
  }
  return sum;
}

export function stepGameGrid(grid: GameGrid) {
  const newGrid = createGameGrid();
  for (let x = 0; x < GAME_WIDTH; x++) {
    for (let y = 0; y < GAME_HEIGHT; y++) {
      const alive = grid[x][y];
      const weightedSum = calculateWeightedSum(grid, x, y);
      if (alive) {
        newGrid[x][y] = weightedSum >= 4 && weightedSum <= 7;
      } else {
        newGrid[x][y] = weightedSum < 3;
      }
    }
  }
  return newGrid;
}
