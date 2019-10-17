/*
Description:
Shorten Me: Array Declaration VI (Months)
Task
You have to write an array() function returning an array object with elements as follow:

[ 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December' ]
Coding Limitation:
Less than 120 characters
*/
array=_=>[...Array(24)].map((_,i)=>new Date(0,i).toLocaleString('en-US',{month:'long'}))
