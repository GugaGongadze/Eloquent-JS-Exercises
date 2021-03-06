'use strict'

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function (newVector) {
  var xPlus = this.x + newVector.x;
  var yPlus = this.y + newVector.y;
  return '→ Vector{x: ' + xPlus + ', y: ' + yPlus + '}';
};
Vector.prototype.minus = function (newVector) {
  var xMinus = this.x - newVector.x;
  var yMinus = this.y - newVector.y;
  return '→ Vector{x: ' + xMinus + ', y: ' + yMinus + '}';
};
Object.defineProperty(Vector.prototype, 'length', {
  get: function () {
    return '→ ' + Math.sqrt(this.x * this.x + this.y * this.y);
  }
});