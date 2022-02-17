# Question and Answers

## Date and Time

1.  Explain different ways of creating date/time object.

    Ans:

         1) new Date()
         2) new Date(year, month, day, hours, minutes, seconds, milliseconds)
         3) new Date(milliseconds)
         4) new Date(string)

2.  What will be the output of the below code

        const dt = new Date(2020,08,23);
        console.log(dt);

    Ans:

        Wed Sep 23 2020 00:00:00 GMT+0545 (Nepal Time)

3.  Explain reason - why is it showing Sep instead of August

    Ans: Because the month starts from 0 in JavaScript.

4.  Explain various formats of ISO standard followed by JS?

    Ans:

    Year - YYYY  
    Month - MM  
    Day - DD  
    `YYYY-MM-DDTHH:mm:ss.sssZ`

5.  Get Character month?

    Ans:

        let dt = new Date();
        let arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        console.log(arrMonths[dt.getMonth()]);

6.  Find the date before 50 days of the given date.

    Ans:

        let dt = new Date();
        dt.setDate(dt.getDate() - 50);
        console.log(dt);

7.  What will be the output if you add 35 as date in Date() constructor e.g.

        let dt = new Date(2020,07,35);
        console.log(dt);

    Ans: It displays the date of the next month.

8.  Calculate the date diff. In days

    Ans:

        let dt = new Date(2020,7,25);
        let dt1 = new Date(2020,7,23);
        let n = dt.getTime()-dt1.getTime();
        n=(n/1000)/3600;
        console.log(n);

9.  How can you change hours or minutes in time?

    Ans: We can use setHours() and setMinutes() methods.

        let dt = new Date();
        dt.setHours(dt.getHours() + 1);
        dt.setMinutes(dt.getMinutes() + 30);
        console.log(dt);
