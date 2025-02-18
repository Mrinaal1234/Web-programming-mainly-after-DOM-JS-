let btn = document.createElement("button");
btn.innerText="click me";
btn.style.backgroundColor="red";
btn.style.color="white";
let body = document.querySelector("body");
body.prepend(btn);

let newstyle = document.querySelector("p");

// now we can use setattribite to changethe class
// newstyle.setAttribute("class", "newclass" );  but this will overwritre the previous class and if i want to dont overwrite and both class will be there for that 
// we use classlist

newstyle.classList.add("newclass");
// we can also remove the class by classlist.remove("classname") 