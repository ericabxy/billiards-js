class Circle {
  x; y;
  radius;
  diam;

  constructor (x, y, diam) {
    this.x = x;
    this.y = y;
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
