"use strict"

// task/1
let names=["Leyla","Aynur","Aytən","Nailə"]

 let animal=["At","Rakun","Nərə balığı","Ərincək"]

let result=names.map((n,index)=>`${n}:${animal[index]}`).join();

console.log(result);



// task/2
let message = [
    ["Leyla", "Aynur", "Aytən", "Nailə"],
    ["At", "Rakun", "Nərə balığı", "Ərincək"]
];

let item = {};  

for (let i = 0; i < message[0].length; i++) {
    if (message[0][i]) {
        item[message[0][i]] = message[1][i];  
    }
}

console.log(item);  








