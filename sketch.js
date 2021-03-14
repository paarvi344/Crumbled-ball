
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine= Engine.create();
	world= engine.world;
	

    paper=new Paper(100,400,10)	;

	ground=new Ground (400,580,800,20);

    boxSprite=createSprite(580,570,200,10);
	boxSprite.shapeColor="red";
	box1Sprite=createSprite(580,570,100,10);
	box1Sprite.shapeColor="red";
	box2Sprite=createSprite(480,525,10,100);
	box2Sprite.shapeColor="red";
	box3Sprite=createSprite(680,525,10,100);
	box3Sprite.shapeColor="red";

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display(); 

  ground.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position,{x:12,y:-12});
	}
}










