import Point2D from './Point2D.js';

class Circle extends Point2D {
  radius;
  diam;

  constructor (x, y, diam) {
    super(x, y);
    this.radius = diam / 2;
    this.diam = diam;
  }
    
  dist (loc) {
    let dx = loc.x - this.x;
    let dy = loc.y - this.y;
    return Math.sqrt((dx * dx) + (dy * dy));
  }
}

export default Circle;
