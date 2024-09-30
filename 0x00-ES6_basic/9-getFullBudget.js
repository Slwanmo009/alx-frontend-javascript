// 9-getFullBudget.js

const getFullBudgetObject = (income, gdp, capita) => {
  const fullBudget = {
    income,
    gdp,
    capita,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };
  return fullBudget;
};

export default getFullBudgetObject;
