import './App.css';
import React, { useState } from 'react';
import UserContext from './context/userContext';
import AppRouter from './app-router';

function App() {
  const [theme, setTheme] = useState(0);
  return (
    <div className="container">
      <UserContext.Provider value={{ theme, setTheme }}>
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
}

export default App;
