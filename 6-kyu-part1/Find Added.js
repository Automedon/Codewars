/*
Description:
You are given two strings (st1, st2) as inputs. Your task is to return a string containing the numbers in st2 which are not in str1. Make sure the numbers are returned in ascending order. All inputs will be a string of numbers.

Here are some examples:

findAdded('4455446', '447555446666'); // '56667'
findAdded('44554466', '447554466'); // '7'
findAdded('9876521', '9876543211'); // '134'
findAdded('678', '876'); // ''
findAdded('678', '6'); // ''
*/
function findAdded(st1, st2){
  let d1 = st1.split``.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  let d2 = st2.split``.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  let str = ''
  for (let i in d2){
    if (d1[i]&&d2[i]){
      d2[i]-=d1[i]
    }
    if (d2[i]>0){
        str+=`${i}`.repeat(d2[i])
      }
  }
  return str
}
