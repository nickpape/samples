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

write( age >= oldAge );           // "false"

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

write( 'Gage' == 'Gage' );       // "true"
write( name == 'Nick' );         // "true"
write( name == 'Katie' );        // "false"

// the greater than and less than compares them alphabetically
write('a' > 'z');                // "false"
write('a' < 'z');                // "true"
write( 'Nick' > 'Katie' );       // "true"
write( 'Nick' > 'Gage' );        // "true"
write( 'Katie' > 'Gage' );       // "true"



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
    return age >= 65;
}

write( isOld(5)  );                // "false"
write( isOld(100) );               // "true"



// Sample 15 - another function with BAC
function isDrunk(bac: number): boolean {
    return bac >= .08;
}

write( isDrunk(0.00) );            // "false"
write( isDrunk(0.08) );            // "true"
write( isDrunk(0.99) );            // "true"



// Sample 16 - a function can return a number too
function double(n: number): number {
    return n * 2;
}

write( double(1) );                // "2"
write( double(2) );                // "4"
write( double(4) );                // "8"
write( double(8) );                // "16"



// Sample 17 - you can also store the value of a function in a variable
function addOne(n: number): number {
    return n + 1;
}

var age: number = 10;
write( age );                      // "10"

age = addOne(age);
write( age );                      // "11"

age = addOne(age);
write( age );                      // "12"



// Sample 18 - when you use functions together you can do fun things
function drinkBeer(oldBac: number): number {
    return oldBac + 0.02;
}

var bac: number = 0.00;
write( isDrunk(bac) );             // "false"

bac = drinkBeer(bac);              // bac is now 0.02
write( isDrunk(bac) );             // "false"

bac = drinkBeer(bac);              // bac is now 0.04
bac = drinkBeer(bac);              // bac is now 0.06
write( isDrunk(bac) );             // "false"

bac = drinkBeer(bac);              // bac is now 0.08
write( isDrunk(bac) );             // "true"



// Sample 19 - another example of fun things, like aging
var age: number = 64;

write( isOld(age) );               // "false"
age = addOne(age);                 // age is now 65
write( isOld(age) );               // "true"



// Sample 20 - CONDITIONALS, sometimes you need to do different things
var money: number = 0;
var million: number = 1000000;

if (money > million) {
    write('RICH!');               // THIS WILL NOT GET PRINTED!
}

money = 9999999999999999999;
if (money > million) {
    write('RICH!');               // "RICH!"
}


// you can also do something else, if that thing you asked is false
money = 0;

if (money > million) {
    write('RICH!');               // THIS WILL NOT GET PRINTED!
} else {
    write('poor');                // "poor"
}

money = 999999999999999999;
if (money > million) {
    write('RICH!');               // "RICH!"
} else {
    write('poor');                // THIS WILL NOT GET PRINTED!
}


// Sample 21 - Using a conditional in a function
function howRich(money: number): string {
    if (money > 1000000) {
        return 'RICH!';
    } else {
        return 'poor';
    }
}

write( howRich(0) );              // "poor"
write( howRich(99999999999) );    // "RICH!"



// Sample 22 - "else if"
function howDrunk(bac: number): string {
    if (bac >= .20) {
        return 'DANGER';
    } else if (bac >= .08) {
        return 'DRUNK';
    } else if (bac >= .02) {
        return 'TIPSY';
    } else {
        return 'SOBER';
    }
}

write( howDrunk(0.00) );         // "SOBER"
write( howDrunk(0.04) );         // "TIPSY"
write( howDrunk(0.12) );         // "DRUNK"
write( howDrunk(0.40) );         // "DANGER"



// Sample 23 - a fun drinking program
var bac: number = 0.00;
write( howDrunk(bac) );         // "SOBER"

bac = drinkBeer(bac);           // .02
write( howDrunk(bac) );         // "TIPSY"

bac = drinkBeer(bac);           // .04
bac = drinkBeer(bac);           // .06
bac = drinkBeer(bac);           // .08
write( howDrunk(bac) );         // "DRUNK"





