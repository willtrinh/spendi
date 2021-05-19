import { useContext } from 'react';
import { AppContext } from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(AppContext);
  const transactionType = transactions.filter((transaction) => transaction.type === title);
  const total = transactionType.reduce((acc, currentVal) => acc += currentVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;
  console.log({ transactionType, total, categories });

  transactionType.forEach((type) => {
    const category = categories.find((cat) => cat.type === type.category);
  })


}