// settings for the square shape
class Square {
//   set up variables for the circle
  constructor(squareX, squareY, squareW = 50) {
    this.squareX = squareX;
    this.squareY = squareY;
    this.squareW = squareW;
  }
  
  clicked() {
    let d = dist( this.squareX, this.squareY, mouseX, mouseY);
    if (d < this.squareW/2 && mouseIsPressed){
      this.squareX = mouseX;
      this.squareY = mouseY;
      
      if (keyIsDown(UP_ARROW)) {
        this.squareW = this.squareW + numPixels;
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.squareW = this.squareW - numPixels;
      }
    }    
  }
  
//   show the square image
  show() {
    imageMode(CENTER)
    image(squareShape, this.squareX, this.squareY, this.squareW, this.squareW);
  }
}
