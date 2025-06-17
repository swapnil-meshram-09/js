// js


// commands = code does not executed.

        // 1st way 

        /* 2nd way */




// to print on console

console.log("Hello");

console.log(a);               // undefined (a used before declaration and init)



// to pop up alert on top of the screen

// alert("Hello")



// variables = to store data / values
   // value can be changeable

// constant = values remain same



// variable declartion

let abcd;
let _abcd;
let $abcd;
let abcd123;



// to store data 

  // var, let, const

// var

var a;
a = 10;
console.log(a);

var a;                 // redeclaration
a = 11;                
console.log(a);

a = 12;               // reinitillization
console.log(a);



// let

let b;
b = 13;
console.log(b);

// let b;               //error

// let b = 14;           // error

b = 14;                 // reinitillization
console.log(b);



// const

// const c;                 // error

const c = 15;
console.log(c);

// const c = 16;             // error






// types in js

        // 1] primitives : number, string, null, boolean, undefined, BitInt, Symbol

        // 2] references: [] , () , {}


// primitives

// number

let number = 1;

let float = 1.0;

let character = 'a';

let string = "abcd";

let boolean1 = true;

let boolean2 = false;

let null0 = null;

let undefined1 = undefined;

let bigint = BigInt(12);

let symbol1 = Symbol("=");          // 

console.log();




// references: array ,object

// arrays

let x = [1,2,3,4,5]
console.log(x);

// array operations

// push = element push at last index

x.push(6);
console.log(x);

// pop = element pop from last index

x.pop()
console.log(x);


// unshift = add element to first index

x.unshift(0);
console.log(x);



// shift = remove element from first index

x.shift();
console.log(x);



// splice = select elements from specific index range provide and remove it.

x.splice(2,4);
console.log(x);






// objects

const student = {
    name : "student_name",
    rollNo : 12345,
    "percenatge": 99,
    isPass : true
};

console.log(student);

console.log(student["name"]);

console.log(student["percenatge"]);

console.log(student.name);



// reinit for name of student
 
student.name = "new_stu_name";
console.log(student.name);






// operators = to perform operations on operand

        // types:

        // unary 
        // binary 
        // tenary

// unary 

        // pre increment (++a)

        // pre decrement (--a)

        // post increment (a++)

        // post decrement (a--)


        let y1 = 1;
        console.log(++y1);
        
        let y2 = 1;
        console.log(--y2);
        
        let y3 = 1;
        console.log(y3++);
        console.log(y3++);      // to check value 
        
        
        let y4 = 1;
        console.log(y4--);
        console.log(y4--);      // to check value 
        
        
        
        
        
        // binary operators (2 operands)
        // arithematics operators(+,-,*,/,%,**)
        
        let a1 = 4;
        let b1 = 2;
        
        console.log(a1+b1);
        console.log(a1-b1);
        console.log(a1*b1);
        console.log(a1/b1);
        console.log(a1%b1);
        console.log(a1**b1);  // 4^2
        
        
        
        // assignment operator
        
        let a2 = 4;
        let b2 = 2;
        
        console.log("\n")
        
        console.log(b2=a2);
        console.log(a2+=b2);
        console.log(a2-=b2);
        console.log(a2*=b2);
        console.log(a2/=b2);
        console.log(a2%=b2);
        console.log(a2**=b2); 
        
        
        // comparison/relational operator
        
        let a3 = 2;
        let b3 = 2;
        
        console.log("\n");
        
        console.log(a3 == b3);
        console.log(a3 != b3);
        console.log(a3 > b3);
        console.log(a3 >= b3);
        console.log(a3 < b3);
        console.log(a3 <= b3);
        
        // equal to and data type
        console.log(a3 === b3);
        console.log(a3 !== b3);
         
        
        // logical operators
        
        let a4 = true
        let b4 = true
        
        console.log("\n")
        
        console.log(a4 && b4)
        console.log(a4 || b4)
        console.log(!a4)
        
        
        
        
        
        // tenary operator (3 operands)
        // (condition) ? true : false ; 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        