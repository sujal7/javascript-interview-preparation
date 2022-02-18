# Question and Answers

## DOM and Web

1.  What is the difference between window and document ?

    Ans: Windows is the global object in our browser and document is the object that gets loaded inside the window object.

2.  What is DOM [Document Object Model] or DOM API ?

    Ans: It means the browser is giving us the document object which helps us to acccess the elements through javascript.

3.  What is BOM [Browser Object Model] ?

    Ans: It gives us few objects related to window and using that we can access location, screen, height, width, etc of window.

4.  Explain the difference between DOM and BOM ?

    Ans: DOM is used to manipulate the HTML document, meanwhile BOM is used for access and manipulation of the browser window.

5.  Which is the global object in browser ?

    Ans: Window is the global object in browser.

6.  How will we check the width and height of window ?

    Ans: We can use the window object to access the width and height of window.

         window.innerWidth;
         window.innerHeight;

7.  How will you get hostname or value typed in address bar ?

    Ans:

        window.location

8.  Explain the difference between setTimeout() and setInterval() ?

    Ans: setTimeout() executes only once, meanwhile setInterval() executes repeatedly.

9.  Why can’t we write document.setTimeout() or document.setInterval() ?

Ans: They are part of window object and not document.

10. How can you stop a timer ?

    Ans: We can use clearTimeout() or clearInterval() method.

11. How will you create a digital clock ?

    Ans: We can use setInterval() method to create a digital clock.

12. Which is the default propagation path ?

    Ans: The default propagation path is from bottom to top i.e. "Bubbling".

13. How can you stop the event propagation ?

    Ans: We can use event.stopPropagation() method.

14. How can you change the default propagation path ?

    Ans: By setting third parameter of addEventListener() method to true.

        addEventListener("click", btnClick, true);

15. How can you get the reference of element on which event is fired ?

    Ans: We can use event.target to get the reference of element on which event is fired.

16. How event bubbling or capturing is useful in the practical programming world ?

    Ans: When we have deep level elements in the DOM, we can use event bubbling or capturing to get the reference of the element on which event is fired.

17. Which property can be used to check the element type on which the event is triggered ?

    Ans: We can use **event.target.tagName**.

18. How can you get value of the element which raised the event ?

    Ans: We can use **event.target.value** or **event.target.innerHTML**.

19. What is a node in DOM tree? Explain different types of nodes?

    Ans: Each element in the DOM tree is a node. The different types of nodes are as follows:

    1. Element node
    2. Text node
    3. Comment node
    4. Document node
    5. Document type node

20. How can you access next same level element for a given node element?

    Ans: We can use nextElementSibling property of the node element.

21. What is the difference between childeNodes and children property?

    Ans: childNodes property returns all the child nodes of the node element, whereas children property returns only the regular HTML elements.

22. How can you check whether an element has child nodes or not?

    Ans: We can use either childNodes.length or hasChildNodes() method.

23. What is the purpose of DOM navigation?

    Ans: We can use DOM navigation to navigate through the DOM tree and we can remove or modify a specific node in the DOM tree.

24. What will be the output of below given statement

        element.lastChild.nextSibling

    Ans: The output will be **null** since it is the last child, it has no sibling.

25. Can you use document.getElementById() & element.getElementById() ?

    Ans: We can use document.getElementById(), but not element.getElementById() because the searching of element by "id" is always for the entire document & not for the specific region.

26. What does the getElementsByTagName() return ?

    Ans: It returns a list of all the elements with the given tag name.

27. What is the difference between getElementsByClassName() & getElementsByName() ?

    Ans: getElementsByClassName() refers to the class of an element, whereas getElementsByName() refers to the name of an element.

28. Explain the difference between querySelector() & querySelectorAll()

    Ans: querySelector() returns the first element that matches the specified CSS selector, whereas querySelectorAll() returns a NodeList of all elements that match the specified CSS selector.

29. How can you search elements using pseudo classes?

    Ans: We can use querySelector() or querySelectorAll().

    For example:

        const elem = document.querySelector(":hover");

