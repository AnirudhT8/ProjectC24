/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1;


function setup() {
	createCanvas(1600, 650);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground1);

	 box1 = new Box1(650,475);

	 box2 = new Box2(560,415);

	 box3 = new Box3(740,415);


	 paper = new Paper(1400,200);

	 ground = new Ground(1450,230);
	 
	Engine.run(engine);
  
}

function keyPressed(){

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})

	}

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  Box1.display();
  Box2.display();
  Box3.display();




  Paper.display();
  Ground.display();



  drawSprites();
 
}



*/





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



