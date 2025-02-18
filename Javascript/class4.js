// arrays
let marks = [92,98,65,65,74];
console.log(marks);
console.log(marks.length);

let names  = ["menubar","yous","Headers","she"];
console.log(names);


console.log(typeof names);

// Arrays in JS
console.log(marks[4]);
marks[3] = 0;
console.log(marks);

// arrays in js is muttable 
for(let i=0;i<5;i++){
    console.log(marks[i]);
}

for(let el of marks){
    console.log(el);
}
let cities = ["delhi","mumbai","PushManager","jhalawar","payadce"];

for(let city of cities){
    console.log(city);
}

for(let city of cities){
    console.log(city.toUpperCase());
}

let mark = [85,97,44,37,76,60];
let sum =0;
for(numer of mark){
    sum+=numer;
}
let average = sum/mark.length;
console.log(average);

let price = [250,645,300,900,50];
for(let i =0;i<5;i++){
    price[i]-=price[i]/10;
}
console.log(price);

// by for of loop
let idx =0;
for(let val of price){
    console.log(`value at index ${idx}=${val}`);
    idx++;
}
// array methods 
// Push() add o end
// Pop() delete from end and return 
// to String()  convert array to string


price.push(89,56,24,22  ,23);
console.log(price);
let deletedItem = price.pop();
price.pop();
console.log(price);
console.log("deleted ", deletedItem);

console.log(price.toString());
// does not chage in the array
// concat() join multiple arrays and return new array

let total = marks.concat(price);
console.log(total);
console.log(price);
console.log(marks);

// unshift  add to start
price.unshift(8000);
console.log(price);

let newprice = price.shift();
console.log(newprice);
console.log(price);

// slice  = returns a piece of array
console.log(price.slice(2,5));

// splice  = change original array (add,rmeove,replace);

let arr = [1,2,3,4,5,6,7,8,9,10];
arr.splice(2,2,101,102);
console.log(arr);

arr.splice(2,0,103,104);
console.log(arr);

let company = ["bloomberg","microsoft","uber","google","IBM","netflix"];
company.shift();
company.splice(2,1,"Ola");
company.push("amazon");
console.log(company);