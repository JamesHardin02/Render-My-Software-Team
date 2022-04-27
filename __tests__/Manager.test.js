const Manager = require('../lib/Manager');

test('creates a manager object', () => {
  const manager = new Manager('Daniel', 1, 'email@email.com', 'Manager', 101);

  expect(manager.name).toBe('Daniel');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.stringContaining("@")) //replace with getEmail()
  expect(manager.role).toEqual('Manager');
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
  const manager = new Manager('Daniel', 1, 'email@email.com', 'Manager', 101);

  expect(manager.getName()).toBe('Daniel');
});

test("gets manager's id", () => {
  const manager = new Manager('Daniel', 1, 'email@email.com', 'Manager', 101);

  expect(manager.getId()).toEqual(expect.any(Number));
});

test("gets manager's email", () => {
  const manager = new Manager('Daniel', 1, 'email@email.com', 'Manager', 101);

  expect(manager.getEmail()).toEqual(expect.stringContaining("@"));
});

test("gets manager's role", () => {
  const manager = new Manager('Daniel', 1, 'email@email.com', 'Manager', 101);

  expect(manager.getRole()).toBe('Manager');
});