/*
Description:
Task
You got a scratch lottery, you want to know how much money you win.

There are 6 sets of characters on the lottery. Each set of characters represents a chance to win. The text has a coating on it. When you buy the lottery ticket and then blow it off, you can see the text information below the coating.

Each set of characters contains three animal names and a number, like this: "tiger tiger tiger 100". If the three animal names are the same, Congratulations, you won the prize. You will win the same bonus as the last number.

Given the lottery, returns the total amount of the bonus.

Input/Output
[input] string array lottery

A string array that contains six sets of characters.

[output] an integer

the total amount of the bonus.

Example
For

lottery = [
"tiger tiger tiger 100",
"rabbit dragon snake 100",
"rat ox pig 1000",
"dog cock sheep 10",
"horse monkey rat 5",
"dog dog dog 1000"
]```

the output should be `1100`.

`"tiger tiger tiger 100"` win $100, and `"dog dog dog 1000"` win $1000. 

`100 + 1000 = 1100`
*/

function scratch(lottery) {
  let num = 0;
  lottery.map(v => {
    let arr = v.split(" ");
    arr[0] === arr[1] && arr[1] === arr[2] ? (num += arr[3] * 1) : 0;
  });
  return num;
}
