const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin1,ground1,paper1
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground1=new ground(width/2,670,width,20);
	dustbin1=new dustbin(1200,650);
	paperObj = new paper(200,450,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  ground1.display();
  dustbin1.display();
  paperObj.display();
drawSprites();
}

function keyPressed(){
if(keyCode ===UP_ARROW){
	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145});
}

}