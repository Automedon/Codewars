/*
Description:
Share price
You spent all your saved money to buy some shares.

You bought it for invested, and want to know how much it's worth, but all the info you can quickly get are just the change the shares price made in percentages.

Your task:
Write the function sharePrice() that calculates, and returns the current price of your share, given the following two arguments:

invested(number), the amount of money you initially invested in the given share

changes(array of numbers), contains your shares daily movement percentages

The returned number, should be in string format, and it's precision should be fixed at 2 decimal numbers.

Have fun!

Hint: Try to write the function in a functional manner!
*/
const sharePrice = (invested, changes) => {
  changes.map(v =>
    v > 0
      ? (invested += (invested * v) / 100)
      : (invested -= (invested * Math.abs(v)) / 100)
  );
  return invested.toFixed(2);
};
