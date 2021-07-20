export class Vector2 {
	public readonly x: number;
	public readonly y: number;

	public static readonly ZERO = new Vector2(0, 0);

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public get negative(): Vector2 {
		return new Vector2(-this.x, -this.y);
	}
	public get magnitude(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	public get normal(): Vector2 {
		return MathV.divide(this, this.magnitude);
	}

	public toString(): string {
		return `x: ${this.x}, y: ${this.y}`;
	}
}
export abstract class MathV {
	public static add(a: Vector2, b: Vector2): Vector2 {
		return new Vector2(a.x + b.x, a.y + b.y);
	}
	public static subtract(a: Vector2, b: Vector2): Vector2 {
		return new Vector2(a.x - b.x, a.y - b.y);
	}
	public static multiply(v: Vector2, s: number): Vector2 {
		return new Vector2(v.x * s, v.y * s);
	}
	public static divide(v: Vector2, s: number): Vector2 {
		return new Vector2(v.x / s, v.y / s);
	}
	public static equals(a: Vector2, b: Vector2): boolean {
		return a.x === b.x && a.y === b.y;
	}
	public static isNaN(v: Vector2): boolean {
		return isNaN(v.x) || isNaN(v.y)
	}
	public static isFinite(v: Vector2): boolean {
		return isFinite(v.x) && isFinite(v.y)
	}
	public static distance(a: Vector2, b: Vector2): number {
		return MathV.subtract(a, b).magnitude;
	}
	public static dot(a: Vector2, b: Vector2): number {
		return a.x * b.x + a.y * b.y;
	}
	public static cross(a: Vector2, b: Vector2): number {
		return a.x * b.y + a.y * b.x;
	}
}