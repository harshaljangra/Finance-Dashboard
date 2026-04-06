import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { transactions as initialData } from "./data/mockData";
import Card from "./components/Cards";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TransactionsPage from "./pages/TransactionsPage";
import Insights from "./pages/Insights";

function App() {
  const [theme, setTheme] = useState("light");
  const [role, setRole] = useState("viewer");
  const [transactions, setTransactions] = useState(initialData);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Load transactions and role from localStorage on app startup
  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    const savedRole = localStorage.getItem("role");
    
    if (savedTransactions) {
      try {
        const parsedTransactions = JSON.parse(savedTransactions);
        setTransactions(parsedTransactions);
      } catch (error) {
        console.error("Error loading transactions from localStorage:", error);
        setTransactions(initialData);
      }
    } else {
      setTransactions(initialData);
    }
    
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Save role to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // For Line Chart (date vs amount)
  const chartData = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  // For Pie Chart (category totals)
  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      if (t.type === "expense") {
        acc[t.category] = acc[t.category] || { name: t.category, value: 0 };
        acc[t.category].value += t.amount;
      }
      return acc;
    }, {}),
  );

  return (
    <div
      className={
        theme === "dark"
          ? "bg-dark text-white min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Sidebar - Mobile Overlay */}
          <div className={`sidebar-overlay ${sidebarOpen ? 'd-block' : 'd-none'} d-md-none`}
               onClick={() => setSidebarOpen(false)}
               style={{
                 position: 'fixed',
                 top: 0,
                 left: 0,
                 right: 0,
                 bottom: 0,
                 backgroundColor: 'rgba(0,0,0,0.5)',
                 zIndex: 1040
               }}>
          </div>

          {/* Sidebar */}
          <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''} d-none d-md-block col-md-3 col-lg-2`}
               style={{
                 position: 'relative',
                 top: 'auto',
                 left: 'auto',
                 height: 'auto',
                 zIndex: 1,
                 transform: 'none',
                 transition: 'none'
               }}>
            <Sidebar theme={theme} setSidebarOpen={setSidebarOpen} />
          </div>

          {/* Mobile Sidebar */}
          <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''} d-md-none`}
               style={{
                 position: 'fixed',
                 top: 0,
                 left: 0,
                 height: '100vh',
                 width: '280px',
                 zIndex: 1050,
                 transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
                 transition: 'transform 0.3s ease-in-out'
               }}>
            <Sidebar theme={theme} setSidebarOpen={setSidebarOpen} />
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 p-4">
            <Navbar
              role={role}
              setRole={setRole}
              theme={theme}
              setTheme={setTheme}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    income={income}
                    expenses={expenses}
                    balance={balance}
                    chartData={chartData}
                    categoryData={categoryData}
                    theme={theme}
                    transactions={transactions}
                  />
                }
              />

              <Route
                path="/transactions"
                element={
                  <TransactionsPage
                    transactions={transactions}
                    role={role}
                    addTransaction={addTransaction}
                    deleteTransaction={deleteTransaction}
                    theme={theme}
                  />
                }
              />
              <Route
                path="/insights"
                element={<Insights transactions={transactions} theme={theme} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
