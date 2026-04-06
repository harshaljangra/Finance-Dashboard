function Navbar({ role, setRole, theme, setTheme, sidebarOpen, setSidebarOpen }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center gap-3">
        {/* Hamburger Menu */}
        <button
          className={`btn d-md-none ${theme === "dark" ? "btn-outline-light" : "btn-outline-dark"}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ border: "none" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        <h4 className="mb-0">Finance Dashboard</h4>
      </div>

      <div className="d-flex align-items-center gap-3">
        {/* User Profile */}
        <div className="d-flex align-items-center gap-2">
          <div className={`rounded-circle d-flex align-items-center justify-content-center ${theme === "dark" ? "bg-secondary" : "bg-primary text-white"}`}
               style={{ width: "32px", height: "32px", fontSize: "14px" }}>
            👤
          </div>
          <span className={`d-none d-md-block ${theme === "dark" ? "text-white" : "text-dark"}`}>
            {role === "admin" ? "Admin User" : "Viewer"}
          </span>
        </div>

        {/* Role Switch */}
        <select
          className={`form-select w-auto ${theme === "dark" ? "bg-dark text-white border-secondary" : ""}`}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        {/* Theme Toggle */}
        <button
          className="btn btn-modern btn-secondary"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
