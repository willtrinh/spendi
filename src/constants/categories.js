const incomeColors = ['#52D726', '#FFEC00', '#FF7300', '#FF0000', '#007ED6', '#7CDDDD', '#9552EA'];
const expenseColors = ['#52D726', '#FFEC00', '#FF7300', '#FF0000', '#007ED6', '#7CDDDD', '#9552EA', '#93F03B', '#F54F52', '#2D87BB', '#64C2A6', '#E6F69D'];

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
