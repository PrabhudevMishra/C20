var movingRect,fixedRect;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  movingRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  rect1 = createSprite(700, 50, 80, 50);
  rect2 = createSprite(700, 350, 50, 80);
  rect1.velocityY = 2;
  rect2.velocityY = -2;
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
    }

  else{
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
    }

  if(rect1.x - rect2.x < rect2.width/2 + rect1.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2){
      rect1.velocityX = rect1.velocityX * (-1);
      rect2.velocityX = rect2.velocityX * (-1);
    }

  if(rect1.y - rect2.y < rect2.height/2 + rect1.height/2
    && rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
      rect1.velocityY = rect1.velocityY * (-1);
      rect2.velocityY = rect2.velocityY * (-1);
    }

  drawSprites();
}