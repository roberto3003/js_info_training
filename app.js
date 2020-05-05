'use strict';
//let = "hello!";
//alert(3+1+6)

//let message;
// message = 'hello';
//let message = 'Hello';

//let user = 'John';
//let age = 25;
//let message = 'Hello';

//let user = 'John',
//    age = 25,
//    message = 'Hello';

//let user = 'John'
//    , age = 25
//    , message = 'Hello';

//message = 'World!'

//let hello = 'Hello World!';
//let message;

//message = hello;

//alert(message);
//alert(hello);

//const myBirthday = '14.09.1969';
//myBirthday = '345';


//alert(myBirthday);
////Uncaught TypeError: Assignment to constant variable.
////at app.js: 32


//const COLOR_RED = '#F00';
////capital-named constants are only used as aliases for "hard-cored" values.

//let color = COLOR_RED;

//alert(color);

////Tasks
//let name = 'John';
//let admin = name;
//alert(admin);

//let ourPlanet = 'Earth';
//let currentUserName = ;

////Uppercase for hard-coded or in other words, when the value
////is known prior to execution and directly written into the code
//const BIRTHDAY = '14.09.1969';

////Age is evaluated in runtime. We should use the lower case.
//const age = someCode(BIRTHDAY);


////8 BASIC DATATYPES IN JAVASCRIPT
////NUMBER: integer and floating
////  special numeric values: Infinity and NaN

//alert(1 / 0); //result: Infinity

//alert('abc' / 2); //result: NaN

////BigInt: goes behind the limitation of numbers and can represent
////integers of arbitrary lenght, larger than 2^53 or -2^53. 

////STRING: can use double "" or single ' ' quotes. 
//    //Backticks `` are extended functionality quotes,
//    //they allow us to embend variables and expressions ${...}
//let name = 'John';
//alert(`Hello, ${name}!`);
//alert(`the result is ${1 + 2}`);

////BOLEAN: true / false. 
//let isGreater = 4 > 1;
//alert(isGreater);

////NULL: nothing, empty or value unknown

////UNDEFINED: value is not assigned
//let x;
//alert(x); //undefined
////better to assign null than undefined

////OBJECT: all other types are called "primitive" because their values
////can contain only a single thing. In contrast, objects are used to
////store collections of data and more complex entities.

////SYMBOL: used to create unique identifiers for objects.

////The Typeof operator allows us to see which type is stored in 
////a variable.

//Tasks
//let name = "Ilya";
//alert(`hello ${1}`)
//alert(`hello ${"name"}`);
//alert(`hello ${name}`);


////TYPE CONVERSIONS
////STRING CONVERSION: happens when we need a string from a value,
////String(value) function converts into a string
//let value = true;
//alert(typeof value); //boolean

//value = String(value);//now value is a string "true"
//alert(typeof value);//string

////NUMERIC CONVERSION
////when a mathematical function, expression is applied to non-numbers.
//alert("6" / "2"); //3, strings are converted

////Number(value) function converts a value into a number
//let str = "123";
//alert(typeof str); //string
//str = Number(str);
//alert(typeof str); //number

////If the string is not a valid number, the result is NaN.
//let age = Number("blablabla");
//alert(age); //NaN conversion failed

////Conversion Rules: undefined=Nan, null=0, true and false= 1 and 0,
////string=depends

////BOLEAN CONVERSION
////It happens in logical operators or with the function Boolean(value)
////0, an empty string, null, undefined, and NaN become false.
////Other values become true.

//alert(Boolean(1)); //true
//alert(Boolean(0)); //false
//alert(Boolean("hello")); //true
//alert(Boolean("")); //false
//alert(Boolean("0")); //true!!
//alert(Boolean(" ")); //spaces also true, the string is not empty

////OPERATORS
////BYNARY + = sums numbers but also merges strings
//let s = 'my' + 'string';
//alert(s); //mystring

////if one of the operands is a string, the other one is converted to a
////string too
//alert('1' + 2); //"12"
//alert(1 + '2'); //"12"
////However if there are two numbers followed by a string, the numbers
////will be added before being converted to a string
//alert(2 + 2 + "1"); //"41" and not "221"

////other arithmetic operators work only with numbers and alway convert
////their operands to numbers
//alert(2 - '1') // 1
//alert('6' / '2') // 3

////UNARY +
////Doesn't do anything to numbers but converts nonumbers to numbers,
////same as Number(...)
//let apples = "2";
//let oranges = "3";
//alert(apples + oranges); //"23"
//alert(+apples + +oranges); // 5
////unary pluses are applied first, and then the binary plus sums them up

////ASSIGNMENT =
////very low priority
////It is possible to chain assignments:
//let a, b, c;
//a = b = c = 2 + 2;

//alert(a); //4
//alert(b); //4
//alert(c); //4

////The assignment operator like other operators always returns a value
//let a = 1;
//let b = 2;

//let c = 3 - (a = b + 1);

//alert(a); // 3
//alert(c); // 0

////REMAINDER %
//alert(5 % 2); // 1 is a reminder of 5 divided by 2

////EXPONENTIATION **
//alert(2 ** 3); // 8 (2*2*2)
//alert(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
//alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

////INCREMENT ++ / DECREMENT --
////increase or decrease a variable by 1
//let counter = 2;
//counter++
//alert(counter); //3

//let counter = 2;
//counter--
//alert(counter); //1

////Important: increment/decrement can only be applied to variables,
////Trying to use it on a value like 5++ will give an error

////++ and -- can be placed either before or after a variable.
//let counter = 1;
//let a = ++counter;
//alert(a); //2 returns the new value

//let counter = 1;
//let a = counter++;
//alert(a); //1 returns the old value (prior to increment)

////The operators ++/-- can be used inside expressions as well but
////is better to use the "one line - one action" style

////BITWISE OPERATORS (used very rarely)
////and (&), or (|), xor (^), not (~), left shift (<<), right shift (>>),
////zero-fill right shift (>>>)

////MODIFY IN PLACE += *= -= /=
//let n = 2;
//n += 5; //now n = 7 (same as n = n+5)
//n *= 2; //now n = 14 (same as n= n*2)
//alert(n); // 14

//let num = 2;
//num *= 3 + 5;
//alert(num); // 16 (right part evaluated first, same as n *= 8)

////COMMA ,
////trows away everything except the last expression
////used in some frameworks but not reccomended

//let a = (1 + 2, 3 + 4);
//alert(a); //7 (the result of 3+4)

////If used without parentheses, assignment= has the precedence
//let b = (1 + 2, 3 + 4);
//b = 1 + 2, 3 + 4;
//alert(b); //3 because is like (a=1+2), 3+4

