var sea, ship;
var seaImg;
var shipImg1;

function preload(){
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,200);
  sea.addImage(seaImg);
  sea.x = sea.width/2;

  ship=createSprite(200,295,30,30);
  ship.addAnimation("moving",shipImg1);
  ship.scale=0.2
}

function draw() {
  background("blue");

  sea.velocityX=-2

console.log(shipImg1)

  if(sea.x<0){
    sea.x=sea.width/2
  }
  drawSprites()
}