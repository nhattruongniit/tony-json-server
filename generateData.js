const faker = require('faker');
const fs = require('fs');

const randomId = Date.now();
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email().toLocaleLowerCase(); // Kassandra.Haley@erich.biz

const randomData = (numbers, obj) => {
  if (numbers <= 0 || !obj ) return [];

  const newObj = [];
  Array.from(new Array(numbers)).forEach(() => {
    newObj.push(obj)
  })
  return newObj
}

const newUser = {
  id: Date.now(),
  name: faker.name.findName(),
  email: faker.internet.email().toLocaleLowerCase(),
  createdAt: Date.now(),
  updatedAt: Date.now()
};

const newTodo = {
  id: Date.now(),
  description: faker.lorem.words(),
  createdAt: Date.now(),
  updatedAt: Date.now()
};

const db = {
  users: randomData(1, newUser),
  todos: randomData(2, newTodo)
};

fs.writeFile('db.json', JSON.stringify(db), () => {
  console.log('Genereate data successfully!')
})
