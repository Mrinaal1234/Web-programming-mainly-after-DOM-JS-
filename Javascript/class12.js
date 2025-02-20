//callback
//sync in js
//synchronous and asynchronous

console.log("1");
setTimeout(()=>{
    console.log("hello");
},4000);//timeout
console.log("1");


//callback = remember as function callback

//callback hell = nested callbacks
//read callback throughly later

function getdata(dataId,getNextdata){
    //2s
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextdata){
            getNextdata();
        }
    },2000);
}
//callback hell -->
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3);
    });
})

