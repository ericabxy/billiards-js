import Circle from './Circle.js';
import Vec2D from './Vec2D.js';

class Ball extends Circle {
  vel = new Vec2D();
  tvec = new Vec2D();
  sunk = false;

  constructor (x, y, diam) {
    super(x, y, diam);
  }

  // public void decel (float val)
  decel (val) {
    if (val >= this.vel.mag( )) {
      this.vel.setVec(0, 0);
    } else {
      this.tvec.setVec(this.vel.dx, this.vel.dy);
      this.tvec.unitVec();
      this.tvec.mulVec(val);
      this.vel.subVec(this.tvec);
    }
  }

  // public void draw (Graphics g)
  draw (g) {
    g.beginPath();
    g.arc(this.x + 2, this.y + 2, this.radius, 0, 2 * Math.PI);
    g.fillStyle = 'DarkGray';
    g.fill();
    g.closePath();
    g.beginPath();
    g.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    if (this.sunk) {
      g.fillStyle = 'LightGray';
    } else {
      g.fillStyle = 'White';
    }
    g.fill();
    g.closePath();
  }

  // public boolean moving ()
  moving () {
    return this.vel.dx != 0 || this.vel.dy != 0;
  }

  // public void move (Rectangle bd)
  move (bd, friction) {
    let hitHorz = false;
    let hitVert = false;

    this.decel(friction);
    this.x += this.vel.dx;
    this.y += this.vel.dy;
    hitHorz = ((this.x - this.radius) < bd.x || (this.x + this.radius) > (bd.x + bd.width));
    if (hitHorz) {
      this.vel.dx = -this.vel.dx;
      this.x += this.vel.dx;
    }
    hitVert = ((this.y - this.radius) < bd.y || (this.y + this.radius) > (bd.y + bd.height));
    if (hitVert) {
      this.vel.dy = -this.vel.dy;
      this.y += this.vel.dy;
    }
    if (hitHorz || hitVert) {
      this.decel(this.vel.mag() * 0.60);
    }
  }
    
  putt (x, y) {
    this.vel.setVec((this.x - x) / 20, (this.y - y) / 20);
  }

  touches (x, y) {
    return (new Circle(x, y, 0)).dist(this) < this.radius;
  }
}

export default Ball;
