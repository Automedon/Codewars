/*
Description:
This kata is based on Project Euler Problem 539

##Object

Find the last number between 1 and n (inclusive) that survives the elimination process

####How It Works

Start with the first number on the left then remove every other number moving right until you reach the the end, then from the numbers remaining start with the first number on the right and remove every other number moving left, repeat the process alternating between left and right until only one number remains which you return as the "last man standing"

##Example

given an input of `9` our set of numbers is `1 2 3 4 5 6 7 8 9`

start by removing from the left    2   4   6   8
                                 1   3   5   7   9


then from the right                2       6
                                       4       8


then the left again                        6
                                   2


until we end with `6` as the last man standing
Note: due to the randomness of the tests it is possible that you will get unlucky and a few of the tests will be really large, so try submitting 2 or 3 times.

As allways any feedback would be much appreciated
*/
function lastManStanding(last_number) {
    var arr = [];
    for (let i = 0; i < last_number; i++)  arr.push(i + 1);

    while (arr.length > 1) {
        let temp_arr = [];
        for (let i = 1; i < arr.length; i += 2) {
            temp_arr.push(arr[i]);
        }
        arr = temp_arr.reverse();
    }
    return arr[0];
}
