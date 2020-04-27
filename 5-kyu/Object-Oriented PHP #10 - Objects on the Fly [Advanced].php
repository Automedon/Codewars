/*
Description:
Object-Oriented PHP #10 - Objects on the Fly [Advanced]
About this Kata Series
In this series, we will start off by learning the very fundamentals of object-oriented programming (commonly referred to as "OOP") and classes in PHP. We will then proceed by learning about the 3 different visibilities of class properties and methods and when to use them. After that, classical inheritance will be taught along with its perks and potential drawbacks. Finally, in the final Kata(s) in this series, more advanced OOP concepts may be taught such as interfaces and even abstract classes. Apart from the main course content, every 3 Kata or so into this Series, there will be an exercise Kata to practice on previously learned knowledge.

Lesson
Before you proceed ...
If you haven't already completed the first 7 Kata in this Series, you are highly recommended to complete all of them before proceeding with this lesson. At the very least, you are expected to have a basic understanding of how classes and classical inheritance works in PHP.

If you have already completed the first 7 Kata in this series, then congratulations! You have mastered the basics of object-oriented programming in PHP and we will begin to cover more advanced (and perhaps less-known) topics and techniques in OOP in PHP.

Recap
In previous lessons of this Series, we learned that all objects in PHP must be an instance of a class. We also learned that classes can be used to instantiate a large number of similar objects.

However, in some cases, we may not need to instantiate a large number of objects from one single class. In fact, sometimes, all we need is a single object with all the required functionality! At this point, you may wonder: is it possible to create and define a single, unique object without declaring and defining an entire (named) class just for that very object?

Fortunately, the answer to that question is "Yes" - and there are a few ways to achieve it.

I. Using stdClass
The first way to create unique, standalone objects is to first create a new instance of stdClass and then add the required properties one by one. stdClass is simply a predefined empty class in PHP which can be used to instantiate empty objects. For example:

$donald = new stdClass; // Instantiate empty object with stdClass (Standard Class)

// Add in properties one by one
$donald->name = "Donald";
$donald->age = 17;
$donald->gender = "Male";
$donald->occupation = "A-Level Student";

// Access properties as usual
echo $donald->name; // "Donald"
echo "$donald->name is $donald->age"; // "Donald is 17"
// ...
However, the major drawback of using this method of creating objects is that you can only create/define properties for that object. As far as I know, there is no way you can add methods to an empty object. Now, you might think that you could define methods by assigning closure (function) values to properties:

$donald = new stdClass;
$donald->say_hello = function () {
  echo "Hello World";
}; // Assigning a closure to an object property - does that make it a method?
Actually, to an extent, this method works. No fatal error is thrown and the closure is accessible. However, if you try to access it as a method:

$donald->say_hello(); // An error is thrown
... you will find that an error is thrown. If you then use try/catch blocks to intercept the error (and echo it to the screen), you will realise that the PHP script was trying to access the method say_hello() in stdClass, which, of course, does not exist since stdClass is an empty class!

If, however, you access the property $say_hello as a closure and then call it as a function, it works perfectly:

($donald->say_hello)(); // echoes "Hello World" to the screen
Bottom line: assigning a closure to an object property does not make it an object method.

II. Type Casting an Associative Array into an Object
Another way of creating unique, standalone objects is to first create an associative array with key-value pairs and then casting it into an object. The syntax for casting a value into an object is as follows:

(object)$some_associative_array;
So, to create an object identical to the one shown in Method #1, we would do the following:

$donald = (object)[
  "name" => "Donald",
  "age" => 17,
  "occupation" => "A-Level Student",
  "say_hello" => function () {
    echo "Hello World";
  }
]; // Type casting an associative array to an object and then assigning it to the variable $donald
However, this method poses the exact same problem as Method #1 - you simply cannot effectively define object methods. This is because to the PHP script itself, Methods #1 and #2 are one and the same - every time you type cast an array to an object, a new instance of stdClass is created.

Furthermore, this method potentially poses another additional problem - what if the array keys contain characters such as whitespace or start with numbers? In such cases, an object is still created and no error is thrown, but then it becomes very tricky (and sometimes impossible, although there is usually a way) to access such properties.

So, the question is: is there a way to create unique, standalone objects with object methods?

III. Using Anonymous Classes (PHP 7+)
Prior to PHP 7, there were only 2 methods of creating unique standalone objects (as demonstrated above). This meant that if you wanted to create a single object with unique properties and methods, you had to define a full, named class just for that very object. However, in PHP 7, a new feature was approved and introduced - the anonymous class. This meant that it was finally possible to create one-off, throwaway classes that can be used to instantiate one single object and no more. The syntax for defining and using an anonymous class is as follows:

$object = new class(/* pass in arguments to the class constructor */) {
  /* Class code goes here, just like any ordinary class */
};
Basically, an anonymous class is just like any other ordinary (named) class in terms of behaviour and functionality, except for the fact that it is anonymous and therefore can only be used once. This means that you can use the exact same syntax used in full, named classes to define properties and methods:

$donald = new class("Donald", 17, "A-Level Student") {
  public $name, $age, $occupation; // Public Properties.  You can also define protected and private properties if necessary.
  public function __construct($name, $age, $occupation) {
    /* Class constructor, just like any other class */
    $this->name = $name;
    $this->age = $age;
    $this->occupation = $occupation;
  }
  /* An actual say_hello() method!  You can also define protected and private methods if necessary */
  public function say_hello() {
    echo "Hello World";
  }
};
In fact, you can even extend other classes and implement interfaces in your anonymous class to create semi-unique one-off objects as required.

class Person {
  /* We will be instantiating a large number of "Persons" so we need a named class here */
  public $name, $age, $occupation;
  public function __construct($name, $age, $occupation) {
    $this->name = $name;
    $this->age = $age;
    $this->occupation = $occupation;
  }
}

// Instantiate a few "Person"s
$steve = new Person("Steve", 40, "Teacher");
$paul = new Person("Paul", 35, "Maths Teacher");

// However, we only have one Computer Programmer in this situation so no point in defining a full, named class called "ComputerProgrammer"
$donald = new class("Donald", 17) extends Person {
  public function __construct($name, $age) {
    parent::__construct($name, $age, "Computer Programmer");
  }
  /* Define a method that the "Person" class does not have - this is what makes this particular object (or "Person") unique */
  public function say_hello() {
    echo "Hello World";
  }
};
Since this is quite an advanced topic, you may want to read up on the official PHP documentation and perhaps try out a few examples yourself in your local server before proceeding with the exercise.

This is the end of the lesson of the final Kata of this Series. Thank you very much, and hope you enjoyed it! :D

Task
Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

Since there are severe limitations when using Methods #1 and #2 for creating objects on the fly, we will be using Method #3 (Anonymous Classes) in this exercise.

Using Method #3 (Anonymous Classes), define an object $object_oriented_php with the properties, methods and additional behaviour (N.B. You may have to conduct your own research on how to implement the additional behaviour ;) ) as specified below. Your anonymous class may extend any class you wish and/or implement as many interfaces as you wish, as long as the object $object_oriented_php itself is an instance of an anonymous class. You may also define a class constructor for the anonymous class if necessary.

