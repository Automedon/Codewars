/*
Description:
Object-Oriented PHP #8 - Interfaces [Advanced]
About this Kata Series
In this series, we will start off by learning the very fundamentals of object-oriented programming (commonly referred to as "OOP") and classes in PHP. We will then proceed by learning about the 3 different visibilities of class properties and methods and when to use them. After that, classical inheritance will be taught along with its perks and potential drawbacks. Finally, in the final Kata(s) in this series, more advanced OOP concepts may be taught such as interfaces and even abstract classes. Apart from the main course content, every 3 Kata or so into this Series, there will be an exercise Kata to practice on previously learned knowledge.

Lesson
Before you proceed ...
If you haven't already completed the first 7 Kata in this Series, you are highly recommended to complete all of them before proceeding with this lesson. At the very least, you are expected to have a basic understanding of how classes and classical inheritance works in PHP.

If you have already completed the first 7 Kata in this series, then congratulations! You have mastered the basics of object-oriented programming in PHP and we will begin to cover more advanced (and perhaps less-known) topics and techniques in OOP in PHP.

Recap
In Kata #5 of this Series, we learned that when a child class inherits from a parent class using the extends keyword, an "is a" relationship is expressed between the two classes. For example, if there is a class Dog {} and class Dachshund extends Dog {} then a Dachshund "is a" Dog.

Disadvantages of Classical Inheritance in PHP (in large-scale real world projects)
At this point, you may have wondered: is it possible for a child class in PHP to have two or more direct parents, e.g. can we do something like this?

class Foo {}
class Bar {}
class Baz extends Foo, Bar {/* Is this valid PHP? */}
Unfortunately, the answer to this is no, and for good reason. For programming languages where multiple inheritance is allowed, there potentially arises a problem called the Diamond Problem, in which if two or more direct parent classes of a child class contains different implementations of the same method, then which version of the method should the child class inherit? For example (WARNING: Invalid PHP, "example" for demonstration purposes only):

class Foo {
  public function method(/* args */) {/* some implementation */}
}
class Bar {
  public function method(/* args */) {/* some alternative implementation */}
}
class Baz extends Foo, Bar {
  /* Dilemma: Which version of "method" do we inherit? */
}
However, due to the fact that PHP prevents a child class from inheriting from more than one parent class directly, when large-scale PHP projects based on OOP are created with multiple levels of inheritance (not multiple inheritance), the resulting code tends to be "brittle" and hard to maintain over a long period of time. The idea is that if your project has something like 4-5 levels of inheritance along the chain and you make a "mistake" in the top level parent class, it would be an absolute pain to debug the whole thing because the bug in the parent class will likely affect all of its child classes (and "grandchild classes", etc.) down the chain, which means that after the bug is fixed in the parent class, modifications will also have to be made in all the classes associated with that parent class. Since the aim of this lesson is to introduce the concept of interfaces, I will not provide an example here but the disadvantages of classical inheritance are pretty well summed up in this article. Although this article is mainly about Javascript and its newest features (and why he thinks they are bad), most of what is said about classical inheritance there also applies to PHP.

Interfaces
So, what if there was a way to reap the benefits of multiple inheritance without incurring its costs? Enter the PHP Interface! Essentially, an interface is a special type of class and is declared and defined by the keyword interface, followed by the actual name of the interface, followed by curly braces {}:

interface MyInterface {
  /* Interface code here */
}
Interfaces are special and distinct from ordinary classes in a certain number of ways:

You cannot directly instantiate objects from an interface - you can only implements (sic) it in a class before instantiating objects from that class
Interfaces can only contain interface constants and public methods.
The public methods in an interface can only be declared and not defined, which gives rise to a very unique syntax
Rule #1 means that if you try to do the following:

interface MyInterface {
  /* Interface code here */
}
$failed_object = new MyInterface; // Fatal error
... an object will not be created and a Fatal Error will be thrown (which is unrecoverable in PHP). The only way in which an interface can take part in instantiating new objects is by a proper class implementing it and then a new object being created from that class:

