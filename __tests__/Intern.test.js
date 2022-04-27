const Intern = require('../lib/Intern');
const params = {
  name: 'Daniel',
  id: 1,
  email: 'email@email.com',
  school: 'UNCC'
}

test('creates an intern object', () => {
  const intern = new Intern(params);

  expect(intern.name).toBe('Daniel');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.stringContaining("@")) //replace with getEmail()
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.role).toEqual('Intern');
});


test("gets intern's name", () => {
  const intern = new Intern(params);

  expect(intern.getName()).toBe('Daniel');
});

test("gets intern's id", () => {
  const intern = new Intern(params);

  expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets intern's email", () => {
  const intern = new Intern(params);

  expect(intern.getEmail()).toEqual(expect.stringContaining("@"));
});

test("gets intern's role", () => {
  const intern = new Intern(params);

  expect(intern.getRole()).toBe('Intern');
});

test("gets intern's shcool", () => {
  const intern = new Intern(params);

  expect(intern.getSchool()).toEqual(expect.any(String));
});