import { useState } from "react";

function SortOptions({ theme, onSort }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSort = (sortBy) => {
    onSort(sortBy);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown" style={{ position: "relative" }}>
      <button
        className={`btn btn-modern ${theme === "dark" ? "btn-outline-light" : "btn-outline-secondary"}`}
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        🔄 Sort
      </button>
      
      {isDropdownOpen && (
        <ul 
          className={`dropdown-menu show ${theme === "dark" ? "bg-dark border-secondary" : "bg-white"}`}
          style={{ 
            position: "absolute", 
            top: "100%", 
            right: "0", 
            zIndex: 1000,
            minWidth: "180px"
          }}
        >
          <li>
            <button 
              className={`dropdown-item w-100 text-start ${theme === "dark" ? "text-white" : "text-dark"}`}
              style={{ border: "none", background: "none", padding: "8px 16px" }}
              onClick={() => handleSort("date-desc")}
            >
              📅 Newest First
            </button>
          </li>
          <li>
            <button 
              className={`dropdown-item w-100 text-start ${theme === "dark" ? "text-white" : "text-dark"}`}
              style={{ border: "none", background: "none", padding: "8px 16px" }}
              onClick={() => handleSort("date-asc")}
            >
              📅 Oldest First
            </button>
          </li>
          <li>
            <button 
              className={`dropdown-item w-100 text-start ${theme === "dark" ? "text-white" : "text-dark"}`}
              style={{ border: "none", background: "none", padding: "8px 16px" }}
              onClick={() => handleSort("amount-desc")}
            >
              💰 Highest Amount
            </button>
          </li>
          <li>
            <button 
              className={`dropdown-item w-100 text-start ${theme === "dark" ? "text-white" : "text-dark"}`}
              style={{ border: "none", background: "none", padding: "8px 16px" }}
              onClick={() => handleSort("amount-asc")}
            >
              💸 Lowest Amount
            </button>
          </li>
          <li>
            <button 
              className={`dropdown-item w-100 text-start ${theme === "dark" ? "text-white" : "text-dark"}`}
              style={{ border: "none", background: "none", padding: "8px 16px" }}
              onClick={() => handleSort("category")}
            >
              🏷️ Category A-Z
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default SortOptions;
