var canvas;
var background1;
var stationImg;
var station;
var obstacleImg;
var logshipImg,mathshipImg;
var mathship;
var database;
var form;
var page;
var game;
var gameState=0;
var player;
var userId;
var questions;
var space;
var logship;
var shipState=0;
var timer=10;

function preload(){

  background1=loadImage("Images/bg.jpg");
  obstacleImg=loadImage("Images/5.png");
  logshipImg=loadImage("Images/sprite_0.png");
  mathshipImg=loadImage("Images/k.png");
  stationImg=loadImage("Images/sta.png")
  page=loadImage("Images/R.jpg");
  

}

function setup(){
  canvas = createCanvas(windowWidth-30,windowHeight-30);
  
  database = firebase.database();  
  
  questions = new Question();

  game = new Game();
  game.getState();
  game.start();

 
}

function draw(){
  background(page);
    
  if(gameState===1){
    //console.log("game state has been changed")
    //console.log(player.grade)
    game.play();
  }
  
 
}
