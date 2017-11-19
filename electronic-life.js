var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};
var grid = ["top left",    "top middle",    "top right",
            "bottom left", "bottom middle", "bottom right"];

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}
Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && 
         vector.x < this.width && 
         vector.y >= 0 && 
         vector.y < this.height;
};
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
}

var grid = new Grid(5, 5);

grid.set(new Vector(1, 1), 'X');
var directions = {
  'n': new Vector(0, -1),
  'ne': new Vector(1, -1),
  'nw': new Vector(-1, -1),
  's': new Vector(0, 1),
  'se': new Vector(1, 1),
  'sw': new Vector(-1, 1),
  'e': new Vector(1, 0),
  'w': new Vector(-1, 0)
};

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

var directionNames = 'n ne e se s sw w nw'.split(' ');

function BouncingCritter() {
  this.direction = randomElement(directionNames);
}

BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != ' ') {
    this.direction = view.find(' ') || 's';
  }
  return {type: 'move', direction: this.direction};
};

















