const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');

// Canvas size
const width = canvas.width;
const height = canvas.height;

// Find the shortest side
const shortestSide = Math.min(width, height);

// Make square 10x smaller than shortest side
const squareSize = shortestSide / 10;

// Position the square in the center
const squareX = (width - squareSize) / 2;
const squareY = (height - squareSize) / 2;

// Draw the square
ctx.fillStyle = 'blue';
ctx.fillRect(squareX, squareY, squareSize, squareSize);

// Optionally, draw the canvas border for reference
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.strokeRect(0, 0, width, height);
