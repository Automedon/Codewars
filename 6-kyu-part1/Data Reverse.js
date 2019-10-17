/*
Description:
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/

const dataReverse = function(data){
  if (data.length===0) return []
  const arrayBytes = [];
  const tam = data.length / 8;
  for (var i = 0; i < tam; i++){
    arrayBytes.push(data.splice(0,8));
  }
  return arrayBytes.reverse().join().split(',').map(v=>v*1);
}
