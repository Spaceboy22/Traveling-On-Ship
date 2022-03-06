var sea,ship;
var seaImg,shipImg;
var fish,fish1;
var fishImg,fish1Img;
function preload(){

  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  fishImg = loadImage("fish1.png");
  fish1Img = loadImage("fish1.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,800);
  background("blue");

  // Moving background
  sea=createSprite(800,400);
  sea.addImage(seaImg);
  sea.velocityX = -5;

  sea.scale=0.5;

  ship=createSprite(200,400,430,430);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
  fish=createSprite(100,600,20,30);
  fish.addAnimation("movingFish",fishImg);
  fish.scale=0.1;
  
  fish1=createSprite(300,700,20,30);
  fish1.addAnimation("movingFish2",fish1Img);
  fish1.scale=0.2;
}

function draw() {
  background(0);
  sea.velocityX = -3;

  if(sea.x < 0){
    sea.x = sea.width/8;
  }

 
  drawSprites();
}