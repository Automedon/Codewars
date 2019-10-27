const toLeetSpeak = s => s.replace(/[ABCEGHILOSTZ]/g, c => D[c]);

const D = {
  A: "@",
  B: "8",
  C: "(",
  E: "3",
  G: "6",
  H: "#",
  I: "!",
  L: "1",
  O: "0",
  S: "$",
  T: "7",
  Z: "2"
};
