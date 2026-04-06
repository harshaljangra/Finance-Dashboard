function Insights({ transactions , theme}) {
  if (transactions.length === 0) {
    return <p>No data available</p>;
  }
  // total income
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  // total expense
  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  // category spending
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  // highest category
  let maxCategory = "";
  let maxValue = 0;

  for (let category in categoryMap) {
    if (categoryMap[category] > maxValue) {
      maxValue = categoryMap[category];
      maxCategory = category;
    }
  }

  return (
    <div
      className={`card p-3 mb-4 ${
        theme === "dark" ? "bg-dark text-white border-secondary" : "bg-white text-dark"
      }`}
      style={{
        borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
      }}
    >
      <h4>Insights</h4>

      <div className="table-responsive mt-4">
        <table
          className={`table table-bordered ${
            theme === "dark" ? "table-dark" : "table-light"
          }`}
          style={{
            borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: theme === "dark" ? "#495057" : "#f8f9fa",
                borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
              }}
            >
              <th style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>Metric</th>
              <th style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>
              <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}><strong>Total Income:</strong></td>
              <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>₹{income}</td>
            </tr>
            <tr style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>
              <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}><strong>Total Expenses:</strong></td>
              <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>₹{expenses}</td>
            </tr>
            <tr style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>
              <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}><strong>Highest Spending Category:</strong></td>
              <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>{maxCategory} (₹{maxValue})</td>
            </tr>
            <tr style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>
              <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}><strong>Net Balance:</strong></td>
              <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>₹{income - expenses}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Insights;
