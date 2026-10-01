import Ball from './Ball.js';
import Hole from './Hole.js';

class JavaPool {
  balls = [];
  numBalls = 0;

  resetTable () {
  }

  updateBalls () {
    for (ii = 1; ii < this.numBalls; ii++)
      for (jj = 0; jj < ii; jj++) {
        this.balls[ii].edgeIntercept();
        this.balls[ii].pathIntercept();
        if ()
          this.balls[ii].bounce();
        else
          this.balls[ii].collide();
        
      }
  }
}

export default JavaPool;
