# Question and Answers

## Asynchronous JavaScript

1.  What is an Asynchronous process?

    Ans: Asynchronous process is a process that is not executed immediately, but is executed later.

2.  What is the meaning of callback hell or pyramid of doom?

    Ans: Callback hell is a situation where a lot of callbacks are chained together. It is dificult to handle as there are multiple api calls & callback functions.

3.  How will you configure a process which should be executed at the end of promise resolve or reject ?

    Ans: We can use finally() method to execute a process at the end of promise resolve or reject.

4.  What is chaining the promise? Explain the syntax.

    Ans: The process of returning a promise so that the next chain will be executed is called chaining the promise.

    Example:

    ```javascript
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    ```

5.  What will be the output of the given code?

    ```javascript
    const pr = new Promise((resolve, reject) => {
      resolve('Over');

      setTimeout(() => {
        resolve('Again');
      }, 2000);
    });

    pr.then((msg) => {
      console.log(msg);

      return pr;
    }).then((msg) => {
      console.log(msg);
    });
    ```

    Ans: It will display **Over** 2 times because once the promise is resolved, it will only resolve the first resolve statement.

6.  What is the status of promise by default?

    Ans: It has pending status by default.

7.  What will be the status of promise when resolved or rejected?

    Ans: It will have status resolved(fulfill) or rejected.

8.  What will be the output if the iterable is not a promise inside all() method arguments,e.g as shown below where “p2” is not a promise?

    ```javascript
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise1');
      }, 2000);
    });

    const p2 = 'Normal string';

    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise3');
      }, 2000);
    });

    Promise.all([p1, p2, p3])
      .then((prMsgs) => {
        console.log(prMsgs);
      })
      .catch((err) => {
        console.log(err);
      });
    ```

    Ans: The output will be [Promise1, "Normal string", Promise3].

9.  How will you handle rejected multiple promises in the most efficient way?

    Ans: If we use Promise.all() it will work for all resolved states, but if there is an error then Promise.allSettled() is used.

10. Explain the purpose of Promise.race() method.

    Ans: It will return the promise as soon as any promise mentioned in the iterable list returns the state.

11. What will be the output of empty iterable if given as a parameter inside the race() method as shown in this code ?

    ```javascript
    const obj = Promise.race([]);

    console.log(obj);

    setTimeout(() => {
      console.log(obj);
    }, 2000);
    ```

    Ans: The state will be pending forever, so the output will be pending.

12. Can you write await without async?

    Ans: No, we always have to use async wrapper to use await.

13. Do you need to return a promise from an async function?

    Ans: No, we don't need to return.

14. Can you have an async IIFE?

    Ans: Yes, we can have an async IIFE.

15. Which is the best way to handle errors with await?

    Ans: We can use try catch block.

    ```javascript
    const cSqr = (a) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(a * a);
        }, 2000);
      });
    };

    (async function () {
      try {
        let res = await cSqr(2);
        console.log(res);
        let res1 = await cSqr(res);
        console.log(res1);
        let res2 = await cSqr(res1);
        console.log(res2);
      } catch (err) {
        console.log(err);
      }
    });
    ```

16. Explain the syntax of Promise.all() with async/await?

    Ans:

    ```javascript
    async function getData() {
      const data = Promise.all([
        await fetch(API - URL1),
        await fetch(API - URL2),
      ]);
    }
    ```

17. What is AJAX?

    Ans:

    - AJAX refers to Asynchronous JavaScript and XML.
    - It is used to make call to the server to fetch, delete, retrieve or edit the data.
    - We make HTTP calls with AJAX and with its help the browser does not refresh.
    - To make an AJAX call, we use the XHR object or fetch API.

18. How will you set a timeout with an XHR request?

    Ans: We can use the timeout property of the XHR object.

        request.timeout = 3000;

19. How can you set the data format for response?

    Ans: We can use the responseType property.

        request.responseType = 'json';

20. Explain “readyState” property of XHR.

    Ans: The readyState property are as follows:

    - 0: Unsent - Client has been created. open() not called yet.
    - 1: Opened - open() has been called.
    - 2: Headers received - send() has been called, and headers and status are available.
    - 3: Loading - Downloading; responseText holds partial data.
    - 4: Done - The operation is complete.

21. Explain the “onreadystatechange” event.

    Ans: The onreadystatechange event is triggered when there is a new value in the readyState property.

22. How can you force the XHR request to stop the execution?

    Ans: We can use abort() method.

        request.abort();

23. When is the “load” method called?

    Ans: The load method is called when the response is complete.

24. How will you set HTTP headers? Explain the sequence.

    Ans: We can use the setRequestHeader() method.

        request.setRequestHeader('Content-Type', 'application/json');

25. Explain different ways of getting response header values?

    Ans: We can use the getAllResponseHeaders() and getResponseHeader() method.

        request.getAllResponseHeaders();
        request.getResponseHeader('Content-Type');

26. Explain the fetch API functionality.

    Ans: The fetch API is used to make HTTP requests.

    ````javascript
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
          ```

    ````

27. How will you make a DELETE request with fetch API?

    Ans: We can use the delete() method.

    ```javascript
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((res) => console.log(res));
    ```

28. What is Symbol.asyncIterator?

    Ans: It is a way to implement iterator with asynchronous process.

29. Can we use spread operator with async iterator e.g. [...obj]?

    Ans: It is not possible because the spread operator is going to return an array. The array is returned when the values are retreived.  
    Whereas in asynchronous process, the data is retrieved in small chunks and then it gathers.
