/*
Description:
Quantum mechanics tells us that a molecule is only allowed to have specific, discrete amounts of internal energy. The 'rigid rotor model', a model for describing rotations, tells us that the amount of rotational energy a molecule can have is given by:

E = B * J * (J + 1),

where J is the state the molecule is in, and B is the 'rotational constant' (specific to the molecular species).

Write a function that returns an array of allowed energies for levels between Jmin and Jmax.

Notes:

return empty array if Jmin is greater than Jmax (as it make no sense).
Jmin, Jmax are integers.
physically B must be positive, so return empty array if B <= 0
*/
function rotEnergies(b, jMin, jMax) {
  let arr =[];
  for (let i=jMin;i<=jMax;i++){
    arr.push(b*i*(i+1))
  }
  return arr.every(v=>v>=0)?arr:[]; 
}
