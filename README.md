# object-to-url-query

[![Build Status](https://travis-ci.org/codenaz/object-to-url-query.svg?branch=master)](https://travis-ci.org/codenaz/object-to-url-query)

Convert a javascript object to a url query

## installation

npm install object-to-url-query

## Usage

#### ES6

```javascript
import objectToUrlQuery from 'object-to-url-query';

const objectQuery = {
  name: 'Patrick',
  age: 15,
  skill: 'Software Enginner'
};

const urlQueryString = objectToUrlQuery(objectQuery);
```

#### cjs

```javascript
var objectToUrlQuery = require('./index');

var objectQuery = {
  name: 'Patrick',
  age: 15,
  skill: 'Software Enginner'
};

var urlQueryString = objectToUrlQuery(objectQuery);
```
