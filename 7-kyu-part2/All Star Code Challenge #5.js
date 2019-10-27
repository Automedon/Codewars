/*
Description:
This Kata is intended as a small challenge for my students

All Star Code Challenge #5

Create a function, called randomMovies, that takes in an array of movie strings and returns one of those movies randomly

var rockySeries = ["Rocky", "Rocky II", "Rocky III", "Rocky IV"];
randomMovies(rockySeries) // => "Rocky"
*/
function randomMovies(movies) {
  return movies[random(0, movies.length)];
}
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
