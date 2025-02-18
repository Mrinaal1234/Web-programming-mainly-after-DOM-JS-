console.log("Apna college");
console.log("Mrinaal Gupta");
// variables in js
age  = 24;
console.log(age);
nam = "mrinaal";
console.log(nam);
x = null;
y = undefined;
console.log(x);
console.log(y);
// difference between NULL and undefined is that in undefined u dont what is there inside like which datatype is there but in null u know the type of datatype but dont know what it is

// javascript is dynamically typed language
//  assignment operator (=)

// language is case sensitive

// in variables only letters,digits,underscore and $ is allowed
// digit should not be the first character of the variable
// reversed words cannot be variable names

// fullName - Camel case
// full_name - snake case

let fullname = "tony stark";
console.log(fullname);
// we will initiate by let or var its just a habit
// as a good programmer we will use let - for variables which can be updated
//  and use const for variable which can be re declared or updated;

let page = 24;
page =26;
page =98;
console.log(page);

const marks = 96;
// now if we will update it there will be an error

// blocks =
{
    let a = 10 ;
    console.log(a);
}
{
    let a =20;
    console.log(a);
}
// data type in js - number,string,boolean,undefined,null,biglnt,symbol  this 7 are primitive datatypes
let p = BigInt("1258");
console.log(p);

let q = Symbol("Hello");

// non primitive datatypes arrays,functions etc - this are collections of many data ;
const student = {
    fullname : "Rahul kumar",
    age: 20,
    cgpa : 8.76,
    isPass :true

};
console.log(student);
console.log(student["fullname"]);
console.log(student.age);
console.log(student.cgpa);
student.age = student.age+1;
console.log(student.age);

// u cant change const variable but u can bring a chinge in the any data inside the object like we did above in student as it is const but we can change its fullname,age etc;
const product = {
    title : "pen",
    rating:4.5,
    offer: 80,
    price:800
};

console.log(product);

const profile = {
    username: "mrinaal",
    posts:195,
    isfollow:true,
    followers:800,
    following : 4,
    work:"Enterpreneur",
    companyname:"apnacollege"
};
console.log(profile);
console.log(typeof profile["posts"]);