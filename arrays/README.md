# Question and Answers

## Arrays

1.  What is the difference between for...in and for...of ?

    Ans:  
    for...in is used to iterate over the properties of an object.  
    for...of is used to iterate over the values of an array.

2.  What will be the output of the below code ?

        let arr = ["ES5","ES6","ES7","ES8"];
        arr.forEach(function(element,index){
          console.log(element,index);
          if (index==2){
              break;
          }
        })

    Ans: We cannot use break statement in forEach loop. So, it will display an error.

3.  What will be the output of below statements ?

        let arr=[7,9,0];
        console.log(arr[arr.length]);

    Ans: It will display undefined because there is no element at index 3.

4.  What is the difference between push() and unshift() method?

    Ans:  
    push() method adds an element at the end of an array.  
    unshift() method adds an element at the beginning of an array.

5.  What is the difference between pop() and shift()?

    Ans:  
    pop() method removes the last element of an array.  
    shift() method removes the first element of an array.

6.  How can you insert an element at a given position?

    Ans:  
    We can use splice() method.

        arr.splice(0, 0, "Apple");

7.  How can you remove a specific element?

    Ans:  
    We can use splice() method.

        arr.splice(0, 1);

8.  What does splice() return?

    Ans:  
    splice() method returns an array of removed elements.

9.  If there is no element removed then what will splice() method return?

    Ans:  
    splice() method returns an empty array.

10. What is the difference between find() and filter() method?

    Ans:  
    find() method returns the first match only.  
    filter() method returns all the matches in an array.

11. If there is no value to return, what will findIndex() return?

    Ans: It will return undefined.

12. What is the difference between indexOf() and includes() method?

    Ans:  
    indexOf() method returns index  
    includes() method returns boolean value.

13. How will you search multiple values in an array?

    Ans: We can use filter() method.

14. What will be the output of this code?

        let arr=["One","Two","Three","Four","Five"];
        console.log(arr.lastIndexOf("Abcd"));

    Ans: It will display -1 because there is no element "Abcd" in the array.

15. Find the length of each element in a new array.

    Ans: We can use map() method.

        let arr=["One","Two","Three","Four","Five"];
        let newArr=arr.map(function(element){
            return element.length;
        })
        console.log(newArr);

16. Find the square root of every element and store it in a new array.

    Ans: We can use map() method.

        let arr=[25, 13, 22, 36, 100];
        let newArr=arr.map(function(element){
            return Math.sqrt(element);
        })
        console.log(newArr);

17. There is an array called products as shown here

        let products=[
            {pCode:1,pName:"Apple"},
            {pCode:2,pName:"Banana"},
            {pCode:3,pName:"Grapes"},
            {pCode:4,pName:"Oranges"}
        ]

    Get all product names (i.e pNames) in a new array

    Ans: We can use map() method.

        let newArr=products.map(function(element){
            return element.pName;
        })
        console.log(newArr);

18. How will you flatten an array i.e e.g converting a 2 dimensional array into single dimension ?

    Ans: We can use reduce() method.

          let arr=[
              [1,2,3],
              [4,5,6],
              [7,8,9]
          ];
          let newArr=arr.reduce(function(accumulator,element){
              return accumulator.concat(element);
          }, [])
          console.log(newArr);

19. Get sum of a key field of an object literal & Then find total salary of employees

        const employees=[
          {eNo:1001,salary:3000},
          {eNo:1002,salary:2200},
          {eNo:1003,salary:3400},
          {eNo:1004,salary:6000}
        ];

    Ans: We can use reduce() method.

        let newArr=employees.reduce(function(accumulator,element){
          return accumulator+element.salary;
        }, 0)
        console.log(newArr);

20. Find avg value of all elements of an array?

    Ans: We can use reduce() method.

        let arr = [5, 10, 15,20];
        let result = arr.reduc((accumulator, element, index, array) => {
            return accumulator + element;
            if(index === array.length - 1) {
                return accumulator / array.length;
            }
        });
        console.log(result);

21. Find the sum or product of all elements?

    Ans: We can use reduce() method.

          let arr = [5, 10, 15,20];
          let result = arr.reduce((accumulator, element) => {
              return accumulator + element;
          });
          console.log(result);

22. What is the difference between reduce() and reduceRight()?

    Ans:  
    The reduce() loops from 0th index till last index of an array.  
    The reduceRight() starts looping from last index to 0th index.

23. What will be the output in case an array has “undefined” while sorting the values ?

    Ans: The undefined values is shifted to the end of the array.

24. How will sort an object literal ?

    Ans: We can use sort() method.

        const employees = [
            {eNo:1001,salary:3000},
            {eNo:1002,salary:2200},
            {eNo:1003,salary:3400},
            {eNo:1004,salary:6000}
        ];

        employees.sort(function(a,b){
          if(a.salary<b.salary){
            return -1;
          }
          if(a.salary>b.salary){
            return 1;
          }
          if(a.salary === b.salary){
            return 0;
          }
        });

25. How will you sort a numeric array?

    Ans: We can use sort() method.

        let arr = [5, 10, 15,20];
        arr.sort(function(a,b){
          if(a>b){
            return 1;
          }
          if(a===b){
            return 0;
          }
          if(a<b){
            return -1;
          }
        });
        console.log(arr);

26. Sort all values of the array in descending order.

    Ans: We can use sort() method.

          let arr = [5, 10, 15,20];
          arr.sort(function(a,b){
            if(a>b){
              return -1;
            }
            if(a===b){
              return 0;
            }
            if(a<b){
              return 1;
            }
          });
          console.log(arr);

27. What is the destructuring assignment?

    Ans: It is used to assign values from an array or object to variables.

28. Swap values using destructuring.

    Ans: We can use destructuring assignment.

        let a=10;
        let b=20;
        [a,b]=[b,a];
        console.log(a,b);

29. What will be the output of this code?
    let [a,b,c] = [5,,7];
    console.log(a,b,c);

    Ans: It will display 5, undefined, 7.

30. How will you set a default value while destructuring an array?

    Ans: We can use default value.

        let [a,b=10,c] = [5,,7];
        console.log(a,b,c); // Output will be 5, 10, 7.
