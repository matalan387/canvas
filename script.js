const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
const planetSelect = document.getElementById('planetSelect');

const width = canvas.width;
const height = canvas.height;

const squareSize = 40;
let gravity = parseFloat(planetSelect.value); // initial gravity from dropdown
const bounceFactor = 0.7; // energy loss on bounce

// Square state
const square = {
  x: width / 2 - squareSize / 2,
  y: 0,
  vx: 0,
  vy: 0,
  size: squareSize
};

// Update gravity when dropdown changes
planetSelect.addEventListener('change', () => {
  gravity = parseFloat(planetSelect.value);
  // reset position and velocity
  square.y = 0;
  square.vy = 0;
});

// Physics update
function update() {
  square.vy += gravity * 0.1; // simulate gravity (scaled for animation)
  square.y += square.vy;

  // Bounce off the bottom
  if (square.y + square.size > height) {
    square.y = height - square.size;
    square.vy *= -bounceFactor;

    // Small velocities are stopped
    if (Math.abs(square.vy) < 0.5) {
      square.vy = 0;
    }
  }
}

// Drawing
function draw() {
  ctx.clearRect(0, 0, width, height);

  // Draw square
  ctx.fillStyle = 'blue';
  ctx.fillRect(square.x, square.y, square.size, square.size);

  // Show gravity value
  ctx.fillStyle = 'black';
  ctx.font = '16px sans-serif';
  ctx.fillText(`Gravity: ${gravity.toFixed(2)} m/s²`, 10, 20);
}

// Main loop
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
