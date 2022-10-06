let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
 // capture.size(windowWidth, windowHeight);
  //capture.hide();
}

function draw() {
  background(0);
  image(capture, 0, 0, windowWidth, width * capture.height / capture.width);
  //image(capture, 0, 0, width, height);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}