# Question and Answers

## Map, Set, WeakMap & WeakSet (ES6 Data Structure)

1. What are the advantages of using Map over objects?

   Ans:

   - Map's keys can also be values and they can be of any datatype.
   - Keys are ordered: the insertion nd retrieval is always in the same order.
   - It has size property which returns number of key/value pairs.
   - Maps are iterable.
   - Maps are optimized for data manipulation.

2. How will you iterate through Map ?

   Ans: We can use various methods such as values(), keys(), entries() and also forEach().

3. Can you assign key/values with this syntax ? Explain the reason for the answer - map[‘key’]=value

   Ans: Yes, we can but it will behave like a normal object.

4. How can you convert simple objects to Map?

   Ans: We can do the following:

   ```javascript
   let obj = {
     name: 'Ram',
     age: 25,
   };

   let map = new Map(Object.entries(obj));
   console.log(map);
   ```

5. How can you convert a Map into simple objects?

   Ans: We can do the following:

   ```javascript
   let map = new Map();
   map.set('name', 'Ram');
   map.set('age', 25);

   let obj = Object.fromEntries(map.entries());
   console.log(obj);
   ```

6. How will you remove an item or all items from Map?

   Ans: We can use delete() and clear() methods.

7. What is the difference between Map and Set?

   Ans: Map is a collection of key/value pairs and Set is a collection of unique values.

8. How will you remove specific values from Set?

   Ans: We can use delete() method.

   ```javascript
   let fruit = new Set();
   fruit.add('Apple');
   fruit.add('Orange');
   fruit.delete('Apple');
   ```

9. What will entries() method with Set will return?

   Ans: Both key and value are going to be value in Set since it doesn't have keys.

10. Explain diff. Between Map and WeakMap.

    Ans:

    - Keys in the WeakMap are only objects, we cannot have primitive keys like string, number, etc.
    - Keys are weakly held and it means if the keys are garbage collected, so do the values.
    - Because of weak keys, WeakMap collection does not have iterable methods like keys(), values() or entries().
    - Weak Collections do not hold values when the garbage is collected.

11. Explain diff. Btn Set and WeakSet.

    Ans:

    - Keys in the WeakSet are only objects, we cannot have primitive keys like string, number, etc.
    - Keys are weakly held and it means if the keys are garbage collected, so do the values.
    - Because of weak keys, WeakSet collection does not have iterable methods like keys(), values() or entries().
    - Weak Collections do not hold values when the garbage is collected.
