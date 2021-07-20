"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorMath = void 0;
var VectorMath;
(function (VectorMath) {
    var Vector2 = /** @class */ (function () {
        function Vector2(x, y) {
            this.x = x;
            this.y = y;
        }
        Object.defineProperty(Vector2.prototype, "negative", {
            get: function () {
                return new Vector2(-this.x, -this.y);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector2.prototype, "magnitude", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector2.prototype, "normal", {
            get: function () {
                return MathV.divide(this, this.magnitude);
            },
            enumerable: false,
            configurable: true
        });
        Vector2.prototype.toString = function () {
            return "x: " + this.x + ", y: " + this.y;
        };
        Vector2.ZERO = new Vector2(0, 0);
        return Vector2;
    }());
    VectorMath.Vector2 = Vector2;
    var MathV = /** @class */ (function () {
        function MathV() {
        }
        MathV.add = function (a, b) {
            return new Vector2(a.x + b.x, a.y + b.y);
        };
        MathV.subtract = function (a, b) {
            return new Vector2(a.x - b.x, a.y - b.y);
        };
        MathV.multiply = function (v, s) {
            return new Vector2(v.x * s, v.y * s);
        };
        MathV.divide = function (v, s) {
            return new Vector2(v.x / s, v.y / s);
        };
        MathV.equals = function (a, b) {
            return a.x === b.x && a.y === b.y;
        };
        MathV.isNaN = function (v) {
            return isNaN(v.x) || isNaN(v.y);
        };
        MathV.isFinite = function (v) {
            return isFinite(v.x) && isFinite(v.y);
        };
        MathV.distance = function (a, b) {
            return MathV.subtract(a, b).magnitude;
        };
        MathV.dot = function (a, b) {
            return a.x * b.x + a.y * b.y;
        };
        MathV.cross = function (a, b) {
            return a.x * b.y + a.y * b.x;
        };
        return MathV;
    }());
    VectorMath.MathV = MathV;
})(VectorMath = exports.VectorMath || (exports.VectorMath = {}));
//# sourceMappingURL=index.js.map