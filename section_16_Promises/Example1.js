// promises 
// Ex-1 
let myProm = new Promise((resolve,reject) => {
    console.log("Promise is Running");
    setTimeout(() => {
        reject("error aagya bhai")
    },2000);
});

myProm.then((v) => {
    console.log(v);
}).catch((err) => {
    console.log(err);
});

// Ex-2 - Math.Random() generate random Number between 0 to 1 
let Prom1 = new Promise((resolve,reject) => {
    console.log("Promise is running");
    let a =Math.random();
    if(a < 0.5){
        reject("Promise is Reject")
    }else{
        setTimeout(() => {
            resolve("promise is resolve")
        },2000);
    }
});

Prom1.then((a)=> {
    console.log(a);
}).catch((err) => {
    console.log(err);
})


// Ex-3 
let prom =new Promise((resolve,reject)=> {
    console.log("Promise is running");
    setTimeout(()=> {
        resolve("promise resolve")
    }, 2000);
});
// nested promise 
prom.then((v)=> {
    console.log(v);
    let p1 =new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("promise 2 ")
        },2000);
    })
    return p1
}).then((v)=> {
    console.log(v);
})