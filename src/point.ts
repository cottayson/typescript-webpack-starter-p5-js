/**
 * Creates a new Point.
 */
export class Point {
  x: number;
  y: number;
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
  /**
   * Calculate length of two dimensional vector.
   */
  get length(): number {
    return Math.hypot(this.x, this.y);
  }
  /**
   * Print point object to console
   */
  print(): void {
    console.log(`Point (${this.x}, ${this.y})`);
  }
}
