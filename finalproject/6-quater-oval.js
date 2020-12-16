// settings for the triangle shape
class Quateroval2 {
//   set up variables for the triangle
  constructor(quateroval2X, quateroval2Y, quateroval2W, quateroval2H) {
    this.quateroval2X = quateroval2X;
    this.quateroval2Y = quateroval2Y;
    this.quateroval2W = quateroval2W;
    this.quateroval2H = quateroval2H;
  }
  
  clicked() {
    let d = dist( this.quateroval2X, this.quateroval2Y, mouseX, mouseY);
    if (d < this.quateroval2W/2 && mouseIsPressed){
      this.quateroval2X = mouseX;
      this.quateroval2Y = mouseY;
      
      if (keyIsDown(UP_ARROW)) {
        this.quateroval2W = this.quateroval2W + numPixels;
        this.quateroval2H = quaterOval2.height/quaterOval2.width*this.quateroval2W
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.quateroval2W = this.quateroval2W - numPixels;
        this.quateroval2H = quaterOval2.height/quaterOval2.width*this.quateroval2W
      }
    }    
  }
  
//   show the triangle image
  show() {
    imageMode(CENTER)
    image(quaterOval2, this.quateroval2X, this.quateroval2Y, this.quateroval2W, this.quateroval2H);
  }
}
