# Question and Answers

## Language Fundamentals

1.  What is "undefined" in JavaScript ?

    Ans: Undefined is a keyword in JavaScript. It is used to indicate that a variable has not been assigned a value.

2.  What will be the output of undefined==null & undefined===null ? Why ?

    Ans: undefined==null is true. undefined===null is false.  
    Because == is a loose equality operator,
    and === is a strict equality operator.

3.  Can you explicitly assign "undefined" to a variable ? (let i = undefined)

    Ans: Yes, we can explicitly assign "undefined" to a variable.

4.  What is hoisting in javascript ?

    Ans: Hoisting is a process of moving all the declarations to the top of the current scope.

5.  How does block scope work ?

    Ans: Block scope is a way to define a variable inside a block of code.

6.  What is the scope of a variable ?

    Ans: The scope of a variable is the part of a program where the variable can be used.

7.  Should you terminate all lines by a “;” ?

    Ans: It's not necessary to terminate all lines by a “;”, but it's a good practice.

8.  Why this code is returning undefined in spite of function returning a valid object literal ?

          function test(){
          return
          {
          a:5
          }
          }
          const obj=test();
          console.log(obj);

    Ans: Because semi-colon is automatically added after the return statement.

9.  Can ‘use strict’ statement or the strict mode change the behavior of ASI ?

    Ans: No, it doesn't change the behavior of ASI.

10. Can we use arguments object in arrow function?

    Ans: No, we can't use arguments object in arrow function.

11. Which is the best way to create new arrays with assignment?

    Ans: We can use spread operator.

        const arr = [1, 2, 3];
        const newArr = [...arr];

12. How can you handle the “n” number of parameters passed to a function ? or create a function which can take any number of parameters and returns sum or max or any other such calculative values.

    Ans: We can use rest operator.

        const sum = (...args) => {
            let sum = 0;
            for (let arg of args) sum += arg;
            return sum;
        };

13. Can the rest operator be placed anywhere in the function parameter list? Or

        function test(...a,b){
        //statements
        }

    Is this piece of code valid? Give the reason.

    Ans: No, rest operator can't be placed at the middle or beginning in the function parameter list.

14. How will you put a validation for positive or negative Infinity?
    Ans:

        if(num===Number.POSITIVE_INFINITY ||     num===Number.NEGATIVE_INFINITY){
            console.log("Infinity");
            }else{
            console.log("Not Infinity");
            }

15. What will be the output of this code?  
    Code:

        console.log(1/0);

    Ans: Infinity

16. What will be the output of the below statement?

        console.log(NaN==NaN);

    Ans: false, because it is always a unique value.

17. What is the difference between isNaN() and isFinite() method?

    Ans:  
    isNaN() method is used to check whether the value is NaN or not.  
    isFinite() method is used to check whether the value is finite or not.

18. Explain the syntactical features of arrow function.

    Ans:

        const sum = a => a + b;

    - We don't need to write paranthesis when we have only one parameter.
    - We don't need to write return statement when we have only one statement.
    - We don't need to write curly braces when we have only one statement.

19. Why “this” does not work in arrow function?

    Ans: We already have a class keyword to deal with the classes. We do not need the function to act as a class.

20. Explain output of following code with reason.

        const obj={
          method:()=>{
            console.log(this);
          }
        }

    Ans: window object, because this is a global object.

21. How can you handle arguments object like functionality in arrow function?

    Ans: We can use rest operator.

        const test = (...args) => {
            console.log(args);
        };

22. Can you write IIFE with arrow function syntax?

    Ans: Yes, we can write IIFE with arrow function
    syntax.

        (() => {
            console.log("Hello World");
        })();

23. How can you access private variable or function outside the scope?

    Ans: We can use closures.

        function outer(){
          return function (){
            console.log('Inner function');
          }
        }

        const func = outer();
        func(); // Inner function

24. Explain the advantage of closure?

    Ans: Closures are useful when we need to access the private variables or functions from outside the scope.

25. What is function currying?

    Ans: Function currying is a technique to convert a function with multiple parameters into a function with a single parameter.

26. const multiplication=a=>b=>c=>return a*b*c - What will this statement do? Explain in detail.

    Ans: It will return the multiplication of three numbers.

27. Explain practical usage of function currying.

    Ans: It solves various purpses like passing partial parameters or avoiding unwanted repitition of code.

28. What is the purpose of the iterator?

    Ans: The use of iterator is to make a data structure iterable which is not. For example: object

29. How do you create an iterator?

    Ans: The Symbol.iterator method must be implemented which should return an iterator object and should also have a next() method which returns the object.

30. Explain a practical use of an iterator?

    Ans: To make our custom data structure iterable.

31. What are generator functions? Explain the syntax.

    Ans: Generator functions are functions which can be paused and resumed at any point.

    Syntax:

        function* generator(){
          console.log('Hello');
          yield;
          console.log('World');
        }

        const gObj = generator();
        for(let o of gObj){
          console.log(o);
        }

32. Which is the right syntax function* () { } or function *() {}?

    Ans: Both are correct, but first one is mostly used.

33. Explain all methods of generator objects.

    Ans:

          next() - This method returns the next value of the generator.
          throw() - This method throws an error.
          return() - This method terminates the generator function.

34. Explain the use of “yield\*”

    Ans: It is used to call generator function from another generator function.

35. Can you prevent return() from terminating the generator?

    Ans: Yes, we can prevent return() from terminating the generator.

36. How does GC work in JS?

    Ans: Mark and Sweep algorithm is used for garbage collection.

37. Explain “Mark-and-Sweep” algorithm’s pattern

    Ans:

    - Mark phase: Mark all the objects that are reachable from the root set.
    - Sweep phase: Delete all the unreachable objects.

38. Which situation can create a memory leak?

    Ans: When we have a circular reference.

39. When do you need try...catch ?

    Ans: When we have to handle the error.

40. How can you generate an error ?

    Ans: We can use throw keyword.

41. Can you generate SyntaxError or ReferenceError kind of errors ?

    Ans: Yes, we can generate SyntaxError and ReferenceError kind of errors using throw statement.

42. What is the purpose of the finally block ?

    Ans: The finally block is used to execute a block of code after the try block and the catch block, it is always executed.

43. How can you refer to the name or description of error ?

    Ans: We can use error object.

44. Can we have finally without a catch block as well ?

    Ans: Yes, we can have finally without a catch block as well.
