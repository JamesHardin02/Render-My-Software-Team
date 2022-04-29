const Intern = require('../lib/Intern');

// mock parameters
const params = {
  name: 'Daniel',
  id: 1,
  email: 'email@email.com',
  school: 'UNCC'
}

// test object creation by expecting attributes toBe or toEqual values like the arguments given
test('creates an intern object', () => {
  const intern = new Intern(params);

  expect(intern.name).toBe('Daniel');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.stringContaining("@"))
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.role).toEqual('Intern');
});

// expect getName() to return 'Daniel'
test("gets intern's name", () => {
  const intern = new Intern(params);

  expect(intern.getName()).toBe('Daniel');
});

// expect getId() to return any number
test("gets intern's id", () => {
  const intern = new Intern(params);

  expect(intern.getId()).toEqual(expect.any(Number));
});

// expect getEmail() to return a string containing the @ symbol
test("gets intern's email", () => {
  const intern = new Intern(params);

  expect(intern.getEmail()).toEqual(expect.stringContaining("@"));
});

// expect getRole() to return 'Engineer'
test("gets intern's role", () => {
  const intern = new Intern(params);

  expect(intern.getRole()).toBe('Intern');
});

// expect getSchool() to return any string
test("gets intern's shcool", () => {
  const intern = new Intern(params);

  expect(intern.getSchool()).toEqual(expect.any(String));
});