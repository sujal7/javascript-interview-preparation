# Question and Answers

## Module

1.  What is a module?

    Ans: Module means dividing our code into various logical pieces and importing them whenever required.

2.  Can you import any module inside the script tag?

    Ans: Yes, we can but we need to specify the type of script tag to be module.

3.  How will you run the import & export statements on a local machine?

    Ans: We need a server to run the import & export statements.

4.  What is a named export and import?

    Ans: Named exports are used to export multiple values from a module.

    Example:

         export const name = 'Ram';
         export const age = 22;
         export const getName = () => {
             return name;
         };
         export const getAge = () => {
             return age;
         };

5.  Can you avoid {} while importing a named module?

    Ans: No, we cannot.

    Example:

           import { getName, getAge } from './module';

6.  How can you import all named modules from a file?

    Ans:

          import * as module from './module';

7.  Is it a good practice to import all modules together?

    Ans: No, we should only import the modules which are required. If all modules are used, then we can import all of them together.

8.  Do the modules hoist?

    Ans: In ES6 there is no hoisting, but for modules we have hoisting.

    Example:

         module(); // using module before import
         import module rom './module'; // importing

9.  Do you need the same name while importing a named module or you can change?

    Ans: We can change the name of imported or exported module.

    Example:

         import { getName as name } from './module';
         console.log(name);

10. What is default export/import & the difference between named & default export/import?

    Ans: Default export/import is used to export a single value from a module.

    Example:

            // Named export/import
            // We can also export/import multiple values.
            export function sum(a, b)
            import {sum} from './module';

            // Default export/import
            // We can only export/import a single value as default.
            export default function sum(a, b)
            import sum from './module';

11. Explain various ways of implementing default export/import?

    Ans:

        export default function sum(a, b)
        export default function (a,b)
        export default sum;
        export {sum as default};

        import sum from './module';
