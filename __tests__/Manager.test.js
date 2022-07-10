const Manager = require("../lib/Manager");
//const Employee = require("../lib/Employee");


// getName()
//getId()
//getEmail()
//officeNumber
//getRole() Overridden to return Manager


//create manager officeNumber
test("test if we can set office number from officeNumber() method",() => {
  const manager = new Manager('Delta', 45884, 'delta@example.com', 4);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole() Overridden to return Manager 
test('test if we can get the role from the getRole() method', () => {
  const manager = new Manager('Delta', 45884, 'delta@example.com');

  expect(manager.getRole()).toEqual("Manager");
});










