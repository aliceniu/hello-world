// settings for the triangle shape
class Triangle {
//   set up variables for the triangle
  constructor(triangleX, triangleY, triangleW, triangleH) {
    this.triangleX = triangleX;
    this.triangleY = triangleY;
    this.triangleW = triangleW;
    this.triangleH = triangleH;
  }
  
  clicked() {
    let d = dist( this.triangleX, this.triangleY, mouseX, mouseY);
    if (d < this.triangleW/2 && mouseIsPressed){
      this.triangleX = mouseX;
      this.triangleY = mouseY;
      
      if (keyIsDown(UP_ARROW)) {
        this.triangleW = this.triangleW + numPixels;
        this.triangleH = triangleShape.height/triangleShape.width*this.triangleW
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.triangleW = this.triangleW - numPixels;
        this.triangleH = triangleShape.height/triangleShape.width*this.triangleW
      }
      
      if (keyIsDown(LEFT_ARROW)) {
        push();
        rotateDegree -= 5;
        translate(mouseX, mouseY);
        rotate(rotateDegree);
        imageMode(CENTER)
        image(triangleShape, 0, 0, this.triangleW, triangleShape.height/triangleShape.width*this.triangleW)
        pop();
    }

      if (keyIsDown(RIGHT_ARROW)) {
        push();
        rotateDegree += 5;
        translate(mouseX, mouseY);
        rotate(rotateDegree);
        imageMode(CENTER)
        image(triangleShape, 0, 0, this.triangleW, triangleShape.height/triangleShape.width*this.triangleW)
        pop();
      }
    }    
  }
  
//   show the triangle image
  show() {
    imageMode(CENTER)
    image(triangleShape, this.triangleX, this.triangleY, this.triangleW, this.triangleH);
  }
}
