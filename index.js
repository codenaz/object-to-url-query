const objectToUrlQuery = queryObject => {
  let queryString = '';
  Object.keys(queryObject).forEach(key => {
    queryString += `${key}=${encodeURI(queryObject[key])}&`;
  });
  if (queryString) {
    return queryString.slice(0, -1);
  }
  return queryString;
};

module.exports = objectToUrlQuery;
