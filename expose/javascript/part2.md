1. 3. The variable i is declared with var, which means it has function scope, not block scope. Therefore, i is accessible even after the loop ends.In the loop, i is incremented from 0 to 2. After the loop finishes, i is incremented one last time, making it 3.


2. 150. discountedPrice is declared using var, which has function scope, not block scope.

  
3. 150. That's normal.

  
4. [50, 100, 150],the function calculates a discounted price for each item in the prices array by applying the given discount (50% off in this case).The function stores each rounded discounted price in the discounted array and returns it at the end.


5. ReferenceError: i is not defined. The scope of let i is within the for loop.


6. ReferenceError: discountedPrice is not defined. The scope of let discountedPrice is within the for loop.


7. 150. finalprice is defined in function block.
  

8. [50, 100, 150],the function calculates a discounted price for each item in the prices array by applying the given discount (50% off in this case).The function stores each rounded discounted price in the discounted array and returns it at the end.


9. ReferenceError: i is not defined. The scope of let i is within the for loop.


10. 3. The length of [100,200,300] is 3.
   

11. [50, 100, 150],the function calculates a discounted price for each item in the prices array by applying the given discount (50% off in this case).The function stores each rounded discounted price in the discounted array and returns it at the end.


12A. console.log(student.name); OR console.log(student['name']);


12B. console.log(student['Grad Year']);


12C. student.greeting();


12D. console.log(student['Favorite Teacher'].name);


12E. console.log(student.courseLoad[0]);


13A. '32', string concatenation rather than arithmetic addition


13B. 1, it's arithmetic subtraction, and JavaScript will attempt to convert the operands to numbers if possible. So, '3' is converted to the number 3


13C. 3, it performs addition, and null is converted to 0 when used in a numerical context


13D. '3null', string concatenation.


13E. 4, true is converted to 1 when used in a numerical context


13F. 0, false is converted to 0, and null is also converted to 0.


13G. '3undefined', string concatenation


13H. NaN, when undefined is used in a numerical context, it is converted to NaN


14A. true, convert the string to a number before performing the comparison


14B. false, in lexicographical order.


14C. true, == (loose equality) operator performs type coercion


14D. false, the === (strict equality) operator does not perform type coercion, so a number does not equal to a string.


14E. false, true is converted to 1 when used in a numerical context


14F. true, Boolean(2) converts 2 to a boolean, which results in true.


15. The == operator is known as the loose equality operator. It performs type coercion, meaning that it will try to convert the operands to the same type before making the comparison. The === operator is known as the strict equality operator. It does not perform type coercion. For the comparison to return true, both the value and the type of the operands must be exactly the same.


17.Inside modifyArray:

newArr starts as an empty array: []

Loop through each element of the input array [1, 2, 3]

For each element, call callback (which is doSomething) on it, and push the result to newArr

Loop Iteration:
i = 0: callback(1) → doSomething(1) → 1 * 2 = 2 → newArr = [2]

i = 1: callback(2) → doSomething(2) → 2 * 2 = 4 → newArr = [2, 4]

i = 2: callback(3) → doSomething(3) → 3 * 2 = 6 → newArr = [2, 4, 6]

Can be examined by console.log(modifyArray([1,2,3],doSomething))


19. 1->4->3->2. setTimeout(..., 1000) Schedules console.log(2); to run after 1 second, and setTimeout(..., 0) Schedules console.log(3); to run as soon as possible, after the current call stack is clear (not immediately! It's after log(4)!)
