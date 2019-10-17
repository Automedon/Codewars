/*
Description:
Task
Your task is to calculate how many ways there are to attach an 1 × 1 Lego brick to an a(width) × b(height) Lego brick and your code length should less than 31 characters.

For an 2 x 4 Lego brick, the result should be 19


*/
brickCombos=(a,b)=>3*a*b-a-b+1
