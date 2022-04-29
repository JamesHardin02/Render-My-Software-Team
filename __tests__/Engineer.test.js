const Engineer = require('../lib/Engineer');

// mock parameters
const params = {
  name: 'Daniel',
  id: 1,
  email: 'email@email.com',
  github: 'DanielGitHub'
}

// test object creation by expecting attributes toBe or toEqual values like the arguments given
test('creates an engineer object', () => {
  const engineer = new Engineer(params);

  expect(engineer.name).toBe('Daniel');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.stringContaining("@"));
  expect(engineer.github).toEqual(expect.any(String));
});

// expect getName() to return 'Daniel'
test("gets engineer's name", () => {
  const engineer = new Engineer(params);

  expect(engineer.getName()).toBe('Daniel');
});

// expect getId() to return any number
test("gets engineer's id", () => {
  const engineer = new Engineer(params);

  expect(engineer.getId()).toEqual(expect.any(Number));
});

// expect getEmail() to return a string containing the @ symbol
test("gets engineer's email", () => {
  const engineer = new Engineer(params);

  expect(engineer.getEmail()).toEqual(expect.stringContaining("@"));
});

// expect getRole() to return 'Engineer'
test("gets engineer's role", () => {
  const engineer = new Engineer(params);

  expect(engineer.getRole()).toBe('Engineer');
});

// expect getGithub() to return any string
test("gets engineer's GitHub username", () => {
  const engineer = new Engineer(params);

  expect(engineer.getGithub()).toEqual(expect.any(String));
});