var a,b
function setup() {
  createCanvas(800,400);
 a= createSprite(200, 200, 50, 50);
 a.shapeColor="red"
 b= createSprite(600, 200, 50, 50);
 b.shapeColor="red"
}

function draw() {
  background("black");  
  drawSprites();
  b.x=mouseX
  b.y=mouseY
  console.log(b.x-a.x)
  if(b.x-a.x< a.width/2+b.width/2 && a.x-b.x< a.width/2+b.width/2 
    && b.y-a.y< a.height/2+b.height/2 && a.y-b.y< a.height/2+b.height/2){
    a.shapeColor="white"
    b.shapeColor="white"
  }
  else{
    a.shapeColor="red"
    b.shapeColor="red"
  }
}