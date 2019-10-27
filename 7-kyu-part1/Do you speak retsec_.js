function reverseByCenter(s) {
  var n = s.length / 2;
  return (
    s.slice(Math.ceil(n)) +
    s.slice(Math.floor(n), Math.ceil(n)) +
    s.slice(0, Math.floor(n))
  );
}
