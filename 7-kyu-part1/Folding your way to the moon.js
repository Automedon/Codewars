function foldTo(distance) {
  if (distance <= 0) return null;
  let counter = 0;
  for (var i = 0.0001; i < distance; i *= 2) counter += 1;
  return counter;
}
