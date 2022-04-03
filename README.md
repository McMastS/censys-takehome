# Censys Take Home Assignment

This project exposes a Key/Value store through a REST API in the backend written with TypeScript 
and Express, and a UI written in React that consumes the API.

# API Documentation
## Store a Key/Value combination
<details>
  <summary>Store the given key/value combo</summary>

**URL** : `/v1/keys/`

**Method** : `POST`

**Data constraints**
```json
{
    "key": "[valid string]",
    "value": "[any valid json]"
}
```

**Data example**

```json
{
    "key": "spencer-mcmaster",
    "value": "{'age':23,'profession':'full stack developer'}"
}
```

### Success Response

**Code** : `204 No Content`

### Error Response

**Condition** : If 'key' or 'value' is improperly formatted (i.e. user is not valid JSON)

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "errors": [
        "Unable to complete request. key must be a valid string and value must be valid JSON."
    ]
}
```
</details>

## Get a value for a given key
<details>
  <summary>Get the value for the given key</summary>

**URL** : `/v1/keys/:key`
  
**URL Parameters** : key is a URL encoded string that may or may not match a key in the store

**Method** : `GET`

### Success Response

**Condition** : Key was found.

**Code** : `200 OK`

**Content** :
  
```json
{
    "key": "spencer-mcmaster",
    "value": "{'age':23,'profession':'full stack developer'}"
}
```
### OR
  
**Condition** : Key was not found.

**Code** : `404 Not Found`
</details>

## Delete given key
<details>
  <summary>Delete the key and associated value for the given key</summary>

**URL** : `/v1/keys/:key`

**URL Parameters** : Key is a url encoded string that may or may not match a key in the store

**Method** : `DELETE`

**Data** : `{}`

### Success Response

**Condition** : If the Key exists.

**Code** : `204 NO CONTENT`

### Error Responses

**Condition** : If there was no key available to delete.

**Code** : `404 NOT FOUND`
</details>

## Testing Instructions using UI
1. In a terminal navigate to frontend directory
2. run `npm install && npm start`
3. In another terminal navigate to backend directory
4. run `npm install && npm start`
5. Navigate to http:/localhost:3000 in a browser
6. Add a key value pair via the form
7. Retrieve the value by clicking "Retrieve value", make sure it appears below the form
8. Delete the value by clicking "Delete key"
9. Navigate back to "Retrieve value" and ensure that the key was deleted
10. Run in other orders and with different values to see if anything breaks

## Testing Instructions for API
1. In a terminal navigate to backend directory
2. Run `npm install` if needed and then `npm start`
3. Go to this [postman](https://go.postman.co/workspace/My-Workspace~7dc60027-120d-43b3-84f6-0d438655e1dc/collection/4298122-753e334b-5b7b-4c6e-9412-b23581f42490?action=share&creator=4298122) collection
4. Run the queries in the same order as steps 6-10 in the UI instructions

## Things to do before this would be production ready
- [ ] Better display of retrieved value, ran out of time to display it well
- [ ] Refactor the fetch API usage in the frontend, I hadn't used fetch in awhile and was pushed for time so it's a bit messy
- [ ] Add logging in the backend
- [ ] Validation frontend
- [ ] Validation backend (Express middleware)
- [ ] Add automated tests (i.e. Cypress for e2e in the front end, mocha + chai in the backend, automate Postman tests)
