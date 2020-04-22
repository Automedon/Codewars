/*
Description:
Object-Oriented PHP #4 - People, people, people (Practice)
About this Kata Series
In this series, we will start off by learning the very fundamentals of object-oriented programming (commonly referred to as "OOP") and classes in PHP. We will then proceed by learning about the 3 different visibilities of class properties and methods and when to use them. After that, classical inheritance will be taught along with its perks and potential drawbacks. Finally, in the final Kata(s) in this series, more advanced OOP concepts may be taught such as interfaces and even abstract classes. Apart from the main course content, every 3 Kata or so into this Series, there will be an exercise Kata to practice on previously learned knowledge.

Lesson
Since this is a practice/revision Kata, there will be no lesson.

Task
Note: If in doubt, please refer to the first 3 Kata in this Series. In the unlikely case that a certain topic in this Task is not covered by any of the first 3 Kata in this Series, you are strongly encouraged to conduct your own research.

Define a class called Person.
Since all Persons are of the species "Homo Sapiens", make that a class constant
Declare (but do not define yet) the 3 class properties $name, $age and $occupation. *They should all be *public.
Define a class constructor which accepts exactly three arguments in the following order: $name, $age, $occupation and store them in their respective properties.
Define a method called introduce which accepts no arguments and returns a string of the format "Hello, my name is NAME_HERE"
Define another method called describe_job which accepts no arguments and returns a string of the format "I am currently working as a(n) OCCUPATION_HERE" (NOTE: The **
"a(n)"
part of the string is literal which means you do not have to create conditionals to check whether
"a"
or
"an"
should be used.**)
When extraterrestrials arrive on Earth, all Persons are expected to greet them in exactly the same way. Therefore, define a static class method called greet_extraterrestrials which accepts an argument $species and returns a string of the format "Welcome to Planet Earth SPECIES_NAME_HERE!"
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
  public function describe_job(){
    return "I am currently working as a(n) $this->occupation";
  }
  public static function greet_extraterrestrials($species){
    return "Welcome to Planet Earth $species!";
  }
}
