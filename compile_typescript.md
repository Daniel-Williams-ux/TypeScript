You run the TypeScript compiler at the command prompt by using the tsc command. When you run tsc with no parameters, it compiles all the .ts files in the current folder and generates a .js file for each one.

You can also compile a specific file. For example, to compile a TypeScript file named utility_functions.ts, enter tsc utility_functions.ts.

 Note

Entering the .ts file extension is optional.

If there are no compiler errors, the tsc command generates a JavaScript file named utility_functions.js.

If the compiler finds errors in the code, it displays them in the command window. Fix the errors in the TypeScript file, and then rerun the tsc command.
