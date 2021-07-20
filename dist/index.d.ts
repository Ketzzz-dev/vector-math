export declare namespace VectorMath {
    class Vector2 {
        readonly x: number;
        readonly y: number;
        static readonly ZERO: Vector2;
        constructor(x: number, y: number);
        get negative(): Vector2;
        get magnitude(): number;
        get normal(): Vector2;
        toString(): string;
    }
    abstract class MathV {
        static add(a: Vector2, b: Vector2): Vector2;
        static subtract(a: Vector2, b: Vector2): Vector2;
        static multiply(v: Vector2, s: number): Vector2;
        static divide(v: Vector2, s: number): Vector2;
        static equals(a: Vector2, b: Vector2): boolean;
        static isNaN(v: Vector2): boolean;
        static isFinite(v: Vector2): boolean;
        static distance(a: Vector2, b: Vector2): number;
        static dot(a: Vector2, b: Vector2): number;
        static cross(a: Vector2, b: Vector2): number;
    }
}
