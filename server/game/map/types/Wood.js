const Matter = require("matter-js");

class Wood {
  constructor({ isStatic, x, y, w, h, angle }) {
    this.isStatic = isStatic;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.angle = angle;
  }

  get typeId() {
    return 10;
  }

  get entity() {
    return Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, {
      label: "Wood",
      isStatic: this.isStatic,
      friction: 0.3,
      frictionStatic: 0.3,
      restitution: 0.2,
      angle: this.angle,
    });
  }
}

module.exports = Wood;
