import { useState } from "react";

function AddTransaction({ addTransaction, theme }) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.amount || !form.category || !form.date) return;

    addTransaction({
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    });

    setForm({ amount: "", category: "", type: "expense", date: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`card p-3 mb-4 ${
        theme === "dark" ? "bg-dark text-white border-secondary" : "bg-white text-dark"
      }`}
      style={{
        borderColor: theme === "dark" ? "#6c757d" : "#dee2e6"
      }}
    >
      <h5>Add Transaction</h5>

      <div className="row g-2">
        <div className="col-12 col-md-6 col-lg-3">
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            className={`form-control ${theme === "dark" ? "bg-dark text-white border-secondary" : ""}`}
            value={form.amount}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <input
            type="text"
            name="category"
            placeholder="Category"
            className={`form-control ${theme === "dark" ? "bg-dark text-white border-secondary" : ""}`}
            value={form.category}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <select
            name="type"
            className={`form-select ${theme === "dark" ? "bg-dark text-white border-secondary" : ""}`}
            value={form.type}
            onChange={handleChange}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <input
            type="date"
            name="date"
            className={`form-control ${theme === "dark" ? "bg-dark text-white border-secondary" : ""}`}
            value={form.date}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary w-100 w-md-auto">Add</button>
        </div>
      </div>
    </form>
  );
}

export default AddTransaction;
