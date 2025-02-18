// operators in js
// arithmetic opener
let a= 5;
let b = 2;
console.log("a+b is",a+b);
console.log("a-b is",a-b);
console.log("a*b is",a*b);

console.log("a/b is",a/b);

console.log("a%b is",a%b);
console.log("a**b is",a**b);
// urinary operator a++  increment one,a-- decrement one,
console.log("++a is",++a); //6->6
console.log("a++ is",a++); //6 ->7
console.log(a);//7

// += , -=, *=, /=, **=
// == check only euqlity while === also check for datatype
// logical operators &&,||,!
// conditional statements
// let color;
// if(mode==="dark-mode"){
//     color:black;
// }

// or
let age=25;
if(age>18){
    console.log("can vote");
}
// Ternary operator
age>18?console.log("vote"):"not vote";

// MDN DOCS - to explore more in js ->MDN web docs
// switch statement
// alert("dont enter") - one time message
// prompt("hello") - same as alert but u can also give input
// name = prompt("enter name");
// console.log(name);




// number = prompt("Enter a number");
// if(number%5==0){
//     console.log(number,"is a multiple of 5");
// }
// else{
//     console.log(number,"is not a multiple of 5");
// }
let score = prompt("Enter your score");
if(score<=100&&score>=80){
    console.log("A");
}
else if(score<80&&score>=70){
    console.log("B");
}
else if(score<70&&score>=60){
    console.log("C");
}
else if(score<60&&score>=50){
    console.log("D");
}
else{
    console.log("F");
}
