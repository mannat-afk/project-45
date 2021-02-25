var snake,snakeImg;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,
cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,
cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,
cardboard22,cardboard23,cardboard24,cardboard25,cardboard26;
var target;
var edges;
var appleImg;
var food;

function preload(){
snakeImg = loadAnimation("images/snake_files/snake.gif");
appleImg = loadImage("images/apple.png");
}

function setup(){

createCanvas(600,600);

snake = createSprite(20, 25,18,18);
snake.addAnimation("snakeSlithering",snakeImg);
snake.scale=0.1; 
snake.debug=true;

cardboard1 = createSprite(20,80,100,20);
cardboard1.shapeColor="brown";
cardboard1.debug=true;
  
cardboard2 =createSprite(400,50,20,100);
cardboard2.shapeColor="brown";
cardboard2.debug=true;

cardboard3 =createSprite(90,140,100,20);
cardboard3.shapeColor="brown";
cardboard3.debug=true;
  
cardboard4 =createSprite(10,380,20,100);
cardboard4.shapeColor="brown";
cardboard4.debug=true;

cardboard5 =createSprite(140,220,100,20);
cardboard5.shapeColor="brown";
cardboard5.debug=true;
  
cardboard6 =createSprite(20,260,100,20);
cardboard6.shapeColor="brown";
cardboard6.debug=true;

cardboard7 =createSprite(200,40,20,100);
cardboard7.shapeColor="brown";
cardboard7.debug=true;

cardboard8 =createSprite(248,589,100,20);
cardboard8.shapeColor="brown";
cardboard8.debug=true;

cardboard9 =createSprite(320,100,20,100);
cardboard9.shapeColor="brown";
cardboard9.debug=true;

cardboard10 =createSprite(280,160,100,20);
cardboard10.shapeColor="brown";
cardboard10.debug=true;

cardboard11 =createSprite(548,12,100,20);
cardboard11.shapeColor="brown";
cardboard11.debug=true;

cardboard12 =createSprite(530,165,20,100);
cardboard12.shapeColor="brown";
cardboard12.debug=true;

cardboard13 =createSprite(220,290,20,100);
cardboard13.shapeColor="brown";
cardboard13.debug=true;

cardboard14 =createSprite(525,220,150,20);
cardboard14.shapeColor="brown";
cardboard14.debug=true;

cardboard15 =createSprite(200,560,20,100);
cardboard15.shapeColor="brown";
cardboard15.debug=true;
  
cardboard16 =createSprite(180,350,100,20);
cardboard16.shapeColor="brown";
cardboard16.debug=true;

cardboard17 =createSprite(80,548,20,100);
cardboard17.shapeColor="brown";
cardboard17.debug=true;
  
cardboard18 =createSprite(430,480,20,100);
cardboard18.shapeColor="brown";
cardboard18.debug=true;
  
cardboard19 =createSprite(380,300,20,100);
cardboard19.shapeColor="brown";
cardboard19.debug=true;
  
cardboard20 =createSprite(370,360,100,20);
cardboard20.shapeColor="brown";
cardboard20.debug=true;
    
cardboard21 =createSprite(580,400,100,20);
cardboard21.shapeColor="brown";
cardboard21.debug=true;
  
cardboard22 =createSprite(560,320,20,100);
cardboard22.shapeColor="brown";
cardboard22.debug=true;

cardboard23 =createSprite(300,460,100,20);
cardboard23.shapeColor= "brown";
cardboard23.debug=true;

cardboard24 =createSprite(470,540,100,20);
cardboard24.shapeColor= "brown";
cardboard24.debug=true;

cardboard25 =createSprite(75,490,100,20);
cardboard25.shapeColor= "brown";
cardboard25.debug=true;

cardboard26 =createSprite(50,440,100,20);
cardboard26.shapeColor= "brown";
cardboard26.debug=true;
  
target = createSprite(570,580,10,50);
target.addImage("fruit",appleImg);
target.scale=0.2;
target.debug=true;
}

function draw() {
//make the background 
background("pink");

snake.velocityX=0;
snake.velocityY=0;
if (snake.bounce(target)) {

textSize(40);
stroke("blue");
text("YouWin",200,200);
}
stroke((128,128,128));

if (keyDown(DOWN_ARROW)) {
snake.velocityX=0;
snake.velocityY=4;
}
if (keyDown(LEFT_ARROW)) {
snake.velocityX=-4;
snake.velocityY=0;
}
if (keyDown(RIGHT_ARROW)) {
snake.velocityX=4;
snake.velocityY=0;
}
if (keyDown(UP_ARROW)) {
snake.velocityX=0;
snake.velocityY=-4;
}
  
edges=createEdgeSprites();
snake.bounceOff(edges);

snake.bounceOff(cardboard1);
snake.bounceOff(cardboard2);
snake.bounceOff(cardboard3);
snake.bounceOff(cardboard4);
snake.bounceOff(cardboard5);
snake.bounceOff(cardboard6);
snake.bounceOff(cardboard7);
snake.bounceOff(cardboard8);
snake.bounceOff(cardboard9);
snake.bounceOff(cardboard10);
snake.bounceOff(cardboard11);
snake.bounceOff(cardboard12);
snake.bounceOff(cardboard13);
snake.bounceOff(cardboard14);
snake.bounceOff(cardboard15);
snake.bounceOff(cardboard16);
snake.bounceOff(cardboard17);
snake.bounceOff(cardboard18);
snake.bounceOff(cardboard19);
snake.bounceOff(cardboard20);
snake.bounceOff(cardboard21);
snake.bounceOff(cardboard22);
snake.bounceOff(cardboard23);
snake.bounceOff(cardboard24);
snake.bounceOff(cardboard25);
snake.bounceOff(cardboard26);

snake.collide(target);



textSize(19);
textFont("Poppins");
text("fruit",550,550);
textSize("19");
text("snake",30,43);

//spawnfood();
/*if(snake.isTouching(food)){
snake.velocityX+=2;  
}*/

drawSprites(); 
}

/*function spawnfood(){
food = createSprite(random(10,500),random(30,400),10,10);
food.setLifetime=200;






}*/