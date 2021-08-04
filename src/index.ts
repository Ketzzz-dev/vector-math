
/**
 * The 2-Dimensional Vector class for storing a point in space.
 */
export class Vector2 {
	/**
	 * The X value of this Vector2.
	 * 
	 * @type {number}
	 * @public
	 * @readonly
	 */
	public readonly x: number;
	/**
	 * The Y value of this Vector2.
	 * 
	 * @type {number}
	 * @public
	 * @readonly
	 */
	public readonly y: number;

	/**
	 * A constant Vector2 with 0 on both X and Y.
	 * 
	 * @type {Vector2}
	 * @public
	 * @static
	 * @readonly
	 */
	public static readonly ZERO = new Vector2(0, 0);

	/**
	 * @param {number} x
	 * @param {number} y
	 * @returns {Vector2}
	 */
	constructor(x: number, y: number) {
		/**
		 * The X value of this Vector2.
		 * 
		 * @type {number}
		 * @public
		 * @readonly
		 */
		this.x = x;
		/**
		 * The Y value of this Vector2.
		 * 
		 * @type {number}
		 * @public
		 * @readonly
		 */
		this.y = y;
	}

	/**
	 * The negative value of this Vector2.
	 * 
	 * @type {Vector2}
	 * @public
	 * @readonly
	 */
	public get negative(): Vector2 {
		return new Vector2(-this.x, -this.y);
	}
	/**
	 * The magnitude (length) of this Vector2.
	 * 
	 * @type {number}
	 * @public
	 * @readonly
	 */
	public get magnitude(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	/**
	 * The normal of this Vector2.
	 * 
	 * @type {Vector2}
	 * @public
	 * @readonly
	 */
	public get normal(): Vector2 {
		return MathV.divide(this, this.magnitude);
	}

	/**
	 * Returns the string representation of a Vector2.
	 * 
	 * @public
	 * @returns {string}
	 */
	public toString(): string {
		return `x: ${this.x}, y: ${this.y}`;
	}
}
/**
 * The Math Vector class for handling 2-Dimensional Vector math.
 * 
 * @abstract
 */
export abstract class MathV {
	/**
	 * Returns the sum of 2 Vector2's.
	 * 
	 * @public
	 * @static
	 * @param {Vector2} a 
	 * @param {Vector2} b
	 * @returns {Vector2}
	 */
	public static add(a: Vector2, b: Vector2): Vector2 {
		return new Vector2(a.x + b.x, a.y + b.y);
	}
	/**
	 * Returns the difference between 2 Vector2's.
	 * 
	 * @public
	 * @static
	 * @param {Vector2} a
	 * @param {Vector2} b
	 * @returns {Vector2}
	 */
	public static subtract(a: Vector2, b: Vector2): Vector2 {
		return new Vector2(a.x - b.x, a.y - b.y);
	}
	/**
	 * Returns the product of a Vector2 multiplied by a Scalar.
	 * 
	 * @public
	 * @static
	 * @param {Vector2} vector
	 * @param {number} scalar
	 * @returns {Vector2}
	 */
	public static multiply(vector: Vector2, scalar: number): Vector2 {
		return new Vector2(vector.x * scalar, vector.y * scalar);
	}
	/**
	 * Returns the quotient of a Vector2 divided by a Scalar.
	 * 
	 * @public
	 * @static
	 * @param {Vector2} vector
	 * @param {number} scalar
	 * @returns {Vector2}
	 */
	public static divide(vector: Vector2, scalar: number): Vector2 {
		return new Vector2(vector.x / scalar, vector.y / scalar);
	}
	/**
	 * Compares 2 Vector2's and returns true if both share equal X and Y values.
	 * 
	 * @public
	 * @static
	 * @param {Vector2} a
	 * @param {Vector2} b
	 * @returns {boolean}
	 */
	public static equals(a: Vector2, b: Vector2): boolean {
		return a.x === b.x && a.y === b.y;
	}
	
	/**
	 * Checks if either X or Y values of a Vector2 is not a number.
	 * 
	 * @public
	 * @static
	 * @param {Vector2} Vector
	 * @returns {boolean}
	 */
	public static isNaN(vector: Vector2): boolean {
		return isNaN(vector.x) || isNaN(vector.y)
	}
	/**
	 * Checks if both X and Y values of a Vector2 is finite.
	 * 
	 * @public
	 * @static
	 * @param {Vector2} vrctor
	 * @returns {boolean}
	 */
	public static isFinite(vector: Vector2): boolean {
		return isFinite(vector.x) && isFinite(vector.y)
	}
	/**
	 * Returns the distance between 2 Vector2's.
	 * 
	 * @public
	 * @static
	 * @param {Vector2} a
	 * @param {Vector2} b
	 */
	public static distance(a: Vector2, b: Vector2): number {
		return MathV.subtract(a, b).magnitude;
	}
	/**
	 * Returns the dot product of 2 Vector2's.
	 * 
	 * @public
	 * @static
	 * @param {Vector2} a
	 * @param {Vector2} b
	 * @returns {number}
	 */
	public static dot(a: Vector2, b: Vector2): number {
		return a.x * b.x + a.y * b.y;
	}
	/**
	 * Returns the cross product of 2 Vector2's.
	 * 
	 * @public
	 * @static
	 * @param {Vector2} a
	 * @param {Vector2} b
	 * @returns {number}
	 */
	public static cross(a: Vector2, b: Vector2): number {
		return a.x * b.y + a.y * b.x;
	}
}