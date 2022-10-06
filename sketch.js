let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);

function draw() {
  background(0);
  image(capture, 0, 0, windowWidth, width * capture.height / capture.width);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
