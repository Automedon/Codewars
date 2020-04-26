/*
Description:
Object-Oriented PHP #9 - Abstract Classes [Advanced]
About this Kata Series
In this series, we will start off by learning the very fundamentals of object-oriented programming (commonly referred to as "OOP") and classes in PHP. We will then proceed by learning about the 3 different visibilities of class properties and methods and when to use them. After that, classical inheritance will be taught along with its perks and potential drawbacks. Finally, in the final Kata(s) in this series, more advanced OOP concepts may be taught such as interfaces and even abstract classes. Apart from the main course content, every 3 Kata or so into this Series, there will be an exercise Kata to practice on previously learned knowledge.

Lesson
Before you proceed ...
If you haven't already completed the first 7 Kata in this Series, you are highly recommended to complete all of them before proceeding with this lesson. At the very least, you are expected to have a basic understanding of how classes and classical inheritance works in PHP.

If you have already completed the first 7 Kata in this series, then congratulations! You have mastered the basics of object-oriented programming in PHP and we will begin to cover more advanced (and perhaps less-known) topics and techniques in OOP in PHP.

I don't want to directly instantiate a Person or an Animal - it's too vague!
In various previous Kata of this Series, we did a few exercises where we would create a Person or Animal class and then create a few more specific child classes which would inherit from it. We would then instantiate objects mainly from those (more specific and well-defined) child classes. However, in the previous Kata, although we tended to instantiate new objects from the child classes, it was still perfectly possible to directly instantiate an instance of Person or Animal, which was certainly not intended as such classes are too vague in their definitions.

At this point, you may have wondered: is it possible to define a generic class such that it can be extensively inherited from to create more specific classes (such as the Person and Animal classes) but direct instances of the class itself cannot be instantiated?

Enter the Abstract Class!

Abstract Classes in PHP
Abstract classes in PHP are basically another special type of class. An abstract class is declared by prefixing the keyword abstract before the class itself, like such:

abstract class Foo {
  /* Class code here */
}
In terms of the content inside an abstract class, there are far fewer restrictions as to what an abstract class can contain compared to interfaces (see Kata #8 of this Series) - an abstract class can pretty much contain anything an ordinary class contains except for private properties and methods. In fact, I suspect (but have not confirmed; feel free to test my theory) that you may declare private properties and methods in an abstract class without PHP raising a Fatal error, except for the fact that any such properties/methods would be completely and utterly useless (if you don't understand why, think about the very definition and purpose of an abstract class)! For example, this would be a completely valid abstract class:

abstract class Foo {
  public $public; // A public property, just like any other class
  protected $protected; // A protected property, just like any other class
  public function __construct(/* arguments */) {
    /*
      A declared and defined class constructor, just like any other class!
      However, note that you will **NOT** be able to directly instantiate objects from it (or a PHP Fatal error will be thrown)
    */
  }
  public function bar(/* arguments */) {
    /* A public method */
  }
  protected function baz(/* arguments */) {
    /* A protected method */
  }
}
However, the real power of an abstract class is its ability to declare certain methods abstract. An abstract method is one that has its signature declared but is not implemented (similar to the methods found in interfaces). You may have remembered from Kata #8 of this Series that the abstract public methods in an interface look very similar to ordinary methods except that the method is missing the "body":

interface SomeInterface {
  public function someMethod(/* arguments in signature */); // Very similar to an ordinary class method except for the lack of curly braces {}
}
However, in an abstract class, if a method is to be declared abstract, you must also prefix the abstract keyword before the visibility declaration of the method. Note also that in abstract classes, you can declare a protected method as abstract.

abstract class Foo {
  public $public;
  protected $protected;
  public function __construct(/* arguments */) {/* implementation */}
  public function bar(/* arguments */) {/* implementation */}
  protected function baz(/* arguments */) {/* implementation */}

  // A public method declared abstract
  abstract public function somePublicAbstractMethod(/* signature arguments */);
  // A protected method declared abstract (possible in abstract classes but not in interfaces)
  abstract protected function someProtectedAbstractMethod(/* arguments */);
}
As mentioned above, if you try to directly create a new instance of an abstract class you will get a Fatal error:

abstract class Foo {
  public $public;
  protected $protected;
  public function __construct(/* arguments */) {/* implementation */}
  public function bar(/* arguments */) {/* implementation */}
  protected function baz(/* arguments */) {/* implementation */}
  abstract public function somePublicAbstractMethod(/* signature arguments */);
  abstract protected function someProtectedAbstractMethod(/* arguments */);
}

$failed_object = new Foo; // Fatal Error
However, if you extends the abstract class in an ordinary class and then instantiate a new instance of that child class, no error will be thrown. Note that the child class inheriting from the abstract class must properly implement all of the abstract methods present; otherwise a Fatal error will occur.

abstract class Foo {
  public $public;
  protected $protected;
  public function bar(/* arguments */) {/* implementation */}
  protected function baz(/* arguments */) {/* implementation */}
  abstract public function somePublicAbstractMethod(/* arguments */);
  abstract protected function someProtectedAbstractMethod(/* arguments */);
}

class ConcreteClass extends Foo {
  // The inheriting child class (ConcreteClass) must properly implement **both** somePublicAbstractMethod and someProtectedAbstractMethod; otherwise a Fatal error will occur
  public function somePublicAbstractMethod(/* arguments */) {/* implementation */}
  protected function someProtectedAbstractMethod(/* arguments */) {/* implementation */}
}

$object = new ConcreteClass; // Success
A final note - unlike interfaces, a child class cannot inherit from more than one abstract class.

Since abstract classes is quite an advanced topic, you are strongly advised to read up the official documentation on php.net, look up a few examples of production-level software using abstract classes to get an insight as to when and how they are used, and experiment with abstract classes in your local server to further understand their behaviour before undertaking this Kata.

Task
Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

Define the following classes and follow the instructions carefully to pass the tests and complete this Kata.

Person
This class should be declared abstract.

Properties
Every person should have a $name, $age and $gender. All of these properties should be declared public.

Constructor
The class constructor should receive three required arguments in the following order: $name, $age, $gender and should set their respective properties.

Methods
introduce - Every person knows how to introduce himself/herself in some way (well, maybe except for babies but we won't be dealing with them in this Kata), but different types of people can introduce themselves in very different ways so there is no universal implementation of the introduce method. Therefore, declare this method abstract. This method should receive no arguments.
greet - This method should receive exactly one required argument $name and return a string of the form "Hello NAME_HERE".
Child
Since a Child "is a" Person, the Child class should inherit from the Person class. Furthermore, since a Child has infinite possibilities, it is impossible to further categorise children into different categories (by creating child classes) so the Child class should be declared final to prevent further inheritance.

Properties
The Child class should have already inherited the following public properties from the Person class:

$name
$age
$gender
Furthermore, the Child class should also have an additional public property $aspirations which is expected to be an array of strings (but no type checking is required).

Constructor
The class constructor should receive four required arguments in the following order: $name, $age, $gender, $aspirations and set their respective properties correctly. No error checking is required.

Methods
introduce - This public method should receive no arguments and return a string of the form "Hi, I'm NAME_HERE and I am AGE_HERE years old".
greet - This public method should accept exactly one required argument $name and return a string of the form "Hi NAME_HERE, let's play!".
say_dreams - This public method should accept no arguments and return a string of the form "I would like to be a(n) ASPIRATIONS_HERE when I grow up." The exact behaviour of this method is demonstrated below:
// Aspirations = ["Doctor"]
$child->say_dreams(); // "I would like to be a(n) Doctor when I grow up."

// Aspirations = ["Lawyer", "Teacher"];
$child->say_dreams(); // "I would like to be a(n) Lawyer or Teacher when I grow up."

// Aspirations = ["Teacher", "Lawyer", "Police Officer"];
$child->say_dreams(); // "I would like to be a(n) Teacher, Lawyer or Police Officer when I grow up."

// Aspirations = ["teacher", "lawyer", "doctor", "police officer", "owner of a pet shop"];
$child->say_dreams(); // "I would like to be a(n) teacher, lawyer, doctor, police officer or owner of a pet shop when I grow up."
N.B. Preloaded for you is a function say_list which receives an array as its only argument and has the behaviour demonstrated below which could come in handy when implementing Child::say_dreams.

say_list(["Apple"]) // => "Apple"
say_list(["Apple", "Orange"]) // => "Apple or Orange"
say_list(["Apple", "Banana", "Dragonfruit", "Kiwi"]) // "Apple, Banana, Dragonfruit or Kiwi"
ComputerProgrammer
A ComputerProgrammer "is a" Person. Since there can be many different types of ComputerProgrammer (e.g. Web Developer, Software Engineer), we want to be able to extend this class when necessary so it should not be declared final.

Properties
The ComputerProgrammer class should have the following public properties:

$name
$age
$gender
$occupation - This should always be equal to "Computer Programmer"
Note that some of the properties are already declared in the parent class so there is no need to redeclare them.

Constructor
The class constructor for this class is identical to that of its parent class.

Methods
introduce - This public method should accept no arguments and return a string of the form "Hello, my name is NAME_HERE, I am AGE_HERE years old and I am a(n) OCCUPATION_HERE"
greet - This public method should accept an argument $name and return a string of the form "Hello OTHER_NAME_HERE, I'm OWN_NAME_HERE, nice to meet you".
advertise - This public method should return the string "Don't forget to check out my coding projects"
*/
abstract class Person {
  public $name;
  public $age;
  public $gender;
  public function __construct($n,$a,$g){
    $this->name = $n;
    $this->age = $a;
    $this->gender = $g;
  }
  abstract public function introduce();
  public function greet($name){
    return "Hello $name";
  }
}

final class Child extends Person {
   public $aspirations;
   public function __construct($name, $age,$gender, $aspirations) {
    parent::__construct($name, $age, $gender);
    $this->aspirations = $aspirations;
  }
  public function introduce(){
    return "Hi, I'm $this->name and I am $this->age years old";
  }
  public function greet($name){
    return "Hi $name, let's play!";
  }
  public function say_dreams(){
    return "I would like to be a(n) ".say_list($this->aspirations)." when I grow up.";
  }
}
class ComputerProgrammer extends Person {
   public $occupation = "Computer Programmer";
   public function __construct($name, $age,$gender) {
    parent::__construct($name, $age, $gender);
  }
  public function introduce(){
    return "Hello, my name is $this->name, I am $this->age years old and I am a(n) $this->occupation";
  }
  public function greet($name){
    return "Hello $name, I'm $this->name, nice to meet you";
  }
  public function advertise(){
    return "Don't forget to check out my coding projects";
  }
}
