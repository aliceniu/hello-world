let circleShape;
let squareShape;
let triangleShape;
let semiOval;
let quaterOval1;
let quaterOval2;

// numPixels variable
var numPixels = 2;
var rotateDegree = 0;
var circleW = 50;
var x = 0;

let circleX = 75;
let circleY = 475;

let squareX = 175;
let squareY = 475;
let squareW = 50;

let triangleX = 125;
let triangleY = 535;
let triangleW = 50;
let triangleH = 43;

let semiovalX = 310;
let semiovalY = 470;

let quateroval1X = 240;
let quateroval1Y = 525;

let quateroval2X = 375;
let quateroval2Y = 520;

function preload() {
  // preload() runs once
  circleShape = loadImage('assets/circle.png');
  squareShape = loadImage('assets/square.png');
  triangleShape = loadImage('assets/triangle.png');
  semiOval = loadImage('assets/semi-oval.png');
  quaterOval1 = loadImage('assets/quater-oval-1.png');
  quaterOval2 = loadImage('assets/quater-oval-2.png');
}

let circles = [];
let squares = [];
let triangles = [];
let semiovals = [];
let quaterovals1 = [];
let quaterovals2 = [];

function setup() {
  createCanvas(460, 600);
  resetSketch();
  
  // var button1 = createButton('reset');
  // button1.position(125, 75);
  // button1.mousePressed(resetSketch);

  // var button2 = createButton('save');
  
  
}

// reset the canvas by pressing the button
function resetSketch(){
  for (let i = 0; i < 3; i++){
    
    circles [i] = new Circle(circleX, circleY, circleW, circleW);
    
    squares [i] = new Square(squareX, squareY, squareW, squareW);

    triangles [i] = new Triangle(triangleX, triangleY, triangleW, triangleH);

    let semiovalW = 35;
    let semiovalH = semiOval.height/semiOval.width*semiovalW;
    semiovals [i] = new Semioval(semiovalX, semiovalY, semiovalW, semiovalH);

    let quateroval1W = 50;
    let quateroval1H = quaterOval1.height/quaterOval1.width*quateroval1W;
    quaterovals1 [i] = new Quateroval1(quateroval1X, quateroval1Y, quateroval1W, quateroval1H);

    let quateroval2W = 50;
    let quateroval2H = quaterOval2.height/quaterOval2.width*quateroval2W;
    quaterovals2 [i] = new Quateroval2(quateroval2X, quateroval2Y, quateroval2W, quateroval2H);    
  }
}

function draw() {
  background(255, 245, 215);
  cube();

  
  for (let i = 0; i < circles.length; i++){
    circles [i].show();
    circles [i].clicked();
  }
  for (let i = 0; i < squares.length; i++){
    squares [i].show();
    squares [i].clicked();
  }
  for (let i = 0; i < triangles.length; i++){
    triangles [i].show();
    triangles [i].clicked();
  }
  for (let i = 0; i < semiovals.length; i++){
    semiovals [i].show();
    semiovals [i].clicked();
  }
  for (let i = 0; i < quaterovals1.length; i++){
    quaterovals1 [i].show();
    quaterovals1 [i].clicked();
  }
  for (let i = 0; i < quaterovals2.length; i++){
    quaterovals2 [i].show();
    quaterovals2 [i].clicked();
  }

}

// the artboard of making letters + tool kit
function cube() {
  var cubeCorner = 15;
  fill(165, 154, 202);
  strokeWeight(10);
  stroke(255, 245, 215);
  rectMode(CENTER);
  rect(230, 235, 225, 225, cubeCorner);
  

  fill(255, 200, 120);
  noStroke();
  rect(230, 510, 500, 180);
}


function mouseReleased() {
  circles.push(new Circle(circleX, circleY, circleW, circleW));
  
  squares.push(new Square(squareX, squareY, squareW, squareW));
  
  triangles.push(new Triangle(triangleX, triangleY, triangleW, triangleH));

  let semiovalW = 35;
  let semiovalH = semiOval.height/semiOval.width*semiovalW;
  semiovals.push(new Semioval(semiovalX, semiovalY, semiovalW, semiovalH));

  let quateroval1W = 50;
  let quateroval1H = quaterOval1.height/quaterOval1.width*quateroval1W;
  quaterovals1.push(new Quateroval1(quateroval1X, quateroval1Y, quateroval1W, quateroval1H));

  let quateroval2W = 50;
  let quateroval2H = quaterOval2.height/quaterOval2.width*quateroval2W;
  quaterovals2.push(new Quateroval2(quateroval2X, quateroval2Y, quateroval2W, quateroval2H)); 
}

function keyPressed(){
  if (keyCode === ENTER){
    saveCanvas('cheese', 'jpg')
  }
}
