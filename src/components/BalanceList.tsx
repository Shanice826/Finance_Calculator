type Transaction = {
  description: string;
  amount: number;
  type: 'income' | 'expense';
};

type Props = {
  transactions: Transaction[];
};

export default function BalanceList({ transactions }: Props) {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <section className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Balance Overview</h3>
      <ul className="space-y-2">
        <li><strong>Total Income:</strong> <span className="text-green-500">${income.toFixed(2)}</span></li>
        <li><strong>Total Expenses:</strong> <span className="text-red-500">${expenses.toFixed(2)}</span></li>
        <li><strong>Net Balance:</strong> <span className="text-blue-500">${balance.toFixed(2)}</span></li>
      </ul>
    </section>
  );
}
