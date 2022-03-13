var HotAirBalloon, HotAirBalloonImg
var Birds
var bg, bgImage
function preload() {
  HotAirBalloonImg = loadImage("Hot Air Balloon-1.png");
  bgImage = loadImage("background-1.png");
}

function setup() {
  createCanvas(800,700);
  bg = createSprite(400, 350, 800, 700);
  bg.scale = 1.5
  bg.addImage(bgImage);
  bg.velocityX = -1;
   HotAirBalloon = createSprite(150, 200, 50, 50);
   HotAirBalloon.addImage(HotAirBalloonImg);
   HotAirBalloon.scale = 0.25
}



function draw() {
  background("yellow");  

  if(keyDown(UP_ARROW)){
    HotAirBalloon.y = HotAirBalloon.y - 5
  }

  if(keyDown(DOWN_ARROW)){
    HotAirBalloon.y = HotAirBalloon.y + 5
  }
  if(bg.x < 0){
    bg.x = bg.width/2;
  }
  drawSprites();
}