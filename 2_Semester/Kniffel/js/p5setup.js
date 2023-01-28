let sketch = new p5();
let width = windowWidth;
let height = windowHeight;
window.width = width;

function setup() {
  sketch.createCanvas(windowWidth, windowHeight);
  sketch.frameRate(30);
}
window.setup = setup;

function preload() {
  window.fontKniffel = loadFont("./assets/summit_attack.ttf");
  window.titleImage = loadImage("./assets/Titel.png");
  window.tableImage = loadImage("./assets/table.png");
}
window.preload = preload;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);
