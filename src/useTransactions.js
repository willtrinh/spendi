import { useContext } from 'react';
import { AppContext } from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(AppContext);
  const transactionType = transactions.filter((transaction) => transaction.type === title);
  const total = transactionType.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;
  // console.log({ transactionType, total, categories });

  // sum up all categories to display in pie chart data
  transactionType.forEach((transaction) => {
    const category = categories.find((cat) => cat.type === transaction.category);
    if (category) {
      category.amount += transaction.amount;
    }
  })

  // filter out categories with amount = 0
  const filteredCategories = categories.filter((cat) => cat.amount > 0);

  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
  };
  console.log(chartData);
  return { filteredCategories, total, chartData };
}

export default useTransactions;