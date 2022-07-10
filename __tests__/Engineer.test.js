const Engineer = require("../lib/Engineer");

// name getName()
// id getId()
// email getEmail()
//github username getGithub()
//getRole() overridden to return engineer


test('test if we can set up GitHub account account via constructor', () => {
  const engineer = new Engineer('Bravo', 45882, 'bravo@example.com', 'bravo01');
  expect(engineer.github).toEqual(expect.any(String));
});

// github username getGithub()
test('test if we can get GitHub from the the getGithub() method', () => {
  const engineer = new Engineer('Bravo', 45882, 'bravo@example.com', 'bravo01');
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//getRole() overridden to return engineer
test('test if we can get the rold from the getRole() method', () => {
  const engineer = new Engineer('Bravo', 45882, 'bravo@example.com', 'bravo01');
  expect(engineer.getRole()).toEqual('Engineer');
});








