/*
Description:
A few years ago, Aaron left his old school and registered at another due to security reasons. Now he wishes to find Jane, one of his schoolmates and good friends.

There are n schools numbered from 1 to n. One can travel between each pair of schools by buying a ticket. The ticket between schools i and j costs (i + j) modulo (n + 1) and can be used multiple times. Help Aaron find the minimum total cost to visit all schools. He can start and finish at any school.

Range : 1 ≤ n ≤ 106
*/
function findJane(n){
    return Math.floor((n - 1) / 2);
}
