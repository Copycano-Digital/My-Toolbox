var Crims;
var Dandi;
var Grass1;
var Grass2;
var Grass3;
var GrassGreen;

var hisLeftFace;
var hisRightFace;
var herFace;
var bladesOf1;
var bladesOf2;
var bladesOf3;
var backGround;

var sizeComparison;
//var Gamestate;

var Landscape;

function preload(){
  hisRightFace = loadImage("HisRight.png");
  hisLeftFace = loadImage("HisLeft.png");
  herFace = loadImage("Dandi.png");
  bladesOf1 = loadImage("grassy1.png");
  bladesOf2 = loadImage("grassy2.png");
  bladesOf3 = loadImage("grassy3.png");
  backGround = loadImage("Background.png")
}

function setup() {
  createCanvas(800,450);

  GrassGreen = rgb(0, 200, 0);

  //sizeComparison = createSprite(250, 325, 50, 50);
  //sizeComparison.shapeColor = rgb(155,155,155);

  Crims = createSprite(300, 325, 50, 50);
  Crims.shapeColor = rgb(233,0,0);
  Crims.addImage(hisFace);
  Crims.scale = 6.2;
  //Crims.debug = true;


  Dandi = createSprite(150, 125, 50, 50);
  Dandi.shapeColor = rgb(255,233,0);
  Dandi.addImage(herFace);
  Dandi.scale = 6.2;

  Grass1 = createSprite(300, 375, 150, 50);
  Grass1.shapeColor = GrassGreen;
  Grass1.addImage(bladesOf1);
  Grass1.scale = 6.2;

  Grass2 = createSprite(575, 275, 200, 50);
  Grass2.shapeColor = GrassGreen;
  Grass2.addImage(bladesOf2);
  Grass2.scale = 6.2;


  Grass3 = createSprite(200, 175, 250, 50);
  Grass3.shapeColor = GrassGreen;
  Grass3.addImage(bladesOf3);
  Grass3.scale = 6.2;



  Landscape = [Grass1, Grass2, Grass3];
  //Gamestate = PLAY;

}

function draw() {
  background(backGround);  
  
  edges = createEdgeSprites();
  Crims.collide(edges[0]);
  Crims.collide(edges[1]);

  if((keyWentUp(LEFT_ARROW)) || (keyWentUp(RIGHT_ARROW))){
    Crims.velocityX = 0;
  }

  if((keyWentUp(UP_ARROW))){
    Crims.velocityY = 0;
  }

  if(keyWentDown(LEFT_ARROW)){
    Crims.velocityX = -7;
  }

  if(keyWentDown(RIGHT_ARROW)){
    Crims.velocityX = 7;
  }

  if((keyWentDown("space")) && ((Crims.collide(Grass1)) || (Crims.collide(Grass2)) || (Crims.collide(Grass3)))){
    Crims.velocityY = -15;
  }

  if(Crims.collide(Dandi)){
    Crims.velocityX = 0;
    Crims.velocityY = 0;

  }

  /*if((keyWentUp("r"))){
    Crims.velocityY = 0;
  }*/

  if((keyWentDown("r")) || (Crims.collide(edges[3]))){
    Crims.x = 300;
    Crims.y = 325;
  }

  //Crims.collide(Grass1);
  //Crims.collide(Grass2);
  //Crims.collide(Grass3);

  for(var i = 0; i <= 2; i++ ){
    Crims.collide(Landscape[i])
  }

  Crims.velocityY = Crims.velocityY + 0.8
text(mouseX+ " , " + mouseY, mouseX, mouseY);
  drawSprites();
}