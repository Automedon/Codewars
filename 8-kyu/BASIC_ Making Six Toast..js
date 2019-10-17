/*
Making Six Toast:
STORY:
You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.
PROBLEM:
You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
WHAT TO DO:
Make a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
EXAMPLE:
You must return the number of toast the you need to put in (or to take out). Let's say you put five in:
JAVASCRIPT:
// The "5" is how many pieces you put in.
sixToast(5);
// It should return 1.
function sixToast(num) {
// code
return 1;
}
*/

function sixToast(num) {
  return Math.abs(num-6);
}
