/*
Description:
In a previous kata ( http://www.codewars.com/kata/547f1a8d4a437abdf800055c ) we try to create an object with mutable properties.

The function NamedOne taken first & last names as parameters, returned an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties. These properties were mutable.

For example, with a "NamedOne" like this :

var namedOne = new NamedOne("Naomi","Wang")
namedOne.fullName  // -> "Naomi Wang"
...we were able to change its properties:

namedOne.firstName = "John" 
namedOne.lastName = "Doe"
namedOne.fullName  // -> "John Doe" 
//..or..
namedOne.fullName = "Bill Smith"
namedOne.firstName // -> "Bill" 
namedOne.lastName // -> "Smith"
##Your mission

On the contrary, the purpose of this kata is to create an OnceNamedOne object with immutable properties.

That means .firstName, .lastName and .fullName are defined into the Constructor and can't be no more changed.

The properties are still readable using the dot or bracket notation but there're not writable.

##Examples:

var onceNamed = new OnceNamedOne("Naomi","Wang")

// ...then...
onceNamed.firstName // -> "Naomi"
onceNamed.lastName  // -> "Wang"
onceNamed.fullName // -> "Naomi Wang"

// ...if you try : ...
onceNamed.firstName = "Bill"
// ...or...
onceNamed['lastName'] = "Smith"

// ...then...
onceNamed['firstName'] // -> "Naomi"
onceNamed['lastName']  // -> "Wang"
onceNamed['fullName'] // -> "Naomi Wang"

// ..but you can still create other instances..
var otherOne = new OnceNamedOne("Don","Jones")
otherOne.fullName // -> "Don Jones"
Can you change our function to create such a OnceNamedOne object ?

( Hint: in this kata you'll try to define properties of an object )
*/
function OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + " " + this.lastName;
  Object.freeze(this);
}
