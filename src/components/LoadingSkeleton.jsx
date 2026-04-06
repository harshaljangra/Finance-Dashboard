function LoadingSkeleton({ theme }) {
  return (
    <div className="row g-3">
      {/* Card Skeletons */}
      {[1, 2, 3].map((item) => (
        <div key={item} className="col-md-4">
          <div className={`card p-3 ${theme === "dark" ? "bg-dark" : "bg-white"}`}>
            <div className="skeleton" style={{ height: "20px", width: "60%", marginBottom: "10px", borderRadius: "4px" }}></div>
            <div className="skeleton" style={{ height: "32px", width: "40%", borderRadius: "4px" }}></div>
          </div>
        </div>
      ))}
      
      {/* Chart Skeletons */}
      <div className="col-md-6 mt-4">
        <div className={`card p-3 ${theme === "dark" ? "bg-dark" : "bg-white"}`}>
          <div className="skeleton" style={{ height: "24px", width: "50%", marginBottom: "20px", borderRadius: "4px" }}></div>
          <div className="skeleton" style={{ height: "200px", borderRadius: "4px" }}></div>
        </div>
      </div>
      <div className="col-md-6 mt-4">
        <div className={`card p-3 ${theme === "dark" ? "bg-dark" : "bg-white"}`}>
          <div className="skeleton" style={{ height: "24px", width: "50%", marginBottom: "20px", borderRadius: "4px" }}></div>
          <div className="skeleton" style={{ height: "200px", borderRadius: "4px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;
