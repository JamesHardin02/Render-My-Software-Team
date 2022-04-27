const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(engineer.name).toBe('Daniel');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.stringContaining("@")); //replace with getEmail()
  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
  const engineer = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(engineer.getName()).toBe('Daniel');
});

test("gets engineer's id", () => {
  const engineer = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(engineer.getId()).toEqual(expect.any(Number));
});

test("gets engineer's email", () => {
  const engineer = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(engineer.getEmail()).toEqual(expect.stringContaining("@"));
});

// over ride engineer role with engineer 
test("gets engineer's role", () => {
  const engineer = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(engineer.getRole()).toBe('Engineer');
});

test("gets engineer's GitHub username", () => {
  const engineer = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(engineer.getGithub()).toEqual(expect.any(String));
});