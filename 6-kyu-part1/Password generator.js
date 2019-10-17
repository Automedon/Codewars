/*
Description:
You need to write a password generator that meets the following criteria:

6 - 20 characters long
contains at least one lowercase letter
contains at least one uppercase letter
contains at least one number
contains only alphanumeric characters (no special characters)
Return the random password as a string.

Note: "randomness" is checked by counting the characters used in the generated passwords - all characters should have less than 50% occurance. Based on extensive tests, the normal rate is around 35%.
*/
function passwordGen(){
  let password=''
  while(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\W_]{6,20}$/.test(password)){
    password=gen()
  }
  return password
}
function gen(){
    let length = ~~(Math.random()*(20)+6)
  let password = ''
  let low = 'qwertyuiopasdfghjklzxcvbnm'
  let upper = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase()
  let num = '0123456789'
  for (let i=0;i<length;i++){
    let get = (()=> ~~(Math.random()*(3)))()
    if (get===0){
      password+=low[~~(Math.random()*26)]
    }
    if (get===1){
      password+=upper[~~(Math.random()*26)]
    }
    if (get===2){
      password+=num[~~(Math.random()*10)]
    }
  }
  return password
}
