"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathV = exports.Vector2 = void 0;
/**
 * The 2-Dimensional Vector class for storing a point in space.
 */
class Vector2 {
    /**
     * @param {number} x
     * @param {number} y
     * @returns {Vector2}
     */
    constructor(x, y) {
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
    get negative() {
        return new Vector2(-this.x, -this.y);
    }
    /**
     * The magnitude (length) of this Vector2.
     *
     * @type {number}
     * @public
     * @readonly
     */
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * The normal of this Vector2.
     *
     * @type {Vector2}
     * @public
     * @readonly
     */
    get normal() {
        return MathV.divide(this, this.magnitude);
    }
    /**
     * Returns the string representation of a Vector2.
     *
     * @public
     * @returns {string}
     */
    toString() {
        return `x: ${this.x}, y: ${this.y}`;
    }
}
exports.Vector2 = Vector2;
/**
 * A constant Vector2 with 0 on both X and Y.
 *
 * @type {Vector2}
 * @public
 * @static
 * @readonly
 */
Vector2.ZERO = new Vector2(0, 0);
/**
 * The Math Vector class for handling 2-Dimensional Vector math.
 *
 * @abstract
 */
class MathV {
    /**
     * Returns the sum of 2 Vector2's.
     *
     * @public
     * @static
     * @param {Vector2} a
     * @param {Vector2} b
     * @returns {Vector2}
     */
    static add(a, b) {
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
    static subtract(a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }
    /**
     * Returns the ??? of a Vector2 multiplied by a Scalar.
     *
     * @public
     * @static
     * @param {Vector2} vector
     * @param {number} scalar
     * @returns {Vector2}
     */
    static multiply(vector, scalar) {
        return new Vector2(vector.x * scalar, vector.y * scalar);
    }
    /**
     * Returns the dividend of a Vector2 divided by a Scalar.
     *
     * @public
     * @static
     * @param {Vector2} vector
     * @param {number} scalar
     * @returns {Vector2}
     */
    static divide(vector, scalar) {
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
    static equals(a, b) {
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
    static isNaN(vector) {
        return isNaN(vector.x) || isNaN(vector.y);
    }
    /**
     * Checks if both X and Y values of a Vector2 is finite.
     *
     * @public
     * @static
     * @param {Vector2} vrctor
     * @returns {boolean}
     */
    static isFinite(vector) {
        return isFinite(vector.x) && isFinite(vector.y);
    }
    /**
     * Returns the distance between 2 Vector2's.
     *
     * @public
     * @static
     * @param {Vector2} a
     * @param {Vector2} b
     */
    static distance(a, b) {
        return MathV.subtract(a, b).magnitude;
    }
    /**
     * Returns the Dot product of 2 Vector2's.
     *
     * @public
     * @static
     * @param {Vector2} a
     * @param {Vector2} b
     * @returns {number}
     */
    static dot(a, b) {
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
    static cross(a, b) {
        return a.x * b.y + a.y * b.x;
    }
}
exports.MathV = MathV;
//# sourceMappingURL=index.js.map