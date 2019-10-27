function getVillainName(birthday) {
  firstNames = [
    "The Evil",
    "The Vile",
    "The Cruel",
    "The Trashy",
    "The Despicable",
    "The Embarrassing",
    "The Disreputable",
    "The Atrocious",
    "The Twirling",
    "The Orange",
    "The Terrifying",
    "The Awkward"
  ];
  lastNames = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket"
  ];
  return (
    firstNames[birthday.getMonth()] + " " + lastNames[birthday.getDate() % 10]
  );
}
