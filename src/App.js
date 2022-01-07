import './App.css';
import React, {useState} from 'react';
import UserContext from './context/userContext';
import HookRouter from './hooks/hooks-router';
import ReduxRouter from './redux';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './Home';

function App() {
  const [theme, setTheme] = useState(0);
  return (
    <div className='container'>
      <UserContext.Provider value={{theme, setTheme}}>
      <div>
        <Routes>
        <Route path="/hooks/*" element={<HookRouter/>}/>
        <Route path="/redux/*" element={<ReduxRouter/>}/>
        <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
