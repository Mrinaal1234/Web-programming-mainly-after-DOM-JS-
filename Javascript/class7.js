let div = document.querySelector("div");
console.log(div);

// Attributes
// to get the attributes example class or id 
let id = div.getAttribute("id"); //to get the attribute value
console.log(id);

let names = div.getAttribute("name");
console.log(names);
let newval = div.setAttribute("id","box2");//to set the attribute val
console.log(newval);

let latest= document.querySelector("div");
div.style.backgroundColor="brown";

div.style.fontSize="20px";

// insert elements

let newbtn = document.createElement("button");
newbtn.innerText="clickme"; 
console.log("newbtn");
// now to show this at the scrreen we need to add this in our DOM tree
// for that we have diff methods
//1st is node.append() =  to add at last
//2nd is node.prepend() =  to add at start
//3rd is node.before() =  to add befroe the node
//4rt is node.after() =  to add after the node

let div2 = document.querySelector("div");
// div.append(newbtn);
// div.prepend(newbtn);  etc


// delete elements

// let para = document.querySelector("div");
// para.remove();