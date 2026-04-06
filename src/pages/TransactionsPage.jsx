import Transactions from "../components/Transactions";
import AddTransaction from "../components/AddTransaction";

function TransactionsPage({
  transactions,
  role,
  addTransaction,
  deleteTransaction,
  theme,
}) {
  return (
    <>
      {role === "admin" && <AddTransaction addTransaction={addTransaction} theme={theme}/>}

      <Transactions
        transactions={transactions}
        role={role}
        deleteTransaction={deleteTransaction}
        theme={theme}
      />
    </>
  );
}

export default TransactionsPage;
