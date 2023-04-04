const myPromise = new Promise((resolve,reject) =>{
    const error = true  ;
    if(!error){
        resolve("Yes! resolved thr promise!");
    } else{
        reject("No! rejected the promise");
    }
});

console.log(myPromise);

myPromise.then(value=>{
    return value + " " + 1;
})
.then(newValue =>{
    console.log(newValue);
})
.catch(err=>{
    console.log(err);
})

const myNextPromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("myNextPromise resolved");
    }, 3000);
});

myNextPromise.then(value =>{
    console.log(value);
}); 