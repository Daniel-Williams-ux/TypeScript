// Exercise - Type inference in TypeScript
// You can associate types with variables through explicit type annotations or through implicit type inference.

// While recommended, explicit type annotations are optional in TypeScript. To declare an explicit type, use the syntax variableName: type. The statement let myVariable: number declares the variable as a number type without initializing it. 
// Alternatively, you can initialize the variable by using let myVariable: number = 10.

// To imply the variable type through type inference, use the same format you use in JavaScript. For example, let myVariable = 10 infers that the variable is of type number because it's initialized with the value 10

let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it

// TypeScript now treats x as a number type. TypeScript also infers the type of y to be a number type because that is the type of the value used to initialize it. But what happens if you try to assign a different value type to it? And what happens to the variable z?

// Open the Errors tab in the Playground so you can monitor for any errors.

// Enter x = 1. This declaration should work as expected with no errors.

// Enter x = "one". As expected, this declaration raises the error Type 'string' is not assignable to type 'number' because static type checking doesn't allow a string to be assigned to the variable.

// Enter y = "one". You'll see that the same error is raised because TypeScript has inferred that y is of type number.

// Enter the variable name y followed by a period and you'll notice one more thing. Even though you didn't explicitly specify a type for the variable y, Intellisense is providing methods that only apply to a number type.

// Enter z = 1 and z = "one". TypeScript accepted both but why? These declarations work in the same way as they do in JavaScript because variable z can now accept any value assigned to it. 
// TypeScript has inferred the z is of type any because you didn't assign a type or initialize it when it was declared. You'll learn more about the any type later.

// While you can implicitly infer types through type inference in TypeScript, should you? Through type inference, you do get some of the benefit of static type checking and Intellisense and it enables you to gradually migrate to explicit type declarations in your projects. 
// But explicit type declarations also provide a way to better document the intention of your code and provide a more deliberate path going forward.

// Any type
// All types in TypeScript are subtypes of a single top type called the any type. The any type is the one type that can represent any JavaScript value with no constraints. All other types are categorized as primitive types, object types, or type parameters.
// These types introduce various static constraints on their values.

// Primitive types
// The primitive types are the boolean, number, string, void, null, and undefined types along with user-defined enumeration or enum types. The void type exists purely to indicate the absence of a value, such as in a function with no return value. 
// The null and undefined types are subtypes of all other types. It isn't possible to explicitly reference the null and undefined types. Only the values of those types can be referenced, using the null and undefined literals.

// Object types and type parameters
// The object types are all class, interface, array, and literal types (anything that isn't a primitive type.)

// Class and interface types are introduced through class and interface declarations and are referenced by the name given to them in their declarations. Class and interface types may be generic types that have one or more type parameters. 
// You'll learn more about these object types in later modules.
