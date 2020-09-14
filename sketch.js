const Bodies = Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;
var world,engine;
var box
var box1
var box2
var box3
var box4
var box5
var box6
var box7
var box8
//var box10
var box11
var box12
var box13
var box14
var polygon
var ground
var slingshot

function setup() {
  engine=Engine.create()
  world=engine.world;
  createCanvas(800,400);
  ground=new Ground(500,300,210,10)
  box=new Box(580,275,30,40) 
  box1=new Box(550,275,30,40) 
  box2=new Box(520,275,30,40) 
  box3=new Box(490,275,30,40) 
  box4=new Box(460,275,30,40) 
  box5=new Box(430,275,30,40) 
  box6=new Box(550,235,30,40) 
  box7=new Box(520,235,30,40) 
 box8=new Box(490,235,30,40) 
  box9=new Box(460,235,30,40) 
 // box10=new Box(360,195,30,40) 
  box11=new Box(490,195,30,40) 
  box12=new Box(520,195,30,40) 
  box13=new Box(505,155,30,40) 
 polygon=new Polygon(100,150,30)


slingshot=new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
   


  //drawSprites();

  ground.display();
   box.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
  // box10.display();
   box11.display();
   box12.display();
   box13.display();
   polygon.display();
   slingshot.display();
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        console.log("mouseDragged")
    //}
}


function mouseReleased(){
    slingshot.fly();
    console.log("mouseReleased")
   
}
