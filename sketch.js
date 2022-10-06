let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  //capture.hide();
}

function draw() {
  background(255);
 image(capture, 0, 0, width, height);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}