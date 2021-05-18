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

```bash
# GET LIST
GET     /api/users
GET     /api/todos
GET     /api/photos

# PAGINATION
GET     /api/users?_page=1&_limit=10
GET     /api/todos?_page=1&_limit=10
GET     /api/photos?_page=1&_limit=10

# DELETE
DELETE  /api/users/{userId}
DELETE  /api/todos/{todoId}
DELETE  /api/photos/{photoId}

# UPDATE

# user
PATCH   /api/users/{userId}
Content-Type: application/json
{
  "name": "Leanne Graham 1",
  "email": "aincere@april.biz",
  ...
}

# todo
PATCH   /api/todos/{todoId}
Content-Type: application/json
{
  "description": "learn javascript",
  "severity": "medium",
  "status": "open",
  ...
}

# photos
PATCH   /api/photos/{photoId}
Content-Type: application/json
{
  "name": "Natural",
  "image": "http://placeimg.com/640/480/city",
  "description": "This is a wider card with supporting text below as a natural lead-in to additional content"
}

# ADD NEW
# user
POST    /api/users
Content-Type: application/json
{
  "name": "Leanne Graham 1",
  "email": "aincere@april.biz"
}

# todo
POST    /api/todos
Content-Type: application/json
{
  "userId": {userId},
  "description": "sequi rerum inventore",
  "severity": "low",
  "status": "open",
}

# photos
POST    /api/photos
Content-Type: application/json
{
  "name": "Natural",
  "image": "http://placeimg.com/640/480/city",
  "description": "This is a wider card with supporting text below as a natural lead-in to additional content"
}

```
