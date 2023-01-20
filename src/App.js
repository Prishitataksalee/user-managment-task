import React from 'react'
import Dashboard from './pages/Dashboard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path='/*' exact element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;