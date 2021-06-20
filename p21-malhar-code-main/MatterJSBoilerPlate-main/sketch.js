
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

  ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  };

    ground = new Ground(width/2,670,width,30);
    World.add(world,ground);
    leftSide = new Ground(500,600,20,120);

    ball = Bodies.circle(100,350,20,ball_options);
    World.add(world,ball);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGreen");

  circle(ball.position.x,ball.position.y,20);
  

  ground.show();

 
  //engine.update(engine);
  

  drawSprites();
 
}



