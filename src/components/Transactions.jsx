import { useState } from "react";
import SearchWithAutocomplete from "./SearchWithAutocomplete";
import ExportButton from "./ExportButton";
import SortOptions from "./SortOptions";

function Transactions({ transactions, role, deleteTransaction, theme }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");

  const filteredData = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "all" ? true : t.type === filter;

    return matchesSearch && matchesFilter;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case "date-desc":
        return new Date(b.date) - new Date(a.date);
      case "date-asc":
        return new Date(a.date) - new Date(b.date);
      case "amount-desc":
        return b.amount - a.amount;
      case "amount-asc":
        return a.amount - b.amount;
      case "category":
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const getTypeBadge = (type) => {
    return type === "income" 
      ? `badge-modern bg-success text-white` 
      : `badge-modern bg-danger text-white`;
  };

  return (
    <div className="mt-5 fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Transactions</h4>
        <div className="d-flex gap-2">
          <span className={`badge-modern ${theme === "dark" ? "bg-secondary" : "bg-info text-white"}`}>
            📝 {filteredData.length} records
          </span>
          <ExportButton transactions={sortedData} theme={theme} />
          <SortOptions theme={theme} onSort={setSortBy} />
        </div>
      </div>

      {/* Search + Filter */}
      <div className="d-flex flex-column flex-md-row gap-3 my-3">
        <SearchWithAutocomplete 
          transactions={transactions} 
          theme={theme} 
          onFilter={setSearch} 
        />

        <select
          className={`form-select form-control-modern ${theme === "dark" ? "bg-dark text-white border-secondary" : ""}`}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">📊 All Transactions</option>
          <option value="income">💰 Income</option>
          <option value="expense">💸 Expenses</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table
          className={`table table-bordered ${
            theme === "dark" ? "table-dark" : "table-light"
          }`}
          style={{
            borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
          }}
        >
          <thead>
            <tr style={{
              backgroundColor: theme === "dark" ? "#495057" : "#f8f9fa",
              borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
            }}>
              <th style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>📅 Date</th>
              <th style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>💰 Amount</th>
              <th style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>🏷️ Category</th>
              <th style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>📊 Type</th>
              {role === "admin" && <th style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>⚙️ Action</th>}
            </tr>
          </thead>

          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((t) => (
                <tr key={t.id} style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>
                  <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>{t.date}</td>
                  <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>
                    <span className="fw-bold">₹{t.amount.toLocaleString()}</span>
                  </td>
                  <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>{t.category}</td>
                  <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>
                    <span className={getTypeBadge(t.type)}>
                      {t.type === "income" ? "💰" : "💸"} {t.type}
                    </span>
                  </td>

                  {role === "admin" && (
                    <td style={{ borderColor: theme === "dark" ? "#6c757d" : "#dee2e6" }}>
                      <button
                        className="btn btn-danger btn-sm btn-modern"
                        onClick={() => deleteTransaction(t.id)}
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={role === "admin" ? 5 : 4} className="text-center py-4">
                  <div className="text-muted">
                    <div className="fs-4 mb-2">📭</div>
                    <div>No transactions found</div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
