/**
 * The 2-Dimensional Vector class for storing a point in space.
 */
export declare class Vector2 {
    /**
     * The X value of this Vector2.
     *
     * @type {number}
     * @public
     * @readonly
     */
    readonly x: number;
    /**
     * The Y value of this Vector2.
     *
     * @type {number}
     * @public
     * @readonly
     */
    readonly y: number;
    /**
     * A constant Vector2 with 0 on both X and Y.
     *
     * @type {Vector2}
     * @public
     * @static
     * @readonly
     */
    static readonly ZERO: Vector2;
    /**
     * @param {number} x
     * @param {number} y
     * @returns {Vector2}
     */
    constructor(x: number, y: number);
    /**
     * The negative value of this Vector2.
     *
     * @type {Vector2}
     * @public
     * @readonly
     */
    get negative(): Vector2;
    /**
     * The magnitude (length) of this Vector2.
     *
     * @type {number}
     * @public
     * @readonly
     */
    get magnitude(): number;
    /**
     * The normal of this Vector2.
     *
     * @type {Vector2}
     * @public
     * @readonly
     */
    get normal(): Vector2;
    /**
     * Returns the string representation of a Vector2.
     *
     * @public
     * @returns {string}
     */
    toString(): string;
}
/**
 * The Math Vector class for handling 2-Dimensional Vector math.
 *
 * @abstract
 */
export declare abstract class MathV {
    /**
     * Returns the sum of 2 Vector2's.
     *
     * @public
     * @static
     * @param {Vector2} a
     * @param {Vector2} b
     * @returns {Vector2}
     */
    static add(a: Vector2, b: Vector2): Vector2;
    /**
     * Returns the difference between 2 Vector2's.
     *
     * @public
     * @static
     * @param {Vector2} a
     * @param {Vector2} b
     * @returns {Vector2}
     */
    static subtract(a: Vector2, b: Vector2): Vector2;
    /**
     * Returns the ??? of a Vector2 multiplied by a Scalar.
     *
     * @public
     * @static
     * @param {Vector2} vector
     * @param {number} scalar
     * @returns {Vector2}
     */
    static multiply(vector: Vector2, scalar: number): Vector2;
    /**
     * Returns the dividend of a Vector2 divided by a Scalar.
     *
     * @public
     * @static
     * @param {Vector2} vector
     * @param {number} scalar
     * @returns {Vector2}
     */
    static divide(vector: Vector2, scalar: number): Vector2;
    /**
     * Compares 2 Vector2's and returns true if both share equal X and Y values.
     *
     * @public
     * @static
     * @param {Vector2} a
     * @param {Vector2} b
     * @returns {boolean}
     */
    static equals(a: Vector2, b: Vector2): boolean;
    /**
     * Checks if either X or Y values of a Vector2 is not a number.
     *
     * @public
     * @static
     * @param {Vector2} Vector
     * @returns {boolean}
     */
    static isNaN(vector: Vector2): boolean;
    /**
     * Checks if both X and Y values of a Vector2 is finite.
     *
     * @public
     * @static
     * @param {Vector2} vrctor
     * @returns {boolean}
     */
    static isFinite(vector: Vector2): boolean;
    /**
     * Returns the distance between 2 Vector2's.
     *
     * @public
     * @static
     * @param {Vector2} a
     * @param {Vector2} b
     */
    static distance(a: Vector2, b: Vector2): number;
    /**
     * Returns the Dot product of 2 Vector2's.
     *
     * @public
     * @static
     * @param {Vector2} a
     * @param {Vector2} b
     * @returns {number}
     */
    static dot(a: Vector2, b: Vector2): number;
    /**
     * Returns the cross product of 2 Vector2's.
     *
     * @public
     * @static
     * @param {Vector2} a
     * @param {Vector2} b
     * @returns {number}
     */
    static cross(a: Vector2, b: Vector2): number;
}