////Tasks
//let a = 1,
//    b = 1;
//let c = ++a; 
//let d = b++; 
//alert(c); // 2
//alert(d); // 1

//let a = 2;
//let x = 1 + (a *= 2);
//alert(x); // 5

//alert("" + 1 + 0); //10
//alert("" - 1 + 0); //-1
//alert(true + false); // 1
//alert(6 / "3"); //2
//alert("2" * "3"); //6
//alert(4 + 5 + "px"); //9px
//alert("$" + 4 + 5); //$45
//alert("4" - 2); //2
//alert("4px" - 2); //NaN
//alert(7 / 0); //Infinity
//alert(" -9 " + 5); //-9 5
//alert(" -9 " - 5); // -14
//alert(null + 1); // 1
//alert(undefined + 1); //NaN
//alert(" \t \n" - 2); //-2 \t and \n are space characters,
////like na empty string it becomes 0


////COMPARISONS
////Greater/less than: a>b, a<b.
////Greater/less or equals: a>=b, a<=b.
////Equals: a == b 
////Not equals: a != b.

////Boolean is the result: true, false.
//alert(2 > 1); // true
//alert(2 == 1); // false
//alert(2 != 1); // true
//let result = 5 > 4;
//alert(result); // true

////String comparison
////JS uses "Unicode" order: the lower case a is greater than 
//// uppercase. If they are the same, the longest string is greater.
//alert('B' > 'b'); //false
//alert('Z' > 'A'); //true
//alert('Glow' > 'Glee'); //true
//alert('bee' > 'be'); //true

////Comparison of different types
////Java-script converts the values to numbers:
//alert('2' > 1); //true
//alert('01' == 1); //true
////For booleans values, true becomes 1 and false becomes 0.
//alert(true == 1); //true
//alert(false == 0); //true
////For two equal values one can be true as a boolean, the other
////one can be false as a boolean:
//let a = 0;
//alert(Boolean(a)); //false
//let b = "0";
//alert(Boolean(b)); //true
//alert(a == b); //true

////Strict equality === and strict non-equality !==
////Check the equality, non-equality without type conversion
//alert(0 == false); //true
//alert(0 === false); //false
//alert('' != false); //false
//alert('' !== false); //true

////Comparison with null and undefined
////for === they are a different type:
//alert(null === undefined); //false
////for == they are a sweet couple, they equal each other but not
////any other value! Equality sign doesn't convert them!
//alert(null == undefined); //true
//alert(null == 0); //false
//alert(undefined == 0); //false
//alert(null >= 0); //true
////but:
//alert(undefined <= 0); //false, because undefined gets converted
////to NaN
////Be careful when using comparisons like > or < with variables
////that can be null/undefined. Checking for null/undefinded
////separately is a good idea.

////Tasks
//alert(5 > 4); //true
//alert("apple" > "pineappe"); //false
//alert("2" > "12"); //true
//alert(undefined == null); //true
//alert(undefined === null); //false
//alert(null == "\n0\n"); //false
//alert(null === +"\n0\n"); //false


////INTERACTION: ALERT, PROMPT, CONFIRM
////Alert: Show message in the modal window and pauses script execution
////alert("Hello!");

////Prompt: shows a message asking the user to input text. It returns
////the text or, if Cancel button or Esc is clicked, null.
////result=prompt(title, [default]);
//let age = prompt('How old are you?', "Please, type your age");
//if (age != null) { alert(`You are ${age} years old!`); }

////Confirm: Shows a message and waits for the user to press OK or Cancel.
////It returns true for OK and false for Cancel/Esc
//let isBoss = confirm("Are you the boss?");
//alert(isBoss); //true if OK is pressed

////Tasks
//let name = prompt("What is your name?", "Please, write your name");
////if (name != null) { alert(`Hello ${name}!`);}
//alert(name);

//CONDITIONAL OPERATORS: IF, '?'
//The if (...) statement evaluates the expression in its parentheses and 
//converts the result to a boolean. Truthy executes the code

//let year = prompt("Which year are we living in?",
//    'write the current year');
//if (year == 2020) {
//    alert("That's correct!");
//    alert("You are so smart!");
//}

////The "else" clause executes when the condition is false
//let year = prompt("Which year are we living in?",
//    'write the current year');
//if (year == 2020) {
//    alert("That's correct!");
//}
//else {
//    alert("That's not correct");
//}

////Several conditions: "else if"
//let year = prompt("Which year are we living in?",
//    'write the current year');
//if (year == 2020) {
//    alert("That's correct!");
//}
//else if (year < 2020) {
//    alert("That is in the past");
//}
//else {
//    alert("That is in the future");
//}

////Conditional operator '?'
////Can be used instead of if, else
////let result = condition ? value1 : value2;
//let year = prompt("Which year are we living in?",
//    'write the current year');
////if (year == 2020) {
////    alert("That's correct!");
////}
////else {
////    alert("That's not correct");
////}
//let message = (year == 2020) ? "That's correct!" : "That's not correct";
//alert(message);
////Is not advisable to use multiple '?'! Use "Else if" instead.

////LOGICAL OPERATORS
//// ||(OR)
//Most time is used in an if statement to test if any of the given
//condition is true.
//let hour = 11;
//if (hour < 10 || hour > 18) {
//    alert('The office is closed.');
//}
//else {
//    alert('The office is open.')
//}
////It returns the first truthy value if found otherwise it returns the last
//alert(1 || 0); //1
//alert(true || 'no matter what'); //true
//alert(null || 1); //1
//alert(undefined || null || 0); //0 (all falsy, returns the last one)
////We can also use || (or) to find in a list of variables the first with data.
//let currentUser = null;
//let defaultUser = "John";
//let name = currentUser || defaultUser || "unnamed";
//alert(name); //"John", otherwise would select the last one

////&& (AND)
////It returns the first falsy value if found otherwise it returns the last
//alert(1 && 0); //0
//alert(true && 'no matter what'); //'no matter what'
//alert(null && 1); //null
//alert(undefined && null && 0); //undefined
////An exemple with IF:
//let hour = 12;
//let minutes = 30;
//if (hour == 12 && minutes == 30) {
//    alert('The time is 12:30');
//}
////The precedence of && is higher than ||!

//// ! (NOT)
////Converts the operand in a boolean and returns the inverse value
//alert(!true); //false
//alert(!0); //true
////A double NOT !! converts in a boolean and reverse the value two times
//alert(!!"non empty string"); // true
//alert(!!null); // false
////That is the same as:
//alert(Boolean('non empty string')); //true
//alert(Boolean(null)); //false
////The precedence of ! is the highest compared with && and ||

