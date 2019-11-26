/*
Description:
###Description

If you have completed my previous katas Intro to NodeJS and Password Hashes, you should know the gist of requiring node modules into your code. If you are new to NodeJS and haven't completed the previous katas, I recommend you do so.

As it turns out, unless you are coding something really processor intensive, the slowest parts of nearly any program is I/O. One of NodeJS' key features is the ability to asynchronously deal with I/O, and is thus the focus of this kata.

###Kata Specifications

To practice NodeJS Async conventions, we will create the function execute that asynchronously runs a Bash command to Codewars' linux environment (think command-line Windows users).

The execute function takes 2 parameters: a command string and a callback function. Your function should essentially begin the command, and whenever the command is complete, run the callback function.

To actually run a command, you will need to read about the Child Process NodeJS module.

A common convention used in NodeJS is the way callback functions are defined. Usually, they look like this:

function callback(error, data) {...}
If an error is encountered in an I/O function, instead of throwing an error for you, it calls the callback with an error object as the first argument. There are two main reasons this is done:

You don't have to riddle your code with try and catch blocks.
You have more flexibility in handling the error how you want.

Your function should follow this convention when calling callback. So if you encounter an error, instead of throwing it, call callback with the error object as the first argument. If you do not encounter an error, call callback with the first argument as null, and the second argument as the returned string from the command.

###Code Examples

//Where 'err' is the error Child Process sends:

execute('echo hi', cb)
  // calls cb(null, 'hi') if no error
  // calls cb(err) if there is an error

execute('expr 1 + 2', cb)
  // calls cb(null, '3') if no error
  // calls cb(err) if there is an error
###Tips

Test cases will make check to ensure you are passing an error object back, so make sure you are passing the error instead of throwing it. Also, make sure when you do pass an error, you halt code execution in your function (1:1 ratio for execute and callback calls).

If you are confused about callbacks, here is a good article that explains them in more detail: What are callbacks?.

Don't forget to look at the Child Process Module documentation.

Google is your friend, as is the NodeJS Docs :)
*/
let exec = require('child_process').exec;

function execute(command, callback) {
  exec(command, function(err, stdout) {
    if(err) {
      callback(err);
    }
    else {
      callback(null, stdout);
    }
  });
}
