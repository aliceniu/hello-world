var x;
var y;

function setup() {
  createCanvas(800,450);
  background(250);
  x = width / 2;
  y = height;
}

function draw() {
  
  let w = random(5);

  stroke(random(255),0,random(255));
	strokeWeight(w);
  //fill in random color
  fill(random(255),0,random(255));
  //make random shapes
  // var x = random(width);
  // var y = random(height);

  ellipse(x , y , random(60) , random(60));
  y = y - 1;
  if (y <= -10) {
    y = height;
  }
  x = x + random(-50,50);
  
  if(x<= 0 || x >= width)
  {
  x = width/2;
  }



  if(keyCode === ENTER){
     saveCanvas('myCanvas', 'png');
     }

}