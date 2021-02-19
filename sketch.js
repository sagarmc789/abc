
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	var canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,100,300,30)

	bob1=new Bob(290,400)
	bob2=new Bob(345,400)
	bob3=new Bob(390,400)
	bob4=new Bob(450,400)
	bob5=new Bob(500,400)

rope1=new Rope(bob1.body,roof.body,-55*2,0)
rope2=new Rope(bob2.body,roof.body,-30*2,0)
rope3=new Rope(bob3.body,roof.body,-5*2,0)
rope4=new Rope(bob4.body,roof.body,20*2,0)
rope5=new Rope(bob5.body,roof.body,45*2,0)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);


rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();




keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0})
   

	 }
   }

