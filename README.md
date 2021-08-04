## About

vector-math is an easy to use library for handling 2D Vectors and Vector math

- Fast
- Simple
- Object-oriented

## Installation

```sh-session
npm i --save @low-key/vector-math
```

### Example Usage

```ts
import { Vector2, MathV } from "@low-key/vector-math";

class PhysicsBody {
	public position: Vector2;
	public velocity = Vector2.ZERO;
	public force = Vector2.ZERO;
	public gravity = new Vector2(0, 5);
	public mass: number;
	
	protected constructor(x: number, y: number, m: number) {
		this.position = new Vector2(x, y);
		this.mass = m;
	}
	
	public step(delta: number): void {
		this.force = MathV.multiply(this.gravity, this.mass);
		
		this.velocity = MathV.add(this.velocity, MathV.divide(this.force, this.mass * delta));
		this.position = MathV.add(this.position, MathV.multiply(this.velocity, delta));
	}
}
```

## 1.0.3 Changelog

- Documented Vector2 and MathV methods and properties