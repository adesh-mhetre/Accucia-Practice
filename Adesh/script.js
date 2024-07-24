// // debugger

// const a = 10;
// const b = 20;

// let sum = (x, y) => {
//     const i = 10;
//     const j = 20;
//     console.log(i + " " + j);
// }

// sum(a, b);

// let promise1 = new Promise((res, rej) => {
//     let isTrue = true;
//     if (isTrue) {
//         setTimeout(() => {
//             res("promise 1 resolved after 2000ms");
//         }, 2000);
//     } else {
//         rej("promise1 False");
//     }
// });

// let promise2 = new Promise((res, rej) => {
//     let isTrue = true;
//     if (isTrue) {
//         setTimeout(() => {
//             res("promise 2 resolved after 5000ms");
//         }, 5000);
//     } else {
//         rej("promise2 False");
//     }
// });

// const func1 = () => {
//     setTimeout(() => {
//         console.log("function 1");
//     }, 5000);
// }

// const func2 = () => {
//     setTimeout(() => {
//         console.log("function 2");
//     }, 2000);
// }

// Promise.all([promise1, promise2])
//     .then((results) => {
//         console.log("All promises resolved");
//         console.log(results); // Logs the resolved values of promise1 and promise2
//     })
//     .catch((error) => {
//         console.error("Error in promises:", error);
//     });

// // Call func1 and func2 if you want them to execute
// // func1();
// // func2();





// window.document.body.style.backgroundColor 

// const getColor = () =>{
//     let hex = `0123456789ABCDEF`;
//     let clr = '#';
//     for(let i=0;i<6;i++)
//     {
//         clr += hex[Math.floor(Math.random()*16)];
//     }
//     return clr;
// }

// let colorInterval=null;

// // const changeColor = () => {
// //     colorInterval = setInterval(() => {
// //         let color = changeColor();
// //         console.log(color);
// //         document.body.style.backgroundColor =  color;
// //     }, 1000);
// // }

// // const changeBackGroundColor = () => {
// //     if(colorInterval !== null)
// //     {
// //         changeColor();
// //     }

// // }

// const stopChangeColor = () => {
//     console.log("stop");
//     clearInterval(colorInterval);
//     colorInterval = null;
// }


// document.querySelector('#start').addEventListener('click', changeBackGroundColor);
// document.querySelector('#stop').addEventListener('click', stopChangeColor);


window.alert('Hello, world!'); // Display an alert dialog
let result = window.confirm('Are you sure?'); // Display a confirmation dialog
console.log(result); // Logs the result of the confirmation dialog
let userInput = window.prompt('Please enter your name', 'John Doe'); // Display a prompt dialog
console.log(userInput); // Logs the result of the prompt dialog

