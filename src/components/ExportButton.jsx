import { useState } from "react";

function ExportButton({ transactions, theme }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const exportToCSV = () => {
    const headers = ["Date", "Category", "Amount", "Type"];
    const csvContent = [
      headers.join(","),
      ...transactions.map(t => [t.date, t.category, t.amount, t.type].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transactions_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    setIsDropdownOpen(false);
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(transactions, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transactions_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown" style={{ position: "relative" }}>
      <button
        className={`btn btn-modern ${theme === "dark" ? "btn-outline-light" : "btn-outline-primary"}`}
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        📤 Export
      </button>
      
      {isDropdownOpen && (
        <ul 
          className={`dropdown-menu show ${theme === "dark" ? "bg-dark border-secondary" : "bg-white"}`}
          style={{ 
            position: "absolute", 
            top: "100%", 
            right: "0", 
            zIndex: 1000,
            minWidth: "150px"
          }}
        >
          <li>
            <button 
              className={`dropdown-item w-100 text-start ${theme === "dark" ? "text-white" : "text-dark"}`}
              style={{ border: "none", background: "none", padding: "8px 16px" }}
              onClick={exportToCSV}
            >
              📊 Export as CSV
            </button>
          </li>
          <li>
            <button 
              className={`dropdown-item w-100 text-start ${theme === "dark" ? "text-white" : "text-dark"}`}
              style={{ border: "none", background: "none", padding: "8px 16px" }}
              onClick={exportToJSON}
            >
              📄 Export as JSON
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ExportButton;
