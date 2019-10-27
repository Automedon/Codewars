/*
Description:
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own. 
But he has only 24 hours left. Can he do it?
Your job is to determine if Santa can distribute all the presents in 24 hours. 

Your Task:
You will get an array as input with time durations as string in the following format: 
"hh:mm:ss"

Each duration is a present Santa has to distribute. 

Return true or false whether he can do it in 24 hours or not. 

If this kata was to easy for you. Try the harder one. 
*/
function determineTime(durations) {
  let hours = 0;
  let min = 0;
  let sec = 0;
  durations.map(v =>
    v
      .split(":")
      .map((v, i) =>
        i === 0 ? (hours += v * 1) : i === 1 ? (min += v * 1) : (sec += v * 1)
      )
  );
  min += sec / 60;
  hours += min / 60;
  return hours <= 24;
}
