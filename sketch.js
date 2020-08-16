const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bottomLayer, seconndLayer, thirdLayer;

var score;


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(300, 400, 70, 70);
    sling = new SlingShot(ball.body, {x: 200, y:300});
    ground = new Ground(600, 400, 400, 20);

    //bottom layer
    box1 = new Box1(600, 370, 50, 50);
    box2 = new Box1(625, 370, 50, 50);
    box3 = new Box1(575, 370, 50, 50);
    box4 = new Box1(550, 370, 50, 50);
    box5 = new Box1(650, 370, 50, 50);
    box6 = new Box1(525, 370, 50, 50);
    box7 = new Box1(675, 370, 50, 50);

    //2nd layer
    box8 = new Box2(600, 345, 50, 50);
    box9 = new Box2(625, 345, 50, 50);
    box10 = new Box2(575, 345, 50, 50);
    box11 = new Box2(550, 345, 50, 50);
    box12 = new Box2(650, 345, 50, 50);

    //3rd layer
    box13 = new Box2(600, 320, 50, 50);
    box14 = new Box2(550, 320, 50, 50);
    box15 = new Box2(650, 320, 50, 50);

    //top
    box16 = new Box3(600, 295, 50, 50);

    var scoreGreen = createSprite(20, 40, 10, 10);
    scoreGreen.shapeColor = "green"
    var scoreGreen = createSprite(20, 60, 10, 10);
    scoreGreen.shapeColor = "blue"
    var scoreGreen = createSprite(20, 80, 10, 10);
    scoreGreen.shapeColor = "red"

    score = 0;

}

function draw() {
  background(190);  

  Engine.update(engine)

  ball.display();
  sling.display();
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box1.scoring()
  box2.scoring()
  box3.scoring()
  box4.scoring()
  box5.scoring()
  box6.scoring()
  box7.scoring()
  box8.scoring()
  box9.scoring()
  box10.scoring()
  box11.scoring()
  box12.scoring()
  box13.scoring()
  box14.scoring()
  box15.scoring()
  box16.scoring()


  console.log(score);

  drawSprites();

  textSize(20);
  fill("yellow");
  text("score = "+score, 10, 20);
  fill("black");
  text("2", 40, 45);
  text("1", 40, 65);
  text("3", 40, 85);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode == 32){
    sling.attatch(ball.body);
    Matter.Body.setPosition(ball.body, {x: 200, y: 300});
  }
}