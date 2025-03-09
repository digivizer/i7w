// To get started, create a function to create a cell element in the grid.
// You should use functions like `document.createElement` and
// `element.appendChild` to create elements / add them as children, and
// `element.style.fooStyle` accessors to set the style of the created element.
//
// See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start and
// https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end for
// documentation on the styles needed.

export function setupGrid(grid: HTMLDivElement, width: number, height: number) {
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${height}, 1fr)`;
}
