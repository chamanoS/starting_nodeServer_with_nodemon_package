// getCaffeine(type){

//     String caffeine;

//     switch (type) {
//         case "coffee":
//             caffeine = "10mg";
//             break;
//         case "tea":
//             caffeine = "5mg";
//             break;
//         default:
//             caffeine = "Unknown type of drink!";
             
//        }
//          return caffeine;
// }
// print(getCaffeine("coffee"))

const express = require('express')
const app = express()
const port = 3000
console.log("cha")

app.listen(port, ()=> console.log(`Dolphin app listening on port ${port}!`))