////Tasks
//alert(null || 2 || undefined); //2
//alert(alert(1) || 2 || alert(3));//alert(1) is undefined and will show up.
////code will stop at 2 because that value is truthy
//alert(1 && null && 2); //null
//alert(alert(1) && alert(2)); // 1 and undefined which is falsy
//alert(null || 2 && 3 || 4); // 3
//let age = 13;
//if (age >= 14 && age <= 90) {
//    alert('true');
//}
//else {
//    alert('false');
//}
//if (-1 || 0) alert('first');//yes
//if (-1 && 0) alert('second'); //no
//if (null || -1 && 1) alert('third'); //yes

//let userName = prompt ("Who's there?", '');
//if (userName == 'Admin') {
//    let pass = prompt("Password?", '');
//    if (pass == "TheMaster") {
//        alert("Welcome!");
//    } else if (pass = '' || null) {
//        alert("Canceled");
//    } else {
//        alert("Wrong Password");
//    }
//} else if (userName == '' || null) {
//    alert("Canceled");
//} else {
//    alert ("I don't know you")
//}

////LOOPS: WHILE AND FOR
////WHILE
//while (condition) {
//    //code
//    //so-called "loop body"
//}
//let i = 0;
////shorter way to write while (i != 0) is while (i):
//while (i) {
//    alert(i);
//    i--;
//}
////If the loop body has a single statement, we can omit the
////curly braces:
//let i = 3;
//while (i) alert(i--);

////DO...WHILE
//do {
//    //loop body
//} while (condition);
////The loop first execute the body, then check the condition,
////and, while it's truthy, execute it again and again:
//let i = 0;
//do {
//    alert(i);
//    i++;
//} while (i < 3);
////Should only be used when you want the body of the loop
////to execute at least once regardless of the condition

////FOR
////The most commonly used
//for (begin; condition; step) {
//    //...loop body...
//}
////begin is executed once. Then executes loop body and step
////until the condition is true.

////for (let i = 0; i < 3; i++) {//shows 0, then 1, then 2
////    alert(i);
////}
////Any part of FOR can be skipped. If we skip all it creates
////an infinite loop
//for (; ;) {
//    //repeats without limits
//}

////BREAK
////We can use it to stop the loop immediately
//let sum = 0;
//while (true) {
//    let value = +prompt("Enter a number", '');
//    if (!value) break;
//    sum += value;
//}
//alert('Sum' + sum);

////CONTINUE
////It doesn't stop the whole loop. Instead it stops the current
////iteration and forces the loop to start a new one
//for (let i = 0; i < 10; i++) {
//    //if true skip the remaining part of the body
//    if (i % 2 == 0) continue;
//    alert(i); // 1, then 3, 5, 7, 9
//}
////same as:
//for (let i = 0; i < 10; i++) {
//    if (i % 2) {
//        alert(i);
//    }
//}
////but with 'continue' the code is more readable
////If we use the question mark operator ? instead of 'if',
////break, continue don't work

////Labels for break/continue
////Label is an identifier with a colon before the loop:
//labelName: for (...) {
//    ...
//}
////or:
//labelName:
//for (...) {
//    ...
//}
////A call to break/continue is only possible from inside a loop
////and the label must be somewhere above the directive:
//outer:
//for (let i = 0; i < 3; i++) {
//    for (let j = 0; j < 3; j++) {
//        let input = prompt(`Value at chords (${i},${j})`, '');
//        // if any empty string or canceled, then break out
//        //of both loops
//        if (!input) break outer; 
//    }
//}
//alert('Done!'); 

////Tasks
//let i = 3;
//while (i) {
//    alert(i--);
//} //it will stop at 1

//let i = 0;
//while (++i < 5) alert(i); //1,2,3,4

//let i = 0;
//while (i++ < 5) alert(i); //1,2,3,4,5

//for (let i = 0; i < 5; i++) alert(i);
//for (let i = 0; i < 5; ++i) alert(i);

//for (let i = 2; i <= 10; i++) {
//    if (i % 2 == 0) {
//        alert(i);
//    }
//}

//let i = 0;
//while (i < 3) {
//    alert(`number ${i}!`);
//    i++;
//}
//let num;
//do {
//    num = prompt("Enter a number greater than 100", 0);   
//} while (num <= 100 && num);


////THE "SWITCH" STATEMENT
////Can replace multiple if statement.
////It gives a more descriptive way to compare a value with multiple
////variants.
////The syntax:
//switch (x) {
//    case 'value1': /*// if (x === 'value1')*/
//        ...
//        [break]
//    case 'value2': /*// if (x === 'value2')*/
//        ...
//        [break]
//    default:
//        ...
//        [break]
//}
////The value of x is checked for a strict equality to the value from
////first case than to the second and so on.
////If equality is found, switch starts to execute the code starting from
////the correspondent case, until the nearest break (or until the end
////of the switch).
////If no case is matched then the default code is executed (if it exists)

//let a = 2 + 2;

//switch (a) {
//    case 3:
//        alert('Too small');
//    case 4:
//        alert('Exactly');
//    case 5:
//        alert('Too big');
//    default:
//        alert("I don't know such values");
//}

////Grouping of "case"
////Several variants of case which share the same code can be grouped

//let a = 3;
//switch (a) {
//    case 4:
//        alert('Right!');
//        break;
//    case 3:
//    case 5:
//        alert('Wrong!');
//        alert("Why don't you take a math class?");
//        break;
//    default:
//        alert('The result is strange. Really.');
//}

////Tasks
//let browser;
//if (browser == 'Edge') {
//    alert("You have got the Edge!");
//} else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser =='Opera') {
//    alert('Okay we support this browser too');
//} else {
//    alert('We hope that this page looks OK!');
//}

//let a = +prompt('a?', '');

//switch (a) {
//    case 0:
//        alert(0);
//        break;
//    case 1:
//        alert(1);
//        break;
//    case 2:
//    case 3:
//        alert('2,3');
//}


////FUNCTIONS
////Syntax:
//function name(parameters, delimited, by, comma) {
//    ...body.../*/*code*/*/
//}

//function showMessage() {
//    alert('Hello everyone!');
//}
//showMessage();

////Local variables
////A variable declared inside a function is only visible inside that function
//function showMessage() {
//    let message = "Hello, I'm Java-script!";
//    alert(message);
//}
//showMessage(); // Hello, I'm Java-script!
//alert(message); // Error! The variable is local to the function

////Outer variables
////A function can access outer variables as well
//let userName = 'John';
//function showMessage() {
//    let message = 'Hello!' + userName;
//    alert(message);
//}
//showMessage();

//The function has full access to the outer variable. It can modify it as well:

//let userName = 'John';
//function showMessage() {
//    userName = 'Bob'; //changed the outer variable
//    let message = 'Hello, ' + userName;
//    alert(message);
//}

//alert(userName); //John before the message; call
//showMessage();
//alert(userName); //Bob, the value was modified by the function



