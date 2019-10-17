/*
Description:
In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"
Words should be seperated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!
*/
function nameThatNumber(x) {
        let returnedValue = "";
        let tens = {2:"twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety"};
        let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        if (x == 0) {
            returnedValue = "zero";
        }
        if (x < 20 && x > 0) {
            returnedValue = units[x];
        }
        if (x >= 20) {
            returnedValue = tens[Math.floor((x / 10))] + ((x % 10 != 0) ? " " : "") + units[x % 10];
        }
        return returnedValue;    
}
