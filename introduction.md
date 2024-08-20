Overview of TypeScript

JavaScript, one of the world's most-used programming languages, has become the official language of the web. Developers use it to write cross-platform applications that can run on any platform and in any browser.

Although JavaScript is used to create cross-platform apps, it wasn't conceived for large apps involving thousands, or even millions, of lines of code. 
JavaScript lacks some of the features of more mature languages that power today's sophisticated applications. 
Integrated development editors (IDEs) can find it challenging to manage JavaScript and maintain these large code bases.

TypeScript addresses the limitations of JavaScript, doing so without compromising the key value proposition of JavaScript: the ability to run your code anywhere and on every platform, browser, or host.

What is TypeScript?
TypeScript is an open-source language that was developed by Microsoft. 
It's a superset of JavaScript, which means that you can use the JavaScript skills you've already developed along with certain features that were previously unavailable to you.

Type hints
The core feature of TypeScript is its type system. In TypeScript, you can identify the data type of a variable or parameter by using a type hint.
With type hints, you describe the shape of an object, which provides better documentation and allows TypeScript to validate that your code is working correctly.

Through static type checking, TypeScript catches code issues early in development that JavaScript can't normally catch until the code is run in the browser. 
Types also let you describe what your code is intended to do. If you're working on a team, a teammate who comes in after you can easily understand it too.

Types also power the intelligence and productivity benefits of development tools, such as IntelliSense, symbol-based navigation, go to definition, find all references, statement completion, and code refactoring.

Writing types can be optional in TypeScript, because type inference allows you to get much of this power without writing extra code. 
If TypeScript can determine the data type implicitly (for example, when you assign a value to a variable by using let age = 42), it automatically infers the data type.
