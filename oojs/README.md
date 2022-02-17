# Question and Answers

## Obect Oriented JavaScript (OOJS)

1.  Can you have dynamic keys with object literal?

    Ans: Yes, we can have dynamic keys with obect literal.

    Example:

         let id = "someId";
         let obj = {
             [id]: 21321,
             name: "Ram",
         };

2.  How can you add read-only properties to an object?

    Ans: We can add read-only properties to an object by using the **Object.defineProperty()** method.

        const proto = Object.defineProperty({}, 'id', {
            writeable: false,
            configurable: true,
            value: 100
        });
        const obj = Object.create(proto);
        obj.id = 200;
        console.log(obj.id); // 100

3.  What is property value short hand with object literal?

    Ans:

        let id = 100;
        let name = "Ram";
        let obj = {
            id,
            name,
        };

4.  What will be the output of this code

        let obj={a:'First'};
        let obj1 = obj;
        obj1.a="Second";
        console.log(obj.a);

    Explain the reason why?

    Ans: The output will be **Second**, because the object is passed by reference to the new object ob1.

5.  How can we create a clone or separate copy of an object literal?

    Ans:

            let obj = {
                a: 'First',
                b: 'Second',
            };
            let obj1 = Object.assign({}, obj);
            obj1.a = 'Third';
            console.log(obj.a); // First

6.  What will be the output of this code if you run in the browser and why?

        function test(){
            console.log(this);
        }
        test();

    Ans: The output will be **Window Object** because window is the global object.

7.  What is the context of “this” inside arrow function? Or what will be the output of this code

        let obj={
                test:()=>{
                    console.log(this);
                }
        }
        obj.test();

    Ans: The output will be **Window Object** because this doesn't work with arrow function.

8.  What is the difference between call, apply and bind()?

    Ans:

        call() - The call() method calls a function with a given this value and arguments provided individually.

        apply() - The apply() method calls a function with a given this value and arguments provided as an array.

        bind() - The bind() method is similar to call, but it doesn't execute the function immediately.

9.  What will be the output of this code? Or can you assign value to “this” object with assignment operator i.e. “=”?

        const obj={
            a:6
        }
        function test(){
            this=obj;
        }
        test();

    Ans: The error will be **Invalid left hand side assignment** because we cannot assign value to “this” object with assignment operator i.e. “=”. We should use call, apply or bind method to change the value of this.

10. How can you create a class?

    Ans:

        class Person {
            constructor() {
                console.log("Object created");
            }
        }

11. When does constructor() called?

    Ans: The constructor is called when an instance of class is created.

12. Can we have dynamic property or method names in a class?

    Ans: Yes, we can have it in the following way:

        let name = "displayHello";
        class Person {
            [name]() {
                console.log("Hello");
            }
        }

13. What is a class expression?

    Ans: A class expression is a syntactical sugar for creating a class.

        const Person = class {
            constructor() {
                console.log("Object created");
            }
        }

14. What are static members in a class? What is the purpose of defining them as static?

    Ans: Static members are members that are shared by all instances of a class. Static members are defined by using the static keyword.

        class Person {
            static display() {
                console.log("Static method");
            }
        }
        Person.display(); // Static method

15. How can you call another static method from a class?

    Ans:

        class Person{
            static test1(){
                console.log("Test 1");
                this.test2();
            }
            static test2(){
                console.log("Test 2");
            }
        }

16. How can you inherit a class?

    Ans: We can use **extends** keyword to inherit a class.  
    Example:

        class Person {
            constructor() {
                console.log("Object created");
            }
        }
        class Employee extends Person {
            constructor() {
                super();
                console.log("Employee created");
            }
        }

17. What is subclassing?

    Ans: Subclassing is same as inheritence.

18. What is the purpose of super keyword?

    Ans: The super keyword is used to call the members of the parent class.

19. How will you override a method?

    Ans: We can override a method by using the **super** keyword.

        class Person {
            constructor() {
                console.log("Object created");
            }
            display() {
                console.log("Display method");
            }
        }
        class Employee extends Person {
            constructor() {
                super();
                console.log("Employee created");
            }
            display() {
                super.display();
                console.log("Employee display method");
            }
        }

20. How can you extend a built-in class?

    Ans: We can extend a built-in class by using the **extends** keyword.

        class Employee extends String {
            constructor() {
                super();
                console.log("Employee created");
            }
        }

21. Explain a practical scenario of object literal destructuring ?

    Ans: It is useful to get the data from server in a JSON format which is assigned to JavaScript object literal.

22. Explain the output of this code

        const { a=90, b } = { };
        console.log(a,b);

    Ans: The output will be **90 undefined**.
