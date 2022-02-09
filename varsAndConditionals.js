/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Eowyn and
    Witch King of Angmar.
*/ 
let eowynAttack = 50;
let witchKingAttack = 55;

if(eowynAttack > witchKingAttack) {
    console.log("Eowyn is stronger.")
} else if(witchKingAttack > eowynAttack){
    console.log("The Witch-King is stronger.")
} else {
    console.log("They're evenly matched.")
};

let eowynHealth = 100;
let eowynDefense = 0;

if(eowynHealth + eowynDefense <= witchKingAttack) {
    console.log("The Shieldmaiden of Rohan has perishes.")
} else {
    //eowynHealth = eowynHealth - witchKingAttack
     // eowynHealth =- witchKingAttack
    console.log(`The Shieldmaiden of Rohan's health points are at ${eowynHealth}.`)
}

let fatesSmile = false;

if(fatesSmile !== true) {
    console.log("The Lord of Angmar has his prey.");
} else {
    console.log("Fate smiles on the Shieldmaiden of Rohan.");
};

// for( let i = 0; i < 5; i++) {
//     if(eowynHealth > 0) {
//         eowynHealth =eowynHealth - witchKingAttack;
//         console.log(`Eowyn has ${eowynHealth} left.`);
//     } else {
//         console.log(`Eowyn has perished`);
//     };
// };

while( eowynHealth > 0) {
    eowynHealth -= witchKingAttack;
    console.log(`Eowyn has ${eowynHealth} points left`);
    if(eowynHealth <= 0) {
        console.log(`Rohan's shieldmaiden has fallen.`)
    };
};