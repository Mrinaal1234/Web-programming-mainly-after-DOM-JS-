// console.dir(document.body.childNodes[3]);
// document.body.style.background ="green";

// // DOM is used for dynamic manupulation in HTML
// // DOM MANUPULATION
// // 1st is Selecting with id
// document.getElementById("heading");
// console.dir(heading);

// // 2nd is selecting with class name   - similar to arrays like indexing
// let headings = document.getElementsByClassName("header");
// console.log(headings);
// console.dir(headings);

// // 3rd is by tag name 
// let parahs = document.getElementsByTagName("p");
// console.log(parahs);
// console.dir(parahs);

// // 4rth is document.querySelector("Id or class or tag")
// // it returns first element

// let elements = document.querySelector("p");
// console.dir(elements);

// // to get the all elements 
// let allele = document.querySelectorAll("p");
// console.dir(allele);  // so it returns a Nodelist
// in query selector u have to write the class name then write it with .  like  .className    //////////////
// // Properties =  we can get some values and can change them by properties
// // 1st - tagname returns tag for element nodes

// console.log(allele.tagName);

// // 2nd is innerText = returns the text content of the element and all its children

// console.log(document.body.firstChild);

// let div = document.querySelector("div");

// console.dir(div);
// // firstchild,lastchild,children,textnode,element Node,comment node  read abput this all

// // 3rd is inner HTML  = print HTML content (html tag bhi print karega) and also to change it
// // 4rth is text content  - to change the content inside HTML


let h2 = document.querySelector("h2");
console.dir(h2.innertext);

h2.innerText = h2.innerText+"from Apna College Students";
console.dir(h2.innerText);

let divs = document.querySelectorAll(".box")
console.log(divs);

divs[0].innertext = "newunique 1";
divs[1].innertext = "newunique 2";
divs[2].innertext = "newunique 3";

console.log(divs);

