let x; 
let y;

let xStart;
let yStart;
let yGrowth;
let weight;
let xSpread;
let xSpreadLerp = 0.1;
let yStartSpread;
let length;
let colorSpread = 0;
let alpha;



function setup() {
  canvaResize();
  lineReset();
  
}

function draw() {
  //background(255);
  x = lerp(x, x + random(-xSpread,xSpread) ,xSpreadLerp);
  y += yGrowth; 
  if(y >= length){
    newRow();
  }
  colorSpread = random(50);
  fill(0+colorSpread,0+colorSpread,0+colorSpread,alpha);
  noStroke();
  circle(x,y,weight);
  //text(length,20,20);

}

function windowResized(){
  canvaResize();
  lineReset();
}

function newRow(){
  yStartSpread = random(height*-0.003,height*0.003);
  y = yStart + yStartSpread;
  x += weight * 1.6;
  if(x>=width*0.9){
    yGrowth = 0;
    alpha=0;
  }
  length = height*0.8+random(height*-0.003,height*0.003);
}

function canvaResize(){
  let canvaWidth = windowWidth;
  let canvaHeight = canvaWidth*0.3;
  let cnv = createCanvas(canvaWidth, canvaHeight);
  cnv.position(0,windowHeight*0.5-height*0.5);
}

function lineReset(){
  background(255);
  alpha = 255;
  xStart = width * 0.1;
  yStart = height *0.2;
  yStartSpread = random(height*-0.003,height*0.003);
  xSpread = width * 0.0005;
  y = yStart + yStartSpread;
  x = xStart + random(xSpread);
  weight = width*0.001;
  yGrowth = 1;
  //yGrowth = 100;
  length = height*0.8+random(height*-0.003,height*0.003);
}