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

# PAGINATION
GET     /api/users?_page=1&_limit=10
GET     /api/todos?_page=1&_limit=10

# DELETE
DELETE  /api/users/{userId}
DELETE  /api/todos/{todoId}

# UPDATE
PATCH   /api/users/{userId}
Content-Type: application/json

{
  "phone": "090734232",
  "address": "Nguyen Trai"
}

# ADD NEW
POST    /api/users
Content-Type: application/json

{
  "name": "Leanne Graham 1",
  "email": "aincere@april.biz"
}
```
