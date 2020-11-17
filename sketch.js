var bob1, roof1, string1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 200;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);

	roof1 = new roof(600, 100, 450, 50);
	bob1 = new bob(600-140, 100, 70);
	bob2 = new bob(600-70, 100, 70);
	bob3 = new bob(600, 100, 70);
	bob4 = new bob(600+70, 100, 70);
	bob5 = new bob(600+140, 100, 70);
	string1 = new rope(bob1.body, roof1.body, -140,0,480);
	string2 = new rope(bob2.body, roof1.body, -70,0,480);
	string3 = new rope(bob3.body, roof1.body, 0,0,480);
	string4 = new rope(bob4.body, roof1.body, 70,0,480);
	string5 = new rope(bob5.body, roof1.body, 140,0,480);
	
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50, y: 50});
		//Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 50, y: -50});
	}
}

function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display(); 

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bobObject1.body, {x: mouseX, y: mouseY});
    }
}


function mouseReleased(){
    gameState = "launched";
}

