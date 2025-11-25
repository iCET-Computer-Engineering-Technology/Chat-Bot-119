// console.log("Rice 01");
// console.log("Rice 02");
// console.log("Rice 03");
// console.log("Rice 04");
// console.log("Rice 05");
// console.log("Bun");




// fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()).then(data => {
//     console.log(data);
//     console.log("Rice 01");
//     console.log("Rice 02");
//     console.log("Rice 03");
//     console.log("Rice 04");
//     console.log("Rice 05");
// })

// console.log("Bun");3






// setTimeout(() => {

// }, timeout);




// curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
// -H 'Content-Type: application/json' \
// -H 'X-goog-api-key: AIzaSyDjiy6K4Vz3Z4cqicxKwRPsFaP6JAqleQI' \
// -X POST \
// -d '{
// "contents": [
//     {
//         "parts": [
//             {
//                 "text": "Explain how AI works in a few words"
//             }
//         ]
//     }
// ]
//   }'







// function sendPromt() {
//     let txtPromt = document.getElementById("txtPromt").value;
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("X-goog-api-key", "AIzaSyDjiy6K4Vz3Z4cqicxKwRPsFaP6JAqleQI");

//     const raw = JSON.stringify({
//         "contents": [
//             {
//                 "parts": [
//                     {
//                         "text": txtPromt
//                     }
//                 ]
//             }
//         ]
//     });

//     const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//     };

//     fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", requestOptions)
//         .then((response) => response.json())
//         .then((result) => {
//             document.getElementById("lblResult").innerHTML = marked.parse(result.candidates[0].content.parts[0].text);
//             console.log(result.candidates[0].content.parts[0].text);

//         })
//         .catch((error) => console.error(error));
// }



// const markdownText = '# Marked in the browser\\n\\nRendered by **marked**.';
// document.getElementById('content').innerHTML = marked.parse(markdownText);


// setTimeout(() => {
//     console.log("eda as karanawa");
//     setTimeout(() => {
//         console.log("dath madinawa");
//         setTimeout(() => {
//             console.log("muna hodanawa");
//             setTimeout(() => {
//                 console.log("edumak dagannawa");
//                 setTimeout(() => {
//                     console.log("salli illagannawa");
//                     setTimeout(() => {
//                         console.log("badu list eka liyagannawa");
//                         setTimeout(() => {
//                             console.log("gedarin pitath wenawa");
//                             setTimeout(() => {
//                                 console.log("magadi yaluwek hambela katha karanawa");
//                                 setTimeout(() => {
//                                     console.log("kathawa iwara wela apahu kade yanna pitath wenawa");
//                                     setTimeout(() => {
//                                         console.log("kadeta lagawenawa");
//                                         setTimeout(() => {
//                                             console.log("polime innawa");
//                                             setTimeout(() => {
//                                                 console.log("itapase badu list eka mudalalita denawa");
//                                                 setTimeout(() => {
//                                                     console.log("badu tika kaden gannawa");
//                                                     setTimeout(() => {
//                                                         console.log("Bill karanna polime innawa");
//                                                         setTimeout(() => {
//                                                             console.log("BILL KARANAWA");

//                                                             setTimeout(() => {
//                                                                 console.log("apahu gedara enna pitath wenawa");
//                                                                 console.log("gedarata lagawenawa");
//                                                                 setTimeout(() => {
//                                                                     console.log("ammata badutika denawa!");
//                                                                 }, 5000);
//                                                             }, 10000);

//                                                         }, 3000);

//                                                     }, 8000);

//                                                 }, 6000);
//                                             }, 4000);
//                                         }, 10000);
//                                     }, 6500);
//                                 }, 1000);
//                             }, 9000);
//                         }, 7500);
//                     }, 5000);
//                 }, 3000);
//             }, 3000);
//         }, 7000);

//     }, 6000);
// }, 5000);


// console.log("Bun");


// let numberList = [10, 20, 30, 40, 50, 60, 70, 80];

// customerName.forEach(element => {
//     console.log(element);
// });


// for (let i = 0; i < customerName.length; i++) {
//     console.log(i + " : " + customerName[i]);
// }


// for (let x of customerName) {
//     console.log(x);
// }

// numberList.forEach((data) => {
//     console.log(data);
// })

import Customer from "./customer.js";

let customer = new Customer("C001", "kamal", "walana", 75000.0);

console.log(customer);


import getSum, { API_KEY } from "./value.js";


let val = getSum(10, 20);

console.log(val);

console.log(API_KEY);













