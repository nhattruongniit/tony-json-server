# TOYN JSON SERVER FAKE API FOR COUSRE FRONT END

## Scripts

```bash
# run localhost:4000
$ npm run dev
```

```bash
# refer: https://www.npmjs.com/package/json-server
# fetch api
```

## Routes

```bash
# GET LIST
GET     /users
GET     /todos

# PAGINATION
GET     /users?_page=1&_limit=10
GET     /todos?_page=1&_limit=10

# DELETE
DELETE  /users/{userId}
DELETE  /todos/{todoId}

# UPDATE
PATCH   /users/{userId}
Content-Type: application/json

{
  "phone": "090734232",
  "address": "Nguyen Trai"
}

# ADD NEW
POST    /users
Content-Type: application/json
{
  "name": "Leanne Graham 1",
  "email": "aincere@april.biz"
}
```
