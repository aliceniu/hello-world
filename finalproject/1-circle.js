// settings for the circle shape
class Circle {
//   set up variables for the circle
  constructor(circleX, circleY, circleW) {
    this.circleX = circleX;
    this.circleY = circleY;
    this.circleW = circleW;
  }
  
//   how to drag this circle
  clicked() {
    let d = dist( this.circleX, this.circleY, mouseX, mouseY);
    if (d < this.circleW/2 && mouseIsPressed){
      this.circleX = mouseX;
      this.circleY = mouseY;
      
      if (keyIsDown(UP_ARROW)) {
      this.circleW = this.circleW + numPixels;
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.circleW = this.circleW - numPixels;
      }
    }
    
  }


//   show the circle image
  show() {
    imageMode(CENTER)
    image(circleShape, this.circleX, this.circleY, this.circleW, this.circleW);
  }

}