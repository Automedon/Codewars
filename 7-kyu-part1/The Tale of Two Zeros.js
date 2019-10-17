/*
Description:
Long ago, at the dawn of the land of IEEE, there were born two values by the names of Positive Zero and Negative Zero. They were so alike that few people could tell them apart. As time went on, young Positive grew into popularity while Negative's precense was barely recognized. Negative felt as though he was living in Positive's shadow, and even when people would see him they seemed to believe they were seeing Positive instead. The would say things like, "Well, -0 == 0, right?".

Sometimes even Negative Zero doubts he exist, which is an extremely harsh fate for any value. But surely you can see the difference, surely you can prove that Negative Zero has his own identity?

Please help Negative Zero prove his identity by finishing the isNegativeZero function.
*/
function isNegativeZero(x) {
  return Object.is(x, -0);
}
