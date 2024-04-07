import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import LedgerPage from './components/Ledger/LedgerPage';
import { useAppContext } from './context/AppContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { selectedSection } = useAppContext();

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('User logged in successfully');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderSection = () => {
    switch (selectedSection) {
      case 'ledger':
        return <LedgerPage />;
      case 'projects':
        console.log('Projects section selected');
        return <div><h2>Projects Section</h2></div>;
      case 'contracts':
        console.log('Contracts section selected');
        return <div><h2>Contracts Section</h2></div>;
      default:
        console.log('No section selected');
        return <div><h2>Welcome to the Dashboard</h2></div>;
    }
  };

  return (
    <>
      <Dashboard />
      {renderSection()}
    </>
  );
}

export default App;