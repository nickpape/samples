import { write } from './library';

// Sample 0 - how to write something to the output so you can see it
write();                            // writes an empty line
write(123);                         // "123"



// Sample 1 - Do some math simple math
write(10 + 2);                      // "12"
write(10 * 2);                      // "20"
write(10 - 2);                      // "8"
write(10 / 2);                      // "6"



// Sample 2 - Create a variable
var age = 21;
write(age);                         // "21"



// Sample 3 - Change the value of a variable
var bac = 0.0;
write(bac);                         // "0.0"
bac = 0.08;                  
write(bac);                         // "0.08"



// Sample 4 - Create 2 variables, and then add them together
var balance = 10000;
write(balance);               // "10000"

var deposit = 2000;
write(deposit);               // "2000"

write(balance + deposit);     // "12000"
write(balance);               // "10000"

balance = balance + deposit;
write(balance);               // "12000"



// Sample 5 - Comparisons
let ten = 10;
write( ten == 10 );       // true
write( ten == 0 );        // false

write( ten > 0 );         // true
write( ten > 10 );        // false

write( ten < 0 );         // false
write( ten > 0 );         // true

write( ten >= 0 );        // true
write( ten >= 10 );       // true

write( ten <= 0 );        // false
write( ten >= 10 );       // true



// Sample 6 - "number" type
var age: number = 100;

// this would cause an error:
// age = false;

age = 10;
write( age );               // 10
age = 5;
write( age );               // 5 



// Sample 7 - "boolean" type
var age: number = 5;
var oldAge: number = 65;

write( age >= oldAge );             // false

var isOld: boolean = age >= oldAge;
write( isOld );                     // false

age = 100;
isOld = age >= oldAge;
write( isOld );                     // false

age = 65;
isOld = age >= oldAge;
write( isOld );                     // true



// Sample 8 - another example using BAC
var bac: number = 0.00;
var limit: number = 0.08;

var isDrunk: boolean = bac > limit;
write( isDrunk )