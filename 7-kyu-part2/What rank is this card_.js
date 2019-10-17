/*
Description:
What is the rank of a playing card? The function takes a string like '2c' or 'Kh' and returns a value based on rank of the card. The first character corresponds to the rank of the card and the second character corresponds to the suit of the card. Cards 2-9 should return the corresponding number. T returns 10, J => 11, Q => 12, K => 13 and A => 14. Otherwise the rank should be returned as 0.

For example:

rank('2c') == 2;
rank('Tc') == 10;
rank('As') == 14;
rank('1c') == 0; // There is no card '1'
Suits can be disregarded.
*/
function rank(card) {
  let r = card.split``[0]
  if (r*1==r&&r>1&&r<10) return r*1
  if (r=='T') return 10
  if (r=='J') return 11
  if (r=='Q') return 12
  if (r=='K') return 13
  if (r=='A') return 14
  return 0
}
