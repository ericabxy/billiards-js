import Ball from './Ball.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const gap = 20;
const friction = 0.005;
const ball = new Ball(100, 100, 10);

let select = false;
let putt = {x: 0, y: 0}

canvas.addEventListener("mousedown", event => {
  if (ball.sunk) {
  }
  if (!ball.moving() && (select = ball.touches(event.offsetX, event.offsetY))) {
    putt.x = event.offsetX;
    putt.y = event.offsetY;
  }
});

window.addEventListener("mouseup", event => {
  if (select) {
    ball.putt(putt.x, putt.y);
  }
  select = false;
});

window.addEventListener("mousemove", event => {
  if (select) {
    putt.x = event.offsetX;
    putt.y = event.offsetY;
  }
});

setInterval(() => {
  ball.move({x: 0, y: 0, width: width, height: height}, friction);
  ctx.beginPath();
  ctx.rect(0, 0, width, height);
  ctx.fillStyle = "DarkGreen";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.ellipse(width / 2, height / 2, width / 2 - gap, height / 2 - gap, 0, Math.PI * 2, false);
  ctx.fillStyle = "LightGreen";
  ctx.fill();
  ctx.closePath();
  ball.draw(ctx);
  if (select) {
    ctx.beginPath();
    ctx.moveTo(ball.x, ball.y);
    ctx.lineTo(putt.x, putt.y);
    ctx.strokeStyle = "Red";
    ctx.stroke();
    ctx.closePath();
  }
}, 10);

