import GameArea from "./GameArea";
import $ from "jquery";

export default class GameBoard {
  constructor() {
    this.symbols = ["😂", "😁", "🥳", "😀", "😋", "🥵", "🥶", "🤩"];
    this.gameArea = new GameArea(this.symbols);
    this.storage = window.localStorage;
    this.inGame = false;
    this.seconds = 0;
    this.matchCount = 0;
    this.highScore = this.storage.getItem("highScore")
      ? this.storage.getItem("highScore")
      : 0;
    this.matchedSymbolsArray = [];
    this.anchorObjMatchingInProgress;
    this.timex;
  }

  init() {
    this.showListOfSymbols();
    this.initializeGameArea();
    this.bindAnchorOnclick();
    let currentObj = this;

    $("#highScore").html(this.highScore);
    $("#gameStopButton").hide();

    $("#gameStartButton").on("click", () => {
      currentObj.startGame();
      currentObj.startGameTimer();
      $("#gameStartButton").hide();
      $("#gameStopButton").show();
    });
    $("#gameStopButton").on("click", () => {
      currentObj.stopGame();
    });

    $(".disabled").click(function (e) {
      e.preventDefault();
    });
  }

  initializeGameArea() {
    this.gameArea.init();
  }

  startGame() {
    $("a").children().css("background-color", "#0c3057");
    $("a").children().css("height", "100px");
    $("a").children().children().hide();
  }

  async startGameTimer() {
    this.startTimmer(this.seconds);
  }

  startTimmer(seconds) {
    let currentObj = this;
    this.timex = setTimeout(function () {
      seconds++;
      $("#elapsedTime").html(seconds);
      currentObj.seconds = seconds;
      currentObj.startTimmer(currentObj.seconds);
    }, 1000);
  }

  stopGame(stopGameFlag) {
    $("#gameStartButton").show();
    $("#gameStopButton").hide();
    this.updateHighScore();

    if (stopGameFlag == "GG")
      alert(`Good Game. You took  ${this.seconds} seconds`);
    else alert(`Well Tried! Come Back Later. ${this.seconds}`);

    clearTimeout(this.timex);
    this.seconds = 0;
    $("#elapsedTime").html(this.seconds);
  }

  updateHighScore() {
    let score = this.matchCount + 1000 / this.seconds;
    console.log(this.seconds);
    console.log(score);
    console.log(this.highScore);
    if (score > this.highScore) {
      $("#highScore").html(score);
      this.highScore = score;
      this.storage.setItem("highScore", this.highScore);
    }
  }

  bindAnchorOnclick() {
    // Saving the current object reference to use it in the onclick callback of the anchor element....
    var currentGameBoardObj = this;
    $(".gameCard").click((event) => {
      currentGameBoardObj.gameAreaTryMatching(event.currentTarget);
    });
  }

  gameAreaTryMatching(anchorObj) {
    var symbol = $(anchorObj).children().children().text();
    var matchResult = this.gameArea.tryMatching(anchorObj);
    // Update match count and store the symbol if match is found....
    if (matchResult) {
      this.updateMatchCount();
      this.updateMatchedSymbolsArray(symbol);
    }
  }

  showListOfSymbols() {
    const listOfSymbols = document.getElementById("listOfSymbols");
    this.symbols.forEach((symbol) => {
      listOfSymbols.appendChild(this.createSymbolCard(symbol));
    });
  }

  createSymbolCard(symbol) {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = symbol;
    card.appendChild(cardBody);
    return card;
  }

  updateMatchCount() {
    $("#matchCount").html(++this.matchCount);
  }

  updateMatchedSymbolsArray(matchedSymbol) {
    this.matchedSymbolsArray.push(matchedSymbol);
    var currentObj = this;

    if (this.matchedSymbolsArray.length == this.symbols.length)
      setTimeout(function () {
        currentObj.stopGame("GG");
      }, 1000);
  }
}
