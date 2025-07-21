const mervel_heros =["thor", "iron", "hulk", "spiderman", "captain america"];
const power_Ranger =["SPD", "Sumuray", "Dino Charge", "Ninja Storm", "Time Force"];

// mervel_heros.push(power_Ranger)

// console.log(mervel_heros);
// console.log(mervel_heros[3][1]);

// const allHeros = mervel_heros.concat(power_Ranger);
// console.log(allHeros);

const all_new_heros = [...mervel_heros, ...power_Ranger];
// console.log(all_new_heros);

const another_array = [1, 2, 3, 4,[5, 6, 7,[8, 9]]];

const real_anorher_array = another_array.flat(3);
console.log(real_anorher_array);




console.log(Array.isArray("Santanu"))
console.log(Array.from("Santanu"));
console.log(Array.from({name: "Santanu"})); //Interesting