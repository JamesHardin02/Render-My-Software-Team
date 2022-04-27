const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(intern.name).toBe('Daniel');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.stringContaining("@")) //replace with getEmail()
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.role).toEqual('Intern');
});


test("gets intern's name", () => {
  const intern = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(intern.getName()).toBe('Daniel');
});

test("gets intern's id", () => {
  const intern = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets intern's email", () => {
  const intern = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(intern.getEmail()).toEqual(expect.stringContaining("@"));
});

test("gets intern's role", () => {
  const intern = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(intern.getRole()).toBe('Intern');
});

test("gets intern's shcool", () => {
  const intern = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(intern.getSchool()).toEqual(expect.any(String));
});