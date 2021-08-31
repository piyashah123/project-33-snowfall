var snow2Img
function preload(){
  snow2Img= loadImage("snow2.jpg");
  boy1Img= loadImage("boy1.jpg");
} 
 function setup() {
  createCanvas(800,400);
  
  snow=createSprite(400, 200, 50, 50);
  snow.addImage("snow",snow2Img);
boy1=createSprite(150,300,20,20);
boy1.addImage(boy1Img)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}