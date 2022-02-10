const { Employee } = require('../app/employee');
const db = require('../app/db');

jest.mock('../app/db');

it("should return the correct string representation", function() {
  var e;
  e = new Employee("Jane", "111", "0410123123");
  return expect(e.toString()).toEqual("Employee [name=Jane, id=111, phoneNumber=0410123123]");
});

it("should calculate 16600 dollars for a 40000 salary", async function() {
  var e;
  e = new Employee("Jane", "111", "0410123123");
  db.getSalary.mockResolvedValue(40000);
  await e.calculate();
  return expect(e.deduction).toEqual(16600);
});
