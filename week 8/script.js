var video;

// pixel size
var vScale = 16;

var slider;

function setup() {
  createCanvas(640, 480);
//   retina screen has higher pixel density
  pixelDensity(1);
  
  video = createCapture(VIDEO);
//   make the video smaller so the image can be pixelated
  video.size(width / vScale, height / vScale);
  
//   create slider for changing threshold
  slider = createSlider(0, 255, 127);
  
  video.hide()
}

function draw() {
  background(51);
//   this can detect pixel of the video
  video.loadPixels();
  
// setting up pixel array
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      
//       mirror the video
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      

      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
//       draw the size of sqaure based on the brightness
      var w = map(bright, 0, 255, 0, vScale);
      
      noStroke();
      fill(255);
      
//       draw the square from the center
      rectMode(CENTER);
//       pixelated effect
      rect(x * vScale, y * vScale, w, w);
    }
  }

}