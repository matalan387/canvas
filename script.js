const canvas = document.getElementById('firstCanvas');
const ctx = canvas.getContext('2d');

const center = { x: 300, y: 150 }; // Triangle center
const size = 100; // Triangle size
let angle = 0; // In radians

function drawTriangle(x, y, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  ctx.beginPath();
  ctx.moveTo(0, -size / Math.sqrt(3));           // Top
  ctx.lineTo(-size / 2, size / (2 * Math.sqrt(3))); // Bottom left
  ctx.lineTo(size / 2, size / (2 * Math.sqrt(3)));  // Bottom right
  ctx.closePath();

  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.restore();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Optional background rectangle
  ctx.fillStyle = 'white';
  ctx.fillRect(50, 50, 200, 100);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, 50, 200, 100);

  drawTriangle(center.x, center.y, angle);
  requestAnimationFrame(render);
}

document.addEventListener('keydown', (e) => {
  const rotation = (Math.PI * 2) / 3; // 120 degrees

  if (e.key === 'a' || e.key === 'A') {
    angle -= rotation;
  } else if (e.key === 'd' || e.key === 'D') {
    angle += rotation;
  }
});

render(); // Start animation loop
