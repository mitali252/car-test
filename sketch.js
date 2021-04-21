var speed,weight,car,wall
function setup() {
  createCanvas(1600,400);
    car=createSprite(200,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  
  
  car.shapeColor=color(255);
  wall.shapeColor=color(80,80,80);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(25,255,255);  
  drawSprites();
}