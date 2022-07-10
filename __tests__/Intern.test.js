const Intern = require("../lib/Intern");

// name getName()
// id getId()
// email getEmail()
//school getSchool()
//getRole() Overridden to return intern

// intern object
test("Can set school via constructor", () => {
  const intern = new Intern("Alpha", 45881, "Alpha@example.com", 'UTSA');
  expect(intern.school).toEqual(expect.any(String));
});

// gets school from getSchool()

test("Can get school via getSchool()", () => {
  
  const intern = new Intern("Alpha", 45881, "Alpha@example.com", 'UTSA');
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// getRole() Overridden to return intern
test("getRole() should return \"Intern\"", () => {
  const intern = new Intern("Alpha", 45881, "Alpha@example.com", "UTSA");
  expect(intern.getRole()).toEqual('Intern');
});