Properties
$description - This should be equal to the string "An amazing PHP Kata Series, complete with 10 top-quality Kata containing a large number of both fixed and random tests, that teaches both the fundamentals of object-oriented programming in PHP (in the first 7 Kata of this Series) and more advanced OOP topics in PHP (in the last 3 Kata of this Series) such as interfaces, abstract classes and even anonymous classes in a way that stimulates critical thinking and encourages independent research"
$kata_list - This public property should be equal to an ordinary (non-associative) array containing the full names of each of the Kata in this Series in order. So, for example, $object_oriented_php->kata_list[0] === "Object-Oriented PHP #1 - Classes, Public Properties and Methods" and $object_oriented_php->kata_list[5] === "Object-Oriented PHP #6 - Visibility"
$kata_count - This property should be equal to 10
$author - This property should be equal to another instance of an Anonymous Class (Method #3) such that its $name is "Donald", its $age is 17, its $gender is "Male" and its $occupation is "Computer Programmer". This particular property should also have a string value of "Donald, aged 17, who is a computer programmer proficient in Javascript and PHP and is a PHP enthusiast" when treated as a string (Hint: It's magic).
Methods
advertise - This method should receive exactly 1 required argument $name and return a string of the form "Hey NAME_HERE, don't forget to check out this great PHP Kata Series authored by Donald called \"Object-Oriented PHP\""
get_kata_by_number - This method should accept one argument $kata_number and return the full name of that Kata in this Series. For example, $object_oriented_php->get_kata_by_number(1) === "Object-Oriented PHP #1 - Classes, Public Properties and Methods" and $object_oriented_php->get_kata_by_number(10) === "Object-Oriented PHP #10 - Objects on the Fly [Advanced]". An InvalidArgumentException should be thrown if the provided argument $kata_number is not an integer in the range of 1 to 10 (both inclusive).
complete - This method should receive no arguments and return the string "Hooray, I've finally completed the entire \"Object-Oriented PHP\" Kata Series!!!"
Additional Behaviour
In addition to the properties and methods specified above, your object $object_oriented_php must exhibit the following behaviour:

When treated as a string (e.g. used in string concatenation $object_oriented_php . "" or string interpolation "$object_oriented_php"), the object should have a string value equal to its $description property (Hint: It's magic)
This is the end of the final exercise of this Kata series. Thank you very much, and hope you enjoyed it! :D Feel free to leave "Suggestions" on this Kata if you wish certain topics to be covered in the next PHP Kata Series!


*/
$object_oriented_php = new class{
    public $name, $age, $occupation,$gender;
    public $description = "An amazing PHP Kata Series, complete with 10 top-quality Kata containing a large number of both fixed and random tests, that teaches both the fundamentals of object-oriented programming in PHP (in the first 7 Kata of this Series) and more advanced OOP topics in PHP (in the last 3 Kata of this Series) such as interfaces, abstract classes and even anonymous classes in a way that stimulates critical thinking and encourages independent research";
    public $kata_list = [
        "Object-Oriented PHP #1 - Classes, Public Properties and Methods",
        "Object-Oriented PHP #2 - Class Constructors and \$this",
        "Object-Oriented PHP #3 - Class Constants and Static Methods",
        "Object-Oriented PHP #4 - People, people, people (Practice)",
        "Object-Oriented PHP #5 - Classical Inheritance",
        "Object-Oriented PHP #6 - Visibility",
        "Object-Oriented PHP #7 - The \"Final\" Keyword",
        "Object-Oriented PHP #8 - Interfaces [Advanced]",
        "Object-Oriented PHP #9 - Abstract Classes [Advanced]",
        "Object-Oriented PHP #10 - Objects on the Fly [Advanced]",
    ];
    public $kata_count = 10;
    public function __construct()
    {

        $this->author = new class()
        {
            public $name, $age, $occupation;

            public function __construct()
            {
                $this->name = 'Donald';
                $this->age = '17';
                $this->gender = 'Male';
                $this->occupation = 'Computer Programmer';
            }
            public function __toString()
            {
                return "Donald, aged 17, who is a computer programmer proficient in Javascript and PHP and is a PHP enthusiast";
            }
        };
    }
    public function advertise($name){
        return "Hey $name, don't forget to check out this great PHP Kata Series authored by Donald called \"Object-Oriented PHP\"";
    }
    public function get_kata_by_number($n){
      if ($n < 1 || $n > 10 || !is_int($n)) throw new InvalidArgumentException();
      return $this->kata_list[$n-1];
    }
    public function complete(){
        return "Hooray, I've finally completed the entire \"Object-Oriented PHP\" Kata Series!!!";
    }
    public function __toString()
    {
        return "$this->description";
    }
};
