marvelHeroes = ["ironman", "captain america"];
marvelHeroes.push("Shaktiman");
// console.log(marvelHeroes);
dcHeroes = ["batman", "superman"];

//CONCAT OPERATOR
// newMarvelHeroes = marvelHeroes.concat(dcHeroes);
//concat returns an array and doesnt modify the original array
// console.log(newMarvelHeroes);

//SPREAD OPERATOR
// const newMarvelHeroes=[...marvelHeroes,...dcHeroes]
// console.log(newMarvelHeroes);
//FLAT OPERATOR- ends all sub arrays in an array and makes a single array.
// const numArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// console.log(numArray.flat(2));
// console.log(numArray.flat(Infinity));

//IS, FROM, OF OPERATORS
// console.log(Array.isArray());
// console.log(Array.from("hello"));
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));
