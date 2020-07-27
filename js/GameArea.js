import $ from "jquery";

export default class GameArea {
  constructor(symbols) {
    this.symbols = symbols;
    this.matchingInProgress = false;
    this.symbolForMatching;
    this.anchorObjMatchingInProgress;
    this.matchCount = 0;

    this.createGameCard = this.createGameCard.bind(this);
  }

  init() {
    this.generateGameBoxes();
  }

  generateGameBoxes() {
    let combinedSymbolsArray = this.symbols.concat(this.symbols);
    combinedSymbolsArray = this.shuffle(combinedSymbolsArray);

    const gameArea = document.getElementById("gameArea");

    combinedSymbolsArray.forEach((item) => {
      gameArea.appendChild(this.createGameCard(item));
    });
  }

  createGameCard(symbol) {
    const anchor = document.createElement("a");
    anchor.classList.add("col-3");
    anchor.classList.add("gameCard");
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("m-4");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.classList.add("text-center");
    cardBody.innerHTML = symbol;
    card.appendChild(cardBody);
    anchor.appendChild(card);
    return anchor;
  }

  tryMatching(anchorObj) {
    var symbol = $(anchorObj).children().children().text();
    $(anchorObj).children().css("background-color", "white");
    $(anchorObj).children().children().show();

    if (this.matchingInProgress) {
      var tempAnchorObj = this.anchorObjMatchingInProgress;
      this.matchingInProgress = false;

      if (this.symbolForMatching == symbol) return symbol;
      else {
        setTimeout(function () {
          $(anchorObj).children().css("background-color", "#0c3057");
          $(anchorObj).children().children().hide();
          $(tempAnchorObj).children().css("background-color", "#0c3057");
          $(tempAnchorObj).children().children().hide();
        }, 1500);
      }
    } else {
      this.anchorObjMatchingInProgress = anchorObj;
      //   console.log(this.anchorObjMatchingInProgress);
      //   this.anchorObjMatchingInProgress.classList.add("disabled");
      this.symbolForMatching = symbol;
      this.matchingInProgress = true;
    }

    return false;
  }

  bindAnchorOnclick() {
    // Saving the current object reference to use it in the onclick callback of the anchor element....
    var currentObj = this;

    $("a").click(function () {
      currentObj.tryMatching($(this).children().children().text());
    });
  }

  getMatchedCount() {
    return this.matchCount;
  }

  shuffle(symbolsArray) {
    var j, temp, i;
    for (i = symbolsArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = symbolsArray[i];
      symbolsArray[i] = symbolsArray[j];
      symbolsArray[j] = temp;
    }
    return symbolsArray;
  }
}
