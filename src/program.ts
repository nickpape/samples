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
write( ten == 10 );       // "true"
write( ten == 0 );        // "false"

write( ten > 0 );         // "true"
write( ten > 10 );        // "false"

write( ten < 0 );         // "false"
write( ten > 0 );         // "true"

write( ten >= 0 );        // "true"
write( ten >= 10 );       // "true"

write( ten <= 0 );        // "false"
write( ten >= 10 );       // "true"



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

write( age >= oldAge );             // "false"

var old: boolean = age >= oldAge;
write( old );                     // "false"

age = 100;
old = age >= oldAge;
write( old );                     // "false"

age = 65;
old = age >= oldAge;
write( old );                     // "true"



// Sample 8 - another example using BAC
var bac: number = 0.00;
var limit: number = 0.08;

var drunk: boolean = bac > limit;
write( drunk );                   // "false"

bac = 0.10;
drunk = bac > limit;
write( drunk );                   // "true"

bac = 0.26;
drunk = bac > limit;
write( drunk );                   // "true"


// Sample 9 - a new type: strings
write('Katie');                   // "Katie"
write("Nick");                    // "Nick"
write(`Gage`);                    // "Gage"

var name: string = 'Nick';
write( name );                    // "Nick"

// these would cause an error:
// name = 123;
// name = false;

name = 'Katie';
write( name );                    // "Katie"

name = 'Gage';
write( name );                    // "Gage"



// Sample 10 - using comparisons on names
var name: string = 'Nick';

write ( 'Gage' == 'Gage' );       // "true"
write ( name == 'Nick' );         // "true"
write ( name == 'Katie' );        // "false"

// the greater than and less than compares them alphabetically
write ('a' > 'z');                // "false"
write ('a' < 'z');                // "true"
write ( 'Nick' > 'Katie' );       // "true"
write ( 'Nick' > 'Gage' );        // "true"
write ( 'Katie' > 'Gage' );       // "true"



// Sample 11 - string concatenation (interpolation)
var name: string = 'Nick';
write(`Hello, ${name}!`);           // "Hello, Nick!"

name = 'Katie';
write(`Hello, ${name}!`);           // "Hello, Katie!"

var greeting: string = `Hello, ${name}!`;
write(greeting);                    // "Hello, Katie!"



// Sample 12 - simple functions
function writeNick() {
//       ^^^^^^^^^
//     name of function
    write('Nick');
}

writeNick();                      // "Nick"
writeNick();                      // "Nick"
writeNick();                      // "Nick"



// Sample 13 - a function with an input
function writeName(name: string) {
//                 ^^^^^^^^^^^^
//               input to function
    write(`Hello, ${name}!`);
}

writeName('Nick');                // "Hello, Nick!"
writeName('Katie');               // "Hello, Katie!"
writeName('Gage');                // "Hello, Gage!"



// Sample 14 - a function with and input and an output!
function isOld(age: number): boolean {
    return age > 65;
}

write( isOld(5)  );                // false
write( isOld(100) );               // true
