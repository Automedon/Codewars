/*
Object-Oriented PHP #3 - Class Constants and Static Methods
About this Kata Series
In this series, we will start off by learning the very fundamentals of object-oriented programming (commonly referred to as "OOP") and classes in PHP. We will then proceed by learning about the 3 different visibilities of class properties and methods and when to use them. After that, classical inheritance will be taught along with its perks and potential drawbacks. Finally, in the final Kata(s) in this series, more advanced OOP concepts may be taught such as interfaces and even abstract classes. Apart from the main course content, every 3 Kata or so into this Series, there will be an exercise Kata to practice on previously learned knowledge.

Lesson
Recap of Kata #1 of this Series
If you have a good memory, you may remember that in Kata #1 of this series, we learned how to define classes, public properties and methods in PHP. However, since we did not learn about the constructor yet in Lesson #1, all of the class properties that we defined had a predefined value which could not be altered. So, what is the point of a predefined property that cannot be customized upon initialization? A class constant would be much better in that case.

Class Constants and the "const" keyword
A class constant is, as its name suggests, a constant that belongs to a particular class. Being a constant and not a property, the class constant cannot be modified. Apart from that, one major benefit of class constants is that you do not have to instantiate a new instance of the class to access the constant - you can access the constant directly from the class!

A class constant is declared and defined using the following syntax:

class MyClass {
  /* Class code here */
  const my_constant = "some value";
  /* More class code here */
}
Note that for class constants, a visibility declaration is not required (i.e. you do not have to type public, private or protected in front of the const keyword) and it defaults to public visibility (in fact, I do not know if you can make a private or protected class constant - you will have to try that in your own local server!). Furthermore, also notice that the constant defined does not have the dollar sign appended at the start of the constant name like variables or class properties. If you append a dollar sign at the start of the constant name, chances are that you'll get a syntax error (but I have not confirmed it).

Then, to access the class variable, simply use the double colon :: syntax: MyClass::my_constant, e.g.

echo MyClass::my_constant; // "some value"
Notice that to access the class constant, you can directly access it through the class itself without creating a new instance of that class.

*"But what if I want to define class methods that do not require me to instantiate objects to use it? Surely I can't just add the keyword 'const' in front of a method definition?"*

Class Methods and the "static" keyword
In some cases, it may be impractical to define a class and a class method, only to instantiate exactly one object from that class just to use a particular method. If that is the case, you are better off with static class methods. Static class methods are class methods that can be directly accessed through the class without the creation of a new instance of that class, and the syntax to define it is as follows:

class MyClass {
  /* Class code here */
  public static function my_static_class_method(/* arguments here */) {
    /* Static Method Code here */
  }
  /* More class code here */
}
The static keyword is placed between the visibility declaration and the function definition, and it tells PHP that, "Hey, I want to access this particular method directly from the class without creating an object from it!". It should also be possible to set the visibility of a static method to protected or private but I haven't tested it yet so you are free to test it in your local servers in your spare time.

To access a static class method, the double colon :: is used in exactly the same way as accessing a class constant, e.g.

class MyClass {
  public static function say_hello_world() {
    echo "Hello World";
  }
}
MyClass::say_hello_world(); // "Hello World"
Task
Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

Copy your working solution to the first Kata of this series and paste it here (you may want to complete that first if you haven't already done so).
Rename that class to CurrentUSPresident.
Convert all of the class properties into class constants and all of the class methods into static methods using the syntax taught in the lesson.
You can safely remove the code where an instance of the President class is created.
*/
class CurrentUSPresident {
  const name = "Barack Obama";
  public function greet($name) {
    return "Hello $name, my name is Barack Obama, nice to meet you!";
  }
}
