/*
Description:
Given time in 24-hour format, convert it to words.

For example:
13:00 = one o'clock 
13:09 = nine minutes past one 
13:15 = quarter past one 
13:29 = twenty nine minutes past one
13:30 = half past one 
13:31 = twenty nine minutes to two
13:45 = quarter to two 
00:48 = twelve minutes to one
00:08 = eight minutes past midnight
12:00 = twelve o'clock
00:00 = midnight

Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'. 
More examples in test cases. Good luck!
*/
function solve(time) {
  const hours = { 0: 'midnight', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'one', 14: 'two', 15: 'three', 16: 'four', 17: 'five', 18: 'six', 19: 'seven', 20: 'eight', 21: 'nine', 22: 'ten', 23: 'eleven', 24: 'midnight' };
  const minutes = { 0: " o'clock", 1: 'one minute', 2: 'two minutes', 3: 'three minutes', 4: 'four minutes', 5: 'five minutes', 6: 'six minutes', 7: 'seven minutes', 8: 'eight minutes', 9: 'nine minutes', 10: 'ten minutes', 11: 'eleven minutes', 12: 'twelve minutes', 13: 'thirteen minutes', 14: 'fourteen minutes', 15: 'quarter', 16: 'sixteen minutes', 17: 'seventeen minutes', 18: 'eighteen minutes', 19: 'nineteen minutes', 20: 'twenty minutes', 21: 'twenty one minutes', 22: 'twenty two minutes', 23: 'twenty three minutes', 24: 'twenty four minutes', 25: 'twenty five minutes', 26: 'twenty six minutes', 27: 'twenty seven minutes', 28: 'twenty eight minutes', 29: 'twenty nine minutes', 30: 'thirty minutes', 31: 'thirty one minutes', 32: 'thirty two minutes', 33: 'thirty three minutes', 34: 'thirty four minutes', 35: 'thirty five minutes', 36: 'thirty six minutes', 37: 'thirty seven minutes', 38: 'thirty eight minutes', 39: 'thirty nine minutes', 40: 'fourty minutes', 41: 'fourty one minutes', 42: 'fourty two minutes', 43: 'fourty three minutes', 44: 'fourty four minutes', 45: 'quarter', 46: 'fourty six minutes', 47: 'fourty seven minutes', 48: 'fourty eight minutes', 49: 'fourty nine minutes', 50: 'fifty minutes', 51: 'fifty one minutes', 52: 'fifty two three minutes', 53: 'fifty three minutes', 54: 'fifty four minutes', 55: 'fifty five minutes', 56: 'fifty six minutes', 57: 'fifty seven minutes', 58: 'fifty eight minutes', 59: 'fifty nine minutes' };
  const timeArray = time.split(':');
  const newArray = timeArray.map(e => parseInt(e, 10));
  if (newArray[1] === 0 && newArray[0] === 0) {
    return hours[newArray[0]];
  }
  if (newArray[1] === 0 && newArray[0] !== 0) {
    return hours[newArray[0]] + minutes[newArray[1]];
  }
  if (newArray[1] < 30) {
    return minutes[newArray[1]] + ' past ' + hours[newArray[0]];
  }
  if (newArray[1] === 30) {
    return 'half past ' + hours[newArray[0]];
  }
  if (newArray[1] > 30) {
    return minutes[(60 - newArray[1])] + ' to ' + hours[newArray[0] + 1];
  }
  return 'none';
}
