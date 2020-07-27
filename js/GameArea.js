import $ from 'jquery';

export default class GameArea {
    constructor(symbols) {
		this.symbols = symbols;
		this.matchingInProgress = false;
		this.symbolForMatching;
		this.anchorObjMatchingInProgress;
		this.matchCount = 0;
	}

    init() {
		this.generateGameBoxes();
	}

	generateGameBoxes() {
		var combinedSymbolsArray = this.symbols.concat(this.symbols);    
		var rowClass = document.createElement("div");
		rowClass.className = "row";

		combinedSymbolsArray = this.shuffle(combinedSymbolsArray);

		// Start appending to the GameAreaDOM....
		for (let i = 0; i < combinedSymbolsArray.length; i++) {
			// Create the elemwent that will be appended....
			let symbolBox = document.createElement("div");
			let anchorElement = document.createElement("a");
			let cardElement = document.createElement("div");
			let cardBodyElement = document.createElement("div");

			anchorElement.href = "#";
			symbolBox.className = "col-3";
			cardElement.className = "card gameBox";
			cardBodyElement.className = "card-body text-center";
			cardBodyElement.innerHTML = combinedSymbolsArray[i];

			// Append it to the row class element....
			cardElement.append(cardBodyElement);
			anchorElement.append(cardElement);
			symbolBox.append(anchorElement);
			rowClass.append(symbolBox);
		}

		// Finally, append it to the gameArea....
		document.getElementById("gameArea").append(rowClass);
	}

	tryMatching(anchorObj) {
		var symbol = $(anchorObj).children().children().text();
		$(anchorObj).children().children().css("background-color", "white");
		
		if (this.matchingInProgress) {
			var tempAnchorObj = this.anchorObjMatchingInProgress;
			this.matchingInProgress = false;
			
			if(this.symbolForMatching == symbol)
				return symbol;
			else {
				setTimeout(function() {
					$(anchorObj).children().children().css("background-color", "#0c3057");
					$(tempAnchorObj).children().children().css("background-color", "#0c3057");
				}, 2000);
			}

		} else {
			this.anchorObjMatchingInProgress = anchorObj;
			this.symbolForMatching = symbol;		
			this.matchingInProgress = true;
		}

		return false;
	}

	bindAnchorOnclick() {
		// Saving the current object reference to use it in the onclick callback of the anchor element....
		var currentObj = this;

		$("a").click(function() {
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
