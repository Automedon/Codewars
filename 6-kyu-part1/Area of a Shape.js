/*
Description:
We'd like to know the area of an arbitrary shape. The only information of the shape is that it is bounded within the square area of four points: (0, 0), (1, 0), (1, 1) and (0, 1).

Given a function f(x, y) which returns a boolean representing whether the point (x, y) is inside the shape, determine the area of the shape. Your answer is allowed to differ from the true answer by at most 0.01.

Hint: http://bit.ly/1vJJt61
*/
function area_of_the_shape(f) {
    let dx = 1e-3
    let dy = 1e-3
    let total = 0
    for (let xi = dx/2;xi< 1;xi+= dx){
        for (let yi = dy/2;yi< 1;yi+= dy){
            total += f(xi, yi)*dx*dy
            }
          }
    return total
}
