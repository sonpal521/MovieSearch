
import './App.css'
import MainRoutes from './Routes/MainRoutes';
import Navbar from './components/Navbar/Navbar'
// Context import
import ThemeContext from './context/ThemeContext';
import { useState } from 'react';
function App() {
  
  
  const [theme, setTheme] = useState('dark');
  return (
    <>
     
     <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='app-wrapper' data-theme={theme}>
          <Navbar />
          <MainRoutes />
        </div> 
      </ThemeContext.Provider>
    </>
  )
}

export default App;
