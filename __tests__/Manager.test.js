const Manager = require('../lib/Manager');
const params = {
  name: 'Daniel',
  id: 1,
  email: 'email@email.com',
  officeNumber: 101
}

// test object creation by expecting attributes toBe or toEqual values like the arguments given
test('creates a manager object', () => {
  const manager = new Manager(params);

  expect(manager.name).toBe('Daniel');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.stringContaining("@"))
  expect(manager.role).toEqual('Manager');
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// expect getName() to return 'Daniel'
test("gets manager's name", () => {
  const manager = new Manager(params);

  expect(manager.getName()).toBe('Daniel');
});

// expect getId() to return any number
test("gets manager's id", () => {
  const manager = new Manager(params);

  expect(manager.getId()).toEqual(expect.any(Number));
});

// expect getEmail() to return a string containing the @ symbol
test("gets manager's email", () => {
  const manager = new Manager(params);

  expect(manager.getEmail()).toEqual(expect.stringContaining("@"));
});

// expect getRole() to return 'Engineer'
test("gets manager's role", () => {
  const manager = new Manager(params);

  expect(manager.getRole()).toBe('Manager');
});