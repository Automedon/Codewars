/*
Description:
A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

1. Hydrogen reacts with Oxygen   = H2O
2. Carbon   reacts with Oxygen   = CO2
3. Carbon   reacts with Hydrogen = CH4
FOR EXAMPLE:
(C,H,O) = (45,11,100)
return no. of water, carbon dioxide and methane molecules
Output should be like:
(5,45,0)
*/
function burner(c, h, o) {
    let h2o = 0
    let co2 = 0
    let ch4 = 0
    while (h >= 2 && o >= 1) {
        h -= 2
        o -= 1
        h2o += 1
    }
    while (c >= 1 && o >= 2) {
        c -= 1
        o -= 2
        co2 += 1

    }
    while (c >= 1 && h >= 4) {
        c -= 1
        h -= 4
        ch4 += 1
    }
    return [h2o, co2, ch4];
}