interface MyInterface {
  /* My interface - code goes here */
}
class MyClass implements MyInterface {
  /* An ordinary class implements an interface by, well, using the `implements` keyword ;) */
}
$my_object = new MyClass; // Success
Rules #2 and #3 are the most important as they are what characterizes an interface. The very purpose of interfaces in PHP is to provide a framework/blueprint in which other classes can follow (or rather, implement). Therefore, interfaces can only contain declared but undefined public methods (and interface constants, but we will not cover that in this lesson) and the syntax is as follows (NOTE: Please read the comments in the example, they contain crucial information):

interface MyInterface {
  public function mustImplement1(); // A declared but undefined public method that must contain no arguments
  public function mustImplement2($argument); // Another unimplemented public method that must contain exactly one argument
  public function mustImplement3($argument = "default value"); // Yet another unimplemented public method that must contain exactly one optional argument with a specified default value
  public function mustImplement4($arg1, $arg2 = "default"); // An unimplemented public method that must contain exactly one required argument, followed by an optional argument with its default value specified
}
Then, if a class decides to implements (sic) that interface, the class must properly define and implement all of the public methods declared in that interface, and each of the methods being implemented must receive the exact same parameters as declared in that interface (NOTE: Read the comments again, they contain important information):

interface MyInterface {
  public function mustImplement1();
  public function mustImplement2($argument);
  public function mustImplement3($argument = "default value");
  public function mustImplement4($arg1, $arg2 = "default");
}

class MyClass implements MyInterface {
  /* The class itself is allowed to have its own properties and methods (of any visibility) not specified in the interface as long as the public methods specified in the interface are properly implemented */
  public $public;
  protected $protected;
  private $private;
  public function ownMethod1() {
    /* Some implementation */
  }
  protected function ownMethod2() {
    /* Some implementation */
  }
  private function ownMethod3() {
    /* Some implementation */
  }
  /* But the most important thing is, when a class implements a specific interface, it must properly implement **ALL** of the public methods specified in the interface in the **exact same manner** that it is declared in the interface; otherwise, a Fatal error is thrown */
  public function mustImplement1() {
    /* Some implementation.  Notice how this method receives **NO** arguments as specified in the interface */
  }
  public function mustImplement2($argument) {
    /* Some implementation.  Notice how this method receives exactly **ONE** required argument as specified in the interface */
  }
  public function mustImplement3($argument = "default value") {
    /* Some implementation.  Notice how this method receives exactly **ONE** *optional* argument as specified in the interface */
  }
  public function mustImplement4($arg1, $arg2 = "default") {
    /* Some implementation.  Notice how this method receives exactly **ONE** required argument, followed by **ONE** optional argument as specified in the interface */
  }
}
However, what would be the use of interfaces if a class can only implement one interface at a time? Given how limited the functionality of an interface is, wouldn't it be much better to simply use classical inheritance? That is true ... EXCEPT as briefly hinted at the start of this lesson, a single class can implements (sic) multiple interfaces at once! This is where the benefits of using interfaces kick in. In fact, this feature (allowing classes to implement multiple interfaces at once) is the very reason PHP Interfaces exist in the first place. By allowing classes to implement as many interfaces as required (at once), you get the benefits of multiple inheritance as you have increased flexibility by being able to "mix 'n match" different classes and interfaces at will, all the while completely avoiding the "Diamond Problem" as the public methods are not implemented in the interfaces themselves (therefore no conflict/dilemma).

The syntax for implementing multiple interfaces is as follows:

interface MyInterface1 {
  /* Interface code here */
}
interface MyInterface2 {
  /* Interface code here */
}
interface MyInterface3 {
  /* Interface code here */
}

