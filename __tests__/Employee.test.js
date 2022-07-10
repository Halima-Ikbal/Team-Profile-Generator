const Employee = require("../lib/Employee");
// name getName()
// id getId()
// email getEmail()
//getRole() Returns 'Employee
const employee = new Employee('Alpha', '45881', 'alpha@example.com');
test('test if we can get  any instructor values for the employee object', () => {
  expect(employee.name).toEqual('Alpha');
  expect(employee.id).toEqual('45881');
  expect(employee.email).toEqual("alpha@example.com");
});

test('test if we can get the name from the getName() method', () => {
  expect(employee.getName()).toEqual('Alpha');
});
test('test if we can get the id from the getId() method', () => {
  expect(employee.getId()).toEqual('45881');
});
test('test if we can get the email from the getName() method', () => {
  expect(employee.getEmail()).toEqual('alpha@example.com');
});
test('test if we can get the role from the getRole() method', () => {
  expect(employee.getRole()).toEqual('Employee');
});






