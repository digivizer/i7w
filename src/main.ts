import {
  createGameGrid,
  GAME_HEIGHT,
  GAME_WIDTH,
  randomizeGameGrid,
  stepGameGrid,
} from "./game";
import { setupGrid, updateCell } from "./grid";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Conway's game of life</h1>
    <p>Conway came up with this cool "game" which is kind of a simulation
    of very very simple life. In the game, there is a grid of cells, each
    of which can be either alive or dead. The game progresses in turns,
    and in each turn, the state of each cell in the grid is updated
    according to a set of rules. The rules are as follows:</p>
    <ul>
      <li>Any live cell with fewer than two live neighbours dies, as if by
      underpopulation.</li>
      <li>Any live cell with two or three live neighbours lives on to the next
      generation.</li>
      <li>Any live cell with more than three live neighbours dies, as if by
      overpopulation.</li>
      <li>Any dead cell with exactly three live neighbours becomes a live cell,
      as if by reproduction.</li>
    </ul>
    <p>Let's implement it!</p>
    <div>
      <div id="grid" class="gameGrid"></div>
      <button id="step" type="button">Step</button>
      <button id="run" type="button">Run</button>
      <button id="stop" type="button">Stop</button>
    </div>
  </div>
`;

function updateGridDisplay() {
  gameGrid.forEach((row, x) => {
    row.forEach((alive, y) => {
      updateCell(x, y, alive);
    });
  });
}

function handleStep() {
  gameGrid = stepGameGrid(gameGrid);
  updateGridDisplay();
}

const STEP_INTERVAL = 200;
let timeoutId = -1;

function updateButtonStates() {
  const stepButton = document.querySelector<HTMLButtonElement>("#step")!;
  const runButton = document.querySelector<HTMLButtonElement>("#run")!;
  const stopButton = document.querySelector<HTMLButtonElement>("#stop")!;
  stepButton.disabled = timeoutId !== -1;
  runButton.disabled = timeoutId !== -1;
  stopButton.disabled = timeoutId === -1;
}

function handleRunStep() {
  handleStep();
  if (timeoutId !== -1) {
    timeoutId = window.setTimeout(handleRunStep, STEP_INTERVAL);
  }
}

function handleRun() {
  if (timeoutId !== -1) {
    return;
  }
  timeoutId = window.setTimeout(handleRunStep, STEP_INTERVAL);
  updateButtonStates();
}

function handleStop() {
  if (timeoutId === -1) {
    return;
  }
  window.clearTimeout(timeoutId);
  timeoutId = -1;
  updateButtonStates();
}

document
  .querySelector<HTMLButtonElement>("#step")!
  .addEventListener("click", handleStep);

document
  .querySelector<HTMLButtonElement>("#run")!
  .addEventListener("click", handleRun);

document
  .querySelector<HTMLButtonElement>("#stop")!
  .addEventListener("click", handleStop);

const grid = document.querySelector<HTMLDivElement>("#grid")!;
setupGrid(grid, GAME_WIDTH, GAME_HEIGHT);

let gameGrid = createGameGrid();
randomizeGameGrid(gameGrid);
updateGridDisplay();
updateButtonStates();