class MyClass implements MyInterface1, MyInterface2, MyInterface3 {
  /* Full class code here **including the full implementation of ALL THREE interfaces specified** */
}
The only condition where implementing multiple different interfaces is mutually exclusive is if the two (or more) interfaces in question share a public method with the exact same name. In that particular case, if you implement both such interfaces at once, you will receive a Fatal error (since the "Diamond Problem" would arise which would create a conflict).

interface MyInterface1 {
  public function foo();
  public function bar();
}
interface MyInterface2 {
  public function foo($argument); // Same method name as in the method in MyInterface1 but different expected arguments
  public function baz($a, $b);
}

class MyClass1 implements MyInterface1 {
  /* No conflicts, no fatal error thrown unless the required public methods are not properly implemented */
  public function foo() {
    /* Some implementation consistent with MyInterface1 */
  }
  public function bar() {
    /* Some implementation consistent with MyInterface1 */
  }
}
class MyClass2 implements MyInterface2 {
  /* No conflicts, no fatal error thrown unless the required public methods are not properly implemented */
  public function foo($a) {
    /* Some implementation consistent with MyInterface2.  Note that the **name** of the argument does not have to be identical to the one specified in the interface as long as the implemented method has the exact same number of required and optional arguments in the same order */
  }
  public function baz($x, $y) {
    /* Some implementation consistent with MyInterface2 */
  }
}
class MyClass3 implements MyInterface1, MyInterface2 {
  /* Fatal Error due to Diamond Problem - both MyInterface1 and MyInterface2 contain a method called "foo" which creates a conflict */
}
Since interfaces are quite an advanced topic, you are strongly encouraged to read up on the official documentation on interfaces in PHP, look up a few examples on how they may be used and try defining and implementing some interfaces in your local server to better understand their behaviour before completing the Task in this Kata.

Task
Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

Firstly, define the following interfaces with the following public methods:

CanFly
This interface must have the following methods:

fly - This public method should accept no arguments
CanSwim
This interface must have the following methods:

swim - This public method should accept no arguments
CanClimb
This interface must have the following methods:

climb - This public method should accept no arguments
CanGreet
This interface must have the following methods:

