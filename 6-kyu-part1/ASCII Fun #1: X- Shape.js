/*
Description:
This will probably be a little series :)

X-Shape
You will get an odd Integer n (>= 3) and your task is to draw a X. Each line is separated with '\n'.

Use the following characters: ■ □

For Ruby, Crystal and PHP: whitespace and o

e.g.:


                                     ■□□□■
            ■□■                      □■□■□
  x(3) =>   □■□              x(5)=>  □□■□□
            ■□■                      □■□■□
                                     ■□□□■
*/
function x(n){
  let arr = Array.from({length:n},x=>Array.from({length:n},x=>'□'))
  for (let i=0,k=n-1;i<n;i++,k--){
    arr[i][i]='■'
    arr[k][i]='■'
  }
  return arr.map(v=>v.join``).join`\n`
}
