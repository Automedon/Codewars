function evaporator(content, evap_per_day, threshold) {
  var result = 0;
  var percentage = 100;
  while (percentage > threshold) {
    percentage = percentage - percentage * (evap_per_day / 100);
    result += 1;
  }
  return result;
}
