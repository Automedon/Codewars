/*
Description:
Our counter prototype is broken. Can you spot, what's wrong here?
*/

class Counter {
  constructor() {
    this.value = 0;
  }
  
  increase() {
    this.value++;
  };

  getValue() {
    return this.value;
  };

  reset() {
    this.value = 0;
  };
}