greet - This public method should accept exactly one argument - you could call that argument $name for readability purposes (or you could name it whatever you want, it doesn't matter since the implementing class does not have to name the argument the exact same way)
CanIntroduce
This interface must have the following methods:

speak - This public method should accept no arguments
introduce - This public method should accept no arguments
CanSpeak
This interface must have the following methods:

speak - This public method should accept no arguments
Thinking Exercise: Just by the descriptions above, can you tell me which two interfaces a class cannot implement simultaneously?

After you have defined your interfaces, define the classes specified below and follow the instructions carefully in each section to pass the tests.

Bird
Since a Bird can fly (well, most of them can anyway :p), the Bird class must implement the CanFly interface.

Properties
The Bird class should have the following properties:

$name - this property should be public
Constructor
The class constructor of Bird must receive the following arguments and set its respective properties:

$name - This parameter is required. The argument should ideally be a string but no error checking is necessary.
Methods
The Bird class must define/implement the following methods:

fly - This method must be implemented as it is required by the CanFly interface being implemented. The fly method should return the string "I am flying".
chirp - Additionally, a bird can also chirp. This method should receive no arguments and return the string "Chirp chirp".
Duck
Since a Duck "is a" Bird, the Duck class should inherit from the Bird class. Furthermore, since a Duck can fly and swim, it should implement the interfaces CanFly and CanSwim.

Fun Fact: When a class implements an interface / multiple interfaces in PHP, it is said that there is a "has a" relationship between the class and the interface(s) being implemented. In this case, the Duck class is said to "has a" (sic) CanFly and CanSwim.

Properties
The Duck class should have no other properties other than the properties inherited from the Bird class.

Constructor
The Duck class should have a constructor identical to that of its parent class.

Methods
fly - This method must be implemented by the Duck class due to it implementing the CanFly interface, but the method does not need to be reimplemented since the parent class already has this method.
chirp - This method should return the string "Quack quack"
swim - This method must be implemented as specified in the CanSwim interface being implemented. It should receive no arguments and return the string "Splash! I'm swimming"
Cat
A Cat "has a" CanClimb.

Properties
For the purposes of this Kata, all cats are wild cats so they do not have a name. Therefore you do not need to declare any properties.

Constructor
You do not need to define a constructor for this class.

Methods
climb - This method must be implemented as per the CanClimb interface. This method should accept no arguments and return the string "Look, I'm climbing a tree".
meow - A cat can also meow. This method should accept no arguments and return the string "Meow meow"
play - All cats love to play, even ones in the wild! This method should receive exactly one argument $name and return a string of the format "Hey NAME_HERE, let's play!"
Dog
A Dog "has a" CanSwim and CanGreet.

Properties
For the purposes of this Kata, all dogs are stray dogs so they have no known properties.

Constructor
A constructor is not required for this class.

Methods
swim - This method must be implemented as per the CanSwim interface. This method should accept no arguments and return the string "I'm swimming, woof woof"
greet - This method must be implemented as per the CanGreet interface. This method should accept exactly one argument $name and return a string of the format "Hello NAME_HERE, welcome to my home"
bark - A dog can also bark. This method should accept no arguments and return the string "Woof woof"
Person
A Person "has a" CanGreet and CanIntroduce.

Properties
$name - This property should be public and should be a string but no error checking is needed.
$age - This property should be public and should be a non-negative integer but no error checking is required.
$occupation - This property should be public and should be a string but no error checking is required.
Constructor
The class constructor for this class should receive three required arguments in the following order: $name, $age, $occupation and set the respective properties correctly. No error checking is required.

Methods
greet - This method must be implemented as per the CanGreet interface. It should receive one argument $name and return a string of the format "Hello NAME_HERE, how are you?"
speak - This method must be implemented as per the CanIntroduce interface. It should receive no arguments and return the string "What am I supposed to say again?"
introduce - This method must be implemented as per the CanIntroduce interface. It should receive no arguments and return a string of the form "Hello, my name is NAME_HERE, I am AGE_HERE years old and I am currently working as a(n) OCCUPATION_HERE".*/
interface CanFly {
  public function fly();
}
interface CanSwim {
  public function swim();
}
interface CanClimb {
  public function climb();
}
interface CanGreet {
  public function greet($name);
}
interface CanIntroduce {
  public function speak();
  public function introduce();
}
interface CanSpeak {
  public function speak();
}

class Bird implements CanFly {
  public $name;
  public function __construct($name){
    $this->name = $name;
  }
  public function fly(){
    return "I am flying";
  }
  public function chirp(){
    return "Chirp chirp";
  }
}
class Duck extends Bird implements CanSwim {
  public function chirp(){
    return "Quack quack";
  }
  public function swim(){
    return "Splash! I'm swimming";
  }
}
class Cat implements CanClimb {
  public function climb(){
    return "Look, I'm climbing a tree";
  }
  public function meow(){
    return "Meow meow";
  }
  public function play($name){
    return "Hey $name, let's play!";
  }
}
class Dog implements CanSwim, CanGreet {
  public function swim(){
    return "I'm swimming, woof woof";
  }
  public function greet($name){
    return "Hello $name, welcome to my home";
  }
  public function bark(){
    return "Woof woof";
  }
}
class Person implements CanGreet, CanIntroduce {
  public $name;
  public $age;
  public $occupation;
  public function __construct($name,$age,$occupation){
    $this->name = $name;
    $this->age = $age;
    $this->occupation = $occupation;
  }
  public function speak(){
    return "What am I supposed to say again?";
  }
  public function greet($name){
    return "Hello $name, how are you?";
  }
  public function introduce (){
    return "Hello, my name is $this->name, I am $this->age years old and I am currently working as a(n) $this->occupation";
  }
}
