/*
Description:
Object-Oriented PHP #7 - The "Final" Keyword
About this Kata Series
In this series, we will start off by learning the very fundamentals of object-oriented programming (commonly referred to as "OOP") and classes in PHP. We will then proceed by learning about the 3 different visibilities of class properties and methods and when to use them. After that, classical inheritance will be taught along with its perks and potential drawbacks. Finally, in the final Kata(s) in this series, more advanced OOP concepts may be taught such as interfaces and even abstract classes. Apart from the main course content, every 3 Kata or so into this Series, there will be an exercise Kata to practice on previously learned knowledge.

Lesson
Don't worry, this is not the final Kata of this series ;)

Recap
In Kata #5 of this Series, we learned that a child class can inherit from a parent class via the extends keyword. We also learned that although a child class automatically inherits most properties and methods of the parent class (except for private properties and methods), it is possible to override properties and methods inherited from the parent class by simply redeclaring and redefining them.

The "Final" Keyword
Usually, all is fine and well when the properties and methods of a (parent) class can be overriden by a child class at will. If the child class wishes to keep the parent's version of a property or method, then simply no extra code is written. If, however, the child class wishes to redefine or improve upon the parent's version of a method, then it can simply redeclare and redefine it.

However, there may sometimes be situations where the parent's version of a method is so important that you want to ensure that it is never overriden by an inheriting child class (although to be honest, I personally have never found myself in this particular situation). It is so important such that you want a Fatal Error (which is unrecoverable in PHP) to be thrown if you ever accidentally redeclare or redefine that particular method in any child class that may inherit from that class containing that all-important method.

Enter the final keyword! The final keyword can be used on a class method to ensure that it cannot be overriden by any child class inheriting from that class. In terms of syntax, the final keyword is usually placed before the visibility declaration of a method, like such:

class Foo {
  final public function bar(/* arguments here */) {
    // code here
  }
}
Please note that only class methods (and classes themselves actually, but we will not cover that in this lesson) can be declared final - class properties cannot be declared final (use class constants instead).

Task
Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

Copy and paste a working solution from Kata #4 of this Series
Since all humans greet extraterrestrials in the exact same way, declare the greet_extraterrestrials static method as final.
Since all people also describe their jobs in the same way, make the describe_job method final too.
Declare and define a new class, ComputerProgrammer, which "is a" Person ;)
In the ComputerProgrammer class, override the introduce method such that it returns a string of the format "Hello, my name is NAME_HERE and I am a OCCUPATION_HERE"
*/
class Person {
  public $name;
  public $age;
  public $occupation;
  const species  = 'Homo Sapiens';
  public function __construct($name, $age, $occupation){
    $this->name = $name;
    $this->age = $age;
    $this->occupation = $occupation;
  }
  public function introduce(){
    return "Hello, my name is $this->name";
  }
  final public function describe_job(){
    return "I am currently working as a(n) $this->occupation";
  }
  final public static function greet_extraterrestrials($species){
    return "Welcome to Planet Earth $species!";
  }
}

class ComputerProgrammer extends Person{
 public function introduce(){
    return "Hello, my name is $this->name and I am a $this->occupation";
  }
}
