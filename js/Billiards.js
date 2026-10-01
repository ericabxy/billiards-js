import Ball from './Ball.js';
import Hole from './Hole.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const gap = 20;
const friction = 0.005;
const balls = [];
const ball = new Ball(150, 250, 12);
balls.push(ball);
balls.push(new Ball(100, 50, 12));
balls.push(new Ball(200, 50, 12));
balls.push(new Ball(150, 75, 12));
const hole = new Hole(25, 275, 25);

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
  ctx.fillStyle = "Green";
  ctx.fill();
  ctx.closePath();
  hole.draw(ctx);
  for (const ball of balls) {
    ball.draw(ctx);
  }
  if (select) {
    ctx.beginPath();
    ctx.moveTo(ball.x, ball.y);
    ctx.lineTo(putt.x, putt.y);
    ctx.strokeStyle = "Red";
    ctx.stroke();
    ctx.closePath();
  }
}, 10);
