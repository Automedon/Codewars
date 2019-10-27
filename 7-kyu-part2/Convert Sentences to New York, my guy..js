/*
Description:
One of the most famous and often used phrases in the lexicon of New Yorkers is "my guy". For this challenge, create a function that adds "my guy" at the end of every sentence.

Examples:

newYorker(
`Bees are flying insects closely related to wasps and ants, known for their 
role in pollination and, in the case of the best-known bee species, the 
European honey bee, for producing honey and beeswax. Bees are a monophyletic 
lineage within the superfamily Apoidea and are presently considered a clade, 
called Anthophila. There are nearly 20,000 known species of bees in seven 
recognized biological families. They are found on every continent except 
Antarctica, in every habitat on the planet that contains insect-pollinated 
flowering plants.` )

/* => Bees are flying insects closely related to wasps and ants, known for 
their role in pollination and, in the case of the best-known bee 
species, the European honey bee, for producing honey and beeswax my 
guy. Bees are a monophyletic lineage within the superfamily Apoidea and 
are presently considered a clade, called Anthophila my guy. There are 
nearly 20,000 known species of bees in seven recognized biological 
families my guy. They are found on every continent except Antarctica, 
in every habitat on the planet that contains insect-pollinated 
flowering plants my guy.
*/

newYorker(
`The FitnessGram™ Pacer Test is a multistage aerobic capacity test that 
progressively gets more difficult as it continues. The 20 meter pacer test 
will begin in 30 seconds. Line up at the start. The running speed starts 
slowly, but gets faster each minute after you hear this signal. [beep] A 
single lap should be completed each time you hear this sound. [ding] Remember 
to run in a straight line, and run as long as possible. The second time you 
fail to complete a lap before the sound, your test is over. The test will 
begin on the word start. On your mark, get ready, start.` )

/* => The FitnessGram™ Pacer Test is a multistage aerobic capacity test that 
progressively gets more difficult as it continues my guy. The 20 meter pacer 
test will begin in 30 seconds my guy. Line up at the start my guy. The 
running speed starts slowly, but gets faster each minute after 
you hear this signal my guy. [beep] A single lap should be completed each 
time you hear this sound my guy. [ding] Remember to run in a straight line, 
and run as long as possible my guy. The second time you fail to complete a 
lap before the sound, your test is over my guy. The test will begin on the 
word start my guy. On your mark, get ready, start my guy.
*/
*/
function newYorker(text) {
  return text.split('.').join(' my guy.')
}
