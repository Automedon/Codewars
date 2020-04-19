/*
Description:
Return a number sequence replacing multiples of the following with words: 3 = Ping 5 = Pong

For example 1 2 Ping 4 Pong

Parameters will be start number and end number

N.B In the event of a number being a multiple of either insert both words without spaces
*/
export function pingPong(startNumber: number, endNumber: number): string {
  const arr = []
  for (let i=startNumber;i<=endNumber;i++){
    if (i%3===0&&i%5===0){
      arr.push(`PingPong`)
    } else if (i%3===0){
      arr.push(`Ping`)
    } else if (i%5===0){
      arr.push(`Pong`)
    } else {
      arr.push(i)
    }
  }
  return arr.join(' ');
}
