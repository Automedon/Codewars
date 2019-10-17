/*
Description:
Joe is a park ranger and he walks around outside all day. He does not know when it will rain, so when he wakes up every morning he puts his umbrella in his backpack before he goes to work. His day is divided into three sections the morning, afternoon, and evening. When it rains he takes his umbrella out of his backpack and when it stops raining he puts it back. Every day starts with his umbrella in his backpack, so when it rains in the morning he takes it out of his backpack. How many times does Joe take his umbrella out of his backpack? You will receive an array of weather conditions.

Possible weather conditions are sunny, cloudy, rainy and thunderstorm and Joe uses needs his umbrella when it rains, or there is a thunderstorm.

Description clarification. Each day is made up of morning, afternoon, and evening, so every three values in the array is a full day. Joe starts each day with his umbrella in his backpack regardless of the weather the previous evening. When it rains or there is a thunderstorm he takes his umbrella out of his backpack and when it stops raining he puts it back. How many times does Joe take his umbrella out of his backpack?

[rainy, rainy, thunderstorm, rainy, rainy, cloudy] = 2 [rainy, cloudy, thunderstorm, rainy, cloudy, cloudy] = 3
*/
const umbrella = arr => arr.filter((x,i) => (x=="rainy" || x=="thunderstorm") && (i%3==0 || (arr[i-1]!="rainy" && arr[i-1]!="thunderstorm"))).length;
