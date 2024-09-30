// 100-createIteratorObject.js

const createIteratorObject = (report) => {
  const employees = [];

  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  return employees[Symbol.iterator]();
};

export default createIteratorObject;
