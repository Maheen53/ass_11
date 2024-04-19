// // question 11

 let names : string [] = ["shibra" , "murtasim" , "shahmeer" ];


 // loop method 
// for each 
// for loop

//     //  loop method ///  //

// formula
// for(let index =0; < array.length; index++){
    // console.log(names[index])
//}

for(let i = 0 ; i < names.length;i++){
    console.log(names[i]);
};

// //  for each  //   //

names.forEach(friend => {
    console.log(friend);
});

 //   // FOR of LOOP // //

 //  // formula 
// for (const iteratator of object){
    //console.log(iterator)                  // iterator bar bar chlana
// }

for (let friendName of names){

console.log(friendName)
}



