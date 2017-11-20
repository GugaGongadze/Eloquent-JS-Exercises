function Tiger() {
  this.energy = 40;
}
Tiger.prototype.act = function (view) {
  var space = view.find(' ');
  if (this.energy > 200 && space) {
    return {
      type: 'reproduce',
      direction: space
    };
  }
  var plant = view.find('*');
  var smartPlantEater = view.find('O');
  if (plant) {
    return {
      type: 'move',
      direction: space
    };
  }
  if (this.energy > 200) {
    return {
      type: 'move',
      direction: space
    };
  }
  if (smartPlantEater) {
    return {
      type: 'eat',
      direction: smartPlantEater
    };
  }
  if (space) {
    return {
      type: 'move',
      direction: space
    };
  }
};