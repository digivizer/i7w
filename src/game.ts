export const GAME_WIDTH = 200;
export const GAME_HEIGHT = 200;

type GameRow = boolean[];
export type GameGrid = GameRow[];

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

function countNeighbors(grid: GameGrid, x: number, y: number) {
  let count = 0;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) {
        continue;
      }
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= GAME_WIDTH || ny < 0 || ny >= GAME_HEIGHT) {
        continue;
      }
      if (grid[nx][ny]) {
        count++;
      }
    }
  }
  return count;
}

export function stepGameGrid(grid: GameGrid) {
  const newGrid = createGameGrid();
  for (let x = 0; x < GAME_WIDTH; x++) {
    for (let y = 0; y < GAME_HEIGHT; y++) {
      const alive = grid[x][y];
      const neighbors = countNeighbors(grid, x, y);
      if (alive) {
        newGrid[x][y] = neighbors === 2 || neighbors === 3;
      } else {
        newGrid[x][y] = neighbors === 3;
      }
    }
  }
  return newGrid;
}