////The outer variable is only used if there is no local one.
////Otherwise the outer one is ignored
////It is good practice to minimize the use of global variables.

//Parameters (function arguments)
//Pass arbitrary data to a function.
//Example of function with two parameters:

//function showMessage(from, text) {//arguments: from, text
//    alert(from + ': ' + text);
//}
//showMessage('Ann', 'Hello!'); //(*)
//showMessage('Ann', "What's up?"); //(**)

////When the function is called in lines (*) and (**), the given values
////are copied to local variables 'from' and 'text'. Then the function
////uses them.

////Default values
////If a parameter is not provided, then its value becomes undefined.

////Returning a value
////A function can return a value back into the calling code as the result.
//function sum(a, b) {
//    return a + b;
//}
//let result = sum(1, 2);
//alert(result);

////The directive 'return' can be in any place of the function. When
////the execution reaches it, the function stops, and the value is 
////returned to the calling code (assigned to result above)

////There may be many occurrences of return in a single function:

//function checkAge(age) {
//    if (age >= 18) {
//        return true;
//    } else {
//        return confirm('Do you have permission from your parents?');
//    }
//}

//let age = prompt('How old are you?', 18);

//if (checkAge(age)) {
//    alert('Access granted');
//} else {
//    alert('Access denied');
//}

////It is possible to use return without a value. That causes the 
////function to exit immediately

////function showMovie(age) {
////    if (!checkAge(age)) {
////        return;
////    }
////}
////alert("showing you the movie");
//////In the code above, if checkAge(age) returns false, then showMovie
//////won't process to the alert
//////If a function does not return a value, it is the same as if it 
//////returns undefined.
//////An empty return is also the same as 'return undefined'.

//////Never add a new line between 'return' and the value. We should:
////at least put the opening parentheses in the same line:
//return (
//    some + long + expression + or + whatever * f(a) + f(b))

////Naming a function
////Function are actions. So their name is usually a verb.
////"get.." return a value. "calc..." calculate something. "create..."
////create something. "check..." check something and return a boolean.

////showMessage(..)     //shows a message
////getAge(..)          //returns the age (gets it somehow)
////calcSum(..)         //calculates a sum and returns the result
////createForm(..)      //creates a form (and usually returns it)
////checkPermission(..) //checks a permission (returns true/false)

////Functions == Comments
////Functions should be short and do just one thing. If that thing is 
////big, maybe is worth it to split the function into a smaller 
////functions.
////So there will also be a lesser need to use labels.
////Variant 1 with label:

//function showPrimes(n) {
//    nextPrime: for (let i = 2; i < n; i++) {
//        if (i % j === 0) {
//            continue nextPrime;
//        }
//        alert(i);
//    }
//}

////The second variant uses an additional function 'isPrime(n)' to test
////for primality:

//function showPrimes(n) {
//    for (let i = 2; i < n; i++) {
//        if (!isPrime(i)) 
//            continue;
//            alert(i);
//    }
//}
//function isPrime(n) {
//    for (let i = 2; i < 2; i++) {
//        return false;
//    }
//    return true;
//}

////Tasks
//function changeAge(age) {
//    if (age>18) {
//        return true;
//    } else {
//        return confirm('Did parents allow you?');
//    }
//}
////same as:
//function chaneAge(age) {
//    if (age>18) {
//        return true;
//    }
//    return confirm('Did parents allow you?');
//}

////Rewrite the function using '?' or '||'
//function checkAge(age) {
//    if (age>18) {
//        return confirm('Did parents allow you?')
//    }
//}
////Rewrite it, to perform the same, but without if, in a single line
////Make two variants of 'checkAge': 1. Using '?' and 1. using '||'

//function checkAge(age) {
//    return (age > 18) ? true : ('Did parents allow you?');

//} function checkAge(age) {
//    return (age > 18) || confirm('Did parents allow you?');
//}

////Function min(a,b)
////Write a function min(a,b) which returns the least of two numbers a and b.

//function min(a,b) {
//    if (a<b) {
//        return a;
//    }
//    else {
//        return b;
//    }
//}

////or
//function min(a,b) {
//    return a > b ? a : b;
//}

////Function pow(x,n)
////Write a function pow(x,n) that returns x in power n.Or in other 
////words multiplies x by itself n times and returns the result.

//function pow(x, n) {
//    let result = x;
//    for (let i = 1; i < n; i++) {
//        result *= x;
//    }
//    return result;
//}
//let x = prompt("x?", '');
//let n = prompt("n?", '');

//if (n>1) {
//    alert (`Power ${n} is not supported, use a positive integer`)
//} else {
//    alert(pow(x, n));
//}

////FUNCTION EXPRESSIONS
////There is another syntax for creating a function that is called a
////Function Expression. Creates a function and put it into a variable.

//let sayHi = function () {
//    alert("Hello");
//};
////Note: Unlike in Function Declaration there is a semicolon at 
////the end. A Function Expression is used inside a statement: 
////let sayHi = ...; as a value.Is not a code block but rather an
////assignment. The semicolon is recommended at the end of statments.

////A function is a value. So we can work with it like with other kinds
////of values.
////We can copy a function to another variable:

//function sayHi() {
//    alert("Hello");
//}
//let func = sayHi;
//func(); //Hello
//sayHi(); //Hello

////Callback functions

//function ask(question, yes, no) {
//    if (confirm(question)) yes()
//    else no();
//}
//function showOk() {
//    alert("You agreed.")
//}
//function showCancel() {
//    alert("You canceled the execution.")
//}
//ask("Do you agree?", showOk, showCancel);

////The arguments showOk and showCancel or 'ask' are called 'callback'
////functions or just 'callbacks'. The idea is that we pass a function
////and expect it to 'called back' later if necessary.
////We can use Function Expression to write the same function much shorter:

//function ask(question, yes, no) {
//    if (confirm(question)) yes()
//    else no();
//}
//ask(
//    "Do you agree?",
//    function () {
//        alert("You agreed.");
//    },
//    function () { alert("You canceled the execution.") }
//);
////Here, functions are declared right inside the "ask(...)" call.
////They have no name, and so are called anonymous. Such functions
////are not accessible outside 'ask'.
////A function is a value representing an "action"
////Regular values like strings or numbers represent the data.
////A function can be perceived as an action. We can pass it between
////variables and run what we want.

////Function Expression vs Function Declaration
////Function declarations load before any code in the block is executed. 
////Function expressions load only when the execution reaches that
////line of code
////In most cases when we need to declare a function, a Function Declaration
////a function declaration is preferable, because it is visible prior
////to the declaration itself.
////We should use a Function Expression only when a Function Declaration
////is not fit for the task.

