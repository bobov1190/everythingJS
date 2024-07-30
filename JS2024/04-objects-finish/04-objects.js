const person = {
  name: 'Vladilen',
  age: 29,
  isYoutuber: true,
  languages: ['ru', 'en'],
  address: {
    city: 'Saint-Petersburg',
    street: 'Nesvky',
  },
  'complex key': 'complex value',
  ['key_' + 21 * 2]: 'computed value',
  greet() {
    console.log('Greet from person', this)
  },
  arrow: () => {
    console.log('Person Arrow', this)
  },
  info() {
    console.log('Person name', this.name)
  },
}

// console.log(person.address)
// const addressKey = 'address'
// console.log(person[addressKey])
// console.log(person['complex key'])
// person.age++
// person.languages.push('de')
// console.log(person.languages)
// person.address = undefined
// delete person.address
// console.log(person)

// Destructoring
// const age = person.age
// const name = person.name
// const languages = person.languages

// const name = 'Petr'

// const { age, name: firstName = 'TEST', languages } = person

// console.log(languages, age, firstName)

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(person[key])
//   }
// }

// Object.keys(person).forEach((key) => {
//   console.log(person[key])
// })

const logger = {
  keys(withText = true) {
    if (withText) {
      console.log('Object keys:', Object.keys(this))
    } else {
      console.log(Object.keys(this))
    }
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log('Key:', key)
      console.log('Value:', this[key])
    })
  },
}

// const bound = logger.keys.bind(person)
// bound(false)
// logger.keys.call(person, false)
// logger.keys.apply(person, [false])

class Human {
  static isHuman = true

  humanGreet() {
    console.log('greet from human')
  }

  toString() {
    console.log('to string')
  }
}

class Person extends Human {
  constructor(name, age) {
    super()
    this.name = name ?? 'Undefined name'
    this.age = age ?? 'Undefined age'
  }

  sayHello() {
    console.log('Hello from ', this.name)
  }
}

const person1 = new Person('Vladilen', 30)
const person2 = new Person('Elena', 21)

// console.log(Person.isHuman)
