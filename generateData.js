const faker = require('faker');
const fs = require('fs');

const randomUserList = numbers => {
  if (numbers <= 0 ) return [];

  const newObj = [];
  Array.from(new Array(numbers)).forEach(() => {
    newObj.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email().toLocaleLowerCase(),
      phone: faker.phone.phoneNumber(),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
      jobTitle: faker.name.jobTitle(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    })
  })
  return newObj
}

const randomTodoList = (userList, numbers) => {
  if (numbers <= 0 ) return [];

  const todoList = [];
  for(const user of userList) {
    Array.from(new Array(numbers)).forEach(() => {
      const newTodo = {
        id: faker.random.uuid(),
        userId: user.id,
        description: faker.lorem.words(),
        severity: 'low',
        status: 'open',
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      todoList.push(newTodo)
    })
  }
  return todoList
}

const randomPhoto = numbers => {
  if (numbers <= 0 ) return [];

  const newObj = [];
  Array.from(new Array(numbers)).forEach(() => {
    newObj.push({
      id: faker.random.uuid(),
      name: faker.lorem.words(),
      image: faker.image.image(),
      description: faker.lorem.words(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    })
  })
  return newObj
}

const userList = randomUserList(5)
const todoList = randomTodoList(userList, 3)
const photoList = randomPhoto(15)

const db = {
  users: userList,
  todos: todoList,
  photos: photoList
};

fs.writeFile('db.json', JSON.stringify(db), () => {
  console.log('Genereate data successfully!')
})
