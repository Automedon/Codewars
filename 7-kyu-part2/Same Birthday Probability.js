/*
Description:
Given n number of people in a room, calculate the probability that any two people in that room have the same birthday (assume 365 days every year = ignore leap year). Answers should be two decimals unless whole (0 or 1) eg 0.05
*/
function calculateProbability(n) {
    var acc = 1;

    for (var i = 1; i < n; i++) {
        acc *= 1 - i / 365;
    }

    return Math.round((1 - acc) * 100) / 100;
}
