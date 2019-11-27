/*
Description:
Congratulations, you've been selected to join the RuplesJS team at work. The goal of RuplesJS is to create a library to get Ruby developers a little more comfortable with Javascript.

Your first task is to create a times method for numbers. Ruby has something like the following:

5.times do
  puts "hello"
end
In Javascript, create a method for numbers called times that takes a callback function and runs it n times, where n is the number the method is attached to. For example:

(10).times(function() {
  console.log('hello');
});
Should output 'hello' 10 times to the console. If the number is a decimal, round to the nearest integer. Negative numbers should do nothing. If you're not passed a function, you should throw an error.

Good luck!
*/
Number.prototype.times=function(cb){
  for (let i=0;i<Math.round(this);i++){
    cb()
  }
}
