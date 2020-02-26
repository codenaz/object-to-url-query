const objectToUrlQuery = require('./index');

test('It coverts correctly', () => {
  const objectQuery = {
    name: 'Patrick',
    age: 15,
    skill: 'Software Enginner'
  };
  expect(objectToUrlQuery(objectQuery)).toBe(
    'name=Patrick&age=15&skill=Software%20Enginner'
  );
});
