const names = ["max", "elena", "igor", "eva"];

// names.push("maria"); // добавляет в конец
// names.unshift("maria"); // добавляет в начало

// names.shift(); // удаляет из начала
// names.pop(); // удаляет из конца

// const firstName = names.shift();
// const Name = names.pop();

// console.log(names, firstName, Name);
// const reversed = names.toReversed();

// const letters = ["a", "c", "d", "f", "h", "e"];
// console.log(reversed);
// console.log(letters.toSorted());
// console.log(names);
// // console.log(names.splice(2, 2));
// console.log(names.toSpliced(2, 1));
// console.log(names);

// const greatWoman = "elena";
// const index = names.indexOf(greatWoman);
// console.log(index);
// const newNames = names.with(index, "elena velikaya");
// // names[index] = "elena velikaya";
// // console.log(names[index]);
// // console.log(names);
// console.log(newNames);

// const capitalNames = names.map(function (el, index) {
//   if (index === 1) {
//     return "elena velikaya";
//   }
//   return el;
// });

// console.log(names);
// console.log(capitalNames);
// console.log(names.includes("elena"));
// console.log(names.indexOf("elena") !== -1);

const people = [
  {
    name: "Minin",
    budjet: 4300,
  },
  {
    name: "Elena",
    budjet: 13400,
  },
  {
    name: "Max",
    budjet: 4400,
  },
  {
    name: "Igor",
    budjet: 90900,
  },
];

// const findedPerson = people.find(function (person) {
//   return person.budjet === 4400;
//   //   if ((person.budjet === 4400)) {
//   //     return true;
//   //   }
// });

// let findedPerson;
// for (let person of people) {
//   if (person.budjet === 4400) {
//     findedPerson = person;
//   }
// }

// const findedPerson = people.find((p) => p.budjet === 4400);

// const findedPerso = people.findIndex((p) => p.budjet === 4400);

// console.log(findedPerson, findedPerso);
// console.log(people.find((p) => p.budjet === 90900));

// let sumBudjet = 0;
// const filtered = people.filter((p) => p.budjet > 5000);
// console.log(filtered);
// filtered.forEach((p) => (sumBudjet += p.budjet));
// console.log(sumBudjet);

// const sumBudjet = people
//   .filter((p) => p.budjet > 5000)
//   .map((p) => p.budjet)
//   .reduce((acc, p) => acc + p, 0);

// console.log(sumBudjet);

// const string = "Hello World";

// const reversed = string
//   .split("")
//   .toReversed()
//   .join("!")
//   .split("")
//   .filter((s) => s !== "!")
//   .join("");
// console.log(reversed);
