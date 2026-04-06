import { useState, useEffect } from "react";

function SearchWithAutocomplete({ transactions, theme, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = [...new Set(transactions.map(t => t.category))];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length > 0) {
      const filtered = categories.filter(category =>
        category.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    
    onFilter(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
    onFilter(suggestion);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSuggestions && !event.target.closest('.search-autocomplete')) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSuggestions]);

  return (
    <div className="position-relative flex-grow-1 search-autocomplete">
      <input
        type="text"
        placeholder="🔍 Search category..."
        className={`form-control form-control-modern ${theme === "dark" ? "bg-dark text-white border-secondary" : ""}`}
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(suggestions.length > 0)}
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <div 
          className={`position-absolute w-100 mt-1 shadow-sm rounded ${theme === "dark" ? "bg-dark border-secondary" : "bg-white border"}`}
          style={{
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto"
          }}
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`p-2 cursor-pointer ${theme === "dark" ? "text-white" : "text-dark"}`}
              style={{
                cursor: "pointer",
                transition: "background-color 0.2s"
              }}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = theme === "dark" ? "#495057" : "#f8f9fa";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              🏷️ {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchWithAutocomplete;
