# 💰 Finance Dashboard

A modern, responsive finance dashboard built with React that helps you track income, expenses, and financial insights with beautiful UI and advanced features.

## 🚀 Features

### 📊 Core Functionality
- **Transaction Management**: Add, view, and delete financial transactions
- **Real-time Statistics**: Monthly balance, average transactions, top spending categories
- **Interactive Charts**: Line charts for spending trends, pie charts for category breakdowns
- **Role-based Access**: Viewer (read-only) and Admin (full control) modes

### 🎨 Modern UI/UX
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern Animations**: Smooth hover effects, fade-ins, and micro-interactions
- **Gradient Cards**: Beautiful gradient backgrounds with progress indicators
- **Professional Styling**: Modern buttons, badges, and form controls

### 🔍 Advanced Features
- **Smart Search**: Autocomplete search with category suggestions
- **Advanced Sorting**: Sort by date, amount, or category (ascending/descending)
- **Data Export**: Export transactions as CSV or JSON files
- **Data Filtering**: Filter by transaction type (income/expense)
- **Persistent Storage**: All data saved to localStorage automatically

### 📱 Responsive Features
- **Mobile Sidebar**: Hamburger menu for small screens
- **Touch-friendly**: Optimized for mobile interactions
- **Adaptive Layout**: Cards and charts resize beautifully on all devices

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Bootstrap 5.3.8**: Responsive grid and components
- **Recharts**: Beautiful data visualizations
- **CSS3**: Custom animations and transitions

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finanace-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AddTransaction.jsx
│   ├── Cards.jsx
│   ├── Charts.jsx
│   ├── ExportButton.jsx
│   ├── LoadingSkeleton.jsx
│   ├── Navbar.jsx
│   ├── SearchWithAutocomplete.jsx
│   ├── Sidebar.jsx
│   ├── SortOptions.jsx
│   ├── StatsWidget.jsx
│   └── Transactions.jsx
├── pages/              # Route components
│   ├── Dashboard.jsx
│   ├── Insights.jsx
│   └── TransactionsPage.jsx
├── data/               # Mock data
│   └── mockData.js
├── App.jsx             # Main app component
├── App.css            # Global styles
├── index.css          # Custom animations and themes
└── index.js           # Entry point
```

## 🎯 How to Use

### Adding Transactions
1. Navigate to **Transactions** page
2. Fill in the form with:
   - Amount (₹)
   - Category (Food, Shopping, Transport, etc.)
   - Type (Income/Expense)
   - Date
3. Click **Add Transaction**

### Viewing Statistics
1. **Dashboard** shows:
   - Monthly balance (green for positive, red for negative)
   - Average transaction amount
   - Top spending category
   - Visual charts and trends

### Managing Data
1. **Search**: Type in category names with autocomplete
2. **Sort**: Use dropdown to sort by date/amount/category
3. **Filter**: Filter between income and expenses
4. **Export**: Download data as CSV or JSON
5. **Delete**: Admin users can delete transactions

### Theme & Settings
1. **Theme Toggle**: Click 🌙/☀️ button in navbar
2. **Role Switch**: Change between Viewer/Admin modes
3. **User Profile**: Shows current role and avatar

## 💾 Data Persistence

All your data is automatically saved to browser localStorage:

- ✅ **Transactions**: Persist across browser sessions
- ✅ **User Role**: Remembered on refresh
- ✅ **Theme Preference**: Saved automatically
- ✅ **No Backend**: Works completely client-side

**Data Backup**: Use the Export feature to download your data as CSV or JSON for backup.

## 🎨 Customization

### Adding New Categories
Edit `src/data/mockData.js` to add new transaction categories:
```javascript
{
  id: 31,
  date: "2026-04-21",
  amount: 500,
  category: "Your New Category",
  type: "expense"
}
```

### Theme Customization
Modify `src/index.css` to customize:
- Colors and gradients
- Animation speeds
- Component styles
- Responsive breakpoints

### Adding New Features
The component structure makes it easy to add:
- New chart types
- Additional statistics
- More export formats
- Enhanced filtering options

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to Static Hosting
The build creates a `build` folder that can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 🐛 Troubleshooting

### Common Issues

**Data not saving?**
- Check browser localStorage is enabled
- Clear browser cache and try again

**Charts not displaying?**
- Ensure Recharts is properly installed
- Check transaction data format

**Mobile layout issues?**
- Refresh browser cache
- Test in responsive dev tools

**Theme not persisting?**
- Check localStorage permissions
- Try in incognito mode
For questions or issues:
- Open an issue on GitHub
- Check the troubleshooting section
- Review the component documentation

---

**Built with ❤️ using React and modern web technologies**
