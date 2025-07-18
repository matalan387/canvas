const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');

// Canvas size
const width = canvas.width;
const height = canvas.height;

// Position the square at the bottom center of the canvas in the center
const squareSize = 50;
const squareX = (width - squareSize) / 2;
const squareY = height - squareSize;
// Clear the canvas
ctx.clearRect(0, 0, width, height);

// Draw the square
ctx.fillStyle = 'green';
ctx.fillRect(squareX, squareY, squareSize, squareSize);

// Optionally, draw the canvas border for reference
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, width, height);

