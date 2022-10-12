let capture;
let devices = [];
let mirrorFlag = false;
let deviceID = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  setupCamera();
}

function draw() {
  background(0);
  if (typeof (capture.loadedmetadata) != "undefined" && capture.loadedmetadata) {
    if (mirrorFlag) {
      push();
      translate(windowWidth,0)
      scale(-1, 1)
      image(capture, 0, 0, windowWidth, width * capture.height / capture.width);
      pop();
    } else {
      image(capture, 0, 0, windowWidth, width * capture.height / capture.width);
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setupCamera() {
  devices = [];
  navigator.mediaDevices.enumerateDevices()
    .then(gotDevices);
}

function gotDevices(deviceInfos) {
  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i];
    if (deviceInfo.kind == 'videoinput') {
      devices.push({
        label: deviceInfo.label,
        id: deviceInfo.deviceId
      });
    }
  }
  console.log(devices);
  let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  console.log(supportedConstraints);
  var constraints = {
    video: {
      deviceId: {
        exact: devices[deviceID].id
      },
    }
  };
  capture = createCapture(constraints);
}

function mouseClicked() {
  setupContextmenu()
}

function keyPressed() {
  if (keyCode == ENTER) {
    mirrorFlag = !mirrorFlag;
  }
}

function setupContextmenu() {
  let text;
  let deviceList = "All cameras:";
  for (let i = 0; i !== devices.length; ++i) {
    deviceList = deviceList + "\n id: " + i + " label: " + devices[i].label;
  }
  let setID = prompt(deviceList + "\n \n Enter the desired camera ID", "0");

  if (setID == null || setID == "") {
    console.log("User cancelled the prompt.");
  } else {
    deviceID = setID
    setupCamera();
  }
}