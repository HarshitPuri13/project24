
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,plane,stone,sand1,iron,rubber ;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

plane = new Plane (600,height,1200,20)
hammer = new Hammer(10,100);
stone = new Stone(700,320,100,100)	
sand1 = new Sand(500,450,10);
sand2 = new Sand(505,450,10);
sand3 = new Sand(510,450,10);
sand4 = new Sand(515,450,10);
sand5 = new Sand(520,450,10);
iron = new Iron(400,500,100,50);
rubber = new Rubber(900,500,70)
}


function draw() {
	background("lightblue");
	Engine.update(engine);

  hammer.display();
  plane.display();
 stone.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 iron.display();
 rubber.display();
}