30. Between getElementBy methods and querySelector methods which is better to use?

    Ans:

    - getElementById() is suitable method to search specific element, whereas querySelector() is suitable method or class name/selectors.
    - getElementByID is faster than querySelector().
    - getElementBy works on all browser versions, whereas querySelector works only in IE8 and above.

31. Explain various ways to configure an event with HTML elements.

    Ans:

        <button onclick="alert('I am clicked')"> Inline event </button>

        <button onclick="display()"> Click Here </button>

        <button id="btn"> Binding Event </button>

        <button id="btn1"> Binding with Listener </button>

        <script>
            function display(){
                alert("I am clicked");
            }

            function btn1Display(){
                alert("Event listener clicked");
            }

            const btn = document.getElementById("btn");
            const btn1 = document.getElementById("btn1");

            btn.onclick = () => {
                alert("Binding event clicked");
            }

            btn1.addEventListener("click", btn1Display);
        </script>

32. Explain syntax of addEventListener() method.

    Ans:

        element.addEventListener(event, function, [useCapture]);

    where,

    - event is the name of the event.
    - function is the function to be executed when the event is triggered.
    - useCapture is an optional parameter to specify bubbling/capturing.

33. What is an event object?

    Ans: Event object is an object which is passed when an event is triggered and it gives various properties of the event, details of the event and the element which raised the event.

34. How will you disable right click on an element?

    Ans: We can use the oncontextmenu property of the element.

        <div id="div1" oncontextmenu="return false">
            <p> Right click me </p>
        </div>

35. How can you check whether a special key is pressed or not while an event is generated?

    Ans: We can use the following:

        event.altKey;
        event.shiftKey;
        event.metaKey;
        event.ctrlKey;

36. How do you check mouse button value while an event is generated?

    Ans: We can use the event.button property to check which mouse button is pressed.

        event.button === 0; // left button clicked
        event.button === 1; // middle button clicked
        event.button === 2; // right button clicked

37. For ctrl key and cmd on mac - how will you right the condition to check the key press.

    Ans: We can use the following:

        if(event.ctrlKey || event.metaKey){
            // do something
        }

38. Explain the difference between clientX/Y and pageX/Y.

    Ans: ClientX/Y refers to the position of the mouse pointer relative to the viewport, whereas pageX/Y refers to the position of the mouse pointer relative to the whole document.

39. Explain the difference between clientX/Y and screenX/Y.

    Ans: ClientX/Y refers to the position of the mouse pointer relative to the viewport, whereas screenX/Y refers to the position of the mouse pointer relative to the whole screen.

40. How can you check if control and Z is pressed or not?

    Ans: We can do the following:

        i(event.ctrlKey && event.keyCode === KeyZ){
            // do something
        }

41. What does event.code return ?

    Ans: It returns the key code of the key pressed.

42. Explain the difference between event.code and event.key ?

    Ans: event.code returns the key code of the key pressed whereas event.key returns the key pressed.

43. What is the difference between onblur and onchange event?

    Ans: onblur event is triggered when the element loses focus whereas onchange event is triggered when the value of the element is changed.

44. How will you handle events of checkbox and radio buttons?

    Ans: onchange event is generally used to handle textbox, checkbox and radio buttons. click event can also be used or checkbox and radio buttons.

45. Differentiate onkeypress/onkeyup and oninput event.

    Ans: onkeypress/onkeyup will not be triggered when content is copy pasted or voice input is going into the textbox, whereas oninput is triggered in all cases.

46. Which event you prefer with select [i.e. drop down list]?

    Ans: We can use onchange event with select because it is triggered when the value of the element is changed.

47. How will you get the text value of selected item from a select element i.e. a drop down list?

    Ans: We can do the following:

        <select onchange="handler(this.options[this.selectedIndex].text)">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>

48. Explain about cut,copy and paste events.

    Ans: There are events such as oncopy, oncut & onpaste which can handle the cut, copy & paste actions.

49. How can you stop an event of cut, copy or paste for an element?

    Ans: We can use the preventDefault() method.

        <input type="text" oncut="preventDefault()">
