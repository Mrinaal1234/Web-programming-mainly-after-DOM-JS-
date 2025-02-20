// Classes & Objects

// object making

const student={
    fullname : "mrinaal",
    marks:94.4,
    printmarks: function() {
        console.log("marks = ",this.marks);
    },
};

// Classes and constructors and inheritance(passing down propoerties and method from parent class to child class) in js
class ToyotaCar{
    //constructor is auto provooked thing (apne aap uth jata hai)
    constructor(){
        console.log("creating new object");
    }
    start() {
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand; 
    }
}

let fortuner = new ToyotaCar();


//inheritance
class parent{   
    hello(){
        console.log("hello");
    }
}

class child extends parent{//extends is using to showing child of parent

}

//super keyword

//error handling
// try{
//     ...normal code
// }
// catch(err){
//     ...handling.error
// }