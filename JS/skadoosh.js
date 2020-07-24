
// This is the main object holding all the game objects, as well as interacting with the user.
function GameBoard() {
    var symbols;
    var inGame;
    var gameAreaObject;
    var timer;
    var timerLabel;
    var matchCountLabel;
    var matchCount;
    var highScoreLabel;

    /* Methods... */
    // Review....
    // Still don't know how to use how to control the start and stop game methods....
    function StartGame() {}
    function StopGame() {}
}

GameBoard.prototype.Init = function() {
    console.log("Inside GameBoard() Init !");
    
    this.symbols = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H'];
    this.inGame = false;
    this.gameAreaObject = new GameArea(symbols);
    this.timer = new Timer();
    this.timerLabel = "Time Elapsed";
    this.matchCountLabel = "Match Count";
    this.highScoreLabel = "High Score";
    
    this.RenderGameBoard(); 
}

GameBoard.prototype.UpdateElapsedTime = function() {
    document.getElementById("elapsedTime").innerHTML = this.timer.GetElaspedTime(); // Review....!
}

// Review....!
// Don't know yet when to start the timer....?

GameBoard.prototype.ResetTimer = function() {
    this.time = new Timer();
}

GameBoard.prototype.UpdateHighScore = function() {
    if (this.gameAreaObject.GetMatchedCount())
        document.getElementById("highScore").innerHTML = this.gameAreaObject.GetMatchedCount();
    else 
        continue; // Review....!
}

GameBoard.prototype.UpdateMatchedCount = function() {
    // Thinking about this, too many ways....
}

GameBoard.prototype.RenderGameBoard = function() {
    console.log("Game Rendering...");

    if (this.inGame) {
        // Render the button as stop game....!
    }
    else {
        // Render the button as start game....!
    }
}

GameBoard.prototype.StartGame = function() {
    if(!this.inGame)
        this.inGame = true;
}

GameBoard.prototype.StopGame = function() {
    if(this.inGame)
        this.inGame = false;
}
/* -------------------------------------------------------------------------------------- End of GameBoard! */

// This is area where actual game happens....
// Keeping it independent, so iut could be made more expendible in the future....
function GameArea(symbols) {
    var symbols;
    var matchingInProgress;
    var matchCount;
}

GameArea.prototype.GetMatchedCount = function() {
    return this.matchCount;
}

GameArea.prototype.Init = function() {
    console.log("Finally...");

    // Initialize the game symbols somehow, and then it's good to go.....
}

GameArea.prototype.GenerateGameBoxes = function()  {
    let combinedSymbolsArray = this.symbols.concat(this.symbols);

    // Apply a shuffling algorithm for the combined array....
    for(let i = 0; i < combinedSymbolsArray.length; i++)
        [this.combinedSymbolsArray[i], this.combinedSymbolsArray[Math.floor(Math.random() * (combinedSymbolsArray.length + 1))]] = [this.combinedSymbolsArray[Math.floor(Math.random() * (combinedSymbolsArray.length + 1))], this.combinedSymbolsArray[i]];

    // Start appending to the GameAreaDOM....
    for (let i = 0; i < this.combinedSymbolsArray.length; i++) {
        // Create the elemwent that will be appended....
        let symbolBox = document.createElement("div");
        symbolBox.className = "symbolBox";
        symbolBox.innerHTML = this.combinedSymbolsArray[i];

        // Finally, append it....
        document.getElementById("gameArea").append(symbolBox);
    } // Review....!
} 

GameArea.prototype.TryMatching = function() {
    if (this.matchingInProgress) {
        /*
        if(match happens) {
            // skadoosh animation....
            this.matchCount++;
        } else 
            return false;
        */
    }
}

/* -------------------------------------------------------------------------------------- End of GameArea!  */

// Trying to implement an independent timer object....
function Timer() {
    var startTime;
}

Timer.prototype.StartTimer = function() {
    this.startTime = Date.now();
}

Timer.prototype.GetElaspedTime = function() {
    return (Date.now() - this.startTime);
}

// ---------------------------------------------
window.onload = function() {
    var g = new GameBoard();
    
    g.Init();
}

