# Question and Answers

## String

1.  Explain various ways to declare a string variable

    Ans: The various ways are as follows:

         let str = "Hello World!";
         let str = 'Hello World!';
         let str = `Hello World!`;

2.  How will you deal with unicode characters?

    Ans: The unicode characters are represented by the following:

         let str = "Hello World!\u00A9";

3.  Show the syntax to display long unicode characters.

    Ans: The long unicode characters are represented by the following:

         let str = "Hello World!\u{1F60A}";

4.  What is a template literal?

    Ans: Newer way to declare string variable in JavaScript. It is a string that contains embedded expressions.

        let str = `Hello World!`;

5.  How will you display a value or an expression inside template string?

    Ans: The value or expression inside template string is enclosed by back-tick (`) character.

        let a = 50;
        let str = `Hello World! ${a}`;

6.  What is the advantage of using template string?

    Ans:  
    We can execute expression inside the backticks.  
    New line of string is also maintained.

7.  Explain the indexOf() and lastIndexOf() method with syntax.

    Ans:

        let str = "This is a string";
        console.log(str.indexOf("is"));
        console.log(str.lastIndexOf("is"));

    The indexOf will search from the beginning of the string and lastIndexOf will search from the end of the string.

8.  What is the difference between search() and indexOf() method?

    Ans:  
    indexOf() can have start position to perform search, but cannot be used for regex search operations.

    search() can be used for regex search operations, but cannot have start position.

        let str = "This is a string";
        str.search("is");
        str.indexOf("is", 3);

9.  What will be the output of the below given code? Explain with reason.

        let str="This is a test";
        console.log(str.indexOf("is",5));
        console.log(str.lastIndexOf("is",1));

    Ans:  
    The first output will be 5, because the indexOf() method will search from the position 5 and find it.

    The second output will be -1, because the lastIndexOf() method will search from the position 1 to the left and won't find it.

10. What will be the output of below code

        let str= "Hello World";
        console.log(str.slice(-5,-2));

    Ans: The output will be "wor".

11. What is the difference between substr() and substring()?

    Ans: The substr will take startIndex and number of characters, whereas substring will take startIndex and endIndex.

          str.substr(startIndex, noOfCharacters);
          str.substring(startIndex, endIndex);

12. What will be the output of the below given code? Explain with reason.

        let str="This is a test";
        console.log(str.substring(-5));

    Ans: The output will be the entire string because we cannot use negative value in substring().

13. What will be the output of the below given code? Explain with reason.

        let str="This is a test";
        console.log(str.substring(3,3));

    Ans: The output will be empty string because the endIndex is exclusive.

14. Explain the output of below code

        let str = "This is a test";
        console.log(str.charAt());

    Ans: If the index is not provided, the output will be the first character of the string i.e. "T".

15. Get a character from the user and display whether it is a vowel or consonant.

        let ch = prompt("Enter a character: ");
        ch = ch.toLowerCase();
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
            console.log("Vowel");
        }else{
          console.log("Consonant");
        }
