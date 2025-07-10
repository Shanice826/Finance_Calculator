import { useState } from 'react';
import Header from './components/Header';
import BalanceList from './components/BalanceList';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Footer from './components/Footer';


type Transaction = {
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

export default function App() {

 const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold text-center">Welcome to your Finance Tracker 💸</h2>
          <TransactionForm onAdd={handleAddTransaction} />
        <BalanceList transactions={transactions} />
        <TransactionList transactions={transactions} />
        <Footer />

      </main>
    </div>
  );
}
