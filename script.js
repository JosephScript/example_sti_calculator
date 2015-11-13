var atticus = ['Atticus', '2405', '47000', 3];
var jem = ['Jem', '62347', '63500', 4];
var boo = ['Boo', '11435', '54000', 3];
var scout = ['Scout', '6243', '74750', 5];

var Employee = function(empName, number, salary, rating) {
  this.empName = empName;
  this.number = number;
  this.salary = salary;
  this.rating = rating;
};

var STI = function(empName, decimal, adjComp, bonus) {
  this.empName = empName;
  this.decimal = decimal;
  this.adjComp = adjComp;
  this.bonus = bonus;
};

var employees = [];

employees.push(new Employee(...atticus));
employees.push(new Employee(...jem));
employees.push(new Employee(...boo));
employees.push(new Employee(...scout));

employees.forEach(function(elem, index, array) {
  console.log(parseEmployee(elem));
});

/**
* This function returns a STI based on the employee input.
* STI is returned as a decimal
*/
function parseEmployee(emp) {

  var salary = parseInt(emp.salary);

  var sti = 0;
  switch (emp.rating) {
    case 5:
      sti += 0.10;
      break;
    case 4:
      sti += 0.06;
      break;
    case 3:
      sti += 0.04;
      break;
    default:
      break;
  }
  if (emp.number.length === 4) {
    sti += 0.05;
  }
  if (salary > 65000) {
    sti -= 0.01;
  }
  if (sti > 0.13) {
    sti = 0.13;
  }

  var bonus = Math.round(salary * sti);

  var adjusted = salary + bonus;

  return new STI(emp.empName, sti, adjusted, bonus);
}
