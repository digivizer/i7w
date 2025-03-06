import {
  createGameGrid,
  GAME_HEIGHT,
  GAME_WIDTH,
  randomizeGameGrid,
  stepGameGrid,
} from "./game";
import { setupGrid, updateCell } from "./grid";
import "./style.css";

// More complicated ruleset:
// * let the weighted value of a neighbour be 0 if it is dead, and
//   1 / (2^x distance + 2^y distance) if it is alive.
// * cells stay alive if they have a weited sum of neighbours of at least 4
//   but no more than 7.
// * dead cells become alive if they have a weighted sum of neighbours of
//   less than 3.

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Conway's game of life - more complicated version</h1>
    <p>This version has more complicated rules. The rules are as follows:</p>
    <ul>
      <li>Neighbour cells have a weighted value of 0 if they are dead, and
      1 / (2^x distance * 2^y distance) if they are alive.</li>
      <li>The weighted neighbour sum of a cell is the sum of the weighted
      values of its neighbours.</li>
      <li>Any live cell with a weighted neighbour sum of between 4 and 6 lives
      on to the next generation, otherwise they die.</li>
      <li>Any dead cell with a weighted neighour sum of less than 2 becomes
      alive in the next generation.</li>
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
