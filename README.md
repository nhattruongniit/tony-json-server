# TOYN JSON SERVER FAKE API FOR COUSRE FRONT END

## Scripts

```bash
# run localhost:4000
$ npm run dev

# generate data
$ npm run generate-data
```

```bash
# refer: https://www.npmjs.com/package/json-server
# fetch api
```

## Routes

API: https://tony-json-server.herokuapp.com/

### USERS

https://tony-json-server.herokuapp.com/api/users

```bash
# GET LIST
GET     /api/users

# GET SINGE USER
GET {{baseUrl}}/users/77555a95-4712-4d21-b640-d31e8648771e

# PAGINATION
GET     /api/users?_page=1&_limit=10

# ADD
POST    /api/users
Content-Type: application/json

{
  "avatar": "https://cdn.fakercloud.com/avatars/ManikRathee_128.jpg",
  "firstName": "Graham 1",
  "lastName": "Leanne",
  "email": "aincere@april.biz",
  "role": "operator",
  "location": [
    {
      "address": "243 Nguyen Thi Minh Khai",
      "district": "Phu Nhuan",
      "city": "TP.HCM"
    },
    {
      "address": "425 Nguyen Bieu",
      "district": "Phu Nhuan",
      "city": "TP.HCM"
    }
  ]
}

# DELETE
DELETE  /api/users/{userId}
Content-Type: application/json

# UPDATE
PATCH   /api/users/{userId}
Content-Type: application/json
{
  "avatar": "https://cdn.fakercloud.com/avatars/ManikRathee_128.jpg",
  "firstName": "Graham 1",
  "lastName": "Leanne",
  "email": "aincere@april.biz",
  "role": "operator",
  "location": [
    {
      "address": "243 Nguyen Thi Minh Khai",
      "district": "Phu Nhuan",
      "city": "TP.HCM"
    },
    {
      "address": "425 Nguyen Bieu",
      "district": "Phu Nhuan",
      "city": "TP.HCM"
    }
  ]
}
```

### TODOS

https://tony-json-server.herokuapp.com/api/todos

```bash
# GET LIST
GET     /api/todos

# GET SINGE TODO
GET {{baseUrl}}/todos/77555a95-4712-4d21-b640-d31e8648771e

# PAGINATION
GET     /api/todos?_page=1&_limit=10

# DELETE
DELETE  /api/todos/{todoId}
Content-Type: application/json

# UPDATE
PATCH   /api/todos/{todoId}
Content-Type: application/json
{
  "title": "Learn React",
  "author": "Tony Nguyen",
  "description": "nihil aut laudantium",
  "progress": 0,
  "severity": "low",
  "status": "new",
}

# ADD NEW
POST    /api/todos
Content-Type: application/json
{
  "title": "Learn React",
  "author": "Tony Nguyen",
  "description": "nihil aut laudantium",
  "progress": 0,
  "severity": "low",
  "status": "new",
}
```

### PHOTOS

https://tony-json-server.herokuapp.com/api/photos

```bash
# GET LIST
GET     /api/photos

# GET SINGE PHOTO
GET {{baseUrl}}/photos/77555a95-4712-4d21-b640-d31e8648771e

# PAGINATION
GET     /api/photos?_page=1&_limit=10

# DELETE
DELETE  /api/photos/{photoId}
Content-Type: application/json

# UPDATE
PATCH   /api/photos/{photoId}
Content-Type: application/json
{
  "title": "Sports 2",
  "category": "sports",
  "description": "nihil aut laudantium",
  "image": "http://placeimg.com/640/480/sports"
}


# ADD NEW
POST    /api/photos
Content-Type: application/json

{
  "title": "Sports 2",
  "category": "sports",
  "description": "nihil aut laudantium",
  "image": "http://placeimg.com/640/480/sports"
}

```
