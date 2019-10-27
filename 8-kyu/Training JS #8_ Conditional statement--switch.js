/*
Description:
Training JS #8:
Conditional statement--switch

In javascript, switch is another condition statement.

switch(n){
  case 1:  
    //code block
    break;
  case 2:
    //code block
    break;
  case ...:
    //code block
    break;

  default:       //default is optional, sometimes it can be omitted
    //code block
                 //The last one does not need break
}
switch is the keyword, n is the variable to switch, case 1 means when n==1, following the ":",you can add some executable statement, with keyword break as termination(if you forgot "break", code will running with case 2, case 3...until a "break" appear),default like else in the if..else statement.

In some cases, use the switch statement to look more clearly than the if..else statement.

For example, we can write a function to calculate what day is today, like this:

function whatDayIsToday(n){
  //getDay() is a methods of Date(), we will learn them later.
  var day=new Date().getDay(),x; 
  switch (day){
    case 0:
      x="Today it's Sunday";
      break;
    case 1:
      x="Today it's Monday";
      break;
    case 2:
      x="Today it's Tuesday";
      break;
    case 3:
      x="Today it's Wednesday";
      break;
    case 4:
      x="Today it's Thursday";
      break;
    case 5:
      x="Today it's Friday";
      break;
    case 6:
      x="Today it's Saturday";
      break;
  }
  return x;
}
#Task
Complete function ```howManydays```, function accept 1  parameters:```month```, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
little tips: Use default for most of the cases can reduce your work.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
*/

function howManydays(month){
  switch (month){
  case 1:return 31;
  case 2:return 28;
  case 3:return 31;
  case 4:return 30;
  case 5:return 31;
  case 6:return 30;
  case 7:return 31;
  case 8:return 31;
  case 9:return 30;
  case 10:return 31;
  case 11:return 30;
  case 12:return 31;
  
  }
  return month;
}