////ARROW FUNCTIONS, THE BASICS
////Simple, concise and often better than Function Expressions:

//let func = (arg1, arg2, ...argN) => expression

////It is the shorter version of:

////let func = function (arg1, arg2, ...argN) {
//return expression;
//};

//let sum = (a, b) => a + b;
///* This arrow function is shorter form of:
//let sum = function(a,b){
//return a+b;
//};
//*/
//alert(sum(1, 2)); //3

////(a, b) => a + b means a function that accept two arguments named
////'a' and 'b'. Upon the execution, it evaluates the expression
////a+b and returns the result.
////If we have only one argument, the parentheses can be omitted:
//let double = n => n * 2;
//alert(double(3));
////If there are no arguments parentheses will be empty (but they
////should be present)
//let sayHi = () => alert("Hello!");
//sayHi();

////Arrow functions can be used in the same way as Function expressions.
////For instance, to dynamically create a function:
////let age = prompt("What is your age?", 18);
////let welcome = (age < 18) ?
////    () => alert('Hello') :
////    () => alert("Greetings!");
////welcome();

////Multi line arrow functions
////If we need multiple expressions or statements we need to use curly
////braces and use a normal 'return' within them:
//let sum = (a, b) => { //the curly brace opens a multi line function
//    return result; //if we use curly braces, then we need an explicit 'return'
//};
//alert(sum(1, 2)); //3

////Tasks
////Rewrite with arrow functions
//function ask(question, yes, no) {
//    if (confirm(question)) yes()
//    else no();
//}

//ask(
//    "Do you agree?",
//    function () { alert("You agreed."); },
//    function () { alert("You canceled the execution.") }
//);

//function ask(question, yes, no) {
//    if (confirm(question)) yes()
//    else no();
//}

//ask(
//    "Do you agree?",
//    let = () => alert("You agreed."),
//    let = () => alert("You canceled the execution.")
//);

////OBJECTS
////Objects are used to store keyed collections of various 
////data and more complex entities.
////An object can be created with figure brackets {...} with an optional
////list of properties. A property is a "key:value" pair, where key
////is a string (name) and value can be anything.

////An empty object can be created using one of two syntaxes:

//let user = new Object(); // "object constructor" syntax
//let user = {}; // "object literal" syntax

////Literals and properties
////We can immediately put some properties into {...} as "key:value" pairs:


//let user = { 
//    name: "John",  
//    isAdmin: true 
//}

////Property values are accessible using the dot notation:

////get property values of the object:
//alert(user.name); //John
//alert(user.isAdmin) //true

////The value can of any type, let add a numeral one:
//user.age = 30;

////To remove a property we can use 'delete' operator:
//delete user.name;

////We can also use multiword property names, but then they must be 
////quoted (any type of quotes will do):

//let user = {
//    name: 'John',
//    age: 30,
//    "likes birds": true //multi word property name must be quoted
//}

//    //The last property in the list may end with a comma. It makes easier to
//    //add, remove, move around properties

////Square brackets
////For multi word properties, the dot access doesn't work, we need to
////use square brackets:

//let user = {};
////set 
//user["likes birds"] = true;
////get
//alert(user['likes birds']); //true
////delete
//delete user["likes birds"];

//let user = {
//    name: 'John',
//    age: 30,
//};

//let key = prompt("What do you want to know about the user:", 'name');

////access by variable
//alert(user[key]); //John (if enter 'name')

////The dot cannot be used in a similar way:
//alert(user.key) //undefined

////Computed properties
////We can use square brackets in an object literal. That's called
////computed properties:

//let fruit = prompt("Which fruit to buy?", 'apple');
//let bag = {
//    [fruit]: 5, //the name of the property is taken from the variable fruit
//};

//alert(bag.apple); // 5 if fruit='apple'

////The meaning of computed property is: [fruit] means that the property
////name should be taken from 'fruit'

////We can use more complex expressions inside square bracketh:

//let fruit = 'apple';
//let bag = {
//    [fruit + 'Computers']: 5 // bag.appleComputers = 5
//};

////Most of the time when property names are known and simple, the dot is
////used. And if we need something more complex, then we switch to square
////brackets

////Property value shorthand
////In real code we often use existing variables as values for property 
////names:

//function makeUser(name, age) {
//    return {
//        name: name,
//        age: age,
//        //... other properties
//    };
//}
//let user = makeUser("John", 30);
//alert(user.name); //John

////Instead of name:name we can just write 'name':

//function makeUser(name, age) {
//    return {
//        name,
//        age,
//    };
//}
//let user = makeUser('John', 30);
//alert(user.name);

////We can use both normal properties and shorthands in the same object:

//let user = {
//    name, //same as name:name
//    age: 30,
//};

////Property names limitations
////Property names (keys) must be either strings or symbols.
////Other types are automatically converted to strings

////Reserved words are allowed as property names

//let obj = {
//    for: 1,
//    let: 2,
//    return: 3,
//};
//alert(obj.for + obj.let + obj.return); //6

////Property existence test, "in" operator
////Accessing a non-existing property just returns 'undefined'

//let user = {};

//alert(user.noSuchProperty === undefined); //true 

////With special operator 'in' we can also check for existence of 
////a property. (it is more bullet proof than "=== undefined)

//"key" in object

////for instance:

//let user = { name: 'John', age: 30 };

//alert('age' in user); //true
//alert('blabla' in user); //false

////On the left side of 'in' there must be a property name. That's 
////usually a quoted string.

//The "for...in" loop
//Checks all keys of an object

//for (key in object) {
////    //executes the body for each key among object properties
////}

//let user = {
//    name: 'John',
//    age: 30,
//    isAdmin: true,
//};

//for (let key in user) {
//    alert(key); //name, age, isAdmin
//    alert(user[key]); //John, 30, true
//}

////We could use another variable name instead of key here: "for(let
// prop in obj)"

////Ordered like an object
////If we loop over an object integer properties are sorted, others 
////appear in creation order.

//let codes = {
//    '49': 'Germany',
//    '41': 'Switzerland',
//    '44': 'Great Britain',
//    '1': 'USA',
//};

//for (let code in codes) {
//    alert(code); //1, 41, 44, 49
//}

////On the other hand, if the keys are non-integer, then they are listed
////in the creation order:

//let user = {
//    name: 'John',
//    surname: 'Smith',
//};
//user.age = 25; //add one more
////non integer properties are listed in creation order
//for (let prop in user) {
//    alert(prop); //name, surname, age
//}

////To fix the issue with the phone codes we can add a '+' sign before:
//let codes = {
//    '+49': 'Germany',
//    '+41': 'Switzerland',
//    '+44': 'Great Britain',
//    '+1': 'USA',
//};

