/*
Description:
In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetcally, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

Example
alphaSeq("ZpglnRxqenU") -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
Technical Details
The string will include only letters.
The first letter of each sequence is uppercase followed by n-1 lowercase.
Each sequence is seperated with a comma.
Return value needs to be a string.
*/


function alphaSeq (str) {
  let sorted=str.toLowerCase().split('').sort();
  let repeating=sorted.map(v=>v.charCodeAt()-96);
  return sorted.map((v,i)=>v.repeat(repeating[i]).slice(0,1).toUpperCase()+
                           v.repeat(repeating[i]).slice(1)).join(',');
}
