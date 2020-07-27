import $ from "jquery";

window.onload = function () {
  console.log($("#mount-point"));
  //   const GameBoard = require("./GameBoard");
  var gameArea = new require("./GameArea");
  var gameObj = new require("./GameBoard")(gameArea);
  gameObj.Init();
};
