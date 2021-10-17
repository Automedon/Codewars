/*
Description:
Create a Circular List

A circular list is of finite size, but can infititely be asked for its previous and next elements. This is because it acts like it is joined at the ends and loops around.

For example, imagine a CircularList of [1, 2, 3, 4]. Five invocations of next() in a row should return 1, 2, 3, 4 and then 1 again. At this point, five invocations of prev() in a row should return 4, 3, 2, 1 and then 4 again.

Your CircularList is created by passing a vargargs parameter in, e.g. new CircularList(1, 2, 3). Your list constructor/init code should throw an Exception if nothing is passed in.
*/

class CircularList {
  constructor(...args) {
    this.index = -1;
    if(!args.length) throw new Error('Required'); 
    this.args = args;
  }

  next() {
    if (this.index >= this.args.length - 1)
      this.index = 0;
    else
      this.index += 1;
    return this.args[this.index];
  }

  prev() {
    if (this.index <= 0)
      this.index = this.args.length - 1;
    else
      this.index -= 1;
    return this.args[this.index];
  }
}
