/* Rishab Baisakh start coding right now... */

// This is the main object holding all the game objects, as well as interacting with the user.
function GameBoard() {
    var symbols;
    var gameTitle;
    var gameAreaObject;
    var timer;
    var timerLabel;
    var matchCountLabel;
    var highScoreLabel;

    /* Methods... */
    function init() {
        
    }

    function StartGame() {}
    function StopGame() {}
    function UpdateMatchedCount() {}
    function UpdateHighScore() {}
    function ResetTimer() {}

    /* ------------------------------- Nice to have!! */
    function RenderGameBoard() {}

    console.log(gameArea);
}

/* -------------------------------------------------------------------------------------- End of GameBoard! */

// This is the only Game Object where UI responds to the user.
function GameArea() {
    var symbols;
    var matchingInProgress;
}

GameArea.prototype.Init = function() {
    console.log("Finally...");
}

GameArea.prototype.GenerateGameBoxes = function()  {

} 

GameArea.prototype.TryMatching = function() {

}

GameArea.prototype.GetMatchedCount = function() {

}

/* -------------------------------------------------------------------------------------- End of GameArea!  */

// This is my Timer.
function Timer() {

    /* Methods...  */
    function StartTimer() {}
    function GetElaspedTime() {}
}


// GameBoard();
var g = new GameArea();

g.init();