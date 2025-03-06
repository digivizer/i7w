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
