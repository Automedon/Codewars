/*
Description:
Object-Oriented PHP #5 - Classical Inheritance
About this Kata Series
In this series, we will start off by learning the very fundamentals of object-oriented programming (commonly referred to as "OOP") and classes in PHP. We will then proceed by learning about the 3 different visibilities of class properties and methods and when to use them. After that, classical inheritance will be taught along with its perks and potential drawbacks. Finally, in the final Kata(s) in this series, more advanced OOP concepts may be taught such as interfaces and even abstract classes. Apart from the main course content, every 3 Kata or so into this Series, there will be an exercise Kata to practice on previously learned knowledge.

Lesson
The DRY Principle
In computer programming there is a principle called the Don't Repeat Yourself (DRY) principle which states that your code should be as concise as possible and contain as little repetitions as possible. For example, the code below is not DRY:

echo "Hello World\n";
echo "Hello World\n";
echo "Hello World\n";
echo "Hello World\n";
echo "Hello World\n";
echo "Hello World\n";
echo "Hello World\n";
echo "Hello World\n";
echo "Hello World\n";
echo "Hello World\n";
... and the code below is DRY:

for ($i = 0; $i < 10; $i++) {
  echo "Hello World\n";
}
This programming principle can be applied in all aspects of programming, including OOP.

In Kata #1 of this Series, we learned that one of the main advantages of the object-oriented programming style is that it makes code more DRY and reusable. For example, we could define a class with multiple properties and a constructor that assigns the values accordingly, and then we could instantiate as many objects from that class as possible, each similar to each other in terms of structure (containing the exact same properties and methods) but perhaps different to each other with regards to the value(s) of one or more properties, each in exactly one line of code. In contrast, if we were to represent these objects purely in terms of functions and variables, it may then require multiple lines of code to adequately define the equivalent of each "object". However, without classical inheritance in OOP, even object-oriented code can quickly become very repetitive and messy.

Consider the following example: let's say we have defined two classes: Dog and Dachshund. Clearly, the two are not interchangeable because not all Dogs are Dachshunds; hence the need of two separate classes. Now, you may argue that we only need the Dog class and then specify which Dogs are of type Dachshund. However, it is more than likely that Dachshunds have certain properties and behaviour (methods) that other Dogs do not have; therefore, one class would not suffice:

class Dog {
  public $name, $age, $species; // It is possible to declare multiple class properties in one single statement provided their visibilites are the same
  public function __construct($name, $age, $species) {
    $this->name = $name;
    $this->age = $age;
    $this->species = $species;
  }
  public function bark() {
    return "Woof woof";
  }
}
class Dachshund {
  public $species = "Dachshund";
  public $name, $age;
  public function __construct($name, $age) {
    $this->name = $name;
    $this->age = $age;
  }
  public function bark() {
    return "Woof woof! I am a Dachshund";
  }
}
As you can see from the code above, there is a lot of (unnecessary) repetition in the Dachshund class. For example, in both classes, both the $name and $age is set exactly the same way in both constructors - the only difference between the two constructors is that the Dachshund class constructor does not set the $species property because it is already predefined in the class as "Dachshund". Furthermore, the bark() method of both classes are very similar except for the fact that a Dachshund says that it is a Dachshund after it barks (in exactly the same way as other Dogs). However, this cannot be done in the Dog class alone as class methods cannot be modified. This begs the question: is there a more convenient way of writing the code above? Enter classical inheritance!

Classical Inheritance - Expressing the "is a" relationship between two classes
As you may have noticed, a Dachshund is a particular breed of Dog (or more simply put, a Dachshund "is a" Dog), so you may have wondered if it is possible to somehow express this relationship in code to shorten it. Luckily, the answer is a resounding "Yes" and that is thanks to none other than classical inheritance.

In classical inheritance, a child class inherits from a parent class by using a keyword or symbol predefined in that scripting language (which is extends in PHP) which denotes an "is a" relationship between the child class and the parent class (i.e. an instance of the child class is a(n) instance of the parent class). Since the child class "is a" parent class, so to speak, the child class then has access to all of the properties and methods defined in the parent class without having to redeclare and redefine them (well, almost all of the properties and methods of the parent class anyway - this is where visibility comes in but we will explore that concept next lesson). Of course, once the child class inherits from the parent class, the child class is then free to have its own unique properties and methods etc. The child class can also override certain properties and/or methods of a parent class if it wishes simply be redeclaring and redefining them (but excessive overriding is discouraged for obvious reasons).

For example, in the example above, since a Dachshund is also a Dog, we could make the Dachshund class inherit from the Dog class (using the extends keyword) and make a few tweaks to shorten the code:

// The Parent Class
class Dog {
  public $name, $age, $species;
  public function __construct($name, $age, $species) {
    $this->name = $name;
    $this->age = $age;
    $this->species = $species;
  }
  public function bark() {
    return "Woof woof";
  }
}

// The Child Class inherits from the parent class
class Dachshund extends Dog {
  public function __construct($name, $age) {
    parent::__construct($name, $age, "Dachshund");
  }
  public function bark() {
    return parent::bark() . "! I am a Dachshund";
  }
}
Notice the syntax and keywords used above:

Inheritance Syntax in PHP - when a child class ChildClass inherits from a parent class ParentClass, the exact syntax is as follows: class ChildClass extends ParentClass {} (the class code goes inside the curly braces {} as usual)
The **
parent
keyword* - in any child class, the
parent
keyword always refers to the direct parent of that child class (N.B. In PHP and in many other programming languages, *multiple levels of inheritance is supported (not to be confused with multiple inheritance)) - for example, if the class Dog is a child class of the class Animal and if the class Dachshund is a child class of the class Dog, in the class Dog, parent will refer to Animal while in the Dachshund class, parent will refer to Dog instead.
The double colon **
::
syntax** - in a child class, when you wish to access a method from the parent class, you use the double colon syntax to access it regardless of whether the method is a static class method or an ordinary method.
If you are still confused as to how classical inheritance works in PHP, you may want to read up on this link and/or fire up your local server and experiment with the PHP before completing this exercise :) After all, in computer programming, the best way to learn is hands-on learning ;)

Task
Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

I. Preloaded
Preloaded for you in this exercise is a working solution for Kata #4 of this Series (you may want to complete that before continuing on this exercise).

II. Inheritance Model in this Kata
Before we write any actual code for the classes in this Kata, please declare the following classes:

Salesman
ComputerProgrammer
WebDeveloper
The following information is also given about the classes (use classical inheritance when necessary and don't extends the wrong class ;) ):

A Salesman "is a" Person
A ComputerProgrammer "is a" Person
A WebDeveloper "is a" Person
A WebDeveloper "is a" ComputerProgrammer
III. Class Details
Salesman
Class Constructor
The class constructor of the Salesman class should accept exactly two arguments in the following order: $name, $age. It should then set the correct properties accordingly. As for the $occupation of a Salesman, it will always be "Salesman" without exception.

introduce (Method)
The introduce method of the Salesman class should return a string of the format "Hello, my name is NAME_HERE, don't forget to check out my products!"

Hint: The string that the introduce method of the parent class returns is a substring of what the introduce method of this class returns.

ComputerProgrammer
Class Constructor
The class constructor of ComputerProgrammer should accept exactly 2 arguments in the following order: $name, $age and should set the correct properties accordingly. The $occupation of a ComputerProgrammer is always "Computer Programmer" without exception.

describe_job (Method)
The describe_job method of a ComputerProgrammer should return a string of the format "I am currently working as a(n) OCCUPATION_HERE, don't forget to check out my Codewars account ;)"

Hint: The same method of the parent class returns a substring of what this method should return.

WebDeveloper
Class Constructor
The class constructor of this class should receive two arguments in the following order: $name, $age and set the correct properties accordingly. The $occupation of a WebDeveloper is always "Web Developer" without exception.

Hint: You may have to add a line of code in the constructor of this class to override the constructor of the parent class.

describe_job (Method)
The describe_job method of a WebDeveloper should return a string of the format "I am currently working as a(n) OCCUPATION_HERE, don't forget to check out my Codewars account ;) And don't forget to check on my website :D"

Hint: The same method of the parent class returns a substring of what this method should return.

Watch out! Make sure you know which class parent is referring to in this case before you use it in your method definition!

describe_website (Method)
This method should return "My professional world-class website is made from HTML, CSS, Javascript and PHP!"
*/
class Salesman extends Person {
  public function __construct($name, $age){
    parent::__construct($name, $age, "Salesman");
  }
  public function introduce(){
    return parent::introduce() . ", don't forget to check out my products!";
  }
}

class ComputerProgrammer  extends Person {
  public function __construct($name, $age){
    parent::__construct($name, $age, "Computer Programmer");
  }
  public function describe_job(){
    return parent::describe_job() . ", don't forget to check out my Codewars account ;)";
  }
}

class WebDeveloper extends ComputerProgrammer {
  public function __construct($name, $age){
    Person::__construct($name, $age, "Web Developer");
  }
  public function describe_job(){
    return ComputerProgrammer::describe_job() . " And don't forget to check on my website :D";
  }
  public function describe_website(){
    return "My professional world-class website is made from HTML, CSS, Javascript and PHP!";
  }
}
