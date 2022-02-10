const { getSalary: getSalaryAsync } = require('./db');

function Employee(employeeName, employeeId, phoneNumber) {

  this.employeeName = employeeName;
  this.employeeId = employeeId;
  this.phoneNumber = phoneNumber;
  this.salary = 0;
  this.deduction = 0;

    this.toString = function toString() {
      return "Employee [name=" + this.employeeName + ", id=" + this.employeeId + ", phoneNumber=" + this.phoneNumber + "]";
    }

    this.calculate = async function calculate() {
      const grossPay = await getSalaryAsync(this.employeeId);
      this.salary = grossPay;
      
      if (grossPay < 0) {
        throw new Error('Gross pay cannot be negative');
      }
      let rate = 0.0;
      if (this.salary >= 10000 && this.salary < 20000) {
        rate = 0.1;
      } else if (this.salary >= 20000 && this.salary < 40000) {
        rate = 0.2;
      } else if(this.salary >= 40000 && this.salary < 60000) {
        rate = 0.4;
      } else {
        rate = 0.5;
      }

      const incomeTax = this.salary * rate;
      const medicareLevy = this.salary * 0.015;

      this.deduction = incomeTax + medicareLevy;
    }
};


module.exports =  { Employee };