//for (let code in codes) {
//    alert(code); //49, 41, 44, 1
//}

////Copying by reference
////A variable stores not the object itself, but its "address in memory",
////in other words "a reference" to it.
////When an object variable is copied - the reference is copied, the 
////object is not duplicated

//let user = { name: 'John' };
//let admin = user;
//admin.name = 'Pete';
//alert(user.name); //Pete

////There is only one object and has changed for both variables

//Comparison by reference
//The equality == and strict equality === operators for objects
//work exactly the same

//let a = {};
//let b = a; //copy the reference
//alert(a == b); //true
//alert(a === b); //true

////const object
////An object declared as const can be changed:

//const user = {
//    name: 'John',
//}

//user.age = 25;

//alert(user.age);

////The 'const' would give an error if we try to set 'user' to something else:

//const user = {
//    name: 'John',
//}

//user = {
//    name: 'Pete', //Error
//}

////Cloning and merging, Object.assign
////If we need to duplicate an object we can create another one and 
////copy all user properties of the existing one:

//let user = {
//    name: 'John',
//    age: 30,
//}

//let user2 = {}
//for (let key in user) {
//    user2[key] = user[key];
//}

//user2.name = 'Pete';
//alert(user.name); //John

////Also we can use the method Object.assign for that.
////Syntax:

//Object.assign(dest, [src1, src2, src3])

////It copies the properties of all objects "scr1,...srcN" into 'dest':

//let user = { name: 'John' };
//let permission1 = { canView: true };
//let permission2 = { canEdit: true };

////copies all properties from permission1 to permission2 into user
//Object.assign(user, permission1, permission2);

////now user = {name: 'John', canView: true, canEdit: true}

////If the receiving object (user) already has the same named properly,
////it will be overwritten:


//let user = { name: 'John' };
////overwrite.name, ad isAdmin
//Object.assign(user, { name: 'Pete', isAdmin: true });
////now user = {name: "Pete", isAdmin: true
//}

////We can also use Object.assign to replace the loop for simple cloning:

//let user = {
//    name: 'John',
//    age: 30,
//}

//let clone = Object.assign({}, user);
////it copies all properties of 'user' into an empty object and returns it.

////Properties can be references to other objects:

//let user = {
//    name: 'John',
//    sizes: {
//        height: 182,
//        width: 50,
//    }
//};
//alert(user.sizes.height);

////In this case we need to make a real copy (a clone) we need to use
////_.cloneDeep(obj)


////Tasks
//let user = { };

//user.name = 'John';

//user.surname = 'Smith';

//user.name = "Pete";

//delete user.name;

////Check for emptiness: (TODO)

////Constant objects?
//const user = {
//    name: 'John',
//};

//user.name = "Pete";

//alert(user.name); //works

//user = 123; // error

////'user' stores a reference to the object. And it can't be changed.
////but the content of the object can

////Write the code to sum all salaries and store in the variable 'sum'

//let salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
//};

//let sum = 0;
//for (let key in salaries) {
//    sum += salaries[key];
//}

//alert(sum); //390

////Multiply numeric properties by 2
////Create a function multiplyNumeric(obj) that multiplies all numeric
////properties of 'obj' by 2.

//let menu = {
//    width: 200,
//    heigh: 300,
//    title: 'My menu',
//}

//function multiplyNumeric(obj) {
//    for (let key in obj) {
//        if (typeof obj[key] == 'number') {
//            obj[key] *= 2;
//        }
//    }
//}

////Symbol type
////A 'symbol' represents a unique identifier.

//let id = Symbol();

////Symbols are guaranteed to be unique. 
////even if we create many symbols with the same description, they are
////different values:

//let id1 = Symbol("id");
//let id2 = Symbol("id");

//alert(id1 === id2);//false

////"Hidden" properties
////Symbols allow us to create "hidden" properties of an object that
////no other part of code can accidentally access or overwrite
////For instance, if we're working with 'user' objects, that belong
////to a third-party code. We'd like to add identifiers to them.

//let user = { //belongs to another code
//    name: 'John'
//};

//let id = Symbol('id');
//user[id] = 1;
//alert(user[id]);

////If we user 'Symbol', 'id' cannot be overwritten by another script
////even if they have the same name

////Symbols in a literal
////If we want to use a symbol in a object literal {...}, we need 
////square brackets around it.

//let id = Symbol('id');

//let user = {
//    name: 'John',
//    [id]: 123 // not "id: 123"
//};

////That's because we need the value from the variable 'id' as the key,
////not the string "id"

////Symbols are skipped by for...in loop. Object.keys(user) also
////ignore them.
////In contrast, Object.assign copies both string and symbol propreties:

//let id = Symbol('id');
//let user = {
//    [id]: 123
//};
//let clone = Object.assign({}, user);

//alert(clone[id]); //123

////That's because when we clone or merge objects, we usually want
////all properties to be copied (including symbols like 'id').

////Global symbols
////If we want same-named symbols to be same entities we need to put
////them into the 'global symbol registry', use Symbol.for(key).

////read from the global registry
//let id = Symbol.for('id'); //if the symbol did not exist it is created

////read it again (maybe from another part of the code)
//let idAgain = Symbol.for('id');

////the same symbol
//alert(id === idAgain); //true

////Symbol.keyFor
////For global symbols, not only "Symbol.for(key)" returns a symbol
////by name, but there is a reverse call: "Symbol.keyFor(sym)", that
////does the reverse: returns a name by a global symbol.

////get symbol by name
//let sym = Symbol.for('name');
//let sym2 = Symbol.for('id');

////get name by symbol
//alert(Symbol.keyFor(sym)); //name
//alert(Symbol.keyFor(sym2)); //id

////The Symbol.keyFor uses the global symbol registry. it does'n t
////work for non-global registry

////Symbols have 'description' property:

//let globalSymbol = Symbol.for('name');
//let localSymbol = Symbol('name');

//alert(Symbol.keyFor(globalSymbol)); //name
//alert(Symbol.keyFor(localSymbol)); //undefined

//alert(localSymbol.description); //name

////System symbols
////There exist many "system" symbols that JavaScript uses internally

//Symbol.hasInstance;
//Symbol.isConcatSpreadable;
//Symbol.iterator;
//Symbol.toPrimitive

////Technically, symbols are not 100% hidden. We can get all symbols
//// with Object.getOwnPropertySymbols(obj). Also there is a method
//// named Reflect.ownKeys(obj) that returns all keys of an object
//// including symbolic ones. But most libraries don't use these methods

//Object methods, "this"
////Object are usually created to represent entities of the real 
////world:

//let user = {
//    name: 'John',
//    age: '30',
//};

////and in the real world, a user can act. Actions are represented
////in JavaScript by functions in propreties

////Let teach the user speak:

