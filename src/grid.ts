function createCell(x: number, y: number, grid: HTMLDivElement) {
  const cell = document.createElement("div");
  cell.id = `cell-${x}-${y}`;
  cell.style.gridColumnStart = `${x + 1}`;
  cell.style.gridRowStart = `${y + 1}`;
  grid.appendChild(cell);
}

export function setupGrid(grid: HTMLDivElement, width: number, height: number) {
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${height}, 1fr)`;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      createCell(x, y, grid);
    }
  }
}

export function updateCell(x: number, y: number, alive: boolean) {
  const cell = document.querySelector<HTMLDivElement>(`#cell-${x}-${y}`)!;
  cell.style.backgroundColor = alive ? "black" : "white";
}
