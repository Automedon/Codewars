/*
Pac successfully passed the first test and he is now ready to take the next step.
Another message from the Academy,

Congrats for passing the first test (that was easy though).  
Now, this is a bit more complicated.  
And... Surprise: It's not about bug fixes!  
You have 30 minutes.  
Good Luck.
The function myTasks takes an array which stores some potential coding activities.
But inside the array there are intruders which have nothing to do with coding!
How to get rid of those elements? How to replace them with actual coding activities?
This is the replacement you should make,

buy food -> learn Node.js  
sleep -> make a weather app
This time, you have to make a solution, not fix it. Pac needs your help!

Feedbacks are appreciated!
*/
function myTasks(array) {
  return array.map(v =>
    v === "buy food"
      ? "learn Node.js"
      : v === "sleep"
      ? "make a weather app"
      : v
  );
}
