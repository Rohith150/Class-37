var hypnoticBall, database;
var position;
var form, player, game, allPlayers;
var cars, car1, car2, car3, car4;

var gameState = 0;
var playerCount = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth-5,windowHeight-8);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

if(playerCount === 4){
  gameState = 1;
  game.updateState(1);
}

if(gameState === 1){
  game.play();
}

}