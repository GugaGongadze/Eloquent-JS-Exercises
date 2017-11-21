'use strict'

function MultiplicatorUnitFailure(message) {}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = 'MultiplicatorUnitFailure';

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (error) {
    if (error instanceof MultiplicatorUnitFailure) {
      return primitiveMultiply(a, b);
    }
    throw error;
  }
}
console.log(reliableMultiply(8, 8));