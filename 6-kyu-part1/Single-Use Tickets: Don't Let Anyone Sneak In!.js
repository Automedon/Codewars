/*
Description:
You're hosting an event, and the admission tickets are expensive. Groups of people are trying to cheat the system by using the same tickets multiple times. Stop them!

1) Create a constructor function called Ticket that takes one parameter, code, and creates a Ticket object. The Ticket object will have the following parameters:

code : a string that stores the ticket code
used : a boolean that stores whether or not the ticket has been used yet
useTicket: a function registers that the ticket has been used and prevents reuse or tampering
Note: Do not let anyone tamper with used tickets. Once a ticket has been used, don't let anyone change it by writing:
ticket.used = false
2) Create a function called validTicket to check whether the ticket is valid and return true or false. For a ticket to be valid, the ticket code must match the correct code, and the ticket must be unused.

If you complete this kata and there are no issues, please remember to give it a ready vote and a difficulty rating. :)
*/
function Ticket (code) {
  this.code = code;
  this.used = false;
  this.useTicket = function () {
    this.used = true;
    Object.freeze(this);
  };
}

function validTicket(ticket, correctCode){
 return (ticket.code === correctCode && ticket.used === false)
}
