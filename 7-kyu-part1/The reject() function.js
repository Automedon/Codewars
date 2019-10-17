function reject(array, iterator) {
  return array.filter(el => !iterator(el))
}
