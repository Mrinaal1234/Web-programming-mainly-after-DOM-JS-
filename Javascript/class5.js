function factorial(n){
    if(n==1){
        return 1;
    }
    return factorial(n-1)*n;
}
let a = factorial(5);
console.log(a);

function sum(a,b){
    console.log(a+b);
}
sum(2,3); 
// arrow function - to write function in a compact way
//modern js part
const mul = (a,b)=>{
    console.log(a*b);
}
mul(3,665);



function stringtovowel(s){
    let i =0;
    let res="";
    while(i<s.length){
        if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'){
            res+=s[i];
        }
        i++;
    }
    return res;
}
console.log(stringtovowel("mrinaal"));


const vowel = (s)=>{
    let i =0;
    let res="";
    while(i<s.length){
        if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'){
            res+=s[i];
        }
        i++;
    }
    return res;

}
console.log(vowel("mrinaal"));

// for each loop  - only use for arrays
//  a callback is a function passed as an argument to another function

let mc = ["pune","delhi","mumbai"];

mc.forEach((val) =>{  //Higher order functions or methods
    console.log(val.toUpperCase());
});

mc.forEach((val,idx,mc) =>{
    console.log(val.toUpperCase(),idx,mc);
});

let sq =[1,2,3,45,6,8,9,4,2,3];
sq.forEach((val)=>{
    console.log(val*val);
});
 


// some more arrays methods

// MAP - creates a new array with the result of some operation. The value its callback returns are used to form a new array.

sq.map((val)=>{
    console.log(val);
});
 

// filter
let newarr = sq.filter((val)=>{
    return val%2==0;
});
 
console.log(newarr);

// reduce method = perform some operations and reduce the arrau to a single value. It returns that single value


let n = prompt("Enter the number:");
let num=[];
for(let i=0;i<n;i++){
    num[i] = i+1;
}

let finalsum = num.reduce((res,curr)=>{
    return res +curr;
})

console.log(finalsum);

let product = num.reduce((res,curr)=>{
    return res *curr;
})
console.log(product);
