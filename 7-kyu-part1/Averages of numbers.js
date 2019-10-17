function averages(numbers) {
return  numbers
    ? numbers
        .map((number, index, array) => (number + array[index + 1]) / 2)
        .slice(0, -1)
    : []
}
