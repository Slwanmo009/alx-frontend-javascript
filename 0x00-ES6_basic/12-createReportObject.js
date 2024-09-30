// 12-createReportObject.js

const createReportObject = (employeesList) => {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
};

export default createReportObject;
