class Vec2D {
    dx: number = 0.00;
    dy: number = 0.00;

    // public void setVec (float dx, float dy)
    setVec (dx: number, dy: number): void {
        this.dx = dx;
        this.dy = dy;
    }

    // public float mag ()
    mag (): number {
        return Math.sqrt(
            this.dx * this.dx +
            this.dy * this.dy
        )
    }

    // public void addVec (Vec2D vec)
    addVec (vec: Vec2D): void {
        this.dx += vec.dx;
        this.dy += vec.dy;
    }

    // public void subVec (Vec2D vec)
    subVec (vec: Vec2D): void {
        this.dx -= vec.dx;
        this.dy -= vec.dy;
    }

    // public void unitVec ()
    unitVec (): void {
        var mag = this.mag();
        this.setVec(this.dx / mag, this.dy / mag);
    }
    
    mulVec (scale) {
        this.setVec(this.dx * scale, this.dy * scale);
    }
}

export default Vec2D;
