import GameArea from "./GameArea";
import Timer from "./Timer";
import $ from 'jquery';

export default class GameBoard {
    constructor() {
		this.symbols = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H'];
		this.gameArea = new GameArea(this.symbols);
		this.timer = new Timer();
		this.inGame = false;
		this.matchCount = 0;
		this.highScore = 0;
		this.matchedSymbolsArray = [];
		this.anchorObjMatchingInProgress;
    }
	
	init() {
		this.showListOfSymbols();
		this.showViewPanel();
		this.initializeGameArea();
		this.bindAnchorOnclick();
		this.startGame();
	}
	
	initializeGameArea() {
		this.gameArea.init();
	}

	startGame() {
		var currentObj = this;

		setTimeout(function() {
			$("a").children().children().css("background-color", "white");
			currentObj.startGameTimer();
		}, 1500);

	}

	stopGame(stopGameFlag) {
		console.log("Game stopped!");
		
		if(stopGameFlag == "GG")
			alert("Good Game");
		else
			alert("Well Tried");
	}

	bindAnchorOnclick() {
		// Saving the current object reference to use it in the onclick callback of the anchor element....
		var currentGameBoardObj = this;

		$("a").click(function() {
			currentGameBoardObj.gameAreaTryMatching(this);
		});
	}

	gameAreaTryMatching(anchorObj) {
		var symbol = $(anchorObj).children().children().text();
		var matchResult = this.gameArea.tryMatching(anchorObj);
		
		// Update match count and store the symbol if match is found....
		if (matchResult){
			this.updateMatchCount();
			this.updateMatchedSymbolsArray(symbol);
		}

		// Finally, update the elapsed time....
		this.updateElapsedTime();
	}

	startGameTimer() {
		// This timer will be used to calculate the final score....
		this.timer.startTimer();
	}
	
	showListOfSymbols() {
		var symbolsArrayDivTemplate = "";

		this.symbols.forEach(symbol => {
			symbolsArrayDivTemplate += `<div class="card" id = "symbolBoxes"><div class="card-body">${symbol}</div></div>`;
		});

		document.getElementById("listOfSymbols").innerHTML = symbolsArrayDivTemplate;
	}

	showViewPanel() {
		var panelDivTemplate = `<div class="row myLabel">Elapsed Time</div>
			<div class="row"><div class="card"><div class="card-body" id = "elapsedTime">0</div></div></div>
			<div class="row myLabel">Match Count</div>
			<div class="row"><div class="card"><div class="card-body" id = "matchCount">0</div></div></div>
			<div class="row myLabel">High Score</div>
			<div class="row"><div class="card"><div class="card-body">0</div></div></div>`;

		document.getElementById("viewPanel").innerHTML = panelDivTemplate;
	}

	updateMatchCount() {
		$("#matchCount").html(++this.matchCount);
	}

	updateMatchedSymbolsArray(matchedSymbol) {		
		this.matchedSymbolsArray.push(matchedSymbol);
		var currentObj = this;


		if(this.matchedSymbolsArray.length == this.symbols.length)
			setTimeout(function() {
				currentObj.stopGame("GG");

			}, 1000);
	}

	updateElapsedTime() {
		$("#elapsedTime").html(this.timer.getElapsedTime());
	}
}