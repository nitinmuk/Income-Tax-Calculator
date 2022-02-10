const fs = require('fs');
const path = require('path');
const utils = require('util');
const readFile = utils.promisify(fs.readFile);

function getSalary(employeeId) {
  return readFile(path.join(__dirname, '../data/salaries.json'), 'utf8').then((data) => {
    const employeeData = JSON.parse(data).find(employee => employee.id === employeeId);
    return employeeData ? employeeData.salary : 0;
  });
}

exports.getSalary = getSalary;
