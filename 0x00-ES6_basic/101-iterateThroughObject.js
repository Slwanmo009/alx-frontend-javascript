// 101-iterateThroughObject.js

const iterateThroughObject = (reportWithIterator) => {
  const employeesArray = [...reportWithIterator];
  return employeesArray.join(' | ');
};

export default iterateThroughObject;
