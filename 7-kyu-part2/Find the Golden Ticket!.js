/*
Description:
Willy Wonka has put golden tickets into the candy bars around the world! Do you have one of those lucky golden tickets?

Create a function that will search a box of candy bars for the golden ticket. The box is a 2D array that contains false if there is no ticket, and a true if there is one.

//Example of a box of candy bars:
[[false],[false],[false],[true],[false]]
The function should output the index of the candy bar with the golden ticket. IF there is NO golden ticket in the box, the function should output "There is no golden ticket!"

Examples:

finder([[false],[false],[false],[true],[false]]) // => 3
finder([[true],[false],[false],[false]]) // => 0
finder([[false],[false],[false],[false],[false]]) // => "There is no golden ticket!"
*/
function finder(box) {
  return [].concat(...box).indexOf(true) === -1
    ? "There is no golden ticket!"
    : [].concat(...box).indexOf(true);
}
