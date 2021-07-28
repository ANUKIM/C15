var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ing
var c,Cing
var ob1,ob2,ob3,ob4,ob5,ob6,ob
var cg,og
var play=1
var end=0
var gs=play



function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
  Cing= loadImage("cloud.png")
  ob1=loadImage("obstacle1.png")
  ob2=loadImage("obstacle2.png")
  ob3=loadImage("obstacle3.png")
  ob4=loadImage("obstacle4.png")
  ob5=loadImage("obstacle5.png")
  ob6=loadImage("obstacle6.png")



  
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.debug=true
 
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  
  trex.setCollider("circle",0,10,50)
  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ing=createSprite(200,185,400,10)
  ing.visible=false
  cg=new Group()
  og=new Group()
  
}

function draw() {
  background(0);
  if(gs===play){
    ground.velocityX = -2
    // console.log(ground.x)
     
     if (ground.x<0){
       ground.x = ground.width/2;
     }
     
     //jumping the trex on space key press
     if(keyDown("space")&&trex.y>100) {
       trex.velocityY = -10;
     }
     
     trex.velocityY = trex.velocityY + 0.8
     console.log(trex.y)
     cloudcreation()
     
    //stop trex from falling down 
     trex.collide(ing);
     obstacle()
     if(trex.isTouching(og)){
       gs=end
     }
  } 
  else if(gs===end){
    ground.velocityX =0
    trex.velocityY=0
    og.setVelocityXEach(0)
    cg.setVelocityXEach(0)
    og.setLifetimeEach(-1)
    cg.setLifetimeEach(-1)
  }
  
  drawSprites();
}
function cloudcreation()
{
  if(frameCount%60===0)
  {
  c=createSprite(580,100,10,10)
  c.addImage("cloud",Cing);
  c.y=Math.round(random(80,120))
  c.velocityX=-3
  c.depth=trex.depth
  trex.depth=trex.depth+1
  c.lifetime=200
  cg.add(c)
  
 }
  
  }
function obstacle()
{
  if(frameCount%90===0){
  ob=createSprite(580,170,10,10)
  ob.scale=0.6
  var i=Math.round(random(1,6))
switch(i) {
  case 1:ob.addImage("obstacle",ob1)
  break;
  case 2:ob.addImage("obstacle",ob2)
  break;
  case 3:ob.addImage("obstacle",ob3)
  break;
  case 4:ob.addImage("obstacle",ob4)
  break;
  case 5:ob.addImage("obstacle",ob5)
  break;
  case 6:ob.addImage("obstacle",ob6)
  break;
  default:
  break;
}
ob.velocityX=-3
ob.depth=trex.depth
  trex.depth=trex.depth+1
  ob.lifetime=200
og.add(ob)
  }

}
