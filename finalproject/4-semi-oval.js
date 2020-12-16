// settings for the triangle shape
class Semioval {
//   set up variables for the triangle
  constructor(semiovalX, semiovalY, semiovalW, semiovalH) {
    this.semiovalX = semiovalX;
    this.semiovalY = semiovalY;
    this.semiovalW = semiovalW;
    this.semiovalH = semiovalH;
  }
  
  clicked() {
    let d = dist( this.semiovalX, this.semiovalY, mouseX, mouseY);
//     check if mouse is pressed on the object
    if (d < this.semiovalW/2 && mouseIsPressed){
      this.semiovalX = mouseX;
      this.semiovalY = mouseY;
      
//       how to resize
      if (keyIsDown(UP_ARROW)) {
        this.semiovalW = this.semiovalW + numPixels;
        this.semiovalH = semiOval.height/semiOval.width*this.semiovalW
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.semiovalW = this.semiovalW - numPixels;
        this.semiovalH = semiOval.height/semiOval.width*this.semiovalW
      }
    }    
  }
  
//   show the semi-oval image
  show() {
    imageMode(CENTER)
    image(semiOval, this.semiovalX, this.semiovalY, this.semiovalW, this.semiovalH);
  }
}
