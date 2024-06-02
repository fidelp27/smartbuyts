import React from 'react';
import './App.css';
import { AppRoutes } from '../../Routes/AppRoutes';
import { NavBar } from '../../Components/Navbar';

const App:React.FC=()=>{
  return (
    <>  
    <NavBar/>  
    <AppRoutes />
    
    </>
  );  
}
export default App;
