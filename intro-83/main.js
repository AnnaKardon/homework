const person = {
  name: 'Ann',
  age: 29,
  isAdmin: true
}
console.log(person.name)
// ----------------------------------

const student = {
  Ann: {
  age: 29,
  isAdmin: true,
    sayHello(name) {
      console.log(`Hello ${name}`)
    }
  }
}

console.log(student.Ann)
student.Ann.sayHello(`Ann`)
// -------------------------------------

const users = [
  {
    name: 'Alex',
    age: 23,
    isAdmin: false
  },
  {
    name: 'John',
    age:30,
    isAdmin: true
  }
]

if (isAdmin = true) {
  console.log(users[1])
}
// for(let i=0; i<users.length; i++) {
//   console.log(users[i].name)
// }
