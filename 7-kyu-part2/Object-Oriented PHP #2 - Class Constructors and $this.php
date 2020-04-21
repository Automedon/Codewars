/*
Description:
Object-Oriented PHP #2 - Class Constructors and $this
About this Kata Series
In this series, we will start off by learning the very fundamentals of object-oriented programming (commonly referred to as "OOP") and classes in PHP. We will then proceed by learning about the 3 different visibilities of class properties and methods and when to use them. After that, classical inheritance will be taught along with its perks and potential drawbacks. Finally, in the final Kata(s) in this series, more advanced OOP concepts may be taught such as interfaces and even abstract classes. Apart from the main course content, every 3 Kata or so into this Series, there will be an exercise Kata to practice on previously learned knowledge.

Lesson
Recap
In the previous Kata of this series, we learned the fundamental concepts of Object-Oriented Programming (OOP) in PHP and its advantages over functional programming. We then proceeded to learn the syntax for defining classes in PHP and learned that you can define variables and functions (called "properties" and "methods") inside a class in which we can then access by creating objects (or instances of that class) from it.

However, last lesson, all the properties that we defined in a class had a predefined value. For example, you may remember that in the President class you defined, all presidents (i.e. all instances of your President class) had the name "Barack Obama". Not very useful is it? What if we could change and customize the names of our presidents, like such (see below)?

$bernie = new President("Bernie");
$trump = new President("Trump");
$hillary = new President("Hillary");

echo $bernie->name; // "Bernie"
echo $trump->name; // "Trump"
echo $hillary->name; // "Hillary"
Class Constructors and the $this keyword
Enter the class constructor! The constructor function of a class is a special function that is called every time a new instance of the class is created using the new keyword. The syntax for defining the class constructor is basically identical to that of defining any other class method:

class MyClass {
  /* Class code here */
  public function __construct(/* Constructor arguments here */) {
    /* Constructor code here */
  }
  /* More class code here */
}
The only thing to notice here is that when you define the class constructor, the name of the (special) "method" must ALWAYS be __construct (two underscores before the word "construct" not one). The class constructor is an example of a magic method in PHP (more info here) wich means that if you name your "method" __construct, PHP will automatically recognise it as the class constructor and not any ordinary class method. If you click on the link provided you will see that PHP has quite a few magic methods (many of which I haven't even heard of) but I will not be teaching those in this Kata series.

In the constructor, you can then set and customize the properties of the object being instantiated by referring to the created object itself and using the arrow notation -> taught in the previous lesson.

Now, here comes the interesting question: how do you refer to the created object itself if you do not know what the variable name of the created object will be? For example, when using your class MyClass, you may decide to store new MyClass in a variable called $obj1, but when someone else is using your class, they may store it in a variable called $obj2! Then, of course, there is the added problem of very possibly instantiating multiple objects from the same class (hey, otherwise, what would we need a class for?) and last but not least, function scope in PHP.

The solution is to use the $this keyword. Within a class, the $this keyword refers to the object itself being instantiated from said class. For example:

class Organism {
  public $is_alive = true; // Property with preset value
  public $name; // A class property can be declared without giving it a value at the same time.  Its value will be set in the constructor (__construct) instead.
  public $species;

  // Constructor
  public function __construct($name, $species) {
    // Using $this notation
    $this->name = $name;
    $this->species = $species;
  }
}
You can then instantiate a new instance of the Organism class, like such:

$amoeba = new Organism("Shelly", "Amoeba");
echo $amoeba->is_alive; // true
echo $amoeba->name; // "Shelly"
echo $amoeba->species; // "Amoeba"
Note that the $this keyword used to refer to the object being instantiated from the class can in fact be used anywhere within the class, not just in the constructor.

class MyClass {
  public $property;
  public function __construct($value) {
    $this->property = $value;
  }
  public function echo_property() {
    echo $this->property; // The $this keyword can also be used in other methods to refer to the object itself
  }
}
Task
Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

Define a class called Person.
Inside the Person class, declare (but do not define) the two public properties, called $first_name and $last_name respectively.
Define a class constructor which accepts exactly two arguments in the following order, $first_name and $last_name. The argument $first_name should be stored into the $first_name property of the object being instantiated and the $last_name argument should be stored into the $last_name property of the object.
Define a public method called get_full_name which accepts no arguments and returns the full name of the individual in the following format: "FIRST_NAME LAST_NAME". Please note that if the properties ($first_name and/or $last_name) of said object is modified after it is instantiated, your method get_full_name should return the updated full name, not the original full name of the individual.
*/
class Person {
  public $first_name;
  public $last_name;
  public function __construct($first_name, $last_name){
    $this->first_name = $first_name;
    $this->last_name = $last_name;
  }
  public function get_full_name(){
    return "$this->first_name $this->last_name";
  }
};
