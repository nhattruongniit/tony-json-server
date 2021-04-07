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


const userList = randomUserList(2)
const todoList = randomTodoList(userList, 2)

const db = {
  users: userList,
  todos: todoList
};

fs.writeFile('db.json', JSON.stringify(db), () => {
  console.log('Genereate data successfully!')
})
