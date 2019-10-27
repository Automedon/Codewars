/*
Description:
In mathematics, we can calculate the distance between any two things. I have two dogs: Puffy is black (rgb(0,0,0)) in color and Wuffy is white(rgb(255,255,255)). One boring day, I wanted to calculate the RGB color distance between my two dogs. After some struggle, I kinda did it. Since I was excited on knowing how to calculate it, I wanted to expand the idea and calculate the distance between any two colors between black and white given in rgb. Oh man! I am struggling. Here I seek your assistance for doing it right: rounded to two decimals and as a string.
*/
function distance(a, b) {
  return Math.sqrt(
    Math.pow(b[0] - a[0], 2) +
      Math.pow(b[1] - a[1], 2) +
      Math.pow(b[2] - a[2], 2)
  ).toFixed(2);
}
