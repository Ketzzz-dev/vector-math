var VectorMath = {
	VectorW: class {
		x = 0
		y = 0
		
		constructor(x, y) {
			this.x = x
			this.y = y
		}
	},
	MathV: {
		add(a, b) {
			return new VectorMath.Vector2(a.x + b.x, a.y + b.y)
		}
	}
}

module.exports = VectorMath