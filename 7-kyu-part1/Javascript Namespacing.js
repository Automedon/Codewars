MyNamespace = MyNamespace || {}

MyNamespace.MyClass = class{
  constructor(arg){
    this.arg = arg
  }
  
  sayHello(){
    return this.arg
  }
}