//let user = {
//    name: 'John',
//    age: 30,
//};

//user.sayHi = function myfunction() {
//    alert('Hello!');
//}

//user.sayHi(); //Hello!

////function sayHi is a method of the object 'User'

////Method shorthand
////Shorter syntax:

////Long version:
//user = {
//    sayHi: function () {
//        alert('Hello!');
//    }
//};

////shorthand:
//user = {
//    sayHi() {
//        alert('Hello!');
//    }
//};

////"this" in methods
////To access the object, a method can use the 'this' keyword.
////The value of 'this' is the object "before dot":

//let user = {
//    name: 'John',
//    age: 30,


//    sayHi() {
//        //"this" is the "current object"
//        alert(this.name);
//    }
//}

//user.sayHi(); //John

////The value of "this" will be 'user', but is more safe to use.

////'this' is not bound
////In JS 'this' can be used in any function.

//function sayHi() {
//    alert(this.name);
//}

////Here the function is assigned to different objects:

//let user = { name: 'John' };
//let admin = { name: 'Admin' };

//function sayHi() {
//    alert(this.name);
//}

////use the same function in two objects
//user.f = sayHi;
//admin.f = sayHi;

////these calls have different this
////'this' inside the function in object "before the dot"
//user.f(); //John
//admin.f(); //Admin

//admin['f'](); //Admin ('.' or '[]' access the method)

////Calling without an object: this == undefined
////We can even call the function without an object at all,
////but this is an error:

//function sayHi() {
//    alert(this);
//}
//sayHi(); //undefined

////If there is 'this' inside a function, it expects to be called in
////an object context.

////Arrow functions have no 'this'
////If we reference 'this' from such a function, it's taken from
////the outer "normal" function

//Tasks

////What is the result of this code?

//let user = {
//    name: 'John',
//    go: function () { alert(this.name) }
//};

//user.go() //John

////Explain the value of 'this'

//let obj, metod;

//obj = {
//    go: function () { alert(this); }
//};

//obj.go();
//(obj.go)();
//(method = obj.go)();
//(obj.go || obj.stop)();

////Using "this" in object literal

//function makeUser() {
//    return {
//        name: 'John',
//        ref: this
//    }
//};

//let user = makeUser();
//alert(user.ref.name); //error

////Create a calculator

//let calculator = {
//    sum() {
//        return this.a + this.b;
//    },

//    mul() {
//        return this.a * this.b;
//    },

//    read() {
//        this.a = +prompt('a?', 0);
//        this.b = +prompt('b?', 0);
//    }
//};

//calculator.read();
//alert(calculator.sum());
//alert(calculator.mul());

////Chaining
////There is a ladder object that allows you to go up and down:

//let ladder = {
//    step: 0,
//    up() {
//        this.step++;
//    },
//    down() {
//        this.step--;
//    },
//    showStep: function () { //shosw the current step
//        alert(this.step);
//    }
//};

//ladder.up();
//ladder.up();
//ladder.down();
//ladder.showStep(); //1

////Modify the code of up, down and showStep to make the calls 
////chainable, like this:

//ladder.up().up().down().showStep(); //1

//let ladder = {
//    step: 0,
//    up() {
//        this.step++;
//        return this;
//    },
//    down() {
//        this.step--;
//        return this;
//    },
//    showStep() { //shows the current step
//        alert(this.step);
//        return this;
//    }
//}

//ladder.up().up().down().showStep(); //1

////Object to primitive conversion
///*he object - to - primitive conversion is called automatically by many 
// * built -in functions and operators that expect a primitive as a value.

//There are 3 types(hints) of it:

//"string"(for alert and other operations that need a string)
//"number"(for maths)
//    "default"(few operators)
//The specification describes explicitly which operator uses which hint.
//There are very few operators that “don’t know what to expect” and use the "default" hint.Usually for built -in objects "default" hint is handled the same way as "number", so in practice the last two are often merged together.

//The conversion algorithm is:

//Call obj[Symbol.toPrimitive](hint) if the method exists,
//    Otherwise if hint is "string"
//try obj.toString() and obj.valueOf(), whatever exists.
//Otherwise if hint is "number" or "default"
//try obj.valueOf() and obj.toString(), whatever exists.
//In practice, it’s often enough to implement only obj.toString() 
//as a “catch-all” method for all conversions that return 
//a “human - readable” representation of an object, for logging or 
//debugging purposes.*/

//Constructor, operator "new"
//The regular {...} syntax allows to create on object. But often we need
//to create many similar objects.
//That can be done using contructor function and the 'new' operator.

//Constructor function
//Technically are regular functions. They are named with capital letter
//first and they should be executed with 'new' operator

//function User(name) {
//    this.name = name;
//    this.isAdmin = false;
//}

//let user = new User('Jack');

//alert(user.name); // Jack
//alert(user.isAdmin) // false

////When a function is executed with 'new', it does the following steps:
////1. A new empty object is created and assigned to 'this'.
////2. The function body executes. Usually it modifies 'this', adds new
////porperties to it.
////3. The value of 'this' is returned.

////Now if we want to create other users, we can call "new User('Ann'),
////"new User ('Alice')" and so on

////Return from constructors
////Usually, constructors do not have a return statement. Their task is to write
////all necessary stuff into 'this' and it automatically becomes the result
////'return' with an object returns that object, in all other cases 'this' is
////returned.

//function BigUser() {
//    this.name = 'John';
//    return { name: 'Godzilla' }; //returns this object
//}

//alert(new BigUser().name); //Godzilla, got that object

////Example with an empty 'return':

//function SmallUser() {
//    this.name = 'John';
//    return; // returns this
//}

//alert(new SmallUser().name); //John

//// We can omit parentheses after 'new', if it has no arguments:

//let user = new User;
////same as
//let user = new User();

////Methods in constructor
//We can add to 'this' not only proprerties, but methods as well:

//function User(name) {
//    this.name = name;

//    this.sayHi = function () {
//        alert("My name is: " + this.name);
//    }
//}

//let john = new User('John');
//john.sayHi(); //My name is: John

////Tasks

////Create a new Calculator
////Create a constructor function 'Calculator' that creates objects with 
////3 methods:

////read() ask for two value using 'prompt' and remembers them in object properties
////sum() returns the sum of these properties.
////mul() returns the multiplication product of these properties

//function Calculator() {
//    this.read = function () {
//        this.a = +prompt('a?', 0);
//        this.b = +prompt('b?', 0);
//    }

//    this.sum = function () {
//        return this.a + this.b;
//    }

//    this.mul = function () {
//        return this.a * this.b;
//    }
//}

//let calculator = new Calculator();
//calculator.read();

//alert('Sum=' + calculator.sum());
//alert('Mul=' + calculator.mul());

