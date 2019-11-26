/*
Description:
We all love the future president (or Führer or duce or sōtō as he could find them more fitting) donald trump, but we might fear that some of his many fans like John Miller or John Barron are not making him justice, sounding too much like their (and our as well, of course!) hero and thus risking to compromise him.

For this reason we need to create a function to detect the original and unique rythm of our beloved leader, typically having a lot of extra vowels, all ready to fight the estabilishment.

The index is calculated based on how many vowels are repeated more than once in a row and dividing them by the total number of vowels a petty enemy of America would use.

For example:

trumpDetector("I will build a huge wall")==0 #definitely not our trump: 0 on the trump score
trumpDetector("HUUUUUGEEEE WAAAAAALL")==4 #4 extra "U", 3 extra "E" and 5 extra "A" on 3 different vowel groups: 12/3 make for a trumpy trumping score of 4: not bad at all!
trumpDetector("listen migrants: IIII KIIIDD YOOOUUU NOOOOOOTTT")==1.56 //14 extra vowels on 9 base ones
Notes: vowels are only the ones in the patriotic group of "aeiou": "y" should go back to Greece if she thinks she can have the same rights of true American vowels; there is always going to be at least a vowel, as silence is the option of coward Kenyan/terrorist presidents and their friends.

Round each result by two decimal digits: there is no place for small fry in Trump's America.

Special thanks for Izabela for support and proof-reading.
*/
function trumpDetector(t){
  let v = t.replace(/[^aeiou]/gi,' ').replace(/ +/g,' ').trim().toUpperCase()
  let vowels = 0
  let groups = 0
  v.replace(/(\w)\1{1,}/g,(a)=>vowels+=a.length-1)
  v.replace(/(\w)\1{0,}/g,(a)=>groups+=1)
  return (vowels/groups).toFixed(2)*1
}
