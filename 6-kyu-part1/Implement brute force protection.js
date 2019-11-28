/*
Description:
You are tasked with protecting an important application against hackers.

The first defense you have to implement is brute force protection.

Some inexperienced (or lazy) hackers may try to break in by simply guessing the admin password over and over again.

Design a function which will block a login attempt if it comes from an IP address which failed to login 20 times in a row.

The function will receive a single parameter - an object containing two properties:

loginAttempt.sourceIP // the IP of the person trying to log in
loginAttempt.successful // whether the log-in attempt succeeded
The bruteForceDetected function should return true when the IP should be blocked and false otherwise.

Note: A successful login should reset the number of counts.
*/
const d = {}
function bruteForceDetected(l)
{
  let ip = l.sourceIP
  
  if (!d[ip]) d[ip]=0
  if (!l.successful) {
  d[ip]+=1
  if (d[ip]>19) return true
  return false
  }
  if (l.successful&&d[ip]<20){
  d[ip]=0
  return false
  }
}
