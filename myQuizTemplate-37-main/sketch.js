var gameState=0;
var db;
var game,player,form;
var playerInfo;
var playerCount;


function setup(){
  createCanvas(850,720);



  db=firebase.database();
  game=new Game()
  game.getstate()
  game.start()

  
}


function draw(){
  background("pink");

fill("black")
  textSize(30)
text("*WELCOME TO THE QUIZ GAME...",50,500)

fill("black")
textSize(30)
text("*THINK AND ANSWER...",50,600)

fill("black")
textSize(20)
text("*THIS MAY TAKE A WHILE*",50,400)
  
}









