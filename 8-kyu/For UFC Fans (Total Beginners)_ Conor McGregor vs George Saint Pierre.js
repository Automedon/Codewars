/*
Description:
This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck!
*/

const quote = function(fighter) {
  switch(fighter.toLowerCase()) {
    case 'conor mcgregor': return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
    case 'george saint pierre': return "I am not impressed by your performance.";
    default : 'Who are you?' 
  }
};
