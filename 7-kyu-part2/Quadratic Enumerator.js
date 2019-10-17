/*
Description:
Quadratic equations come in the form y(x) = ax^2 + bx + c. Substituting in different values of x gives us different coordinates/points on the graph of the given quadratic function.

Task:
Your job is to create a function that does the following:

Takes in three required parameters: a, b, and c, and two keyword/optional parameters, start and step. If start is not provided, it should be set as default to 0, and if step is not provided, its default value should be 1 (all of them will be passed in JS when needed).
It should return an enumerator/generator which is dynamic and created based on the arguments taken in.
What the enumerator/generator must do:
Essentially, the method you write should return an enumerator/generator which, when called, should start by yielding [start, a(start)^2 + b(start) + c], where a, b, and c, are provided when the method was called. Then start should be incremented by step and continue the sequence.

Examples:
gen = quadraticGen(1, 0, 0)   // this is the equation of y = x^2
First 10 values: [[0, 0], [1, 1], [2, 4], [3, 9], [4, 16], [5, 25], [6, 36], [7, 49], [8, 64], [9, 81]]

gen = quadraticGen(1, 0, 0, start = 2)   // different start point
First 10 values: [[2, 4], [3, 9], [4, 16], [5, 25], [6, 36], [7, 49], [8, 64], [9, 81], [10, 100], [11, 121]]

gen = quadraticGen(1, 0, 0, step = 2)   // different step value
First 10 values: [[0, 0], [2, 4], [4, 16], [6, 36], [8, 64], [10, 100], [12, 144], [14, 196], [16, 256], [18, 324]]

gen = quadraticGen(1, 0, 0, step = -1)  // tracing backwards
First 10 values: [[0, 0], [-1, 1], [-2, 4], [-3, 9], [-4, 16], [-5, 25], [-6, 36], [-7, 49], [-8, 64], [-9, 81]]

gen = quadraticGen(1, 0, 0, step = 0.5)  // step is a float
First 10 values: [[0, 0], [0.5, 0.25], [1.0, 1.0], [1.5, 2.25], [2.0, 4.0], [2.5, 6.25], [3.0, 9.0], [3.5, 12.25], [4.0, 16.0], [4.5, 20.25]]
Solutions are rounded to 6 decimal places during tests to prevent rounding errors from causing problems.
*/
function* quadraticGen(a,b,c,s=0,sp=1) {
while (true){
  yield [s,a*Math.pow(s,2)+b*s+c];
  s+=sp;
  }
}
