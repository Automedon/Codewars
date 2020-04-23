/*
Description:
Object-Oriented PHP #6 - Visibility
About this Kata Series
In this series, we will start off by learning the very fundamentals of object-oriented programming (commonly referred to as "OOP") and classes in PHP. We will then proceed by learning about the 3 different visibilities of class properties and methods and when to use them. After that, classical inheritance will be taught along with its perks and potential drawbacks. Finally, in the final Kata(s) in this series, more advanced OOP concepts may be taught such as interfaces and even abstract classes. Apart from the main course content, every 3 Kata or so into this Series, there will be an exercise Kata to practice on previously learned knowledge.

Lesson
In previous lessons, we learned that inside a class, if we wanted to declare/define a property or method, we always had to add the keyword public in front of it (except for class constants). For example:

class Foo {
  public $bar; // A public property called "bar"
  public function baz() {} // A public method called "baz"
}
Now, you might have wondered all this time, "What exactly does the keyword public do or is it just part of the syntax? And is it possible to replace it with another keyword/keywords?" If you have been wondering about this then you are thinking in the right direction - the public keyword can as easily be replaced with the protected or private keyword under the right circumstances. This is because the public keyword is what is known as a visibility declaration. A visibility declaration determines what can access your property or method in your PHP script.

In PHP, there are three different visibilities:

public - Public properties and methods can be accessed from anywhere in the script
protected - Protected properties and methods can only be accessed within the class itself and within any child classes thereof
private - Private properties and methods can only be accessed from within the very class itself and is not inherited by child classes
In the vast majority of cases, protected and private properties or methods behave very similarly on the outside and the only major difference in behaviour is seen between the public and protected/private properties/methods. For example, let's say we have a class that has a public, protected and private property and method. When we create a new instance of that class and try to access all the properties and methods from the outside, the public property and method will be accessed properly but attempting to do the same with the protected/private properties and methods will throw a fatal error (which cannot be recovered from even if you use a try/catch block in some cases).

class Foo {
  public $public_property = "public"; // Public Property
  protected $protected_property = "protected"; // Protected Property
  private $private_property = "private"; // Private Property
  public function public_method() {
    // A public method
    echo "public";
  }
  protected function protected_method() {
    // A protected method
    echo "protected";
  }
  private function private_method() {
    // A private method
    echo "private";
  }
}

$foo = new Foo;
echo $foo->public_property; // "public"
$foo->public_method(); // "public"
echo $foo->protected_property; // Fatal error
$foo->protected_method(); // Fatal error
echo $foo->private_property; // Fatal error
$foo->private_method(); // Fatal error
However, there are subtle differences between the protected visibility and the private visibility. While properties/methods of both visibilities can only be accessed within the class itself, it is important to note that protected** properties and methods can be inherited and accessed by child classes** but private** properties and methods are not passed on to child classes**.

class Foo {
  protected $protected;
  private $private;
}
class Bar extends Foo {}
echo property_exists('Foo', 'protected'); // true
echo property_exists('Foo', 'private'); // true
echo property_exists('Bar', 'protected'); // true
echo property_exists('Bar', 'private'); // false
So, what is the purpose of declaring different visibilities? Can't we just make everything public so that everything can be accessed anywhere within the PHP script and there is no chance of encountering a Fatal error? The fact is that there are a few advantages of using protected or private visibility:

To separate and distinguish class internals from external, accessible code. It is usually a good practice to tell other developers what properties/methods in a class are meant for use outside the class and which properties/methods are only meant to be used inside the class by declaring different visibilities.
To hide implementation. Sometimes, when we are writing PHP classes for other developers to use, we want them to only know what they need to know in order to use the class properly. For example, say that we have manufactured a Car and that we are selling it to someone else. We would definitely need to tell the driver of the car how to operate the pedals, steering wheel and brakes, for example (public methods) and the driver would definitely know how many seats there are in the car (public properties), but we almost certainly do not want the driver to know what type of metal or leather is used in the car (protected or private properties) or how the engines inside the car actually work (protected/private methods)!
To prevent other developers (and yourself!) from accidentally accessing certain properties/methods directly and thus messing up the code. For example, if a driver who is not a car mechanic bought your car and was given access to disassemble the car for some reason, he/she may not be able to assemble to car properly again (along with a plethora of other possibilities of things going wrong) which would be very dangerous!
More information and examples on visibility can be found on php.net. Examples of visibility in action can also be found here and here.

Task
Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

In Kata #4 of this Series, we created a Person class which modelled a real-life person in PHP. However, there were a few vulnerabilities in the way we wrote the class in that Kata. For example, the constructor of that class accepted 3 arguments: $name, $age and $occupation in that order and set the correct properties respectively. However, the constructor did not do any error checking. It naturally assumed that the inputs passed in would be valid, e.g. $name and $occupation would always be a string and $age would always be a non-negative integer. Furthermore, since all the properties were public, even if all the inputs passed into the constructor were valid, the properties could later be accidentally changed into invalid values which would cause a number of problems if the code were to be used in real life. Therefore, in this Kata, we will aim to improve the Person class we defined in Kata #4 to make it less prone to such human errors.

Copy and paste a working solution from Kata #4 of this Series (you may want to complete that first if you haven't done so already).
You may safely remove the class constant and all class methods (except the class constructor) as these will not be tested in this Kata (Optional).
Change the visibilites of all properties into protected visibility.
Since all valid names must be strings, throw an InvalidArgumentException with the message "Name must be a string!" if the $name argument of the class constructor is not a string.
Since all valid ages must be non-negative integers, throw an InvalidArgumentException with the message "Age must be a non-negative integer!" if the $age argument of the class constructor is not a non-negative integer.
Since all valid occupations must be strings, throw an InvalidArgumentException with the message "Occupation must be a string!" if the $occupation argument of the class constructor is not a string.
Since the $name, $age and $occupation properties of the Person class are now protected, any attempt at directly accessing them from outside the class will result in a Fatal error. Therefore, define three methods, get_name(), get_age() and get_occupation() which all accept no arguments and returns the $name, $age and $occupation of the Person respectively.
Since $name, $age and $occupation are now protected, any attempt at directly reassigning them values outside the class will result in a Fatal error. Therefore, define three methods, set_name(), set_age() and set_occupation() in which each of them receives exactly one argument and sets the value of their respective properties to the value of the argument if and only if the argument is valid. The validity of the argument is the same as the standards used in the constructor (i.e. string value for $name and $occupation and non-negative integer for $age) and if the argument is invalid then throw the exact same errors (with the same messages) thrown by the constructor in such cases.
*/
class Person {
  protected $name;
  protected $age;
  protected $occupation;
  public function __construct($name,$age,$occupation){
    if(is_string($name)){
     $this->name=$name;
     } else {
       throw new InvalidArgumentException('Name must be a string!');
     }
    if(is_integer($age)&&$age>=0){
     $this->age=$age;
     } else {
       throw new InvalidArgumentException('Age must be a non-negative integer!');
     }
    if(is_string($occupation)){
     $this->occupation=$occupation;
     } else {
       throw new InvalidArgumentException('Occupation must be a string!');
     }
  }
  public function get_name(){
    return $this->name;
  }
  public function get_age(){
    return $this->age;
  }
  public function get_occupation(){
    return $this->occupation;
  }
  public function set_name($name){
     if(is_string($name)){
     $this->name=$name;
     } else {
       throw new InvalidArgumentException('Name must be a string!');
     }
  }
  public function set_age($age){
     if(is_integer($age)&&$age>=0){
     $this->age=$age;
     } else { 
       throw new InvalidArgumentException('Age must be a non-negative integer!');
     }
  }
  public function set_occupation($occupation){
    if(is_string($occupation)){
     $this->occupation=$occupation;
     } else {
       throw new InvalidArgumentException('Occupation must be a string!');
     }
  }
}
