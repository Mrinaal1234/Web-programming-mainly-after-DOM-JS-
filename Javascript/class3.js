for(let m=0;m<5;m++){
    console.log(m);
}
let i=1;
while(i!=5){
    console.log(i);
    i++;
}
// do{

// }
// while();

// for of and for in loop
// for of - use to put for loop on strings and arrays
let str = "Apna college";
for(let i of str){
    console.log(i);
}

// for in is used to iterate keys of an object and also use in arraya
let my = {
    name:"mrinaal",
    age:18,
    cgpa:8.76
};
for(let i in my){
    console.log(i);
}
for(let i =1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}
let g;
g = prompt("guess the game value");
let gamevalue  = 20;
while(g!=gamevalue){
    console.log(g);
    g=prompt("guess the game value");
}
// prompt always return a string
