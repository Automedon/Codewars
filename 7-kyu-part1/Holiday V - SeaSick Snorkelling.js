/*
Description:
Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

Remember, only the process of change from wave to calm (and vice versa) will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that figure is more than 20% of the string, return "Throw Up", if less, return "No Problem".
*/
function seaSick(x){
  var count = 0;
  for (var i = 0; i < x.length - 1; i++) {
    if (x[i] !== x[i+1]) {
      count++;
    }
  }
  if (count / x.length > 0.2) {
    return "Throw Up";
  }
  return "No Problem";
}
