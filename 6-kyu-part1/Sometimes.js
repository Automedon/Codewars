/*
Description:
A function that works sometimes
This kata is heavily influenced by the Once kata. It just adds a few extra steps to test fundamentals.

Implement a function sometimes that takes another funciton as an argument and returns a new version of that function that will behave as the following:

// Example function that will be passed as an argument to sometimes
function add (a, b) {
    return a + b;
}

var s = sometimes(add);

// The first 3 tmes we call s it returns add's expected output
s(4, 6) // returns 10
s(3, 6) // returns 9
s(2, 6) // returns 8

// But the 4th time it returns a default message 'hmm, I don't know!'
s(1, 6) // returns 'hmm, I don't know!'

// Each consecutive odd call returns add's expected output
s(1, 5) // returns 6

// Each consecutive even call doesn't work and returns 'hmm, I don't know!'
s(1, 4) // returns 'hmm, I don't know!'
*/
function sometimes(fn) {
  let i = 0;
  return (a, b) => {
    i++;
    if (i < 3) {
      return fn(a, b);
    }
    if (i % 2 !== 0) return fn(a, b);
    if (i % 2 === 0) return `hmm, I don't know!`;
  };
}
