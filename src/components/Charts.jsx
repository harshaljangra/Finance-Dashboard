import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1', '#d084d0'];

function Charts({ chartData, categoryData, theme }) {
  return (
    <div className="row mt-4">
      {/* Line Chart */}
      <div className="col-12 col-lg-6 mb-4 mb-lg-0">
        <div className={`card p-3 fade-in ${theme === "dark" ? "bg-dark text-white border-secondary" : "bg-white text-dark"}`}
             style={{
               borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
             }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Spending Over Time</h5>
            <span className={`badge-modern ${theme === "dark" ? "bg-secondary" : "bg-primary text-white"}`}>
              📊 Trend
            </span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                stroke={theme === "dark" ? "#fff" : "#000"} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke={theme === "dark" ? "#fff" : "#000"} 
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme === "dark" ? "#333" : "#fff",
                  border: "none",
                  borderRadius: "8px",
                  color: theme === "dark" ? "#fff" : "#000",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="amount" 
                stroke="#8884d8" 
                fillOpacity={1} 
                fill="url(#colorAmount)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="col-12 col-lg-6">
        <div className={`card p-3 fade-in ${theme === "dark" ? "bg-dark text-white border-secondary" : "bg-white text-dark"}`}
             style={{
               borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
             }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Spending by Category</h5>
            <span className={`badge-modern ${theme === "dark" ? "bg-secondary" : "bg-success text-white"}`}>
              🎯 Distribution
            </span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: theme === "dark" ? "#333" : "#fff",
                  border: "none",
                  borderRadius: "8px",
                  color: theme === "dark" ? "#fff" : "#000",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Charts;
