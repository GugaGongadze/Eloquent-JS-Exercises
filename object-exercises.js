function logFive(obj) {
  this.obj = obj;
}
function ArraySeq(array) {
  this.array = array;
  if (this.array.length <= 5) {
    for (var i = 0; i < this.array.length; i++) {
      console.log(this.array[i]);
    }
  } else {
    for (var i = 0; i < 5; i++) {
      console.log(this.array[i]);
    }
  }
}
function RangeSeq(from, to) {
  this.from = from;
  this.to = to;
  if (this.to - this.from > 5) {
    for (var i = this.from; i < this.from + 5; i++) {
      console.log(i);
    }
  } else {
    for (var i = this.from; i <= this.to; i++) {
      console.log(i);
    }
  }
}
logFive(new RangeSeq(100, 103));
