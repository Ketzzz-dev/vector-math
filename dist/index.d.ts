/**
 * The 2-Dimensional Vector class for storing a point in space.
 *
 * @class
 */
declare class Vector2 {
    /**
     * The `x` value of this Vector2.
     *
     * @public
     * @readonly
     * @property
     * @type {number}
     */
    readonly x: number;
    /**
     * The `y` value of this Vector2.
     *
     * @public
     * @readonly
     * @property
     * @type {number}
     */
    readonly y: number;
    /**
     * A constant Vector2 with both `x` and `y` values set to 0.
     *
     * @public
     * @static
     * @readonly
     * @type {Vector2}
     */
    static readonly ZERO: Vector2;
    /**
     * Instantiates a new Vector2 object.
     *
     * @public
     * @constructor
     * @param {number} x
     * @param {number} y
     */
    constructor(x: number, y: number);
    /**
     * The negative value of this Vector2.
     *
     * @public
     * @readonly
     * @type {Vector2}
     */
    get negative(): Vector2;
    /**
     * The magnitude (length) of this Vector2.
     *
     * @public
     * @readonly
     * @type {number}
     */
    get magnitude(): number;
    /**
     * The normalised form of this Vector2.
     *
     * @public
     * @readonly
     * @type {Vector2}
     */
    get normal(): Vector2;
    /**
     * Returns the String representation of his Vector2.
     *
     * @public
     * @method
     * @returns {string}
     */
    toString(): string;
    /**
     * Returns the Array representation of this Vector2.
     *
     * @public
     * @method
     * @returns {[number, number]}
     */
    toArray(): [number, number];
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
    static add(a: Vector2, b: Vector2): Vector2;
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
    static subtract(a: Vector2, b: Vector2): Vector2;
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
    static multiply(v: Vector2, s: number): Vector2;
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
    static divide(v: Vector2, s: number): Vector2;
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
    static mod(v: Vector2, s: number): Vector2;
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
    static equals(a: Vector2, b: Vector2): boolean;
    /**
     * Returns a Boolean that indicates whether `v`'s `x` or `y` values is not a number.
     *
     * @public
     * @static
     * @method
     * @param {Vector2} v - the Vector2 to be tested
     * @returns {boolean}
     */
    static isNaN(v: Vector2): boolean;
    /**
     * Returns a Boolean that indicates whether `v`'s `x` and `y` values are finite.
     *
     * @public
     * @static
     * @method
     * @param {Vector2} v - the Vector2 to be tested
     * @returns {boolean}
     */
    static isFinite(v: Vector2): boolean;
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
    static distance(a: Vector2, b: Vector2): number;
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
    static dot(a: Vector2, b: Vector2): number;
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
    static cross(a: Vector2, b: Vector2): number;
}
export { Vector2 };
export default Vector2;
