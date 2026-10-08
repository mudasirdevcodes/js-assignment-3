let a=20;
let b=10;

// to add two numbers
let c=a+b;
console.log("The sum of a+b is :" + c);

// to subtract two numbers
let d=a-b;
console.log("The subtraction of a+b is :" + d);

// to multiply two numbers
let e=a*b;
console.log("The multiplication of a and b is :" + e);

// to divide two numbers
let f=a/b;
console.log("The division of two numbers is :" + f);

// to take modulus 
let g=a%b;
console.log("The modulus of a and b is :" + g);

// step 3 :Assignment operators
let h=5;
console.log("The value of our variable is : " + h);

// using += operator
h+=1;
console.log("The value of h after += 1 is : " + h);

// using -= operator
h-=2;
console.log("The value of h after -= is :" + h);

// using *= operator
h*=2;
console.log("The value of h after *= is :" + h);

// using /= operator
h/=4;
console.log("The value of h after /= is :" + h);

// Comparison operators 
let x=10; 
let y=20;
console.log(x == y);
console.log(x === y);
console.log(x!=y);
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);

// step 5: using Expressions
// First example
let price =10;
let quantity=3;
let totalprice=price*quantity;
console.log("The totalprice is : " + totalprice);

// second example;
let marks1=100;
let marks2=50;
let marks3=100;

let finalscore=marks1+marks2+marks3;
console.log("The finalscore of all marks are :" + finalscore);

// practice task
let number=10;
let string="10"
console.log(number == string);
console.log(number === string);

// in first comparison "==" we are only checking the equality so 10 and 10 are equal.
// in second comaprison "===" we are checking the equality and also data types ,
// here 10 and 10 are equal but in terms of datatype they are not equal cause one is number 
// and the other is string.