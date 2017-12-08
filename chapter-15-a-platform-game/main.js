var simpleLevelPlan = [
    "                      ",
    "                      ",
    "  x              = x  ",
    "  x         o o    x  ",
    "  x @      xxxxx   x  ",
    "  xxxxx            x  ",
    "      x!!!!!!!!!!!!x  ",
    "      xxxxxxxxxxxxxx  ",
    "                      "
];

function level(plan) {
    this.width = plan[0].length;
    this.height = plan.length;
    this.grid = [];
    this.actors = [];

    for (var y = 0; y < this.height; y++) {
        var line = plan[y], gridLine = [];
        for (var x = 0; x < this.width; x++) {
            var ch = line[x], fieldType = null;
            var Actor = actorChars[ch];
            if (Actor)
                this.actors.push(new Actor(new Vector(x, y), ch));
            else if (ch == 'x')
                fieldType = 'wall';
            else if (ch == '!')
                fieldType = 'lava';
            gridLine.push(fieldType);
        }
        this.grid.push(gridLine);
    }

    this.player = this.actors.filter(function(actor) {
        return actor.type == 'player';
    })[0];
    this.status = this.finishDelay = null;
}

Level.prototype.isFinished = function() {
    return this.status != null && this.finishDelay < 0;
};

function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function(other) {
    return new  Vector(this.x + other.x, this.y + other.y);
};
Vector.prototype.times = function (params) {
    
}