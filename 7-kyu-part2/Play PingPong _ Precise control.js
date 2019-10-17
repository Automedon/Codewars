/*
Description:
Play PingPong : Precise control

■  About PingPong :

        Pingpong is a classic game, you can look at here for more infomation.

■  How to solve this Kata?:

        Your task is very simple. Coding in function playPingPong, accept two parameters. position means the ball starting position on the top, direction means the ball runing direction. According to the two parameters, calculate the position of the ball when it reaches the bottom.

        Our table width is 300, the length is 200. The range of the parameter position is: 10-290; Parameter direction has only two values: "DL"(means downleft) and "DR"(means downright). The ball's running angle is always 45 degrees.

        The result should be a number from range:10-290. Because your racket length is 20, so your return value allows the difference between positive and negative 10. For example: If the ball runs to position 200, and then your returned value can be a number between 190-210.

Classic Games series:
Play Tetris : Shape anastomosis
Play FlappyBird : Advance Bravely
Play PingPong : Precise control
*/
function playPingPong(position,direction){
  if (direction==='DL'){
  for (let i=0;i<200;i++){
    position--
  }
  return Math.abs(position)}
  let wall=false
  for (let i=0;i<200;i++){
  if (position>=300){
      wall =true
    } 
   if (wall){position--}
   else {position++} 
  }
  return Math.abs(position)
}
