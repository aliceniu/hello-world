// settings for the triangle shape
class Quateroval1 {
//   set up variables for the triangle
  constructor(quateroval1X, quateroval1Y, quateroval1W, quateroval1H) {
    this.quateroval1X = quateroval1X;
    this.quateroval1Y = quateroval1Y;
    this.quateroval1W = quateroval1W;
    this.quateroval1H = quateroval1H;
  }
  
  clicked() {
    let d = dist( this.quateroval1X, this.quateroval1Y, mouseX, mouseY);
    if (d < this.quateroval1W/2 && mouseIsPressed){
      this.quateroval1X = mouseX;
      this.quateroval1Y = mouseY;
      
      if (keyIsDown(UP_ARROW)) {
        this.quateroval1W = this.quateroval1W + numPixels;
        this.quateroval1H = quaterOval1.height/quaterOval1.width*this.quateroval1W
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.quateroval1W = this.quateroval1W - numPixels;
        this.quateroval1H = quaterOval1.height/quaterOval1.width*this.quateroval1W
      }
    }    
  }
  
//   show the triangle image
  show() {
    imageMode(CENTER)
    image(quaterOval1, this.quateroval1X, this.quateroval1Y, this.quateroval1W, this.quateroval1H);
  }
}
