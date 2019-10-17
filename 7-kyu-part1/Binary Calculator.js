function calculate(n1, n2, o) {
  n1 = parseInt(n1, 2);
  n2 = parseInt(n2, 2);
  switch (o) {
    case 'add':
      return (n1 + n2).toString(2);
    case 'subtract':
      return (n1 - n2).toString(2);
    case 'multiply':
      return (n1 * n2).toString(2);
  }
}
