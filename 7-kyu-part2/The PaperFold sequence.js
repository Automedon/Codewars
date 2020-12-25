/*
Description:
Wikipedia: The regular paperfolding sequence, also known as the dragon curve sequence, is an infinite automatic sequence of 0s and 1s defined as the limit of the following process:

1
1 1 0
1 1 0 1 1 0 0
1 1 0 1 1 0 0 1 1 1 0 0 1 0 0

At each stage an alternating sequence of 1s and 0s is inserted between the terms of the previous sequence.

Define a generator function paperFold that sequentially generates the values of this sequence.

It will be tested for up to 1 000 000 values.
*/
function* paperFold (){
  for (let i = 1; ; i++){
     yield (i & (i & -i) << 1) != 0 ? 0 : 1;
  }
}
