/*
Description:
Knowning that the first 4 decimal numbers 0, 1, 2, 3 are represented in binary format as 00, 01, 10, 11, you've been asked to create a function that add three bits. Notice that you have to validate the input. In that case, return null (in JS) or None in Python).

Note :

only 0 or 1 are valid inputs
Input
Three numbers that represent bit values.

Output
An array of two elements containing the result. In the case where any of the arguments provided are invalid, return null/None instead.

Examples
add3bits(0, 0, 0) // => [0, 0]
add3bits(1, 0, 1) // => [1, 0]
add3bits(1, "Hello World", true); // => null
*/
function add3bits(x, y, z) {
    if (x===0&&y===0&&z===0) return [0, 0]
    if (x===0&&y===0&&z===1) return [0, 1]
    if (x===0&&y===1&&z===0) return [0, 1]
    if (x===0&&y===1&&z===1) return [1, 0]
    if (x===1&&y===0&&z===0) return [0, 1]
    if (x===1&&y===0&&z===1) return [1, 0]
    if (x===1&&y===1&&z===0) return [1, 0]
    if (x===1&&y===1&&z===1) return [1, 1]
    return null
}
