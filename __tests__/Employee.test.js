const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Daniel', 1, 'email@email.com');

  expect(employee.name).toBe('Daniel');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining("@")) //replace with getEmail()
  expect(employee.role).toEqual('Employee');
})

test("gets employee's name", () => {
  const employee = new Employee('Daniel', 1, 'email@email.com');

  expect(employee.getName()).toBe('Daniel');
});

test("gets employee's id", () => {
  const employee = new Employee('Daniel', 1, 'email@email.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
  const employee = new Employee('Daniel', 1, 'email@email.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining("@"));
});

test("gets employee's role", () => {
  const employee = new Employee('Daniel', 1, 'email@email.com');

  expect(employee.getRole()).toBe('Employee');
});