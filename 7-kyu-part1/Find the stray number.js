function stray(numbers) {
 return numbers.find(
    number => numbers.indexOf(number) === numbers.lastIndexOf(number)
  )
}
