/*
Description:
You are worried about the outcome of something major, e.g. a test or a job application. The input will be a string and your task is to return "Stop worrying, everything will be all right!" in the following conditions:

"Making last-minute changes"
"Sitting in a dark room and shaking"
"Crying"
"Laughing hysterically"
"Not eating"
For any other input you should return: "Do you really care?"
*/
function worries(str){
  let arr =["Making last-minute changes","Sitting in a dark room and shaking","Crying","Laughing hysterically","Not eating"]
  return arr.includes(str)?"Stop worrying, everything will be all right!":"Do you really care?"
}