////Create a new Accumulator

//function Accumulator(startingValue) {
//    this.value = startingValue;

//    this.read = function () {
//        this.value += +prompt('How much to add?', 0);
//    }
//}

//let accumulator = new Accumulator(1);
//accumulator.read();
//accumulator.read();
//alert(accumulator.value);

////DATA TYPES
////Methods of primitives
///*JavaScript allows us to work with primitives as if they were objects.
// * A primitive is a value of a primitive type (string, number, bigint,
// * boolean, symbol, null and undefined)
// * An object is capable of storing multiple values as properties. Can
// * be created with {} for instance: {name: 'John', age: 30}. Functions are
// * also objects.
// * One of the best things about objects is that we can store a function
// * as one of its properties.
//*/

//let john = {
//    name: 'John',
//    sayHi: function () {
//        alert('Hi buddy!');
//    }
//};

//john.sayHi(); //Hi buddy!

///*So we have made an object 'John' with the method sayHi.
// but it comes with a cost, objects are heavier than primitives*/

///*A primitive as an object
// Javascript allows to access to methods and properties of strings,
// numbers, booleans and symbols.
// In order for that to work, a special "object wrapper" that 
// provides the extra functionality is created and then is 
// destroyed.
 
// The object wrappers are different for each primitive type
// and are called: String, Number, Boolean and Symbol.
 
// For instance, there exist a string method str.toUpperCase() that 
// returns a capitalized 'str':*/

//let str = 'Hello';
//alert(str.toUpperCase()); //HELLO

///*A number has methods of its own, for instance toFixed(n)
// rounds the number to given precision:*/

//let n = 1.23456;
//alert(n.toFixed(2)); //1.23

///*The special primitives 'null' and 'undefined' are exeptions
// They have no corresponding "wrapper objects" and provide no
// methods. An attempt to access a property of such value would
// give the error:*/

//alert(null.test); //error

////Tasks
////Can I add a string property?

//let str = 'Hello';
//str.test = 5;
//alert(str.test); //Error 

////This exemple clearly shows that primitives are not objects
////they cannot store additional data

///*NUMBERS
// In Javascript there are two kind of numbers 'Regular' numbers
// from -2**53 to 2**53 and Bigint number to represent integers
// of arbitrary lenght.*/
 
// //More ways to write a number

//let billion = 1000000000;
//let billion = 1e9 //1 and 9 zeros

////"e" multiplies the number by 1 with the given zeros count

//1e3 = 1 * 1000
//1.23e6 = 1.23 * 1000000

////Very small numbers:

//let ms = 0.00001;
//let ms = 1e-6; //six zeros to the left from one

///*In other words, a negative number after 'e' means a 
// division by 1 with the given number of zeros*/

//// -3 divides by 1 with 3 zeroes
//1e-3 = 1 / 1000

///*Hex, binary and octal numbers
// Hexadecimal numbers are widely used in Javascript to 
// represent colors, encode characters, and for many other
// things. We can write them with '0x' and then the number*/

//alert(0xff); //255
//alert(0xFF); //the same, case doesn't matter

////Binary and octal numbers are also supported using 0b and 0o

//let a = 0b11111111 //binary form of 255
//let b = 0o377 // octal form of 255

//alert(a === b); //true

///*toString(base)
// The method num.toString(base) returns a string representation
// of 'num' in the numeral system with the given base*/

//let num = 255;
//alert(num.toString(16)); //ff
//alert(num.toString(2)); //11111111

//// The base can vary from 2 to 36. By default is 10

////We can call this method directly to a number by placing '..'

//alert(123456..toString(36)); 
//alert((123456).toString(36)); //same

////Rounding

///*Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
 
// Math.ceil
// Rounds up: 3.1 becomes 4 and =1.1 becomes -1
 
// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4
// and -1.1 becomes 1
 
// Math.trunc
// Removes anything ather the decimal point without rounding:
// 3.1 becomes 3, -1.1 becomes -1
 
// If we would like to round the number to n-th digit after decimal
// we can:*/
 
// //1. Multiply and devide

//let num = 1.23456;
//alert(Math.floor(num * 100) / 100); // 1.23456->123.456->123->1.23

////2 toFixed(n)

//let num = 12.34;
//alert(num.toFixed(1)); //'12.3'

//let num = 12.36;
//alert(num.toFixed(1)); //'12.4'

///*The result of toFixed is a string. If the decimal part is 
// shorter than required, zeros are appended to the end:*/

//let num = 12.34;
//alert(num.toFixed(5)); //'12.34000'

////We can convert it to number using the '+' a Number() call.

//alert(+'12.34');
//alert(Number('12.34'));

///*Imprecise calculations
//64-bit format IEEE-754 has limitations if the number is too big 
//or too small, fractions like 0.1 or 0.2 etc.

//Tests: isNaN and isFinite */

////alert(isNaN(NaN)); //true
////alert(isNaN)('str'); //native code
////alert(NaN === NaN); //false

///*The value NaN is unique in that it does not equal anything
// including itself*/

//alert(isFinite('15')); //true
//alert(isFinite('str')); //false, because a special value: NaN
//alert(isFinite(Infinity)); //false "
//alert(isFinite("")); //true, is treten like 0
//alert(isFinite(" ")); //        "

///*Compare with Object.is
// Object.is compares values like ===. It doesn't work with 0 and -0
// */

//alert(Object.is(NaN, NaN)); //true
//alert(Object.is('a', 'b')); //false
//alert(Object.is(0, -0)); /*false, because internally the number
// has a sign bit that may be different even if all other bits
// are zeros*/

///*parseInt and parseFloat
// Numeric conversion using a plus '+' or Number() is strict. If
// a value is not exactly a number, it fails.
// */

//alert(+"100px"); //NaN

////That's what parseInt and parseFloat are for:

//alert(parseInt('100px')); //100
//alert(parseFloat('12.5em')); //12.5

//alert(parseInt('12.3')); //12
//alert(parseFloat('12.3.4')); //12.3, the second point stops the reading

///*There are situations when parseInt/parseFloat will return NaN.
// It happens when no digits could be read:
// */

//alert(parseInt('a123')); //Nan, the first symbol stops the process

///*
// Other math functions
 
// Math.random()
// Returns a random number from 0 to 1 (not including 1)
// */

alert(Math.random()); // any random number

//Math.max (a,b,c..) / Math.min(a,b,c,...)
//returns the greatest/smallest from an arbitrary number of arguments

alert(Math.max(3, 5, -10, 0, 1)); //5
alert(Math.min(1, 2)); //1

//Math.pow(n, power)
//Returns 'n' raised the given power

alert(Math.pow(2, 10)); // 2 in power 10 = 1024

//Tasks


