var bike,man,helmet,backGround
var bikes,mans,helmets,biker
var ver=0,helm = 0,sir=0
function preload(){
    bike = loadImage("bike.png")
    man = loadImage("man.png")
    helmet = loadImage("helmet.png")
    backGround = loadImage("backGround.png")
    biker = loadImage("manb.png")
}

function setup() {
  createCanvas(1280,700)

  
  

  mans = createSprite(800,500)
  mans.addImage(man)
  mans.scale = 0.3

  
  
  bikes = createSprite(300,450)
  bikes.addImage(bike)

  
  helmets = createSprite(170,430)
  helmets.addImage(helmet)
  helmets.scale = 0.2
  

	
}


function draw() {
  background("black")
  image(backGround,0,0)
  fill("black")
  stroke("white")
  strokeWeight(2)
  textSize(30)
  text("press E to  wear the helmet",200,220)
  text("press S to  sit on the bike",200,140)
  text("press right arrow key to start the bike",200,180)
  

if (keyDown("e")){
  helm=1
  helmets.depth=bikes.depth
  helmets.depth=helmets.depth+1
  if(ver===0){
  helmets.x=mans.x
  helmets.y=mans.y-130
  }
  else{
    helmets.y=bikes.y-177
    helmets.x = bikes.x-25

    
  }
}

if (bikes.x>1280){
  textSize(50)
  text("Wear Helmet Stay Safe",200,360)
}

if (keyDown("s")){
  mans.destroy()
  bikes.addImage(biker)
  helmets.scale=0.2

  ver=1
  if(helm===1){
    helmets.y=bikes.y-177
    helmets.x = bikes.x-25
  }
  
}

//console.log(bikes.y)

if (keyDown("RIGHT_ARROW") )
{
  if (helmets.y===273){
  bikes.velocityX=6
  }
  else{
    sir = 1
    
  }
}
if(sir===1){
  stroke("black")
  fill("green")
  text("First wear the helmet to start the bike",640,360)
}

if(bikes.x!==300){
  helmets.y=bikes.y-177
  helmets.x = bikes.x-25
}


  drawSprites();
}




