function Card({ title, value, theme }) {
  const getCardGradient = () => {
    if (title === "Total Balance") {
      return theme === "dark" ? "gradient-bg-dark" : "gradient-bg";
    }
    return "";
  };

  const getIcon = () => {
    switch(title) {
      case "Total Balance":
        return "💰";
      case "Income":
        return "📈";
      case "Expenses":
        return "📉";
      default:
        return "💵";
    }
  };

  return (
    <div
      className={`card p-3 shadow-sm fade-in ${theme === "dark" ? "bg-dark text-white border-secondary" : "bg-white text-dark"} ${getCardGradient()}`}
      style={{
        borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
      }}
    >
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h6 className="mb-2 opacity-75">{title}</h6>
          <h3 className="mb-0 fw-bold">₹{value.toLocaleString()}</h3>
        </div>
        <div className="fs-2 opacity-50">{getIcon()}</div>
      </div>
      
      {/* Mini progress bar for visual appeal */}
      <div className="mt-3">
        <div className="progress-modern">
          <div 
            className="progress-bar-modern" 
            style={{ width: `${Math.min(100, Math.max(10, (value / 10000) * 100))}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
