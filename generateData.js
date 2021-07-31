const faker = require('faker');
const fs = require('fs');

const randomUserList = numbers => {
  if (numbers <= 0 ) return [];

  const newObj = [];
  Array.from(new Array(numbers)).forEach(() => {
    newObj.push({
      id: faker.random.uuid(),
      avatar: faker.image.image(),
      name: faker.name.findName(),
      email: faker.internet.email().toLocaleLowerCase(),
      role: "operator",
      createdAt: Date.now(),
      updatedAt: Date.now()
    })
  })
  return newObj
}

const randomTodoList = numbers => {
  if (numbers <= 0 ) return [];

  const todoList = [];
  Array.from(new Array(numbers)).forEach(() => {
    const newTodo = {
      id: faker.random.uuid(),
      title: faker.name.title(),
      author: faker.name.findName(),
      description: faker.lorem.words(),
      severity: 'low',
      status: 'new',
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    todoList.push(newTodo)
  })
  return todoList
}

const randomPhotoList = numbers => {
  if (numbers <= 0 ) return [];

  const photoList = [];
  Array.from(new Array(numbers)).forEach(() => {
    const newPhoto = {
      id: faker.random.uuid(),
      title: faker.name.title(),
      category: 'sports',
      image: faker.image.sports(),
      description: faker.lorem.words(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    photoList.push(newPhoto)
  })
  return photoList
}

const userList = randomUserList(5)
const todoList = randomTodoList(3)
const photoList = randomPhotoList(5)

const db = {
  users: userList,
  todos: todoList,
  photos: photoList
};

fs.writeFile('db.json', JSON.stringify(db), () => {
  console.log('Genereate data successfully!')
})
