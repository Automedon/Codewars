/*
Description:
Introduction
There is a war and nobody knows - the alphabet war!
The letters called airstrikes to help them in war - dashes and dots are spread everywhere on the battlefield.

Task
Write a function that accepts reinforces array of strings and airstrikes array of strings.
The reinforces strings consist of only small letters. The size of each string in reinforces array is the same.
The airstrikes strings consists of * and white spaces. The size of each airstrike may vary. There may be also no airstrikes at all.

The first row in reinforces array is the current battlefield. Whenever some letter is killed by bomb, it's replaced by a letter from next string in reinforces array on the same position.
The airstrike always starts from the beginning of the battlefield.
The * means a bomb drop place. The each * bomb kills letter only on the battelfield. The bomb kills letter on the same index on battlefield plus the adjacent letters.
The letters on the battlefield are replaced after airstrike is finished.
Return string of letters left on the battlefield after the last airstrike. In case there is no any letter left in reinforces on specific position, return _.

reinforces = [ "abcdefg",
               "hijklmn"];
airstrikes = [ "   *   ",
               "*  *   "];

The battlefield  is     : "abcedfg".
The first airstrike    : "   *   "  
After first airstrike  : "ab___fg"
Reinforces are comming : "abjklfg"
The second airstrike   : "*  *   "
After second airstrike : "_____fg"
Reinforces are coming  : "hi___fg"
No more airstrikes => return "hi___fg"
Other example
  reinforces =    
          ["g964xxxxxxxx",
           "myjinxin2015",
           "steffenvogel",
           "smile67xxxxx",
           "giacomosorbi",
           "freywarxxxxx",
           "bkaesxxxxxxx",
           "vadimbxxxxxx",
           "zozofouchtra",
           "colbydauphxx" ];
airstrikes =
          ["* *** ** ***",
           " ** * * * **",
           " * *** * ***",
           " **  * * ** ",
           "* ** *   ***",
           "***   ",
           "**",
           "*",
           "*" ]
That should lead to:

alphabetWar(reinforces, airstrikes); // => codewarsxxxx
*/
function alphabetWar(r, a)
{   
    for (let i=0;i<a.length;i++){
      for(let j=0;j<=r[0].length;j++){
        if (a[i][j]==='*'){
          r[0]=r[0].split``
          r[0][j]='_' 
          r[0][j-1]='_'
          r[0][j+1]&&(r[0][j+1]='_')
          r[0]=r[0].join`` 
        }
      }
      if (r[0].includes('_')){
          for (let z=1;z<r.length;z++){
            for (let k=0;k<=r[z].length;k++){
              if (r[0][k]==='_'&&r[z][k]!=='_'){
                r[z]=r[z].split``
                r[0]=r[0].split``
                r[0][k]=r[z][k]
                r[z][k]='_'
                r[0]=r[0].join``
                r[z]=r[z].join``
              }
            }
          }
        }
    }
    return r[0]
}
