// 8-getBudgetCurrentYear.js

const getBudgetForCurrentYear = (income, gdp, capita) => {
  const currentYear = new Date().getFullYear();
  return {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };
};

export default getBudgetForCurrentYear;
