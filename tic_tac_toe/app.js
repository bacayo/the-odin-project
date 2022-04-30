const elements = document.querySelectorAll(".game-board");
let checkGameState = true;
// Empty game board
let gameBoard = [null, null, null, null, null, null, null, null, null];
let xArr = [];
let oArr = [];
let WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Asset for X
const assetX = (cell) => {
  const imgO = "assets/x.png";

  const img = document.createElement("img");
  img.src = imgO;
  cell.appendChild(img);
};
// Asset for y
const assetO = (cell) => {
  const imgO = "assets/o.png";

  const img = document.createElement("img");
  img.src = imgO;
  cell.appendChild(img);
};

const swapTurns = () => {
  return (checkGameState = !checkGameState);
};

const checkWin = () => {
  //TODO: Check win condition
  //TODO: Implement below code;

  //   var array = [1, 3],
  //     prizes = [[1, 3], [1, 4]],
  //     includes = prizes.some(a => array.every((v, i) => v === a[i]));

  // console.log(includes);

  WINNING_COMBINATIONS.map((arr) => {});
};

const handleClick = (e) => {
  const cell = e.target;
  //converting nodeList to array to get index of clicked element;
  let nodeArr = Array.prototype.slice.call(elements);

  // swapTurns() ? assetO(cell) : assetX(cell);
  if (swapTurns()) {
    assetO(cell);
    oArr.push(nodeArr.indexOf(cell));
  } else {
    assetX(cell);
    xArr.push(nodeArr.indexOf(cell));
  }
  checkWin();
};

const startGame = () => {
  elements.forEach((element) => {
    element.addEventListener("click", handleClick, { once: true });
  });
};

startGame();
