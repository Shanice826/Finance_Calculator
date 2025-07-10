import { useState } from 'react';

type Transaction = {
  description: string;
  amount: number;
  type: 'income' | 'expense';
};

type Props = {
  onAdd: (transaction: Transaction) => void;
};

export default function TransactionForm({ onAdd }: Props) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('income');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAdd({
      description,
      amount: parseFloat(amount),
      type, // no need to cast, already typed properly!
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-md mx-auto mt-6">
      <h3 className="text-xl font-semibold mb-4">Add Transaction</h3>

      <div className="mb-4">
        <label className="block mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'income' | 'expense')}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700"
      >
        Add Transaction
      </button>
    </form>
  );
}
