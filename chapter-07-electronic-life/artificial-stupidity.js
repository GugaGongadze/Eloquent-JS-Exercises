function SmartPlantEater() {
  PlantEater.call(this);
}
SmartPlantEater.prototype.act = function (view) {
  var space = view.find(' ');
  if (this.energy > 120 && space) {
    return {
      type: 'reproduce',
      direction: space
    }
  }
  var plant = view.find('*');
  if (this.energy > 120) {
    return {
      type: 'move',
      direction: space
    };
  }
  if (plant) {
    return {
      type: 'eat',
      direction: plant
    };
  }
  if (space) {
    return {
      type: 'move',
      direction: space
    };
  }
}