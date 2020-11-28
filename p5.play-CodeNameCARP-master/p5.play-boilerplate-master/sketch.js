var bullet, wall;
var rail;
var speed, weight, damage;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 100, 60, 1600);
  wall.shapeColor=color(200,0,0)
  bullet=createSprite(50, 200, 100, 50);
  bullet.shapeColor=color(255,255,0)
  rail=createSprite(800,200,1600,10);
  rail.shapeColor=color(255,255,255)
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(50,50,50);  
  drawSprites();
  bullet.velocityX=speed;

  hasCollided();

  if(hasCollided(bullet, wall)){
    bullet.velocity=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage>10){
      wall.shapeColor=color(0,255,0);
    }
  }
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deform=0.5 * weight * speed * speed/22509;
    if(deform>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deform<180)
    {
      bullet.shapeColor=color(0,255,0)
    }
    if(deform<180 && deform>100){
      bullet.shapeColor=color(230,230,0);
    }
  }
}

function hasCollided(lbullet, lwall){
    bulletRightEdge=lbullet.X+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false;
    
}