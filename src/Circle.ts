import Point2D from './Point2D.ts';

class Circle {
  radius: number;
  diam: number;
  
  constructor (x: number, y: number, diam: number) {
    super(x, y);
    this.diam = diam;
    this.radius = diam / 2;
  }
  
  dist (Circle loc) {
    xSq = loc.x - this.x;
    ySq = loc.y - this.y;
    return Math.sqrt((xSq * xSq) + (ySq * ySq));
  }

  draw (ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Circle;
