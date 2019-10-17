/*
Description:
Write a function mapEmUp that conditionally maps an array of inputs according to a set of supplied conditions. The function takes in two arguments:

An array of inputs
An array of key-value pairs of predicates and mappers
For example:

mapEmUp([1, 2, 3], [
                    [ function (i) { return i>2; },
                    function (i) { return i; }],
                    [ function (i) { return i<2; },
                    function () { return 0; }]
                  ]);
returns

[0, -1, 3]
Each item in the second argument array is an array itself, where the first element is a predicate and the second element is a mapper. The function mapEmUp should pick up each item from the supplied array and run it against each item in the second argument. Where a predicate turns out to be true, the corresponding mapper is applied. Note that the search only continues until a match is found. When there is no predicate matching a specific input, return -1;
*/
function mapEmUp (input, mappers) {
  return input.map(x => {
    for (let m of mappers) if (m[0](x)) return m[1](x);
    return -1;
  });
}
