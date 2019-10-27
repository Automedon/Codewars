/*
Description:
We need you to implement a method of receiving commands over a network, processing the information and responding.

Our device will send a single packet to you containing data and an instruction which you must perform before returning your reply.

To keep things simple, we will be passing a single "packet" as a string. Each "byte" contained in the packet is represented by 4 chars.

One packet is structured as below:

Header  Instruction   Data1    Data2   Footer
------   ------       ------   ------  ------
 H1H1     0F12         0012     0008    F4F4
------   ------       ------   ------  ------

The string received in this case would be - "H1H10F1200120008F4F4"

Instruction: The calculation you should perform, always one of the below.
            0F12 = Addition
            B7A2 = Subtraction
            C3D9 = Multiplication
            FFFF = This instruction code should be used to identify your return value.
The Header and Footer are unique identifiers which you must use to form your reply.

Data1 and Data2 are the decimal representation of the data you should apply your instruction to. i.e 0109 = 109.

Your response must include the received header/footer, a "FFFF" instruction code, and the result of your calculation stored in Data1.

Data2 should be zero'd out to "0000".

To give a complete example:

If you receive message "H1H10F1200120008F4F4".
The correct response would be "H1H1FFFF00200000F4F4"
In the event that your calculation produces a negative result, the value returned should be "0000", similarily if the value is above 9999 you should return "9999".

Goodluck, I look forward to reading your creative solutions!
*/
function communicationModule(packet) {
  let [header, inst, data1, data2, footer] = packet.match(/.{4}/g);

  let ops = {
    "0F12": (a, b) => a + b,
    B7A2: (a, b) => a - b,
    C3D9: (a, b) => a * b
  };

  let res = ops[inst](+data1, +data2);

  if (res < 0) res = 0;
  else if (res > 9999) res = 9999;

  return `${header}FFFF${`000${res}`.slice(-4)}0000${footer}`;
}
