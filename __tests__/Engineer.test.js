const Engineer = require('../lib/Engineer');
const params = {
  name: 'Daniel',
  id: 1,
  email: 'email@email.com',
  github: 'DanielGitHub'
}

test('creates an engineer object', () => {
  const engineer = new Engineer(params);

  expect(engineer.name).toBe('Daniel');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.stringContaining("@")); //replace with getEmail()
  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
  const engineer = new Engineer(params);

  expect(engineer.getName()).toBe('Daniel');
});

test("gets engineer's id", () => {
  const engineer = new Engineer(params);

  expect(engineer.getId()).toEqual(expect.any(Number));
});

test("gets engineer's email", () => {
  const engineer = new Engineer(params);

  expect(engineer.getEmail()).toEqual(expect.stringContaining("@"));
});

// over ride engineer role with engineer 
test("gets engineer's role", () => {
  const engineer = new Engineer(params);

  expect(engineer.getRole()).toBe('Engineer');
});

test("gets engineer's GitHub username", () => {
  const engineer = new Engineer(params);

  expect(engineer.getGithub()).toEqual(expect.any(String));
});