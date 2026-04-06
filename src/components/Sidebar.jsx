import { Link } from "react-router-dom";
function Sidebar({ theme, setSidebarOpen }) {
  const handleLinkClick = () => {
    // Close sidebar on mobile when link is clicked
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div
      className={`p-3 min-vh-100 ${
        theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      {/* Close button for mobile */}
      <div className="d-flex justify-content-end d-md-none mb-3">
        <button
          className={`btn ${theme === "dark" ? "btn-outline-light" : "btn-outline-dark"}`}
          onClick={() => setSidebarOpen(false)}
          style={{ border: "none" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <ul className="list-unstyled mt-4">
        <li className="mb-3">
          <Link
            to="/"
            className={`text-decoration-none ${theme === "dark" ? "text-white hover-light" : "text-dark hover-dark"}`}
            style={{ transition: "color 0.2s" }}
            onClick={handleLinkClick}
          >
            Dashboard
          </Link>
        </li>

        <li className="mb-3">
          <Link
            to="/transactions"
            className={`text-decoration-none ${theme === "dark" ? "text-white hover-light" : "text-dark hover-dark"}`}
            style={{ transition: "color 0.2s" }}
            onClick={handleLinkClick}
          >
            Transactions
          </Link>
        </li>

        <li className="mb-3">
          <Link
            to="/insights"
            className={`text-decoration-none ${theme === "dark" ? "text-white hover-light" : "text-dark hover-dark"}`}
            style={{ transition: "color 0.2s" }}
            onClick={handleLinkClick}
          >
            Insights
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
