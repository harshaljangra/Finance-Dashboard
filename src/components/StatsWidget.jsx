import { useState, useEffect } from "react";

function StatsWidget({ transactions, theme }) {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [avgTransaction, setAvgTransaction] = useState(0);
  const [topCategory, setTopCategory] = useState("");
  const [monthlyBalance, setMonthlyBalance] = useState(0);

  useEffect(() => {
    // Calculate current month total
    const now = new Date();
    const currentMonthTransactions = transactions.filter(t => {
      const transactionDate = new Date(t.date);
      return transactionDate.getMonth() === now.getMonth() && 
             transactionDate.getFullYear() === now.getFullYear();
    });
    
    const monthTotal = currentMonthTransactions.reduce((sum, t) => sum + t.amount, 0);
    setCurrentMonth(monthTotal);

    // Calculate monthly balance (income - expenses)
    const income = currentMonthTransactions
      .filter(t => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = currentMonthTransactions
      .filter(t => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    const balance = income - expenses;
    setMonthlyBalance(balance);

    // Calculate average transaction
    const avg = transactions.length > 0 
      ? transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length 
      : 0;
    setAvgTransaction(avg);

    // Find top category
    const categoryTotals = {};
    transactions.forEach(t => {
      if (t.type === "expense") {
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
      }
    });
    
    const top = Object.entries(categoryTotals).reduce((max, [cat, total]) => 
      total > (max?.total || 0) ? { category: cat, total } : max, null);
    setTopCategory(top?.category || "N/A");
  }, [transactions]);

  const getBalanceColor = () => {
    if (monthlyBalance > 0) return "text-success";
    if (monthlyBalance < 0) return "text-danger";
    return "text-muted";
  };

  const getBalanceIcon = () => {
    if (monthlyBalance > 0) return "📈";
    if (monthlyBalance < 0) return "📉";
    return "➖";
  };

  return (
    <div className="row mt-4">
      <div className="col-md-4 mb-3">
        <div className={`card p-3 fade-in ${theme === "dark" ? "bg-dark text-white border-secondary" : "bg-white text-dark"}`}
             style={{
               borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
             }}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1 opacity-75">📅 This Month</h6>
              <h4 className={`mb-0 fw-bold ${getBalanceColor()}`}>
                {getBalanceIcon()} {monthlyBalance >= 0 ? '+' : ''}₹{Math.abs(monthlyBalance).toLocaleString()}
              </h4>
            </div>
            <div className="fs-1 opacity-25">
              {monthlyBalance > 0 ? "✅" : monthlyBalance < 0 ? "⚠️" : "➖"}
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className={`card p-3 fade-in ${theme === "dark" ? "bg-dark text-white border-secondary" : "bg-white text-dark"}`}
             style={{
               borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
             }}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1 opacity-75">💸 Avg Transaction</h6>
              <h4 className="mb-0 fw-bold">₹{Math.round(avgTransaction).toLocaleString()}</h4>
            </div>
            <div className="fs-1 opacity-25">�</div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className={`card p-3 fade-in ${theme === "dark" ? "bg-dark text-white border-secondary" : "bg-white text-dark"}`}
             style={{
               borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
             }}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1 opacity-75">🏆 Top Category</h6>
              <h4 className="mb-0 fw-bold">{topCategory}</h4>
            </div>
            <div className="fs-1 opacity-25">🎯</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsWidget;
