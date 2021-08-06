/**
 * The 2-Dimensional Vector class for storing a point in space.
 * 
 * @class
 */
class Vector2 {
	/**
	 * The `x` value of this Vector2.
	 * 
	 * @public
	 * @readonly
	 * @property
	 * @type {number}
	 */
	public readonly x: number
	/**
	 * The `y` value of this Vector2.
	 * 
	 * @public
	 * @readonly
	 * @property
	 * @type {number}
	 */
	public readonly y: number
	
	/**
	 * A constant Vector2 with both `x` and `y` values set to 0.
	 * 
	 * @public
	 * @static
	 * @readonly
	 * @type {Vector2}
	 */
	public static readonly ZERO = new Vector2(0, 0)
	
	/**
	 * Instantiates a new Vector2 object.
	 * 
	 * @public
	 * @constructor
	 * @param {number} x
	 * @param {number} y
	 */
	public constructor(x: number, y: number) {
		/**
		 * The `x` value of this Vector2.
		 * 
		 * @public
		 * @readonly
		 * @type {number}
		 */
		this.x = x
		/**
		 * The `y` value of this Vector2.
		 * 
		 * @public
		 * @readonly
		 * @type {number}
		 */
		this.y = y
	}
	
	/**
	 * The negative value of this Vector2.
	 * 
	 * @public
	 * @readonly
	 * @type {Vector2}
	 */
	public get negative(): Vector2 {
		return new Vector2(-this.x, -this.y)
	}
	/**
	 * The magnitude (length) of this Vector2.
	 * 
	 * @public
	 * @readonly
	 * @type {number}
	 */
	public get magnitude(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}
	/**
	 * The normalised form of this Vector2.
	 * 
	 * @public
	 * @readonly
	 * @type {Vector2}
	 */
	public get normal(): Vector2 {
		return Vector2.divide(this, this.magnitude)
	}
	
	/**
	 * Returns the String representation of his Vector2.
	 * 
	 * @public
	 * @method
	 * @returns {string}
	 */
	public toString(): string {
		return `x: ${this.x.toString()}, y: ${this.y.toString()}`
	}
	/**
	 * Returns the Array representation of this Vector2.
	 * 
	 * @public
	 * @method
	 * @returns {[number, number]}
	 */
	public toArray(): [number, number] {
		return [this.x, this.y]
	}
	
	/**
	 * Returns the sum of 2 Vector2's.
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} a - the first addend
	 * @param {Vector2} b - the second addend
	 * @returns {Vector2}
	 */
	public static add(a: Vector2, b: Vector2): Vector2 {
		return new Vector2(a.x + b.x, a.y + b.y)
	}
	/**
	 * Returns the difference of 2 Vector2's
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} a - the minuend
	 * @param {Vector2} b - the subtrahend
	 * @returns {Vector2}
	 */
	public static subtract(a: Vector2, b: Vector2): Vector2 {
		return new Vector2(a.x - b.x, a.y - b.y)
	}
	/**
	 * Returns the product of a Vector2 multiplied by a Scalar.
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} v - the multiplicand
	 * @param {number} s - the multiplier
	 * @returs {Vector2}
	 */
	public static multiply(v: Vector2, s: number): Vector2 {
		return new Vector2(v.x * s, v.y * s)
	}
	/**
	 * Returns the quotient of a Vector2 divided by a Scalar.
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} v - the divisor
	 * @param {number} s - the diviidend
	 * @returns {Vector2}
	 */
	public static divide(v: Vector2, s: number): Vector2 {
		return new Vector2(v.x / s, v.y / s)
	}
	/**
	 * Returns the remainder of a Vector2 divided by a Scalar.
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} v - the divisor
	 * @param {number} s - the diviidend
	 * @returns {Vector2}
	 */
	public static mod(v: Vector2, s: number): Vector2 {
		return new Vector2(v.x % s, v.y % s)
	}
	/**
	 * Returns a Boolean that indicates wheter `a` and `b` both have equal `x` and `y` values.
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} a - the first operand
	 * @param {Vector2} b - the second operand
	 * @returns {boolean}
	 */
	public static equals(a: Vector2, b: Vector2): boolean {
		return a.x === b.x && a.y === b.y
	}
	/**
	 * Returns a Boolean that indicates whether `v`'s `x` or `y` values is not a number.
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} v - the Vector2 to be tested
	 * @returns {boolean}
	 */
	public static isNaN(v: Vector2): boolean {
		return isNaN(v.x) || isNaN(v.y)
	}
	/**
	 * Returns a Boolean that indicates whether `v`'s `x` and `y` values are finite.
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} v - the Vector2 to be tested
	 * @returns {boolean}
	 */
	public static isFinite(v: Vector2): boolean {
		return isFinite(v.x) && isFinite(v.y)
	}
	/**
	 * Returns the distance between 2 Vector2's
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} a - the starting point
	 * @param {Vector2} b - the ending point
	 * @returns {number}
	 */
	public static distance(a: Vector2, b: Vector2): number {
		return Vector2.subtract(a, b).magnitude
	}
	/**
	 * Returns the dot product of 2 Vector2's
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} a - the first Vector2
	 * @param {Vector2} b - the second Vector2
	 * @returns {number}
	 */
	public static dot(a: Vector2, b: Vector2): number {
		return a.x * b.x + a.y * b.y
	}
	/**
	 * Returns the cross product of 2 Vector2's
	 * 
	 * @public
	 * @static
	 * @method
	 * @param {Vector2} a - the first Vector2
	 * @param {Vector2} b - the second Vector2
	 * @returns {number}
	 */
	public static cross(a: Vector2, b: Vector2): number {
		return a.x * b.y + a.y * b.x
	}
}

export { Vector2 }
export default Vector2

