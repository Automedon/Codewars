/*
Description:
Object-Oriented PHP #1 - Classes, Public Properties and Methods
About this Kata Series
In this series, we will start off by learning the very fundamentals of object-oriented programming (commonly referred to as "OOP") and classes in PHP. We will then proceed by learning about the 3 different visibilities of class properties and methods and when to use them. After that, classical inheritance will be taught along with its perks and potential drawbacks. Finally, in the final Kata(s) in this series, more advanced OOP concepts may be taught such as interfaces and even abstract classes. Apart from the main course content, every 3 Kata or so into this Series, there will be an exercise Kata to practice on previously learned knowledge.

Lesson
Object-Oriented Programming (OOP)
Object-Oriented Programming (commonly referred to as "OOP") is a programming style and concept found in many programming languages such as Javascript, Ruby, Python, C# and Java (and PHP of course). It is known to be distinct from another programming style called functional programming where the entire program/script is written in terms of functions. OOP is often desired for the following advantages over functional programming:

Object-Oriented Programming makes the code more DRY and classes defined in a script can be more easily reused in another script
By using OOP, other programmers using your code do not have to worry about understanding how your code works - they can simply create an object from your class(es) and use your methods as if it was already built-in in PHP
Due to the ability to control the visibility of class properties/methods in PHP, you can hide certain parts of your class from the people using it which means that the people using your class will be less likely to mess up the internals of your class.
It is generally easier to write large programs using OOP as opposed to functional programming.
It is generally easier to maintain a program written mainly in OOP as opposed to functional programming; however, a minority of programmers think the opposite is true
(courtesy of https://www.cs.drexel.edu/~introcs/Fa15/notes/06.1_OOP/Advantages.html?CurrentSlide=3 in which I basically reworded what he/she said)

Classes in PHP
In PHP (and many other programming languages), classes is the basis of creating what is known as objects - any object in PHP must be an instance of a class. A class basically defines what properties and methods a created object (which is an instance of said class) will have, and an object is basically a collection of variables and functions (called properties and methods respectively when used in the context of objects) that belong to it.

A class is declared/defined using the following syntax:

class MyClass {
  /* Class code goes here */
}
So basically, in words, the class keyword, followed by the name of the class, followed by curly braces {} in which all the actual class code resides.

You may have noticed that the name of the class I just defined MyClass is not in snake_case as you might expect. This is because although the standard naming convention in PHP for variables and functions, etc., is snake_case, there is a convention that supercedes all language naming conventions when it comes to naming classes in OOP - and that is PascalCase. It does not matter whether the original language naming convention is snake_case, camelCase or PascalCase in said language; when it comes to OOP and naming classes, all languages use PascalCase. Note however that this is a convention and not a syntax requirement; if you name your class my_class or myClass the code will still work as expected; it's just that your code will be harder to read and understand for other programmers.

However, a class is useless unless objects are instantiated from it (called instances of a class) - the syntax of creating an object from a class MyClass is as follows:

$obj = new MyClass;
Class Variables and Functions (known as "Properties" and "Methods" respectively)
You can define variables and functions inside a class (called "properties" and "methods" respectively) as usual, except for one key difference - inside a class, when you define a property (class variable) or method (class function), you MUST specify its visibility, which could be either of public, private and protected. This is achieved by typing the visibility keyword before the property/method definition or declaration, like such:

class MyClass {
  // Property Declaration and Definition - notice the "public" keyword before the definition
  public $my_property = "Goodbye World";

  // Method Definition - again, notice the "public" keyword before the actual definition
  public function my_method() {
    return "Goodbye World";
  }
}
I will cover the visibility keywords and their usage in more detail in the future, but for now, just declare all of your class properties and methods as public.

After class properties and methods are declared/defined in the class definition and an object is instantiated from that class, they can then be accessed by using arrow notation ->:

// Class Definition
class MyClass {
  public $property = "Goodbye World";
  public function method() {
    return "Hello World";
  }
}

// Object Instantiation
$my_obj = new MyClass;

// Access object property and method
echo $my_obj->property; // "Goodbye World"
echo $my_obj->method(); // "Hello World"
Task
Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

Define a class called President using the syntax taught above.
Inside the curly braces of the class definition, add a public property called $name and set it equal to the string "Barack Obama".
Then, define a public method inside the President class called greet which accepts one argument $name and returns something to the effect of "Hello INSERT_NAME_HERE, my name is Barack Obama, nice to meet you!"
Now that you have defined your class, create an instance of that class (called an object) and store it in a variable called $us_president.
Store the name of the $us_president into another variable called $president_name.
Store the result of calling the greet method of $us_president with the argument "Donald" into the variable $greetings_from_president.
*/
class President{
  public $name = "Barack Obama";
  public function greet($name){
    return "Hello $name, my name is Barack Obama, nice to meet you!";
  }
}

$us_president = new President;

$president_name = $us_president->name;

$greetings_from_president = $us_president->greet("Donald");
