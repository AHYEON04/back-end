interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "ahyeon",
  age: 18,
  gender: "female",
};

const sayHi = (person: Human): string => {
  return `Hello ${name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
