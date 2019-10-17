function rakeGarden(garden) {
  var rakedGarden= garden.split(' ').map(value=>value=='rock'?'rock':'gravel').join(' ')
  
  return rakedGarden;
}
