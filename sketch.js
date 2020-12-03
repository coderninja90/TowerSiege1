const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var myEngine,myWorld;
var ground,polygon;
function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1000,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(500,590,1000,20);
    stand1 = new Ground(510,550,350,10);
    stand2 = new Ground(770,250,270,10);

    //stand1
    //level1
    box1 = new Box(550,540);
    box2 = new Box(510,540);
    box3 = new Box(470,540);
    box4 = new Box(430,540);
    box5 = new Box(390,540);
    box6 = new Box(590,540);
    box7 = new Box(630,540);
    
    //level2
    box21 = new Box(430,470);
    box22 = new Box(470,470);
    box23 = new Box(510,470);
    box24 = new Box(550,470);
    box25 = new Box(590,470);

    //level3
    box31 = new Box(470,410);
    box32 = new Box(510,410);
    box33 = new Box(550,410);

    //level4
    box41 = new Box(510,350);

    //stand2
    //level1
    block1 = new Box(690,240);
    block2 = new Box(730,240);
    block3 = new Box(770,240);
    block4 = new Box(810,240);
    block5 = new Box(850,240);

    //level2
    block21 = new Box(730,170);
    block22 = new Box(770,170);
    block23 = new Box(810,170);

    //level3
    block31 = new Box(770,110);

    polygon = Bodies.circle(80,400,20);
    World.add(myWorld,polygon);
    sling = new Slingshot(this.polygon,{x:80,y:400});
   

}


function draw(){
    background(10,200,10);
    Engine.update(myEngine);

    ground.display();
    stand1.display();
    stand2.display();

    fill("lightblue");
    box1.display();
    fill("lightblue");
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();


    fill("pink");
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    block21.display();
    block22.display();
    block23.display();

    fill("lightgreen");
    box31.display();
    box32.display();
    box33.display();
    block31.display();

    fill("cyan");
    box41.display();

    sling.display();
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}