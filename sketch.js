var bullet,wall,speed,thickness,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
}

function draw() {
  background(0);
if(hascollided(bullet,wall)){
  console.log("high")
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
  console.log (damage)
  if(damage > 10){
wall.shapeColor = "red";
  }
  if(damage < 10){
    wall.shapeColor ="green"
      }

}
  drawSprites();
}
function hascollided(lbullet,lwall){
  bulletrightedge = lbullet.x+lbullet.width;
  wallleftedge = lwall.x;
  if(bulletrightedge >= wallleftedge){
    return true;
  }
return false;
}