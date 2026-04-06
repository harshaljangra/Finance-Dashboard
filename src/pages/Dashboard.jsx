import Card from "../components/Cards";
import Charts from "../components/Charts";
import StatsWidget from "../components/StatsWidget";

function Dashboard({
  income,
  expenses,
  balance,
  chartData,
  categoryData,
  theme,
  transactions,
}) {
  return (
    <>
      {/* Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <Card title="Total Balance" value={balance} theme={theme} />
        </div>
        <div className="col-md-4">
          <Card title="Income" value={income} theme={theme} />
        </div>
        <div className="col-md-4">
          <Card title="Expenses" value={expenses} theme={theme} />
        </div>
      </div>

      {/* Stats Widget */}
      <StatsWidget transactions={transactions} theme={theme} />

      {/* Charts */}
      <Charts chartData={chartData} categoryData={categoryData} theme={theme} />
    </>
  );
}

export default Dashboard;
