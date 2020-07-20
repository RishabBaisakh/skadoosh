
// This is the main object holding all the game objects, as well as interacting with the user.
function GameBoard() {
    var symbols;
    var inGame;
    var gameAreaObject;
    var timer;
    var timerLabel;
    var matchCountLabel;
    var highScoreLabel;

    /* Methods... */
    function StartGame() {}
    function StopGame() {}
    function UpdateMatchedCount() {}
    function UpdateHighScore() {}
    function ResetTimer() {}

}

GameBoard.prototype.Init = function() {
    console.log("Inside Init !");
    
    this.symbols = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H'];
    this.inGame = false;
    this.gameAreaObject = new GameArea();
    this.timer = new Timer();
    this.timerLabel = "Time Elapsed";
    this.matchCountLabel = "Match Count";
    this.highScoreLabel = "High Score";
    
    this.RenderGameBoard();
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

// This is the only Game Object where UI responds to the user.
function GameArea() {
    var symbols;
    var matchingInProgress;
    var matchCount;
}

GameArea.prototype.Init = function() {
    console.log("Finally...");
}

GameArea.prototype.GenerateGameBoxes = function()  {

} 

GameArea.prototype.TryMatching = function() {

}

/* -------------------------------------------------------------------------------------- End of GameArea!  */

// This is my Timer.
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

