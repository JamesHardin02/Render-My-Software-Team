const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const employee = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(employee.name).toBe('Daniel');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining("@")) //replace with getEmail()
  expect(employee.school).toEqual(expect.any(String));
  expect(employee.role).toEqual('Intern');
});


test("gets employee's name", () => {
  const employee = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(employee.getName()).toBe('Daniel');
});

test("gets employee's id", () => {
  const employee = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
  const employee = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(employee.getEmail()).toEqual(expect.stringContaining("@"));
});

test("gets employee's role", () => {
  const employee = new Intern('Daniel', 1, 'email@email.com', 'Intern', 'UNCC');

  expect(employee.getRole()).toBe('Intern');
});