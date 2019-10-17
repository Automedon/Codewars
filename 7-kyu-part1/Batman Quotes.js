function getQuote(quotes, hero) {
  return (
    { R: "Robin", J: "Joker", B: "Batman" }[hero[0]] +
    ": " +
    quotes[hero.match(/\d+/)[0]]
  );
}
