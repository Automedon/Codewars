/*
Description:
The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.

As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.

The young borrowers have begged their parents to stop using caps and punctuation.

Change the input text 's' to new borrower speak. Help save the next generation!
*/
function borrow(s) {
  return s.replace(/[^a-z]/gi, "").toLowerCase();
}
