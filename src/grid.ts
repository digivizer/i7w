export function setupGrid(grid: HTMLDivElement, width: number, height: number) {
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${height}, 1fr)`;
}
