import Circle from './Circle.js';
import Vec2D from './Vec2D.js';

class Hole extends Circle {
  //

  constructor (x, y, diam) {
    super(x, y, diam);
  }

  touches (x, y) {
    return (new Circle(x, y, 0)).dist(this) < this.radius;
  }

  // public void draw (Graphics g)
  draw (g) {
    g.beginPath();
    g.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    g.fillStyle = 'Black';
    g.fill();
    g.closePath();
  }
}

export default Hole;
