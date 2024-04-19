"use strict";
// // question 11
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["shibra", "murtasim", "shahmeer"];
// loop method 
// for each 
// for loop
// loop method
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
;
// for each
names.forEach(friend => {
    console.log(friend);
});
// FOR of LOOP
for (const friendName of names) {
    console.log(friendName);
}
