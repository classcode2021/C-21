var fixedRect, movingRect;
var g1, g2, g3, g4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  g1=createSprite(200,100,50,50);
  g1.shapeColor="blue";

  g2=createSprite(300,100,50,50);
  g2.shapeColor="yellow";

  g3=createSprite(400,100,50,50);
  g3.shapeColor="white";

  g4=createSprite(500,100,50,50);
  g4.shapeColor="orange";

  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,g1)){
    movingRect.shapeColor = "red";
    g1.shapeColor = "red";   
  }
  else{
    movingRect.shapeColor = "green";
    g1.shapeColor = "green";
  }
 
bounceOff(movingRect,fixedRect);
drawSprites();
}



