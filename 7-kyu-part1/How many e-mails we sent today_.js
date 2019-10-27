/*
Description:
Every day we can send from the server a certain limit of e-mails.

Task:
Write a function that will return the integer number of e-mails sent in the percentage of the limit.
Example:

limit       - 1000;
emails sent - 101;
return      - 10%; // becouse integer from 10,1 = 10
Arguments:

Integer, limit;
Integer, number of e-mails sent today;
When:

the argument ```$sent = 0```, then return the message: "No e-mails sent";
the argument ```$sent >= $limit```, then return the message: "Daily limit is reached";
the argument ```$limit is empty```, then default ```$limit = 1000``` emails;
Good luck!
*/
function getPercentage(sent, limit) {
  if (limit === undefined) {
    limit = 1000;
  }
  const procent = Math.floor((sent / limit) * 100);
  return sent === 0
    ? "No e-mails sent"
    : procent >= 100
    ? "Daily limit is reached"
    : procent + "%";
}
