/*
Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."
*/
function nextSmaller(num){
        let arr=num.toString().split``.reverse();
        let outputString=''
        for (let i = 0; i<arr.length; i++){
            for (let j = 0; j<i; j++){
                if(arr[j]<arr[i]){
                    let tempArr = arr.splice(j,1);
                    let tempArr2 = arr.splice(0,i).sort().reverse();
                    tempArr = tempArr.concat(tempArr2);
                    outputString += arr.reverse().concat(tempArr).join("")
                    return outputString.length===outputString.replace(/^0+/,'').length?outputString*1:-1
                }
            }
        }
       return -1
    };
