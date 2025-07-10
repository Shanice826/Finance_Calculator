type Transaction = {
  description: string;
  amount: number;
  type: 'income' | 'expense';
};

type Props = {
  transactions: Transaction[];
};

export default function TransactionList({ transactions }: Props) {
  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
      <ul className="space-y-2">
        {transactions.length === 0 ? (
          <li className="text-gray-400">No transactions yet.</li>
        ) : (
          transactions.map((transaction, index) => (
            <li
              key={index}
              className={`flex justify-between p-4 rounded-lg shadow-md ${
                transaction.type === 'income'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              <span>{transaction.description}</span>
              <span>
                {transaction.type === 'expense' ? '-' : '+'}${transaction.amount.toFixed(2)}
              </span>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
