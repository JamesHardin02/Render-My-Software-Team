const Employee = require('../lib/Employee');

// test object creation by expecting attributes toBe or toEqual values like the arguments given
test('creates an employee object', () => {
  const employee = new Employee('Daniel', 1, 'email@email.com');

  expect(employee.name).toBe('Daniel');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining("@"))
  expect(employee.role).toEqual('Employee');
})

// expect getName() to return 'Daniel'
test("gets employee's name", () => {
  const employee = new Employee('Daniel', 1, 'email@email.com');

  expect(employee.getName()).toBe('Daniel');
});

// expect getId() to return any number
test("gets employee's id", () => {
  const employee = new Employee('Daniel', 1, 'email@email.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// expect getEmail() to return a string containing the @ symbol
test("gets employee's email", () => {
  const employee = new Employee('Daniel', 1, 'email@email.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining("@"));
});

// expect getRole() to return 'Employee'
test("gets employee's role", () => {
  const employee = new Employee('Daniel', 1, 'email@email.com');

  expect(employee.getRole()).toBe('Employee');
});