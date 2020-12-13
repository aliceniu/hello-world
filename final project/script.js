let img;
let circle;
let square;
let triangle;
let semiOval;
let quaterOval;

function preload() {
  // preload() runs once
  circle = loadImage('/assets/circle.png');
  square = loadImage('/assets/square.png');
  triangle = loadImage('/assets/triangle.png');
  semiOval = loadImage('/assets/semi-oval.png');
  quaterOval = loadImage('/assets/quater-oval.png');
}

function setup() {
  createCanvas(400,400);
  background(255, 245, 215);

}

function draw() {
  cube();
  image(circle, 25, 25, 50, 50);
  image(square, 25, 25, 50, 50);
  image(triangle, 25, 25, 50, 50);
  image(semiOval, 25, 25, 50, 50);
  image(quaterOval, 25, 25, 50, 50);
}

function cube(){
  var cubeCorner = 15;
  
  rect(50, 100, 200, 200, cubeCorner);
  
  fill(165, 154, 202);
  strokeWeight(10);
  stroke(255, 245, 215);
}





// function clicked(draggedX, draggedY){
//     let d = dist(draggedX, draggedY, this.xpos, this.ypos);
  
//   if (d < this.r){
//     circleShape = circle(mouseX, mouseY, 50);
//   }
// }

function mouseReleased() {
}