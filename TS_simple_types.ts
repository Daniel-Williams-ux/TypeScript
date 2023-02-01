/*
TypeScript Simple Types
TypeScript supports some simple types (primitives) you may know.

There are three main primitives in JavaScript and TypeScript.

boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"
Type Assignment
When creating a variable, there are two main ways TypeScript assigns a type:

Explicit
Implicit
In both examples below firstName is of type string

Explicit Type
Explicit - writing out the type:

let firstName: string = "Dylan";
Explicit type assignment are easier to read and more intentional. */

let firstName: string = 'Dan';
console.log(firstName)

/*
Implicit Type
Implicit - TypeScript will "guess" the type, based on the assigned value:
*/

/*Note: Having TypeScript "guess" the type of a value is called infer.

Implicit assignment forces TypeScript to infer the value.

Implicit type assignment are shorter, faster to type, and often used when developing and testing.*/

