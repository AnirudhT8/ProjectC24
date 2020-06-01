const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper, ground;
	


function setup() {
	createCanvas(900, 500);


	engine = Engine.create();

	world = engine.world;


	paper = new Paper();
	ground = new Ground();
	box1 = new Box1();
	box2 = new Box2();
	box3 = new Box3();
	Engine.run(engine);
  
}
function keyPressed(){

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})

	}

}



function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  paper.display();
	box1.display();
	box2.display();
	box3.display();
 
}



