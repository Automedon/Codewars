/*
Description:
 Returns the bank account number parsed from specified string.

 You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
 The machine scans the paper documents, and produces a string with a bank account that looks like this:

 _     _  _     _  _  _  _  _
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|
 Each string contains an account number written using pipes and underscores.
 Each account number should have at least one digit, all of which should be in the range 0-9.

 Your task is to write a function that can take bank account string and parse it into actual account numbers.

 @param {string} bankAccount
 @return {number}
Examples:


   '    _  _     _  _  _  _  _ \n'+
   '  | _| _||_||_ |_   ||_||_|\n'+     => 123456789
   '  ||_  _|  | _||_|  ||_| _|\n'

   ' _  _  _  _  _  _  _  _  _ \n'+
   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
   '|_||_  _||_| _||_|  ||_| _|\n',

   ' _  _  _  _  _  _  _  _  _ \n'+
   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
   '|_||_  _||_| _||_| _||_| _|\n',
(c)RSS
*/
function parseBankAccount(bankAccount) {
  const numbers = {
    0 :' _ | ||_|',
    1 :'     |  |',
    2 :' _  _||_ ',
    3 :' _  _| _|',
    4 :'   |_|  |',
    5 :' _ |_  _|',
    6 :' _ |_ |_|',
    7 :' _   |  |',
    8 :' _ |_||_|',
    9 :' _ |_| _|'
  }
  const arr = []
  let str = bankAccount.split`\n`
    for (let i=0;i<str[0].length;i+=3){
      let temp = []
      temp.push(str[0].slice(i,i+3))
      temp.push(str[1].slice(i,i+3))
      temp.push(str[2].slice(i,i+3))
      arr.push(temp.join``)
    }
    const res = []
    for (let i=0;i<arr.length;i++){
      for (let j in numbers){
        if (arr[i]===numbers[j]) res.push(j)
      }
    }
    return Number(res.join``)
}
