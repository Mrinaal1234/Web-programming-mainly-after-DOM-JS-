// strings
let str1 = "my name is dhbfermhdfbfkj";
console.log(str1.length);
// Template literals in js = it is a special type of string
// to initialise the template literal we use ``
let TL = `This is a template literal`;
console.log(TL);
console.log(typeof TL);
// importance of abive is that we can store variables also in TL
let obj = {
    item:"pen",
    price:1034
};
let output = `the cost of ${obj.item} is ${obj.price}`  // above sentence when we accomodate the variable in TL it is called string interpolation
console.log(output);

// escape characters =\n
console.log("apna \ncollege");
console.log("apna \t college");
// length of string apna\ncollege is 12 not 13

// string methods or string functions
 //1st
console.log(str1.toUpperCase());
// 2nd
console.log(str1.toLowerCase());
// 3rd - remover whitespaces only at start and end
str2 = str1.trim();
console.log(str2);
// strings are immutable
console.log(str1);
// other functions are
console.log(str1.slice(0,5));
console.log(str1.concat(str2));
console.log(str1.slice(0,5));
console.log(str1.replace("m","z"));
console.log(str1.charAt(0));


let Fullname = prompt("Enter your full name: ");
let username = '@'+Fullname + Fullname.length;
console.log("username is ",username);