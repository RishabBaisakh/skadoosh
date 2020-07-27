export default class GameBoard {
  constructor(gameArea) {
    this.gameArea = gameArea;
  }

  initializeGameArea() {
    this.gameArea.init();
  }

  startGame() {}
}

// function GameBoard() {
//   var symbols;
//   var inGame;
//   var gameAreaObject;
//   var timer;
//   var timerLabel;
//   var matchCountLabel;
//   var matchCount;
//   var highScoreLabel;

//   /* Methods... */
//   // Review....
//   // Still don't know how to use how to control the start and stop game methods....
//   function StartGame() {}
//   function StopGame() {}
// }

// GameBoard.prototype.Init = function () {
//   console.log("Inside GameBoard() Init !");

//   this.symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];
//   this.inGame = false;
//   this.gameAreaObject = new GameArea(this.symbols);
//   this.timer = new Timer();
//   this.timerLabel = "Time Elapsed";
//   this.matchCountLabel = "Match Count";
//   this.highScoreLabel = "High Score";

//   this.ShowListOfSymbols();
//   // this.RenderGameBoard();
// };

// GameBoard.prototype.ShowListOfSymbols = function () {
//   console.log(this.symbols);

//   let symbolsArrayDivTemplate = "";

//   this.symbols.forEach((symbol) => {
//     symbolsArrayDivTemplate += `<div class="card"><div class="card-body">${symbol}</div></div>`;
//   });

//   document.getElementById("listOfSymbols").innerHTML = symbolsArrayDivTemplate;
// };

// GameBoard.prototype.UpdateElapsedTime = function () {
//   document.getElementById(
//     "elapsedTime"
//   ).innerHTML = this.timer.GetElaspedTime(); // Review....!
// };

// // Review....!
// // Don't know yet when to start the timer....?

// GameBoard.prototype.ResetTimer = function () {
//   this.time = new Timer();
// };

// GameBoard.prototype.UpdateHighScore = function () {
//   if (this.gameAreaObject.GetMatchedCount())
//     document.getElementById(
//       "highScore"
//     ).innerHTML = this.gameAreaObject.GetMatchedCount();
//   else {
//     // Do something,or just leave. Don't know yet!s
//   }
// };

// GameBoard.prototype.UpdateMatchedCount = function () {
//   // Thinking about this, too many ways....
// };

// GameBoard.prototype.RenderGameBoard = function () {
//   console.log("Game Rendering...");

//   if (this.inGame) {
//     // Render the button as stop game....!
//   } else {
//     // Render the button as start game....!
//   }
// };

// GameBoard.prototype.StartGame = function () {
//   if (!this.inGame) this.inGame = true;
// };

// GameBoard.prototype.StopGame = function () {
//   if (this.inGame) this.inGame = false;
// };
