const incomeColors = ['#f38181', '#fce38a', '#aa96da', '#95e1d3', '#f67280', '#c06c84', '#355c7d'];
const expenseColors = ['#f38181', '#fce38a', '#eaffd0', '#aa96da', '#f67280', '#c06c84', '#355c7d', '#ff7171', '#d5ecc2', '#ffd3b4', '#ffaaa7', '#393e46'];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0] },
  { type: 'Investments', amount: 0, color: incomeColors[1] },
  { type: 'Salary', amount: 0, color: incomeColors[2] },
  { type: 'Deposit', amount: 0, color: incomeColors[3] },
  { type: 'Savings', amount: 0, color: incomeColors[4] },
  { type: 'Cash', amount: 0, color: incomeColors[5] },
  { type: 'Rental income', amount: 0, color: incomeColors[6] }
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0] },
  { type: 'Car', amount: 0, color: expenseColors[1] },
  { type: 'Clothes', amount: 0, color: expenseColors[2] },
  { type: 'Travel', amount: 0, color: expenseColors[3] },
  { type: 'Food', amount: 0, color: expenseColors[4] },
  { type: 'Shopping', amount: 0, color: expenseColors[5] },
  { type: 'House', amount: 0, color: expenseColors[6] },
  { type: 'Entertainment', amount: 0, color: expenseColors[7] },
  { type: 'Phone', amount: 0, color: expenseColors[8] },
  { type: 'Internet', amount: 0, color: expenseColors[9] },
  { type: 'Pets', amount: 0, color: expenseColors[10] },
  { type: 'Others', amount: 0, color: expenseColors[11] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
