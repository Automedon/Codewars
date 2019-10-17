/*
Description:
For long period JavaScript warriors trained a lot in coding kata. But to find way warrior also need physical kata. Some of warriors forgot about this fact and enemies can use this weakness, your clan is under threat. You are chosen to fix this situation. Write a function to calculate Body mass index for each warrior.

bmi = weght(kg)/(height(m)*height(m))

Warriors know only their height in centimetres and weight (in kilogrames). Your task is to return an object with fields

value - calculated Body mass index, rounded with one number after decimal point.

category - from https://en.wikipedia.org/wiki/Body_mass_index

Ex :

calculateBmi(65,175)
Returns :

{value: "21.2", category: "Normal (healthy weight)"}
*/

function calculateBmi(weight, height) {
  const bmi = (weight/((height/100)*(height/100))).toFixed(1)
  let  z=''
  const obj={};
  if (bmi<15) z='Very severely underweight';
  if (bmi<16&&bmi>15) z= 'Severely underweight';
  if (bmi<18.5&&bmi>16) z= 'Underweight';
  if (bmi<25&&bmi>18.5) z= "Normal (healthy weight)";
  if (bmi<30&&bmi>25) z= 'Overweight';
  if (bmi<35&&bmi>30) z= 'Obese Class I (Moderately obese)';
  if (bmi<40&&bmi>35) z= 'Obese Class II (Severely obese)';
  if (bmi<45&&bmi>40) z= 'Obese Class III (Very severely obese)';
  if (bmi<50&&bmi>45) z= 'Obese Class IV (Morbidly Obese)';
  if (bmi<60&&bmi>50) z= 'Obese Class V (Super Obese)';
  if (bmi>60) z= 'Obese Class VI (Hyper Obese)';
  obj.value=bmi
  obj.category=z
return obj
}
