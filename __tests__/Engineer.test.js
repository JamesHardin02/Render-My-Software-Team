const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const employee = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(employee.name).toBe('Daniel');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining("@")); //replace with getEmail()
  expect(employee.github).toEqual(expect.any(String));
});

test("gets employee's name", () => {
  const employee = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(employee.getName()).toBe('Daniel');
});

test("gets employee's id", () => {
  const employee = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
  const employee = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(employee.getEmail()).toEqual(expect.stringContaining("@"));
});

test('gets GitHub username', () => {
  const employee = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(employee.getGithub()).toEqual(expect.any(String));
});

// over ride employee role with engineer 
test("gets employee's role", () => {
  const employee = new Engineer('Daniel', 1, 'email@email.com', 'Engineer', 'DanielGitHub');

  expect(employee.getRole()).toBe('Engineer');
});
