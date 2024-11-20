// async function greet() {
//     return "hello world!";
// }
// let hello= async()=>{}

// async function greet() {
//     abc.abc();
//     return "hello";
// }

// async function greet() {
//     throw "some random error";
//     return "hello";
// }

// async function greet() {
//     // throw "some random error";
//     return "hello";
// }
// greet()
// .then((result)=> {
//     console.log("promise resolved");
//     console.log("result was:",result);
// })
// .catch((err)=> {
//     console.log("promise was rejected with err", err);
// })

// let demo= async()=> {
//     return 5;
// };

// await keyword
// h1=document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=>{
//             h1.style.color=color; 
//             resolve("color changed!");
//         },delay);
//     });
// }

// async function show() {
//     await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("green",1000);
//     await changeColor("yellow",1000);
//     await changeColor("orange",1000);

//     return "done";
// }

// function getNum() {
//     console.log(5);
// }

// async function demo(){
//     getNum();
// }

// function getNum() {
//     return new Promise (() => {
//         let num= Math.floor(Math.random()*10)+1;
//         console.log(num);
//     })
// }

// function getNum() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(()=> {
//             let num= Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     })
// }

// async function demo () {
//     getNum();
//     getNum();
//     getNum();
// }

// async function demo () {
//     await getNum();
//     await getNum();
//     getNum();
// }

// handling rejections

h1=document.querySelector("h1");

function changeColor(color,delay) {
    return new Promise ((resolve,reject)=> {
        setTimeout(()=> {
            let num= Math.floor(Math.random()*5)+1;
            if(num>3) {
                reject("promise rejected");
            }

            h1.style.color=color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        },delay);
    });
}

// async function demo() {
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);

//     let a=5;
//     console.log(a);
//     console.log("new number =",a+3);
// }

async function demo() {
    try {
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
    } catch(e) {
        console.log("error caught");
        console.log(e);
    }
    
    let a=5;
    console.log(a);
    console.log("new number =",a+3);
}

// let url="https://catfact.ninja/fact";

// fetch(url);

// let url="https://catfact.ninja/fact";

// fetch(url)
// .then((response)=> {
//     console.log(response);
//     response.json().then ((data)=> {
//         console.log(data);
//     })
// })
// .catch((err)=> {
//     console.log("ERROR-",err);
// });

// method chaining
// fetch(url)
// .then((response)=> {
//     console.log(response);
//     return response.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
// .catch((err)=> {
//     console.log("ERROR-",err);
// });

// method chaining
// fetch(url)
// .then((res)=> {
//     return res.json();
//     })
//     .then((data)=>{
//         console.log("data1=",data.fact);
//         return fetch(url);
//     })
//     .then((res)=> {
//         return res.json();
//     })
//     .then((data2)=> {
//         console.log("data2=",data2.fact)
//     })
// .catch((err)=> {
//     console.log("ERROR-",err);
// });

// using fetch with async await

// let url="https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res1= await fetch(url);
//         let data1= await res1.json();
//         console.log("data1-",data1);

//         let res2= await fetch(url);
//         let data2= await res2.json();
//         console.log("data2-",data2);
//     } catch(e) {
//         console.log("error:",e);
//     }
// }