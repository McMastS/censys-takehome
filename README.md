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

## Frontend Testing Instructions


## Backend Testing Instructions
