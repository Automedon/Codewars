/*
Description:
Fill in the functions with the help of the provided methods only, i.e. just compose with them:

rest(), map(), first(), second(), third(), zip()

Example

return map(table, second);
Here are their descriptions:

rest([5, 4, 3, 2, 1]);
=> [4, 3, 2, 1]

map([1, 2, 3], function(num){ return num * 3; });
=> [3, 6, 9]

first([5, 4, 3, 2, 1]); // second, third ...
=> 5

zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
=> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
*Note: * The first row within the data array will always be the column names. These column names will always have the same order. No need to determine which index a column should be dynamically.
*/
const selectNames = table => map(rest(table), first);
const selectVoices = table => map(rest(table), third);
const selectNamesAndVoices = table =>
  zip(selectNames(table), selectVoices(table));
