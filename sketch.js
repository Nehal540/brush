let brushSize = 10; // Initial brush size

function setup() {
  createCanvas(800, 600);
  background(144, 238, 144); // Set background to light green
}

function draw() {
  if (mouseIsPressed) {
    stroke(255, 0, 0); // Set the stroke color to red
    strokeWeight(brushSize); // Set the stroke weight to brushSize

    let x1 = pmouseX; // Previous mouse X position
    let y1 = pmouseY; // Previous mouse Y position
    let x2 = mouseX; // Current mouse X position
    let y2 = mouseY; // Current mouse Y position

    // Draw multiple lines to simulate a brush effect
    for (let i = 0; i < 10; i++) {
      let offsetX = random(-brushSize, brushSize);
      let offsetY = random(-brushSize, brushSize);
      line(x1 + offsetX, y1 + offsetY, x2 + offsetX, y2 + offsetY);
    }
  }
}

function mousePressed() {
  // Optional: change the brush size on mouse press
  brushSize = random(5, 20);
}
