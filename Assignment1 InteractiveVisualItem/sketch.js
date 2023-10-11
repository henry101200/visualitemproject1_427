let circleY = [];
let rectX = 250;
let rectY = 280;
let rectWidth=10;
let move = 5;
let gamestate = 'running';

function setup() {
  //frameRate(72);
  createCanvas(500, 300);
  for (let i = 0; i < 130; i+=5) {
    circleY[i] = random(0,250);
  }
}

function draw() {
  background(50);
  
    switch (gamestate) {
    case 'lose':
      loseScreen();
      break;
    default:

  for (let i = 0; i < circleY.length; i++) {
    let circleX = width * i / circleY.length;
    circle(circleX, circleY[i], 10);
    
    if((dist(rectX +rectWidth/2,rectY + rectWidth/2,circleX,circleY[i])<10)){
      circle(circleX, circleY[i], 10);
      gamestate = 'lose';
    }
    
    circleY[i]++;
    
    if (circleY[i] > height) {
      circleY[i] = 0;
    }
  }  
        
  function loseScreen() {
  noStroke();
  fill('black');
  square(0, 0, 800);
}
        
    if (keyIsDown(LEFT_ARROW)) {
    rectX -= move;
      if (rectX<0){
      rectX=0
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rectX += move;
      if (rectX>490){
      rectX=490
    }
  }

  if (keyIsDown(UP_ARROW)) {
    rectY -= move;
      if (rectY<0){
      rectY=0
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    rectY += move;
      if (rectY>290){
      rectY=290
    }
  }
  rect(rectX, rectY, rectWidth, rectWidth); 

    }
}
