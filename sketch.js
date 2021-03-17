var ground
var groundI
var dog 
var dogA
var cat 
var catA
var fenceI
var bushI
var fence
var bush
var IG
var stop
var start, restart, 

function preload(){
groundI = loadImage('images/background.png')
dogA = loadAnimation('images/dog1.png','images/dog2.png','images/dog3.png')
catA = loadAnimation('images/cat1.png','images/cat2.png','images/cat3.png')
bushI = loadImage('images/bush.png')
fenceI = loadImage('images/fence.png')
start = loadImage('images/start.png')
restart = loadImage('images/restart.png')
stop = loadimage('images/stop.png')
}

function setup() {
  createCanvas(670,600);
  
  ground = createSprite (200,350,900,10)
  ground.shapeColor = 'black'
  ground.x = ground.width /8;
  ground.addImage(groundI)
  ground.scale = 0.7
  ground.velocityX = -5
  ground.setCollider('rectangle',0,350,2800,10)
  dog = createSprite(138,350)
  dog.addAnimation('runing dog',dogA)
  dog.scale=1.5
  dog.setCollider('rectangle',0,0,45,45)
  cat =createSprite(610,535)
  cat.addAnimation('running cat',catA)
  cat.scale = 1.5
  cat.setCollider('rectangle',0,0,35,35)
  ground.debug = true
  cat.debug = true
  dog.debug = true

}



function draw() {
  background(255,255,255);
  if(ground.x < 0) {
    ground.x = ground.width/8
  }
  if(keyDown('Space')){
    dog.velocityY=-10
  }
  dog.velocityY = dog.velocityY+0.5
  if(keyDown('Space')){
    cat.velocityY=-10
  }
  cat.velocityY = cat.velocityY+0.5
  createbush()
  createfence()
  dog.collide(ground)
  cat.collide(ground)

  drawSprites();
  text(mouseX + ', '+mouseY, 50,50)
}

function createfence(){
  if(frameCount % 180 == 0) {
    fence = createSprite(777,540)
    fence.addImage(fenceI)
    fence.scale = 0.5
    fence.velocityX = -5
    
  }
  
}

function createbush(){
if(frameCount %250 == 0){
  bush = createSprite(798,554)
  bush.addImage(bushI)
  bush.scale = 0.3
  bush.velocityX = -5
  fence.depth = bush.depth+1
}

}


  


