const pics = [
    'demo1.jpeg',
    'demo2.jpeg',
    'demo3.jpeg',
    'demo4.jpeg',
    'demo5.jpeg',
    'demo6.jpeg',
    'demo7.jpeg',
    'demo8.jpeg',
    'demo9.jpeg'
];

let i=0;

function next(){

    i++;
    let first = document.querySelector("#first");
    let second = document.querySelector("#second");
    let third = document.querySelector("#third");
    let j = i+1;
    let k = i+2;
    if(i>pics.length){
        i = 0;
        j=1;
        k=2;
    }
    else if(j>pics.length){
        let dif  = j - pics.length;
        j = dif;
        k = j+1;
    }
    else if (k>pics.length){
        let diff = k-pics.length;
        k = diff;
    }

    first.src = pics[i];
    second.src = pics[j];
    third.src= pics[k]; 
     
    
}

let a = pics.length - 1;  // Start from the last image

function back() {
    a--;  // Move one step back

    let first = document.querySelector("#first");
    let second = document.querySelector("#second");
    let third = document.querySelector("#third");

    let j = a - 1;
    let k = a - 2;

    if (a < 0) {   // If `a` goes negative, loop back to the last set
        a = pics.length - 1;
        j = a - 1;
        k = a - 2;
    } 
    else if (j < 0) {   // If `j` goes negative, wrap around from end
        let dif = 0 - j;   // j is -1, so dif = 1
        j = pics.length - dif;  // Wrap to second-last image
        k = j - 1;               // Move k one back from j
    } 
    else if (k < 0) {   // If `k` goes negative, wrap around again
        let diff = 0 - k;   // k is -1 or lower
        k = pics.length - diff;  // Wrap to correct image
    }

    first.src = pics[a];   // Current image
    second.src = pics[j];  // Previous image
    third.src = pics[k];   // One before that
}
