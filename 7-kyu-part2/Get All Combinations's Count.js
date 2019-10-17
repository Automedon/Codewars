/*
Description:
Here is a array of number, I want to count the all combinations of ensure size

For Example

array = [1, 2, 3, 4]
size = 2
There have 6 combinations, includes [1,2],[1,3],[1,4],[2,3],[2,4],[3,4]
So the count of all combinations equal 6

getCombination([1, 2, 3, 4], 2) = 6
*/
function getCombinations(list, size) {
    let result = [];
    function fork(index, values) {
        if (values.length === size) {
            result.push(values);
            return;
        }
        if (index >= list.length) {
            return;
        }
        fork(index + 1, values.concat(list[index]));
        fork(index + 1, values);
    }
    fork(0, []);
    return result.length;
}
