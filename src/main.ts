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

function handleStep() {
  console.log("Step");
}

function handleRun() {
  console.log("Run");
}

function handleStop() {
  console.log("Stop");
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
