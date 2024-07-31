// console.log(typeof null); //object

const person = {
  name: "Bakhodir",
  age: 17,
  isYoutuber: false,
  langs: ["ru", "en", "uz"],
  address: {
    city: "Tashkent",
    country: "Uzbekistan",
  },
  "complex key": "complex",
  ["key_" + 21 * 2]: "computed value",
  greet() {
    console.log("Greet from person");
  },
  arrow: () => {
    console.log(this); // Не создает свой контекст по умолчанию при использовании стрелочной функции
    console.log("Arrow from person");
  },
  info() {
    console.log(this);
    console.log("hello", this.age);
  },
};

// console.log(person);
// console.log(person.address);
// const addressKey = "address";
// console.log(person[addressKey]);
// console.log(person["address"]);
// console.log(person["complex key"]);
// person.greet();
// person.arrow();
// person.info();
// person.age++;
// person.langs.push("de");
// console.log(person.age);
// console.log(person.langs);
// // person.address = undefined;
// delete person.address;
// console.log(person);

// == Destructoring
// const age = person.age;
// const langs = person.langs;
// const address = person.address;
// const name = "bryan";
// const { age, name: firstName = "test", langs } = person; // name = firstName
// console.log(age, langs, firstName);

// for (let key in person) {
//   // console.log(key);
//   // console.log(person[key]);

//   if (person.hasOwnProperty(key)) {
//     console.log(person[key]);
//   }
// }

// == Spread
// const newPerson = {
//   ...person,
//   name: "test",
//   address: {
//     city: "Tashkent",
//     country: "Uzbekistan",
//   },
// };
// console.log(newPerson);

// console.log(Object.keys(person));

// Object.keys(person).forEach((key) => console.log(person[key]));

// const logger = {
//   keys() {
//     console.log(Object.keys(this));
//   },
//   keysAndValues() {
//     Object.keys(this).forEach((key) => {
//       console.log(key);
//       console.log(this[key]);
//     });
//   },
// };

// // logger.keysAndValues.bind(person)(); // autobind with func ()
// logger.keys.call(person);
// logger.keys.apply(person);

class HumanBeing {
  isHuman = true;

  humanGreet() {
    console.log("helloa  " + this.name);
  }

  toString() {
    console.log("toString");
  }
}

class Person extends HumanBeing {
  constructor(name, age) {
    super();
    this.name = name ?? "Undefined";
    this.age = age ?? "Undefined";
  }
  sayHello() {
    console.log("hello " + this.name);
  }
}

const newPerson = new Person("bakha", 17);
console.log(newPerson.toString());
newPerson.sayHello();
newPerson.humanGreet();
