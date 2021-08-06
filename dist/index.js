"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
/**
 * The 2-Dimensional Vector class for storing a point in space.
 *
 * @class
 */
class Vector2 {
    /**
     * Instantiates a new Vector2 object.
     *
     * @public
     * @constructor
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        /**
         * The `x` value of this Vector2.
         *
         * @public
         * @readonly
         * @type {number}
         */
        this.x = x;
        /**
         * The `y` value of this Vector2.
         *
         * @public
         * @readonly
         * @type {number}
         */
        this.y = y;
    }
    /**
     * The negative value of this Vector2.
     *
     * @public
     * @readonly
     * @type {Vector2}
     */
    get negative() {
        return new Vector2(-this.x, -this.y);
    }
    /**
     * The magnitude (length) of this Vector2.
     *
     * @public
     * @readonly
     * @type {number}
     */
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * The normalised form of this Vector2.
     *
     * @public
     * @readonly
     * @type {Vector2}
     */
    get normal() {
        return Vector2.divide(this, this.magnitude);
    }
    /**
     * Returns the String representation of his Vector2.
     *
     * @public
     * @method
     * @returns {string}
     */
    toString() {
        return `x: ${this.x.toString()}, y: ${this.y.toString()}`;
    }
    /**
     * Returns the Array representation of this Vector2.
     *
     * @public
     * @method
     * @returns {[number, number]}
     */
    toArray() {
        return [this.x, this.y];
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
    static add(a, b) {
        return new Vector2(a.x + b.x, a.y + b.y);
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
    static subtract(a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
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
    static multiply(v, s) {
        return new Vector2(v.x * s, v.y * s);
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
    static divide(v, s) {
        return new Vector2(v.x / s, v.y / s);
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
    static mod(v, s) {
        return new Vector2(v.x % s, v.y % s);
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
    static equals(a, b) {
        return a.x === b.x && a.y === b.y;
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
    static isNaN(v) {
        return isNaN(v.x) || isNaN(v.y);
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
    static isFinite(v) {
        return isFinite(v.x) && isFinite(v.y);
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
    static distance(a, b) {
        return Vector2.subtract(a, b).magnitude;
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
    static dot(a, b) {
        return a.x * b.x + a.y * b.y;
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
    static cross(a, b) {
        return a.x * b.y + a.y * b.x;
    }
}
exports.Vector2 = Vector2;
/**
 * A constant Vector2 with both `x` and `y` values set to 0.
 *
 * @public
 * @static
 * @readonly
 * @type {Vector2}
 */
Vector2.ZERO = new Vector2(0, 0);
exports.default = Vector2;
//# sourceMappingURL=index.js.map